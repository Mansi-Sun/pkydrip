(function () {
  var page = document.querySelector("[data-fertigation-page]");
  if (!page) return;

  var familyBase = page.getAttribute("data-family-url") || "/products/fertigation/";
  var summaries = {
    E: page.getAttribute("data-summary-e") || "",
    S: page.getAttribute("data-summary-s") || "",
    P: page.getAttribute("data-summary-p") || ""
  };
  var standardScreen = page.getAttribute("data-screen-07") || "7-inch standard touchscreen";
  var customScreen = page.getAttribute("data-screen-10") || "10-inch customized touchscreen";

  function modelUrl(series, channel) {
    var slug = ("pkydrip-" + series + channel).toLowerCase();
    return familyBase.replace(/\/?$/, "/") + slug + "/";
  }

  function fill(template, channel) {
    return (template || "").replace("{channel}", String(Number(channel)));
  }

  function bindSegment(rootId, dataKey, state, onChange) {
    var root = document.getElementById(rootId);
    if (!root) return;
    root.querySelectorAll("button").forEach(function (button) {
      button.addEventListener("click", function () {
        root.querySelectorAll("button").forEach(function (item) {
          item.classList.remove("active");
          item.setAttribute("aria-pressed", "false");
        });
        button.classList.add("active");
        button.setAttribute("aria-pressed", "true");
        state[dataKey] = button.getAttribute("data-" + dataKey);
        onChange();
      });
    });
  }

  var builder = {
    series: (document.querySelector("#series-picker .active") || {}).getAttribute
      ? document.querySelector("#series-picker .active").getAttribute("data-series")
      : "S",
    channel: (document.querySelector("#channel-picker .active") || {}).getAttribute
      ? document.querySelector("#channel-picker .active").getAttribute("data-channel")
      : "05",
    screen: (document.querySelector("#screen-picker .active") || {}).getAttribute
      ? document.querySelector("#screen-picker .active").getAttribute("data-screen")
      : "07"
  };

  function updateBuilder() {
    var code = "PKYDrip-" + builder.series + builder.channel;
    var codeNode = document.querySelector("#model-code");
    var summaryNode = document.querySelector("#model-summary");
    var link = document.querySelector("#model-link");
    var screenNode = document.querySelector("#model-screen");
    if (codeNode) codeNode.textContent = code;
    if (summaryNode) summaryNode.textContent = fill(summaries[builder.series], builder.channel);
    if (screenNode) screenNode.textContent = builder.screen === "10" ? customScreen : standardScreen;
    if (link) {
      link.href = modelUrl(builder.series, builder.channel);
      link.removeAttribute("hidden");
    }
  }

  bindSegment("series-picker", "series", builder, updateBuilder);
  bindSegment("channel-picker", "channel", builder, updateBuilder);
  bindSegment("screen-picker", "screen", builder, updateBuilder);
  updateBuilder();

  var guide = {
    series: (document.querySelector("#guide-series .active") || {}).getAttribute
      ? document.querySelector("#guide-series .active").getAttribute("data-series")
      : "S",
    channel: (document.querySelector("#guide-channel .active") || {}).getAttribute
      ? document.querySelector("#guide-channel .active").getAttribute("data-channel")
      : "05",
    screen: (document.querySelector("#guide-screen .active") || {}).getAttribute
      ? document.querySelector("#guide-screen .active").getAttribute("data-screen")
      : "07"
  };

  function updateGuide() {
    var code = "PKYDrip-" + guide.series + guide.channel;
    var codeNode = document.querySelector("#guide-model");
    var summaryNode = document.querySelector("#guide-summary");
    var link = document.querySelector("#guide-link");
    var screenLabel = guide.screen === "10" ? customScreen : standardScreen;
    var channels = Number(guide.channel);
    if (codeNode) codeNode.textContent = code;
    if (summaryNode) {
      summaryNode.textContent =
        channels + " nutrient channels / " + fill(summaries[guide.series], guide.channel).replace(/^.*?· /, "") + " / " + screenLabel;
      var localized = page.getAttribute("data-guide-summary-" + guide.series.toLowerCase());
      if (localized) {
        summaryNode.textContent = fill(localized, guide.channel) + " / " + screenLabel;
      }
    }
    if (link) {
      link.href = modelUrl(guide.series, guide.channel);
      link.removeAttribute("hidden");
    }
  }

  bindSegment("guide-series", "series", guide, updateGuide);
  bindSegment("guide-channel", "channel", guide, updateGuide);
  bindSegment("guide-screen", "screen", guide, updateGuide);
  updateGuide();

  var year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();

  function photoUrl(path) {
    if (!path) return "";
    if (/^https?:\/\//i.test(path) || path.charAt(0) === "/") return path;
    return "/" + path.replace(/^\.\//, "");
  }

  function photoFallbacks(path) {
    var list = [path];
    var dir = "images/pkydrip-fertigation/";
    var match = String(path || "").match(/pkydrip-([esp])(\d{2})-(main|channels|scene)\.webp/i);
    if (!match) return list;
    var series = match[1].toLowerCase();
    var kind = match[3].toLowerCase();
    if (kind === "main") {
      if (series === "s") {
        list.push(dir + "pkydrip-s1.webp");
      } else {
        list.push(dir + "pkydrip-" + series + "-series.webp");
      }
    }
    return list;
  }

  function applyPhoto(el, src) {
    el.classList.add("has-photo");
    el.style.backgroundImage = "url(\"" + src + "\")";
    el.setAttribute("role", "img");
  }

  document.querySelectorAll("[data-photo]").forEach(function (el) {
    var candidates = photoFallbacks(el.getAttribute("data-photo"));
    var index = 0;
    function tryNext() {
      if (index >= candidates.length) return;
      var src = photoUrl(candidates[index++]);
      var img = new Image();
      img.onload = function () { applyPhoto(el, src); };
      img.onerror = tryNext;
      img.src = src;
    }
    tryNext();
  });
})();
