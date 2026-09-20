# -*- coding: utf-8 -*-
# 变更记录-08 线上复测（Netlify 构建完成后运行）
import re, ssl, sys, time
import urllib.request

ctx = ssl.create_default_context()
GA4, ADS, PIX = "G-Y5HHC5PQ2D", "AW-16640554458", "1261846228680902"
B = "https://smart.pky-dripirrigation.com"
fails = []

def get(path, tries=3):
    for i in range(tries):
        try:
            req = urllib.request.Request(B + path, headers={"User-Agent": "Mozilla/5.0 (compatible; QA)"})
            with urllib.request.urlopen(req, timeout=25, context=ctx) as r:
                return r.status, r.read()
        except urllib.error.HTTPError as e:
            return e.code, e.read()
        except Exception as e:
            if i == tries - 1:
                return 0, str(e).encode()
            time.sleep(3)

def check(label, ok, detail=""):
    print(("PASS " if ok else "FAIL ") + label + (f" | {detail}" if detail else ""))
    if not ok:
        fails.append(label)

# 1) 404 页
code, body = get("/this-page-does-not-exist/")
h = body.decode("utf-8", "ignore")
check("404 status=404", code == 404, str(code))
check("404 markers", all(x in h for x in (GA4, ADS, PIX)))
check("404 hot links", all(s in h for s in ("/product/", "/early-access/", "/become-a-distributor/", "/contact/")))
check("404 WA button", "wa.me/8617395297329" in h)
ld = re.findall(r"application/ld\+json>(.*?)</script>", h, re.S)
check("404 JSON-LD no 404-breadcrumb", bool(ld) and "404 Page not found" not in ld[0])

# 2) message_sent 6 语言（关键修复验证）
for path, needle in [("/message_sent/", "successfully submitted"), ("/ru/message_sent/", "успешно отправлено"),
                     ("/uae/message_sent/", "successfully submitted"), ("/sa/message_sent/", "تم إرسال رسالتك"),
                     ("/za/message_sent/", "successfully submitted"), ("/zh-cn/message_sent/", "您的消息已成功提交")]:
    code, body = get(path)
    ok = code == 200 and needle in body.decode("utf-8", "ignore") and GA4 in body.decode("utf-8", "ignore")
    check(f"msg_sent {path}", ok, f"HTTP {code}")

# 3) 首页
code, body = get("/")
h = body.decode("utf-8", "ignore")
check("home 200 + markers", code == 200 and all(x in h for x in (GA4, ADS, PIX)))
check("home width/height x3", len(re.findall(r"width=1600 height=900", h)) == 3)
print(f"     home size: {len(body)//1024}KB (P1 后基线 26KB)")

# 4) 线上图片体积
total = 0
for f, cap in [("images/home/deployment-scenarios.webp", 140), ("images/home/open-platform-principles.webp", 140),
               ("images/home/platform-subsystems-series.webp", 140), ("images/home/global-farmland-atmosphere-v2.webp", 110)]:
    code, body = get("/" + f)
    kb = len(body) // 1024
    total += kb
    check(f"img {f.rsplit('/',1)[1]} <= {cap}KB", code == 200 and kb <= cap, f"{kb}KB")
print(f"     4 images total: {total}KB (P2 前 833KB)")

# 5) 回归：联系页表单 + 经销商页
code, body = get("/contact/")
h = body.decode("utf-8", "ignore")
check("contact form intact", code == 200 and "contact_en" in h and "wa.me/8617395297329" in h)
code, body = get("/become-a-distributor/")
h = body.decode("utf-8", "ignore")
check("distributor regression", code == 200 and all(x in h for x in (GA4, PIX)) and "exclusiv" not in h.lower())

print("\n== RESULT: " + ("ALL PASS" if not fails else f"{len(fails)} FAIL -> {fails}"))
sys.exit(1 if fails else 0)
