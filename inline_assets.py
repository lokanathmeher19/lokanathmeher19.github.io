import os
import re

dist_dir = 'dist'
assets_dir = os.path.join(dist_dir, 'assets')
index_html_path = os.path.join(dist_dir, 'index.html')

with open(index_html_path, 'r', encoding='utf-8') as f:
    html_content = f.read()

# Find CSS file
css_files = [f for f in os.listdir(assets_dir) if f.endswith('.css')]
if css_files:
    css_path = os.path.join(assets_dir, css_files[0])
    with open(css_path, 'r', encoding='utf-8') as f:
        css_content = f.read()
    # Replace link tag with style tag
    html_content = re.sub(r'<link rel="stylesheet"[^>]*href="[^"]*\.css"[^>]*>', f'<style>{css_content}</style>', html_content)

# Find JS file
js_files = [f for f in os.listdir(assets_dir) if f.endswith('.js')]
if js_files:
    js_path = os.path.join(assets_dir, js_files[0])
    with open(js_path, 'r', encoding='utf-8') as f:
        js_content = f.read()
    # Replace script tag with inline script
    # Note: The script tag might be <script type="module" ... src="...">
    html_content = re.sub(r'<script type="module"[^>]*src="[^"]*\.js"[^>]*></script>', lambda m: f'<script type="module">{js_content}</script>', html_content)

with open(index_html_path, 'w', encoding='utf-8') as f:
    f.write(html_content)

print(f"Inlined assets into {index_html_path}")
