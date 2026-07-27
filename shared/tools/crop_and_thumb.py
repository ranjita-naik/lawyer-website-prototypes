"""Generate curated crops/thumbnails from full-page screenshots for the PDF decks.

For each prototype, for each page, produces:
  - <page>-fold.png   : top "above the fold" crop of the 1440-wide screenshot
  - <page>-thumb.png  : full page resized down to a small width (shows overall rhythm)
For a curated subset of pages, also produces a mobile fold crop:
  - <page>-m.png      : top crop of the 375-wide screenshot
"""
import os
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
SHOTS = os.path.join(ROOT, "temporary-screenshots")
OUT = os.path.join(ROOT, "pdf", "assets")

PROTOTYPES = [
    "prototype-01-quiet-authority",
    "prototype-02-contemporary-counsel",
    "prototype-03-human-centered-advocate",
]

PAGES = [
    "index", "about", "practice-areas", "practice-area-detail",
    "experience", "insights", "article-detail", "contact", "disclaimer",
]

MOBILE_PAGES = ["index", "practice-area-detail", "contact"]

FOLD_HEIGHT_DESKTOP = 1000
FOLD_HEIGHT_MOBILE = 780
THUMB_WIDTH = 320


def crop_top(img, height):
    w, h = img.size
    height = min(height, h)
    return img.crop((0, 0, w, height))


def resize_width(img, width):
    w, h = img.size
    ratio = width / w
    return img.resize((width, max(1, int(h * ratio))), Image.LANCZOS)


def main():
    for proto in PROTOTYPES:
        src_dir = os.path.join(SHOTS, proto)
        out_dir = os.path.join(OUT, proto)
        os.makedirs(out_dir, exist_ok=True)

        for page in PAGES:
            src = os.path.join(src_dir, f"{page}-1440.png")
            if not os.path.exists(src):
                print(f"MISSING {src}")
                continue
            img = Image.open(src).convert("RGB")
            fold = crop_top(img, FOLD_HEIGHT_DESKTOP)
            fold.save(os.path.join(out_dir, f"{page}-fold.png"), optimize=True)
            thumb = resize_width(img, THUMB_WIDTH)
            thumb.save(os.path.join(out_dir, f"{page}-thumb.png"), optimize=True)
            print(f"{proto}/{page}: fold {fold.size}, thumb {thumb.size}")

        for page in MOBILE_PAGES:
            src = os.path.join(src_dir, f"{page}-375.png")
            if not os.path.exists(src):
                print(f"MISSING {src}")
                continue
            img = Image.open(src).convert("RGB")
            fold = crop_top(img, FOLD_HEIGHT_MOBILE)
            fold.save(os.path.join(out_dir, f"{page}-m.png"), optimize=True)
            print(f"{proto}/{page}: mobile fold {fold.size}")


if __name__ == "__main__":
    main()
