import sys
import json
import numpy as np
from sklearn.decomposition import PCA
from sklearn.manifold import TSNE
import matplotlib.pyplot as plt


# Get input and output file paths from command line arguments
if len(sys.argv) != 3:
    print('Usage: python tsne.py <input file path> <output file path>')
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

# Perform t-SNE dimensionality reduction
tsne = TSNE(n_components=2, perplexity=20, n_iter=3500, random_state=42, n_jobs=12)
features_tsne = tsne.fit_transform(features_pca)

# Create a dictionary to store the t-SNE results
tsne_dict = {}
for i, img_name in enumerate(img_names):
    tsne_dict[img_name] = features_tsne[i].tolist()

# Save t-SNE results to JSON file
with open(output_path, "w") as f:
    json.dump(tsne_dict, f, indent=4)

# Plot the results
fig, ax = plt.subplots(figsize=(8, 8))
ax.scatter(features_tsne[:, 0], features_tsne[:, 1])
# for i, txt in enumerate(img_names):
#     ax.annotate(txt, (features_tsne[i, 0], features_tsne[i, 1]))
plt.show()
