import sys
import json
import numpy as np
import matplotlib.pyplot as plt
from scipy.spatial.distance import cdist
import lap
import math


# Get input and output file paths from command line arguments
if len(sys.argv) != 3:
    print('Usage: python run_lap.py <input file path> <output file path>')
    sys.exit(1)

input_path = sys.argv[1]
output_path = sys.argv[2]

# Load features from JSON file
with open(input_path, "r") as f:
    umap_dict = json.load(f)

# out_path = get_path('layouts', 'linear-assignment', **kwargs)
# if os.path.exists(out_path) and kwargs['use_cache']: return out_path

# load the umap layout
img_names = umap_dict.keys()
values = list(umap_dict.values())
umap = np.array(values)
umap = (umap + 1) / 2  # scale 0:1

# determine length of each side in square grid
side = math.ceil(umap.shape[0] ** (1 / 2))
# create square grid 0:1 in each dimension
grid_x, grid_y = np.meshgrid(np.linspace(0, 1, side), np.linspace(0, 1, side))
grid = np.dstack((grid_x, grid_y)).reshape(-1, 2)
# compute pairwise distance costs
cost = cdist(grid, umap, "sqeuclidean")
# increase cost
cost = cost * (10000000.0 / cost.max())
# run the linear assignment
min_cost, row_assignments, col_assignments = lap.lapjv(np.copy(cost), extend_cost=True)
# use the assignment vals to determine gridified positions of `arr`
pos = grid[col_assignments]
print(pos)

# Create a dictionary to store the LAP results
lap_dict = {}
for i, img_name in enumerate(img_names):
    lap_dict[img_name] = pos[i].tolist()

# Save LAP results to JSON file
with open(output_path, "w") as f:
    json.dump(lap_dict, f, indent=4)

# Plot the results
fig, ax = plt.subplots(figsize=(8, 8))
ax.scatter(pos[:, 0], pos[:, 1])
# for i, txt in enumerate(img_names):
#     ax.annotate(txt, (features_tsne[i, 0], features_tsne[i, 1]))
plt.show()
