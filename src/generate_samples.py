"""
Kevin Chen
knc26
"""


from fontpreview import FontPreview

from pathlib import Path
from fontTools import ttLib
from google.protobuf import text_format, json_format
import googlefonts_pb2

import itertools
import json
import os

# VERSION = 4
VERSION = "preview"

EXCLUDED_FONTS = [
    "Chathura",
    "Dhurjati",
    "Gurajada",
    "Ponnala",
    "Sitara",
    "Suranna",
    "Suravaram",
    "Taprom",
    "Yinmar",
    "Hind Colombo",
    "Hind Guntur",
    "Hind Jalandhar",
    "Hind Kochi",
    "Hind Madurai",
    "Hind Mysuru",
    "Hind Siliguri",
    "Hind Vadodara",
]
NOTO_ALLOWED = ["Noto Sans", "Noto Serif"]


def generate_font_sample(dir_path: str, font: dict, dry_run: bool = False) -> None:
    if font["weight"] != 400 and font["weight"] != 700:
    # if font["weight"] not in [200, 300, 400, 500, 600, 700, 800, 900]:
        return

    if font["style"] != "normal":
        return

    # font_name = f"{font['fullName']}"
    font_name = f"{font['name']} {int(font['weight'])}"
    path = dir_path + "/" + font["filename"]
    # print(font_name)
    # return

    print("Generating preview for: " + font_name)
    if dry_run:
        return

    try:
        fp = FontPreview(path)
        # fp.font_text = "HGygdh\nABlaejo\nMOiuvn"
        # fp.dimension = (299, 299)
        # fp.set_font_size(90)
        fp.font_text = "Handgloves"
        fp.dimension = (450, 160)
        fp.set_font_size(150)
        fp.set_text_position("lcenter")
        fp.draw()
        fp.save(f"samples-v{VERSION}/{font_name}.png")

    except OSError as error:
        print(error)
        print("Could not generate preview for " + font_name)


if __name__ == "__main__":
    # create ./samples directory if not already exists
    Path(f"samples-v{VERSION}").mkdir(parents=True, exist_ok=True)

    path = os.getcwd() + "/fonts-main/ofl"

    with os.scandir(path) as it:
        # for entry in itertools.islice(it, 10):
        for entry in it:
            if not entry.name.startswith(".") and entry.is_dir():
                metadata_path = Path(entry.path + "/METADATA.pb")
                if not metadata_path.exists() or metadata_path.stat().st_size == 0:
                    continue

                with open(metadata_path, "r") as f:
                    googlefonts_pb = googlefonts_pb2.FontInfo()
                    try:
                        message = text_format.Parse(f.read(), googlefonts_pb)
                        font_info = json_format.MessageToDict(message)

                        # if font is excluded, skip
                        if font_info["name"] in EXCLUDED_FONTS:
                            continue

                        # if noto font, just include basic english
                        if (
                            font_info.get("isNoto")
                            and font_info["name"] not in NOTO_ALLOWED
                        ):
                            continue

                        # if latin subset is not supported, skip
                        if "latin" not in font_info["subsets"]:
                            continue

                        # if primary language is non-english, skip
                        if font_info.get("primaryScript", None):
                            continue

                        for variant in font_info["fonts"]:
                            generate_font_sample(entry.path, variant, dry_run=False)

                    except text_format.ParseError as error:
                        print(error)
                        print(metadata_path)

                # font_name = generate_font_sample(entry.path)
                # if not font_name:
                #     continue
