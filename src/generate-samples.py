"""
Kevin Chen
knc26
"""


from fontpreview import FontPreview

from pathlib import Path
from fontTools import ttLib

import itertools
import json
import os

VERSION = 3

def generate_font_sample(path: str) -> str:

    font_name = ""

    with os.scandir(path) as it:
        for entry in it:
            if (
                not entry.name.startswith(".")
                and entry.is_file()
                and entry.name.endswith("-Regular.ttf")
            ):
                font_name = os.path.splitext(entry.name)[0]
                print("Generating preview for " + font_name)
                try:
                    # fp = FontPreview(entry.path)
                    # fp.font_text = "handgloves"
                    # # fp.font_text = "HANDGLOVES"
                    # # fp.dimension = (224, 224)
                    # fp.dimension = (500, 150)
                    # fp.set_font_size(200)
                    # fp.set_text_position("lcenter")
                    # fp.draw()
                    # fp.save(f"samples-v{VERSION}/{font_name}.png")

                except OSError as error:
                    print(error)
                    print("Could not generate preview for " + font_name)

    return font_name


if __name__ == "__main__":
    # create ./samples directory if not already exists
    Path(f"samples-v{VERSION}").mkdir(parents=True, exist_ok=True)

    path = os.getcwd() + "/fonts-main/ofl"

    metadata = {}
    possible_categories = set()

    with os.scandir(path) as it:
        # for entry in itertools.islice(it, 30):
        for entry in it:
            if not entry.name.startswith(".") and entry.is_dir():

                metadata_path = Path(entry.path + "/METADATA.pb")
                if not metadata_path.exists() or metadata_path.stat().st_size == 0:
                    continue

                font_name = generate_font_sample(entry.path)
                if not font_name:
                    continue

                key = f"samples/{font_name}.png"

                with open(metadata_path, "r") as f:
                    head = [next(f).strip() for _ in range(5)]
                    category = head[3].split(":")[1].strip()
                    category = category[1:-1]
                    possible_categories.add(category)
                    metadata[key] = [category]

                tt = ttLib.TTFont(f"{entry.path}/{font_name}.ttf")
                try:
                    x_height = tt["OS/2"].sxHeight
                    cap_height = tt["OS/2"].sCapHeight
                    proportion = x_height / cap_height
                    metadata[key].append(proportion) 
                except (AttributeError, ZeroDivisionError) as e:
                    del metadata[key]

    print(possible_categories)

    with open(f"font-metadata.json", "w") as f:
        json.dump(metadata, f, indent=4)
