import os
import json
import sys
import numpy as np
import tensorflow as tf
from tensorflow.keras.applications.inception_v3 import preprocess_input, InceptionV3

# Load pre-trained Inception v3 model
model = InceptionV3(include_top=False, pooling="avg")


# extract features from image, second to last layer, length 2048
def extract_features(img_path, model):
    img = tf.keras.preprocessing.image.load_img(img_path, target_size=(299, 299))
    x = tf.keras.preprocessing.image.img_to_array(img)
    x = np.expand_dims(x, axis=0)
    x = preprocess_input(x)
    features = model.predict(x)
    return features.flatten()

# get input directory and output file path from command line arguments
if len(sys.argv) != 3:
    print("Usage: python classify_samples.py <input directory> <output file path>")
    sys.exit(1)

img_dir = sys.argv[1]
output_path = sys.argv[2]

# loop through images
features_dict = {}
for img_name in os.listdir(img_dir):
    file_name, file_ext = os.path.splitext(img_name)
    if file_ext.lower() == ".png":
        print(f"Processing {img_name}...")
        img_path = os.path.join(img_dir, img_name)
        features = extract_features(img_path, model)
        features_dict[file_name] = features.tolist()

# save to json file
with open(output_path, 'w') as f:
    json.dump(features_dict, f)
    print(f"Saved to {output_path}")
