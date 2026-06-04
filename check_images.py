import re

with open('dist/index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Find all data URIs
matches = re.findall(r'data:image/[a-zA-Z]+;base64,[^"\']+', content)

print(f"Found {len(matches)} data URIs")

if matches:
    print("First 5 matches start with:")
    for i, m in enumerate(matches[:5]):
        print(f"{i}: {m[:50]}...")
        
    # Check if any are suspiciously short
    short_matches = [m for m in matches if len(m) < 1000]
    print(f"Found {len(short_matches)} short matches (icons?)")
    
    long_matches = [m for m in matches if len(m) > 10000]
    print(f"Found {len(long_matches)} long matches (photos?)")
