from PIL import Image
import sys

image_path = sys.argv[1]
pdf_path = sys.argv[2]

image = Image.open(image_path)
if image.mode != 'RGB':
    image = image.convert('RGB')
image.save(pdf_path, "PDF", resolution=1000.0, quality=100)
print(f"Converted {image_path} to {pdf_path}")
