import sys
import json
import numpy as np
from sklearn.decomposition import PCA
import matplotlib.pyplot as plt
import umap


# Get input and output file paths from command line arguments
if len(sys.argv) != 3:
    print("Usage: python tsne.py <input file path> <output file path>")
    sys.exit(1)

input_path = sys.argv[1]
output_path = sys.argv[2]

# Load features from JSON file
with open(input_path, "r") as f:
    features_dict = json.load(f)

# Extract features and image names into separate arrays
features_list = list(features_dict.values())
# features_list = [f[0] for f in features_list]
img_names = list(features_dict.keys())

# Convert features to numpy array
features_array = np.array(features_list)

# Reduce dimensionality using PCA
pca = PCA(n_components=50, random_state=42)
features_pca = pca.fit_transform(features_array)

# Perform dimensionality reduction with UMAP
reducer = umap.UMAP(n_components=2, n_neighbors=30, min_dist=1, random_state=42)
features_umap = reducer.fit_transform(features_array)

# Create a dictionary to store the UMAP results
umap_dict = {}
for i, img_name in enumerate(img_names):
    umap_dict[img_name] = features_umap[i].tolist()

# Save UMAP results to JSON file
with open(output_path, "w") as f:
    json.dump(umap_dict, f)

# Plot the results
fig, ax = plt.subplots(figsize=(8, 8))
ax.scatter(features_umap[:, 0], features_umap[:, 1])
plt.show()
