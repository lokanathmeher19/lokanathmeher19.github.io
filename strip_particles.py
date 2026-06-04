import os
import glob

files = glob.glob('src/pages/*.jsx')
for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Remove import
    content = '\n'.join([line for line in content.split('\n') if 'import ParticlesBackground' not in line])
    # Remove component
    content = content.replace('<ParticlesBackground />', '')
    
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)
print("done")
