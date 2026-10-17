import io, re, sys

ok = True
def check(name, cond):
    global ok
    print(("PASS" if cond else "FAIL") + " | " + name)
    if not cond:
        ok = False

f = io.open("public/product/pky-grow16/index.html", encoding="utf-8").read()

# --- power tiers ---
check("tier1 2kW combined cabinet", "2 kW" in f and "combined cabinet" in f.lower())
check("tier1 400x400x200", "400 \u00d7 400 \u00d7 200" in f)
check("tier1 no VFD wording", "no VFD" in f or "without a VFD" in f)
check("tier2 above 3kW separate", "above 3 kW" in f.lower() or "3 kW" in f)
check("tier2 5-50 kW range", "5 to 50 kW" in f)
check("tier2 case-by-case note", "case by case" in f.lower())
check("tier3 100kW grouped starting", "100 kW" in f and ("group" in f.lower()))
check("tier3 RS485 + DC 24 V", "RS485" in f and "DC 24 V" in f)

# --- climate system block ---
check("climate system title", "Greenhouse Climate Control System" in f)
check("controller-end configuration", "controller-end configuration" in f.lower() or "Controller-end configuration" in f)
check("reserved terminals", "Reserved terminals" in f)
check("industrial intermediate relays", "Industrial intermediate relays" in f)
check("replace or extend relays on site", "replace or extend relays on site" in f)

# --- old wording gone ---
check("old 400x500x200 body removed", "400 \u00d7 500 \u00d7 200 mm. For a single pump" not in f)

# --- svg updated ---
check("svg has 3 tiers", "power architecture by project capacity" in io.open("static/images/product/grow16-power-architecture.svg", encoding="utf-8").read().lower())

# --- structure & tracking (rule: must not break) ---
check("GA4 present", "G-Y5HHC5PQ2D" in f)
check("page_code present", "PC-0801-2-02-PROD-GROW16-01" in f)
check("WhatsApp main number", "wa.me/8617395297329" in f)
check("canonical present", "canonical" in f)
check("JSON-LD present", "application/ld+json" in f)
check("H1 hero title", "connected and expandable" in f)

# --- cross links intact ---
check("link to MC-16 Local", "/product/farm-irrigation-controller/" in f)
check("catalogue links to grow16", "/product/pky-grow16/" in io.open("public/product/index.html", encoding="utf-8").read())

print("RESULT:", "ALL PASS" if ok else "HAS FAILURES", "| total checks: 20")
