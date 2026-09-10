# -*- coding: utf-8 -*-
# 变更方案-08 验证清单
import os, re, sys

P = "D:/Users/Administrator/Documents/GitHub/pkydrip/public/"
GA4, ADS, PIX = "G-Y5HHC5PQ2D", "AW-16640554458", "1261846228680902"
fails = []

def check(label, ok, detail=""):
    print(("PASS " if ok else "FAIL ") + label + (f" | {detail}" if detail else ""))
    if not ok:
        fails.append(label)

# 1) 图片产物体积
for f, cap in [("images/home/deployment-scenarios.webp",140),("images/home/open-platform-principles.webp",140),
               ("images/home/platform-subsystems-series.webp",140),("images/home/global-farmland-atmosphere-v2.webp",110)]:
    kb = os.path.getsize(P+f)//1024
    check(f"img {os.path.basename(f)} <= {cap}KB", kb <= cap, f"{kb}KB")

# 2) 首页
h = open(P+"index.html", encoding="utf-8").read()
check("home width/height x3", len(re.findall(r'width=1600 height=900', h)) == 3, str(len(re.findall(r'width=1600 height=900', h))))
check("home GA4/Ads/Pixel", all(x in h for x in (GA4, ADS, PIX)))
check("home ld+json", "application/ld+json" in h)
check("home WhatsApp tracking js", "wa.me" in h)
check("home canonical", 'rel=canonical' in h)
print(f"     home size: {len(h)//1024}KB")

# 3) 404
f4 = open(P+"404.html", encoding="utf-8").read()
check("404 GA4/Ads/Pixel", all(x in f4 for x in (GA4, ADS, PIX)))
check("404 hot links", all(s in f4 for s in ("/product/", "/early-access/", "/become-a-distributor/", "/contact/")))
check("404 WhatsApp button", "wa.me/8617395297329" in f4)
check("404 no breadcrumb in JSON-LD", "404 Page not found" not in re.findall(r'application/ld\+json>(.*?)</script>', f4, re.S)[0])
check("404 JSON-LD has Organization", "Organization" in re.findall(r'application/ld\+json>(.*?)</script>', f4, re.S)[0])

# 4) message_sent 6 语言
ms_expect = {
    "message_sent/index.html": "successfully submitted",
    "ru/message_sent/index.html": "успешно отправлено",
    "uae/message_sent/index.html": "successfully submitted",
    "sa/message_sent/index.html": "تم إرسال رسالتك",
    "za/message_sent/index.html": "successfully submitted",
    "zh-cn/message_sent/index.html": "您的消息已成功提交",
}
for rel, needle in ms_expect.items():
    try:
        c = open(P+rel, encoding="utf-8").read()
        check(f"msg_sent {rel}", all(x in c for x in (needle, GA4, ADS, PIX)))
    except FileNotFoundError:
        check(f"msg_sent {rel}", False, "missing")

# 5) 回归抽查
for rel in ["become-a-distributor/index.html", "contact/index.html", "solution/index.html"]:
    c = open(P+rel, encoding="utf-8").read()
    check(f"regression {rel}", all(x in c for x in (GA4, ADS, PIX, "wa.me/8617395297329", "application/ld+json", "rel=canonical")))

# 6) solution/system-architecture 背景图引用页仍指同一文件（压缩即受益）
sol = open(P+"solution/index.html", encoding="utf-8").read()
check("solution uses deployment-scenarios.webp", "deployment-scenarios.webp" in sol)

print("\n== RESULT: " + ("ALL PASS" if not fails else f"{len(fails)} FAIL -> {fails}"))
sys.exit(1 if fails else 0)
