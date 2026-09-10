# -*- coding: utf-8 -*-
# 变更方案-08 A项：4 张首页 webp 原地重压缩（尺寸不变，降质量）
from PIL import Image
import os

D = "D:/Users/Administrator/Documents/GitHub/pkydrip/static/images/home/"
TARGETS = {
    "deployment-scenarios.webp": 140,
    "open-platform-principles.webp": 140,
    "platform-subsystems-series.webp": 140,
    "global-farmland-atmosphere-v2.webp": 110,
}

for name, target_kb in TARGETS.items():
    path = D + name
    im = Image.open(path)
    w, h = im.size
    orig_kb = os.path.getsize(path) // 1024
    best = None
    q = 80
    while q >= 60:
        out = D + "_tmp_" + name
        im.save(out, "WEBP", quality=q, method=6)
        kb = os.path.getsize(out) // 1024
        if kb <= target_kb:
            best = (q, kb, out)
            break
        if best is None or kb < best[1]:
            if best and os.path.exists(best[2]):
                os.remove(best[2])
            best = (q, kb, out)
        else:
            os.remove(out)
        q -= 3
    if best:
        os.replace(best[2], path)
        print(f"{name}: {orig_kb}KB -> {best[1]}KB (q={best[0]}, {w}x{h})")
    else:
        print(f"{name}: FAILED")
