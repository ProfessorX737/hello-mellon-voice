# Keyboard Mockup V2 - Enhanced with Context & Action Lines

## Overview

Updated the Step 1 keyboard mockup to show realistic keyboard context with the Fn key in focus, plus comic-book style action lines on press.

## Changes Made

### 1. Realistic Keyboard Layout

**Structure:**
- Fn key positioned bottom-left (main focus)
- Context keys around it: Control, Option, Shift, Z
- Layout uses absolute positioning for realistic keyboard feel

**Positioning:**
```
Control   Option
    Shift         Z
        [Fn]
```

### 2. Context Keys (De-emphasized)

**Style:**
- Light gray background (#F5F5F5)
- Muted text color
- Smaller size (13px font)
- Lower opacity (0.6)
- Subtle shadows
- Can overflow/clip outside box bounds

**Keys:**
- **Control** - Top left (partially clips)
- **Option** - Top center-left
- **Shift** - Middle left (clips more)
- **Z** - Middle right (can clip)

### 3. Fn Key (Main Focus)

**Size & Position:**
- Positioned: `bottom: 20px, left: 50px`
- Smaller than before: 24px font (was 28px)
- Padding: 20px/32px (more compact)
- Still has 3D depth: 5px shadow
- Black background, white text

**Animation:**
- Presses down 3px
- Shadow reduces 5px → 2px
- 2.5s cycle (was 2s)
- Timing: 82% rest, 86-94% pressed

### 4. Comic Book Action Lines ⭐ NEW

**Concept:**
- 4 lines burst out from Fn key when pressed
- Brief appearance (only during press)
- Dynamic angles for comic effect

**Line Positions:**
- **Line 1**: Top, slightly left (-10deg rotation)
- **Line 2**: Top-right (20deg rotation)
- **Line 3**: Bottom, slightly right (8deg rotation)
- **Line 4**: Left (-25deg rotation)

**Animation Details:**
```css
@keyframes action-burst {
  0%, 82%: Hidden (opacity 0)
  86%: Burst out (opacity 0.8, scale 1)
  90%: Fade & expand (opacity 0.4, scale 1.1)
  94%: Gone (opacity 0, scale 1.2)
  100%: Reset
}
```

**Timing:**
- Appears at 86% (same as key press)
- Lasts only 8% of cycle (~200ms)
- Scales from 0.5 → 1.2
- Moves up slightly (-4px) as fades
- Staggered delays (0s, 0.01s, 0.02s, 0.04s)

**Visual Effect:**
- Creates "POW!" comic book impact
- Brief but noticeable
- Professional, not cheesy
- Synced perfectly with key press

### 5. Overflow Handling

**Box Style:**
```css
.step-visual {
  overflow: hidden;  /* Allows clipping */
}
```

**Result:**
- Context keys can extend beyond box
- Gets clipped naturally at edges
- Creates realistic keyboard snippet effect
- Keeps focus on Fn key

## Technical Specifications

### Layout Dimensions
- Container: 280px × 180px
- Fn key: ~90px × 64px
- Context keys: ~60px × 34px (varied)

### Colors
- **Fn key**: #212121 (dark gray/black)
- **Context keys**: #F5F5F5 (light gray)
- **Action lines**: #212121 (same as Fn key)
- **Borders**: #E0E0E0 (subtle gray)

### Z-Index Layers
```
Layer 1: Context keys (z-index: auto)
Layer 2: Fn key (z-index: 2)
Layer 3: Action lines (inside Fn key)
```

### Animation Sync
All animations run on same 2.5s cycle:
- **Key press**: 82% → 94%
- **Action lines**: 86% → 94%
- Lines appear when key is down
- Both reset together

## Responsive Adjustments

**Desktop (> 968px):**
- Layout: 280px × 180px
- Fn key: 24px font, 20px/32px padding
- Action lines: 3px wide, 20-25px tall

**Tablet (768px - 968px):**
- Layout: 240px × 160px
- Fn key: 22px font, 18px/28px padding
- Action lines: 2px wide, 18-20px tall

**Mobile (< 480px):**
- Layout: 200px × 140px
- Fn key: 20px font, 14px/24px padding
- Action lines: 2px wide, 15-18px tall
- Shadow reduced to 4px depth

## Visual Effects Summary

### Before
- Single large Fn key
- Center of box
- Simple press animation
- No context

### After
- Realistic keyboard snippet
- Fn key bottom-left
- Context keys (Control, Option, Shift, Z)
- Comic book action lines on press
- Keys can clip at edges
- More dynamic and interesting

## Action Lines Details

**Why 4 lines?**
- Creates balanced burst effect
- Not too simple (2 lines)
- Not too busy (6+ lines)
- Comic books typically use 3-5

**Why these angles?**
- Varied rotation creates energy
- Not perfectly symmetric (more natural)
- Spread around key (top, right, bottom, left)
- Slight randomness in angles (-25°, -10°, 8°, 20°)

**Why brief duration?**
- Too long = distracting
- Too short = miss it
- ~200ms = perfect "impact" moment
- Synced with key press for realism

## File Changes

**`src/pages/index.astro`:**
- Updated Step 1 HTML structure
- Added context keys (Control, Option, Shift, Z)
- Added action-lines container with 4 lines
- Completely rewrote keyboard CSS
- Added action-burst animation
- Updated responsive styles

## View Changes

Refresh **http://localhost:4321/** to see:
- ✅ Realistic keyboard layout
- ✅ Fn key bottom-left (smaller, focused)
- ✅ Context keys around it (de-emphasized)
- ✅ Keys clip at box edges
- ✅ Comic book action lines burst when pressed
- ✅ Smooth, professional animation

---

**Result:** The keyboard mockup now looks like a realistic snippet of a keyboard with the Fn key in focus, plus a fun comic-book style "POW!" effect when pressed! 🎉💥


