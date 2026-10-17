# -*- coding: utf-8 -*-
"""QA for 变更-10: Smart Irrigation Controller new page."""
import re, os, sys, io

ROOT = r"D:/Users/Administrator/Documents/GitHub/pkydrip/public"
results = []

def check(name, ok):
    results.append((name, bool(ok)))

def read(p):
    with open(os.path.join(ROOT, p), encoding="utf-8") as f:
        return f.read()

# ---------- new page ----------
f = read("product/smart-irrigation-controller/index.html")
check("page exists & non-empty", len(f) > 25000)
check("title", "<title>Smart Irrigation Controller &amp; PKY-60W Series | PKYDrip</title>" in f or "<title>Smart Irrigation Controller & PKY-60W Series | PKYDrip</title>" in f)
check("hero subtitle (series, two models)", "One control logic, two implementations" in f and "bypass fertigation" in f)
# page body only (exclude site-wide footer / org JSON-LD tagline)
m = re.search(r'<main[^>]*product-landing[^>]*>(.*?)</main>', f, re.S)
body = m.group(1) if m else f
check("agriculture positioning (farm wording present)", "farm" in body.lower() or "agricultur" in body.lower())
check("upgrade path: fertigation 3-5 channels", "3–5" in body and "bypass fertigation" in body.lower())
check("upgrade path: LoRa gateway + sensors", "LoRa gateway" in body and "LoRa sensors" in body)
check("upgrade path: license + accessories", "license" in body.lower() and "accessories" in body.lower())
check("upgrade path: expansion boards", "expansion board" in body.lower())
check("operations section removed (no 3-step)", "Up and running in three steps" not in f and "Step 1" not in body)
check("operation-manual pointer present", "operation manual" in body.lower())
check("pump direct start 3kW contactor", "3 kW start directly with a contactor" in body or ("contactor" in body.lower() and "3 kW" in body))
check("16 zones base", "16 irrigation zones" in f or "16 zones" in f)
check("expandable via expansion interface", "expansion interface" in f)
check("left/right/OK buttons", ("left / right / OK" in f or "Left / Right / OK" in f) or "&#8592; / &#8594;" in f)
check("per-zone valve LEDs", "status LED" in f.lower() or "LED" in f)
check("dedicated pump button", "dedicated physical pump button" in f or "dedicated pump button" in f)
check("configurations: Wi-Fi optional", "Add Wi-Fi module" in f)
check("configurations: screen optional", "Add built-in screen" in f)
check("offline operation", "continue if the internet connection is lost" in f or "internet goes down" in f.lower() or "internet is down" in f.lower())
check("RTC", "Real-time clock" in f or "real-time clock" in f)
check("24VAC valves", "24VAC" in f)
check("220-240VAC", "220–240VAC" in f)
check("OTA", "OTA" in f)
check("MQTT/HTTPS", "MQTT" in f and "HTTPS" in f)
check("IP54/IP65", "IP54" in f and "IP65" in f)
check("temperature range", "-10°C to +60°C" in f)
check("protection suite", "Short-circuit" in f and "over-current" in f and "surge" in f)
check("watchdog", "watchdog" in f)
check("optional BLE/4G/QR", "Bluetooth/BLE" in f and "4G/LTE" in f and "QR-code" in f)
check("model MC-16 in engineer tab", "Model: MC-16" in f)
check("tabs render (nav-pills)", "data-bs-toggle=" in f and "audienceTab" in f)
check("page_code", "PC-0801-2-02-PROD-SMART-CTRL-01" in f)
check("panel SVG used", "smart-controller-panel" in f)
check("GA4", "G-Y5HHC5PQ2D" in f)
check("Ads", "AW-16640554458" in f)
check("Pixel", "1261846228680902" in f)
check("WhatsApp", "wa.me/8617395297329" in f)
check("JSON-LD", re.search(r"application/ld\+json", f))
check("canonical", "canonical" in f)

# ---------- SVG asset ----------
check("svg asset exists", os.path.exists(os.path.join(ROOT, "images/product/smart-controller-panel.svg")))

# ---------- directory & sitemap ----------
d = read("product/index.html")
check("dir: Smart Controller card", "PKYDrip Smart Irrigation Controller" in d)
check("dir: 3 controller cards links", all(u in d for u in [
    "/product/smart-irrigation-controller/", "/product/pky-grow16/", "/product/farm-irrigation-controller/"]))

s = read("site-map/index.html")
check("sitemap: new page listed", "/product/smart-irrigation-controller/" in s)

# ---------- neighbors untouched ----------
g = read("product/pky-grow16/index.html")
check("grow16 page intact (title)", "PKYDrip Grow 16" in g)
a = read("product/farm-irrigation-controller/index.html")
check("farm page intact (MC-16 Local)", "MC-16 Local" in a)

# ---------- fusion (变更-13) ----------
check("fusion: how-to-choose table", "How to choose" in f and "Human interface" in f and "Output scale" in f)
check("fusion: PKY-60W model block", "PKY-60W — Wired Main Controller" in f)
check("fusion: 60W output scale", "expandable to 60" in f)
check("fusion: 60W RS485 spec", "RS485" in f and "25 devices per port" in f)
check("fusion: 60W area table", "0.3 – 5 hectares" in f and "100+ hectares" in f)
check("fusion: 60W keeps its own tracking code", "0801-2-02-PKY-60W" in f)
check("fusion: third tab (60W engineering)", "PKY-60W — Engineering" in f)
check("fusion: 60W role statement", "logic and coordination core" in f)
check("fusion: choose-between-models FAQ", "Smart Controller or PKY-60W" in f)

# alias stub generated for the retired URL
alias_path = os.path.join(ROOT, "product/pky-60w/index.html")
check("fusion: legacy URL alias stub exists", os.path.exists(alias_path))
if os.path.exists(alias_path):
    al = io.open(alias_path, encoding="utf-8").read()
    check("fusion: alias points to series page", "/product/smart-irrigation-controller/" in al or "smart-irrigation-controller" in al)

# no dangling references in content (the fused page keeps it only as an alias)
import glob as _glob
dangling = []
for p in _glob.glob(os.path.join(r"D:/Users/Administrator/Documents/GitHub/pkydrip/content", "**", "*.md"), recursive=True):
    if p.replace("\\", "/").endswith("product/smart-irrigation-controller.md"):
        continue
    t = io.open(p, encoding="utf-8").read()
    if "/product/pky-60w/" in t:
        dangling.append(os.path.basename(p))
check("fusion: no dangling /product/pky-60w/ links in content", not dangling)

# netlify 301 configured
nt = io.open(r"D:/Users/Administrator/Documents/GitHub/pkydrip/netlify.toml", encoding="utf-8").read()
check("fusion: netlify 301 for legacy URL", 'from = "/product/pky-60w/"' in nt and "/product/smart-irrigation-controller/" in nt)

fails = [n for n, ok in results if not ok]
for n, ok in results:
    print(("PASS  " if ok else "FAIL  ") + n)
print(f"\n== {len(results) - len(fails)}/{len(results)} PASS ==")
if fails:
    print("FAILED:", fails)
    sys.exit(1)
