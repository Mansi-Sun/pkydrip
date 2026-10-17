#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
上线前断言：master-sync 合并结果核对（2026-10-17）

核对目标：
1. 新增页面已生成且内容口径正确
2. master 侧既有资产未被覆盖（OEM / 广告落地页 / live-demo / 首页性能改动）
3. 被删页面已由 alias 桩页 + 301 承接，无死链
4. 全站 SEO 标记未破坏（GA4 / canonical / JSON-LD）
"""
import os
import re
import sys

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "public")
ROOT = os.path.normpath(ROOT)

results = []


def read(rel):
    p = os.path.join(ROOT, rel)
    if not os.path.isfile(p):
        return None
    with open(p, encoding="utf-8", errors="ignore") as f:
        return f.read()


def check(name, cond, detail=""):
    results.append((name, bool(cond), detail))


# ---------------------------------------------------------------- 1. 新页面
grow = read("product/pky-grow16/index.html")
smart = read("product/smart-irrigation-controller/index.html")
farm = read("product/farm-irrigation-controller/index.html")

check("Grow 16 页已生成", grow is not None)
if grow:
    check("Grow 16 含直启档 (3 kW)", "3 kW" in grow, "direct-on-line")
    check("Grow 16 含分柜档 (5-50 kW)", "50 kW" in grow, "split cabinets")
    check("Grow 16 含环控档 (100 kW)", "100 kW" in grow, "grouped starting")
    check("Grow 16 含温室环控系统", "Climate Control" in grow)

check("Smart Controller 页已生成", smart is not None)
if smart:
    check("Smart Controller 含 PKY-60W 型号", "PKY-60W" in smart)
    check("Smart Controller 含升级路径", re.search(r"[Uu]pgrade path", smart) is not None)

check("MC-16 Local 页已生成", farm is not None)
if farm:
    check("MC-16 用新 CTA (Ask for Configuration)", "Ask for Configuration" in farm)
    check("MC-16 保留 live-demo 入口", "View Online Demo" in farm and "/live-demo/" in farm)
    check("MC-16 保留 field_data 区块", "See Real Field Data" in farm)
    check("MC-16 未残留旧 CTA", "Get System Configuration" not in farm)
    check("MC-16 保留定位语句", "Not a consumer garden timer" in farm)
    check("MC-16 含 Grow 16 互链", "/product/pky-grow16/" in farm)

# ------------------------------------------------- 2. 被删页面的承接
stub = read("product/pky-60w/index.html")
check("旧 60W URL 有 alias 桩页", stub is not None)
if stub:
    check(
        "桩页跳转到新页",
        "smart-irrigation-controller" in stub and "refresh" in stub,
        "meta refresh",
    )

# ------------------------------------------------- 3. master 侧资产健在
assets = {
    "OEM 私有品牌页": "oem/index.html",
    "OEM 智能控制器页": "oem-smart-irrigation-controller/index.html",
    "live-demo 页": "live-demo/index.html",
    "AU/NZ 广告落地页": "landing/fertigation-system-au/index.html",
    "新闻栏目列表页": "blog/index.html",
    "首页": "index.html",
}
for label, path in assets.items():
    check("%s 存在" % label, read(path) is not None, path)

# ------------------------------------------------- 4. SEO 标记抽查
for label, html in (("Grow 16", grow), ("Smart Controller", smart), ("MC-16 Local", farm)):
    if not html:
        continue
    check("%s 含 GA4" % label, "G-Y5HHC5PQ2D" in html)
    check("%s 含 canonical" % label, 'rel="canonical"' in html or "rel=canonical" in html)
    check("%s 含 JSON-LD" % label, 'application/ld+json' in html)

# ------------------------------------------------- 5. 全站 60W 链接引用
refs = []
for dirpath, _dirnames, filenames in os.walk(ROOT):
    for fn in filenames:
        if not fn.endswith(".html"):
            continue
        fp = os.path.join(dirpath, fn)
        rel = os.path.relpath(fp, ROOT).replace("\\", "/")
        if rel.startswith("product/pky-60w/"):
            continue  # 桩页自身
        try:
            with open(fp, encoding="utf-8", errors="ignore") as f:
                if '/product/pky-60w/' in f.read():
                    refs.append(rel)
        except OSError:
            pass

check("无失效的 /product/pky-60w/ 链接", len(refs) == 0, "引用数=%d %s" % (len(refs), refs[:5]))

# ---------------------------------------------------------------- 输出
passed = sum(1 for _n, ok, _d in results if ok)
failed = [(n, d) for n, ok, d in results if not ok]

print("=" * 62)
for name, ok, detail in results:
    mark = "PASS" if ok else "FAIL"
    extra = ("  <- %s" % detail) if detail and not ok else ""
    print("%-4s %s%s" % (mark, name, extra))
print("=" * 62)
print("合计 %d 项：PASS %d / FAIL %d" % (len(results), passed, len(failed)))
sys.exit(1 if failed else 0)
