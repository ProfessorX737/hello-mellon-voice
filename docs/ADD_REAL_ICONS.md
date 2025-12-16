# Adding Real App Icons - Step by Step Guide

## Quick Overview

Replace the letter placeholders with actual app icons to make the site look professional.

## Option 1: Extract from macOS Apps (Recommended - Best Quality)

### Step 1: Get Icons from /Applications

```bash
# Create icons directory
mkdir -p public/icons

# Navigate to your apps
cd /Applications

# Example: Extract Slack icon
cp Slack.app/Contents/Resources/electron.icns ~/Desktop/slack.icns

# Convert ICNS to PNG (macOS built-in tool)
sips -s format png ~/Desktop/slack.icns --out ~/Downloads/mellon-voice-landing/public/icons/slack.png

# Resize to 64x64 (optimal size)
sips -Z 64 ~/Downloads/mellon-voice-landing/public/icons/slack.png
```

### Step 2: Batch Convert Multiple Icons

Create a script `extract-icons.sh`:

```bash
#!/bin/bash

# Apps to extract icons from
apps=(
  "Notion"
  "Slack"
  "Visual Studio Code:vscode"
  "Discord"
  "Linear:linear"
  "Mail:mail"
  "Xcode:xcode"
  "GitHub Desktop:github"
  "Things3:things"
  "Messages:messages"
  "Figma:figma"
  "Microsoft Word:word"
  "Terminal:terminal"
  "Google Chrome:chrome"
  "Safari:safari"
)

output_dir="public/icons"
mkdir -p "$output_dir"

for app_name in "${apps[@]}"; do
  # Split on colon if present (custom name)
  IFS=':' read -ra parts <<< "$app_name"
  app="${parts[0]}"
  icon_name="${parts[1]:-$(echo ${parts[0]} | tr '[:upper:]' '[:lower:]' | tr ' ' '-')}"

  app_path="/Applications/${app}.app"

  if [ -d "$app_path" ]; then
    echo "Processing $app..."

    # Find the icon file
    icon_file=$(find "$app_path/Contents/Resources" -name "*.icns" | head -1)

    if [ -n "$icon_file" ]; then
      # Convert to PNG
      sips -s format png "$icon_file" --out "$output_dir/${icon_name}.png" 2>/dev/null

      # Resize to 64x64
      sips -Z 64 "$output_dir/${icon_name}.png" 2>/dev/null

      echo "✓ Extracted: ${icon_name}.png"
    else
      echo "✗ No icon found for $app"
    fi
  else
    echo "✗ App not found: $app"
  fi
done

echo ""
echo "Done! Icons saved to $output_dir"
```

Make executable and run:

```bash
chmod +x extract-icons.sh
./extract-icons.sh
```

## Option 2: Download from Simple Icons (Faster, Good Quality)

### Step 1: Visit SimpleIcons.org

1. Go to https://simpleicons.org
2. Search for brands (Slack, GitHub, Discord, etc.)
3. Click icon → "Copy SVG"
4. Save as `.svg` in `public/icons/`

### Step 2: Automate Downloads (Optional)

```bash
# Install simple-icons npm package
npm install simple-icons --save-dev

# Create download script
cat > download-icons.js << 'EOF'
import { writeFileSync } from 'fs';
import simpleIcons from 'simple-icons';

const icons = [
  'slack',
  'github',
  'discord',
  'notion',
  'figma',
  'visualstudiocode',
  'googlechrome',
  'safari'
];

icons.forEach(name => {
  const icon = simpleIcons[`si${name.charAt(0).toUpperCase() + name.slice(1)}`];
  if (icon) {
    writeFileSync(`public/icons/${name}.svg`, icon.svg);
    console.log(`✓ Downloaded: ${name}.svg`);
  }
});
EOF

node download-icons.js
```

## Option 3: Use Icon Libraries (Professional, Consistent)

### macOS SF Symbols (Best for macOS apps)

1. Download SF Symbols app: https://developer.apple.com/sf-symbols/
2. Search for generic icons (envelope for Mail, terminal for Terminal)
3. Export as SVG
4. Save to `public/icons/`

### IconScout / Flaticon

1. Visit https://iconscout.com or https://flaticon.com
2. Search for app names
3. Download PNG (64x64) or SVG
4. Save to `public/icons/`

## Step 3: Update Your Code

### Current Code (index.astro):

```astro
{apps.map((app, index) => (
  <div class="app-icon" style={`--icon-index: ${index}`}>
    <div class="app-icon-placeholder">
      <span class="app-initial">{app.name.substring(0, 1)}</span>
    </div>
    <div class="app-name">{app.name}</div>
  </div>
))}
```

### Updated Code (with real icons):

```astro
{apps.map((app, index) => (
  <div class="app-icon" style={`--icon-index: ${index}`}>
    <img
      src={`/icons/${app.icon}.png`}
      alt={`${app.name} icon`}
      width="56"
      height="56"
      loading="lazy"
      class="app-icon-img"
    />
    <div class="app-name">{app.name}</div>
  </div>
))}
```

### Add CSS for Images:

```css
.app-icon-img {
  width: 56px;
  height: 56px;
  border-radius: 12px;
  object-fit: contain;
}
```

## File Structure

Your project should look like this:

```
public/
  icons/
    notion.png (or .svg)
    slack.png
    vscode.png
    notes.png
    discord.png
    obsidian.png
    linear.png
    mail.png
    xcode.png
    github.png
    things.png
    messages.png
    figma.png
    word.png
    terminal.png
    chrome.png
    safari.png
    gdocs.png
```

## Icon Specifications

**Recommended:**

- Format: PNG or SVG
- Size: 64x64px (PNG) or scalable (SVG)
- Background: Transparent
- Style: Consistent (all rounded or all square)

**Retina Support (Optional):**

- Create 128x128px versions
- Name as `icon@2x.png`
- Use srcset:
  ```html
  <img
    src="/icons/slack.png"
    srcset="/icons/slack@2x.png 2x"
    width="56"
    height="56"
  />
  ```

## Testing Checklist

After adding icons:

- [ ] All 18 app icons display correctly
- [ ] No broken image links
- [ ] Icons look crisp on retina displays
- [ ] Hover states still work
- [ ] Icons load quickly (< 50KB each)
- [ ] Alt text is descriptive
- [ ] Mobile responsive (icons scale properly)

## Troubleshooting

**Icons not showing?**

- Check file names match exactly (case-sensitive)
- Verify path is `/icons/name.png` (not `./icons/`)
- Clear browser cache

**Icons look pixelated?**

- Ensure at least 64x64px resolution
- Use SVG for perfect scaling
- Add @2x versions for retina

**Icons take too long to load?**

- Compress PNGs: https://tinypng.com
- Convert to WebP for smaller size
- Add `loading="lazy"` attribute

## Performance Tips

**Optimize Images:**

```bash
# Install ImageOptim (macOS)
brew install --cask imageoptim

# Or use CLI tool
npm install -g imagemin-cli
imagemin public/icons/*.png --out-dir=public/icons/optimized

# Or online
# Upload to https://tinypng.com
```

**Convert to WebP (Optional):**

```bash
# Install cwebp
brew install webp

# Convert all PNGs
for file in public/icons/*.png; do
  cwebp "$file" -o "${file%.png}.webp"
done
```

Then use picture element:

```html
<picture>
  <source srcset="/icons/slack.webp" type="image/webp" />
  <img src="/icons/slack.png" alt="Slack" width="56" height="56" />
</picture>
```

## Quick Command Reference

```bash
# Extract single icon from macOS app
sips -s format png /Applications/Slack.app/Contents/Resources/*.icns --out public/icons/slack.png
sips -Z 64 public/icons/slack.png

# Batch resize all icons
for file in public/icons/*.png; do sips -Z 64 "$file"; done

# Check icon sizes
file public/icons/*.png | grep -i dimensions

# Optimize with ImageOptim (if installed)
open -a ImageOptim public/icons/

# List all icons
ls -lh public/icons/
```

## Recommended Icon Sources

1. **macOS Apps** (Best quality, native look)

   - Extract directly from `/Applications/`
   - Free, high quality, consistent style

2. **Simple Icons** (https://simpleicons.org)

   - Brand logos (Slack, GitHub, etc.)
   - Free, SVG, consistent

3. **SF Symbols** (https://developer.apple.com/sf-symbols/)

   - Apple's official icon set
   - Perfect for macOS apps
   - Free for developers

4. **IconScout** (https://iconscout.com)

   - Professional quality
   - Consistent styles
   - Free & paid options

5. **Flaticon** (https://flaticon.com)
   - Huge library
   - Free with attribution
   - Consistent packs

## Done!

Once you've added real icons, your landing page will look significantly more professional and polished. The placeholder letters were just temporary—real app icons make a huge difference in perceived quality.

