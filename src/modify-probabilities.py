"""
Kevin Chen
knc26

Useful links
* https://medium.com/ideo-stories/organizing-the-world-of-fonts-with-ai-7d9e49ff2b25
* https://github.com/matteoguadrini/fontpreview
* https://github.com/sudhir2016/Google-Colab-3/blob/master/VGG16.ipynb
* https://stackoverflow.com/questions/26646362/numpy-array-is-not-json-serializable

Tsne
* https://lvdmaaten.github.io/tsne/
* https://distill.pub/2016/misread-tsne/

Visualizing
* https://douglasduhaime.com/posts/visualizing-tsne-maps-with-three-js.html
* https://douglasduhaime.com/posts/identifying-similar-images-with-tensorflow.html
"""


import json

import os

VERSION = 2
# categories = SERIF, SANS_SERIF, DISPLAY, MONOSPACE, HANDWRITING
CATEGORY_INDEX = {
    "SERIF": 0,
    "SANS_SERIF": 1,
    "DISPLAY": 2,
    "MONOSPACE": 3,
    "HANDWRITING": 4,
}

def main() -> None:
    all_probabilities = None;
    with open(f"font-probabilities-v{VERSION}.json", "r") as f:
        all_probabilities = json.loads(f.read())
    print(len(all_probabilities))

    font_metadata = None;
    with open(f"font-metadata.json", "r") as f:
        font_metadata = json.loads(f.read())

    new_probabilities = {}
    for font, probabilities in all_probabilities.items():
        if font not in font_metadata:
            continue

        # encode category as 5 probabilities
        p = [0.1]*5
        p[CATEGORY_INDEX[font_metadata[font][0]]] = 0.15 # small value just to nudge
        p.append(font_metadata[font][1]) # x-height / cap-height
        new_probabilities[font] = [p + probabilities[0]]

    print(len(new_probabilities))


    with open(f"font-probabilities-v{VERSION}b.json", "w") as f:
        json.dump(new_probabilities, f)


if __name__ == "__main__":
    main()
