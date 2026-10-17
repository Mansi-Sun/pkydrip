#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
新闻中心上线断言（2026-10-17）

覆盖：栏目元信息、文章渲染、NewsArticle 结构化数据、RSS、导航入口、作者页。
"""
import json
import os
import re
import sys

ROOT = os.path.normpath(os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "public"))
results = []


def read(rel):
    p = os.path.join(ROOT, rel)
    if not os.path.isfile(p):
        return None
    with open(p, encoding="utf-8", errors="ignore") as f:
        return f.read()


def check(name, cond, detail=""):
    results.append((name, bool(cond), detail))


listing = read("blog/index.html")
article = read("blog/grow16-power-range/index.html")
feed = read("blog/index.xml")
author = read("author/pkydrip-team/index.html")
home = read("index.html")
product = read("product/pky-grow16/index.html")

# ------------------------------------------------------------ 栏目与列表页
check("博客列表页生成", listing is not None)
if listing:
    check("列表页含文章标题", "Grow 16 Now Covers Pump Stations" in listing)
    check("列表页有阅读入口", "Continue reading" in listing)
    check("列表页 meta description 已改写", "this is meta description" not in listing)
    check("列表页含 News 栏目描述", "distributor program news" in listing)
    check("列表页有 RSS 发现链接", "application/rss+xml" in listing)

# ------------------------------------------------------------------ 文章页
check("文章页生成", article is not None)
if article:
    check("文章含 GA4", "G-Y5HHC5PQ2D" in article)
    check("文章含 canonical", "rel=canonical" in article or 'rel="canonical"' in article)
    check("文章含功率三档内容", "100 kW" in article and "3 kW" in article)
    check("文章含产品页内链", "/product/pky-grow16/" in article)
    check("文章含架构图", "grow16-power-architecture.svg" in article)
    check("文章作者链接指向公司作者页", "/author/pkydrip-team" in article)

    # NewsArticle 结构化数据（Hugo minify 会去掉属性引号，正则需兼容）
    m = re.search(r'<script type="?application/ld\+json"?>(.*?)</script>', article, re.S)
    check("文章含 JSON-LD", m is not None)
    if m:
        try:
            data = json.loads(m.group(1))
            graph = data.get("@graph", [])
            types = [n.get("@type") for n in graph]
            check("JSON-LD 含 NewsArticle 节点", "NewsArticle" in types, str(types))
            node = next((n for n in graph if n.get("@type") == "NewsArticle"), {})
            check("NewsArticle 有 headline", bool(node.get("headline")))
            check("NewsArticle 有 datePublished", bool(node.get("datePublished")))
            check("NewsArticle 有 image", bool(node.get("image")))
            check("NewsArticle 有 publisher", bool(node.get("publisher")))
            check("JSON-LD 仍含 Organization", "Organization" in types)
        except json.JSONDecodeError as e:
            check("JSON-LD 可解析", False, str(e))

# --------------------------------------------------------------------- RSS
check("RSS feed 生成", feed is not None)
if feed:
    check("RSS 含文章条目", "Grow 16 Now Covers Pump Stations" in feed)
    check("RSS 有 item 节点", "<item>" in feed)

# ------------------------------------------------------------------ 作者页
check("公司作者页生成", author is not None)
if author:
    check("作者页显示 PKYDrip Team", "PKYDrip Team" in author)

# ------------------------------------------------------------------ 导航
if home:
    check("主导航含 News 入口", re.search(r'href=["\']?(/[a-z]{2})?/blog/["\']?[^>]*>\s*News', home) is not None or ">News<" in home)
    check("导航未出现重复 Products", home.count(">Products<") <= 2, "出现 %d 次（含 footer）" % home.count(">Products<"))

# --------------------------------------------------- 不回归：产品页仍正常
if product:
    check("Grow 16 产品页未受影响", "3 kW" in product and "100 kW" in product)

# -------------------------------------------------------------------- 输出
passed = sum(1 for _n, ok, _d in results if ok)
failed = [(n, d) for n, ok, d in results if not ok]

print("=" * 64)
for name, ok, detail in results:
    mark = "PASS" if ok else "FAIL"
    print("%-4s %s%s" % (mark, name, ("  <- %s" % detail) if detail and not ok else ""))
print("=" * 64)
print("合计 %d 项：PASS %d / FAIL %d" % (len(results), passed, len(failed)))
sys.exit(1 if failed else 0)
