import os

# Folder where your images are stored
folder_path = './'

# Valid image extensions
image_extensions = ['.jpg', '.jpeg', '.png', '.webp']

# Collect image filenames (with valid extensions)
images = [f for f in os.listdir(folder_path) if os.path.splitext(f)[1].lower() in image_extensions]

# Sort for consistency
images.sort()

# Create JS import statements
import_statements = ""
img_vars = []

for i, img_name in enumerate(images):
    var_name = f"img{i+1}"
    import_statements += f"import {var_name} from './{img_name}';\n"
    img_vars.append(var_name)

# Use each image only once
photo_data = ", ".join(img_vars)
mapped_data = f"[{photo_data}].map(img => ({{ img }}));"

# Final output
output = (
    f"{import_statements}\n\n"
    f"export const photoData = {mapped_data}\n"
)

# Write to assets.js
with open("assets.js", "w") as f:
    f.write(output)

print("✅ assets.js file generated successfully with unique images.")
