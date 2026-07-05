#!/usr/bin/env python3
"""Farm-atmosphere platform visual — agricultural context, not engineering diagram."""

from PIL import Image, ImageDraw, ImageFont, ImageFilter

W, H = 1600, 900
SRC = "static/images/home/global-farmland-atmosphere.jpg"
OUT = "static/images/home/platform-subsystems-series.webp"

# Agricultural zone callouts over the landscape
ZONES = [
    {
        "name": "Irrigation Control",
        "context": "open fields · orchards · zone water flow",
        "xy": (120, 520, 430, 640),
        "accent": (58, 118, 92),
    },
    {
        "name": "Fertigation",
        "context": "nutrient delivery with irrigation cycles",
        "xy": (1170, 500, 1480, 620),
        "accent": (148, 118, 58),
    },
    {
        "name": "Climate Control",
        "context": "greenhouse · nursery · crop environment",
        "xy": (1180, 180, 1490, 300),
        "accent": (72, 128, 98),
    },
    {
        "name": "Wireless Field",
        "context": "remote blocks · LoRa expansion",
        "xy": (110, 180, 420, 300),
        "accent": (88, 108, 128),
    },
]


def font(size, bold=False):
    paths = [
        "/System/Library/Fonts/Supplemental/Arial Bold.ttf" if bold else "/System/Library/Fonts/Supplemental/Arial.ttf",
        "/Library/Fonts/Arial.ttf",
    ]
    for p in paths:
        try:
            return ImageFont.truetype(p, size)
        except OSError:
            continue
    return ImageFont.load_default()


def text_width(draw, text, fnt):
    if hasattr(draw, "textlength"):
        return draw.textlength(text, font=fnt)
    return fnt.getsize(text)[0]


def crop_cover(img, tw, th):
    sw, sh = img.size
    scale = max(tw / sw, th / sh)
    nw, nh = int(sw * scale), int(sh * scale)
    img = img.resize((nw, nh), Image.LANCZOS)
    left = (nw - tw) // 2
    top = (nh - th) // 3  # bias upward to keep more sky/field horizon
    return img.crop((left, top, left + tw, top + th))


def draw_pill(draw, box, fill, outline=None, width=1):
    draw.rectangle(box, fill=fill, outline=outline, width=width)


def main():
    base = Image.open(SRC).convert("RGB")
    base = crop_cover(base, W, H)

    # Soft agricultural grade + bottom readability wash
    overlay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    odraw = ImageDraw.Draw(overlay)
    for y in range(H):
        t = y / H
        if t < 0.45:
            a = int(18 * (t / 0.45))
            odraw.line([(0, y), (W, y)], fill=(24, 48, 36, a))
        else:
            a = int(18 + 95 * ((t - 0.45) / 0.55))
            odraw.line([(0, y), (W, y)], fill=(18, 38, 28, a))

    base = Image.alpha_composite(base.convert("RGBA"), overlay).convert("RGB")
    draw = ImageDraw.Draw(base)

    f_title = font(38, True)
    f_sub = font(19)
    f_name = font(22, True)
    f_ctx = font(15)

    # Headline over sky/field
    title = "Coordinated Automation Across the Farm"
    sub = "Four subsystems working with the land — not a device catalog"
    tw = text_width(draw, title, f_title)
    draw.text(((W - tw) / 2, 56), title, fill=(250, 248, 240), font=f_title)
    sw = text_width(draw, sub, f_sub)
    draw.text(((W - sw) / 2, 108), sub, fill=(220, 228, 218), font=f_sub)

    # Zone callouts — frosted field markers
    for z in ZONES:
        x1, y1, x2, y2 = z["xy"]
        pill = Image.new("RGBA", (x2 - x1, y2 - y1), (0, 0, 0, 0))
        pd = ImageDraw.Draw(pill)
        pd.rectangle((0, 0, x2 - x1 - 1, y2 - y1 - 1), fill=(255, 252, 245, 168), outline=(*z["accent"], 180), width=2)
        # accent strip
        pd.rectangle((0, 0, 8, y2 - y1 - 1), fill=(*z["accent"], 220))
        pill = pill.filter(ImageFilter.GaussianBlur(radius=0.4))
        base.paste(pill, (x1, y1), pill)

        draw = ImageDraw.Draw(base)
        draw.text((x1 + 24, y1 + 22), z["name"], fill=(28, 48, 36), font=f_name)
        draw.text((x1 + 24, y1 + 54), z["context"], fill=(72, 92, 78), font=f_ctx)

    # Center gentle farm narrative (no tech hub)
    cx, cy = W // 2, H // 2 + 40
    note = Image.new("RGBA", (520, 120), (0, 0, 0, 0))
    nd = ImageDraw.Draw(note)
    nd.rectangle((0, 0, 519, 119), fill=(255, 252, 245, 145), outline=(120, 150, 120, 160), width=2)
    note = note.filter(ImageFilter.GaussianBlur(radius=0.3))
    base.paste(note, (cx - 260, cy - 60), note)
    draw = ImageDraw.Draw(base)

    line1 = "From soil and crop zones to water, nutrients, and climate"
    line2 = "one automation structure for real agricultural projects"
    l1w = text_width(draw, line1, f_ctx)
    l2w = text_width(draw, line2, f_ctx)
    draw.text((cx - l1w / 2, cy - 22), line1, fill=(245, 244, 236), font=f_ctx)
    draw.text((cx - l2w / 2, cy + 4), line2, fill=(230, 236, 226), font=f_ctx)

    foot = "Products integrate when a farm project is configured"
    fw = text_width(draw, foot, f_ctx)
    draw.text(((W - fw) / 2, H - 54), foot, fill=(220, 228, 216), font=f_ctx)

    base.save(OUT, "WEBP", quality=90, method=6)
    print(f"Wrote {OUT}")


if __name__ == "__main__":
    main()
