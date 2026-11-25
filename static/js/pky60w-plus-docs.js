(function () {
  var root = document.querySelector(".pky60w-plus");
  if (!root) return;
  root.querySelectorAll("table").forEach(function (table) {
    if (!table.parentNode.classList.contains("pky60w-plus-table-scroll")) {
      var wrap = document.createElement("div");
      wrap.className = "pky60w-plus-table-scroll";
      table.parentNode.insertBefore(wrap, table);
      wrap.appendChild(table);
    }
    var cols = table.querySelectorAll("th").length;
    if (cols >= 4) {
      table.setAttribute("data-wide", "true");
      table.style.minWidth = Math.max(cols * 108, 560) + "px";
    }
  });
})();
