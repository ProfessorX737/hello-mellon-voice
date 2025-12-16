# Keyboard Layout V4 - Horizontal Rows & Corner Action Lines

## Overview

Fixed the vertical stacking issue and simplified action lines to come from top corners only.

## Critical Fixes

### 1. Horizontal Layout (Was Broken!)

**Problem:**

- All keys were stacking vertically
- Shift, Z, Fn, ctrl, option all in a column
- Layout not respecting row structure

**Solution:**

- Added `.keyboard-row` wrapper divs
- Each row uses `display: flex; flex-direction: row;`
- Keys now properly sit side-by-side within rows

**HTML Structure:**

```html
<div class="keyboard-layout">
  <!-- Top row -->
  <div class="keyboard-row">
    <div class="key key-shift">shift</div>
    <div class="key key-z">Z</div>
  </div>

  <!-- Bottom row -->
  <div class="keyboard-row">
    <div class="key key-fn">Fn</div>
    <div class="key key-ctrl">ctrl</div>
    <div class="key key-option">⌥</div>
  </div>
</div>
```

**CSS:**

```css
.keyboard-row {
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
}
```

**Result:**

```
[Shift-----] [Z]       ← Horizontal
[Fn] [ctrl] [⌥]        ← Horizontal
```

### 2. Simplified Action Lines

**Changes:**

- ❌ Removed 4 lines (top, right, bottom, left)
- ✅ Added 2 lines (top-left corner, top-right corner)
- Made lines shorter (14-18px vs 18-30px)
- Anchored to top corners of Fn key

**Positioning:**

- **Left line**: `top: 2px, left: 8px`
- **Right line**: `top: 2px, right: 8px`

**Rotation:**

- **Left line**: -35° to -40° (angled outward)
- **Right line**: +35° to +40° (angled outward)

**Length:**

- Start: 14px
- Peak: 16px (at 86%)
- End: 18px (at 94%)

**Visual Effect:**

- Like two lightning bolts from corners
- Shorter and subtler
- More professional
- Less distracting

## Animation Details

### Left Corner Line

```css
@keyframes action-burst-left {
  0%,
  82%,
  100% {
    opacity: 0;
    height: 14px;
    transform: rotate(-35deg) translateY(0);
  }
  86% {
    opacity: 0.85;
    height: 16px;
    transform: rotate(-38deg) translateY(-2px);
  }
  94% {
    opacity: 0;
    height: 18px;
    transform: rotate(-40deg) translateY(-4px);
  }
}
```

**Behavior:**

1. Starts hidden (opacity 0)
2. Appears at 86% (when key presses)
3. Grows 14px → 18px
4. Rotates -35° → -40° (more outward)
5. Moves up 4px
6. Fades out

### Right Corner Line

```css
@keyframes action-burst-right {
  0%,
  82%,
  100% {
    opacity: 0;
    height: 14px;
    transform: rotate(35deg) translateY(0);
  }
  86% {
    opacity: 0.85;
    height: 16px;
    transform: rotate(38deg) translateY(-2px);
  }
  94% {
    opacity: 0;
    height: 18px;
    transform: rotate(40deg) translateY(-4px);
  }
}
```

**Behavior:**

- Mirror of left line
- Same timing and opacity
- Opposite rotation (+35° → +40°)
- Creates balanced burst effect

## Visual Comparison

### Before (V3)

```
shift         ← All stacked
Z             ← vertically
Fn            ← (broken!)
ctrl
⌥
```

With 4 long lines from all sides.

### After (V4)

```
[Shift-----] [Z]       ← Horizontal row
[Fn] [ctrl] [⌥]        ← Horizontal row
 ↖  ↗                  ← 2 short corner lines
```

With 2 short lines from top corners only.

## Technical Specifications

### Layout

- **Container**: 240px × 140px
- **Gap between keys**: 8px
- **Gap between rows**: 8px
- **Flex direction**: row (within each row)

### Action Lines

- **Width**: 2.5px
- **Length**: 14-18px (shorter)
- **Angle**: ±35° to ±40°
- **Position**: Top corners (2px from top, 8px from sides)
- **Opacity**: 0 → 0.85 → 0
- **Duration**: 12% of cycle (~300ms visible)

### Key Sizes (Desktop)

- **Shift**: 10px/24px padding, 100px min-width (rectangle)
- **Z**: 10px/16px padding, 48px min-width (square)
- **Fn**: 16px/24px padding, 20px font (focused)
- **ctrl**: 16px/24px padding, 75px min-width
- **Option**: 16px/20px padding, 50px min-width

## What Changed

### HTML

1. Added `<div class="keyboard-row">` wrappers
2. Grouped keys into proper rows
3. Changed action line classes: `line-1/2/3/4` → `line-left/right`

### CSS

1. Added `.keyboard-row` with flexbox row layout
2. Removed margin-right from individual keys
3. Simplified action lines to 2 animations
4. Repositioned lines to top corners
5. Made lines shorter and subtler
6. Updated rotation angles to point outward

## Files Changed

**`src/pages/index.astro`:**

- Added `.keyboard-row` divs in HTML
- Updated CSS for horizontal layout
- Simplified action lines to 2 corner lines
- Adjusted line positioning and animation
- No responsive changes needed (inherits layout)

## View Changes

Refresh **http://localhost:4321/** to see:

- ✅ Keys properly arranged in horizontal rows
- ✅ Shift + Z side by side (top row)
- ✅ Fn + ctrl + ⌥ side by side (bottom row)
- ✅ Short action lines from top corners only
- ✅ Clean, professional appearance
- ✅ Subtle burst effect on key press

---

**Result:** Keys now sit horizontally as intended, and the action lines are shorter, cleaner, and anchored to the top corners! ⚡️✨

