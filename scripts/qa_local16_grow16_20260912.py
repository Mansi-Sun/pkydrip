# -*- coding: utf-8 -*-
"""QA for 变更-09: MC-16 Local page upgrade + Grow 16 new page."""
import re, os, sys

ROOT = r"D:/Users/Administrator/Documents/GitHub/pkydrip/public"
results = []

def check(name, ok):
    results.append((name, bool(ok)))

def read(p):
    with open(os.path.join(ROOT, p), encoding="utf-8") as f:
        return f.read()

# ---------- MC-16 Local page (URL unchanged) ----------
f = read("product/farm-irrigation-controller/index.html")
check("local: HTTP page exists & non-empty", len(f) > 20000)
check("local: title MC-16 Local", "<title>MC-16 Local Irrigation Controller | PKYDrip</title>" in f)
check("local: 'A stable local product' positioning", "A stable local product" in f)
check("local: platform-discontinued wording", "local operation and service positioning remain unchanged" in f.replace("<!-- -->",""))
check("local: 16 AC or DC per order", "AC or DC" in f and "selected per order" in f)
check("local: product boundaries section", "Product boundaries" in f)
check("local: comparison table heading", "MC-16 Local vs PKYDrip Grow 16" in f)
check("local: link to Grow 16", "/product/pky-grow16/" in f)
check("local: page_code kept", "PC-0801-2-02-PROD-FARM-CTRL-01" in f)
check("local: no 'Farm Irrigation Controller' leftover", "Farm Irrigation Controller" not in f)
check("local: GA4", "G-Y5HHC5PQ2D" in f)
check("local: Ads", "AW-16640554458" in f)
check("local: Pixel", "1261846228680902" in f)
check("local: WhatsApp", "wa.me/8617395297329" in f)
check("local: JSON-LD", re.search(r"application/ld\+json", f))
check("local: canonical", re.search(r'rel=[">]*canonical[">]*', f) or "canonical" in f)
check("local: no Local16/Grow16 old name", "Local 16" not in f)

# ---------- Grow 16 page (new) ----------
g = read("product/pky-grow16/index.html")
check("grow: page exists & non-empty", len(g) > 20000)
check("grow: title", "<title>PKYDrip Grow 16 Connected Irrigation Controller | PKYDrip</title>" in g)
check("grow: connected & expandable subtitle", "connected and expandable irrigation controller" in g)
check("grow: 400x500x200 enclosure", "400 × 500 × 200" in g)
check("grow: power architecture SVG", "grow16-power-architecture" in g)
check("grow: X16 expansion", "X16" in g)
check("grow: fertigation module", "Fertigation module" in g)
check("grow: climate module", "Climate module" in g)
check("grow: technical implementation (Linux Edge internal)", "internal technical components rather than sales concepts" in g.replace("<!-- -->",""))
check("grow: link to MC-16 Local", "/product/farm-irrigation-controller/" in g)
check("grow: page_code", "PC-0801-2-02-PROD-GROW16-01" in g)
check("grow: GA4", "G-Y5HHC5PQ2D" in g)
check("grow: Ads", "AW-16640554458" in g)
check("grow: Pixel", "1261846228680902" in g)
check("grow: WhatsApp", "wa.me/8617395297329" in g)
check("grow: JSON-LD", re.search(r"application/ld\+json", g))
check("grow: mermaid not leaked", "mermaid" not in g)

# ---------- SVG asset ----------
check("svg: grow16 architecture in public images",
      os.path.exists(os.path.join(ROOT, "images/product/grow16-power-architecture.svg")))

# ---------- product directory ----------
d = read("product/index.html")
check("dir: MC-16 Local card", "PKYDrip MC-16 Local" in d)
check("dir: Grow 16 card", "PKYDrip Grow 16" in d)
check("dir: both URLs", "/product/pky-grow16/" in d and "/product/farm-irrigation-controller/" in d)

# ---------- sitemap page ----------
s = read("site-map/index.html")
check("sitemap: Grow 16 listed", "/product/pky-grow16/" in s)

fails = [n for n, ok in results if not ok]
for n, ok in results:
    print(("PASS  " if ok else "FAIL  ") + n)
print(f"\n== {len(results) - len(fails)}/{len(results)} PASS ==")
if fails:
    print("FAILED:", fails)
    sys.exit(1)
