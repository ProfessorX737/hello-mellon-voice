# Keyboard Layout V5 - Uniform Key Heights & Bigger Action Lines

## Overview

Standardized all key heights and widths, plus made action lines much more visible.

## Key Changes

### 1. Uniform Key Heights ✅

**All keys now same height:**

- **Desktop**: 52px height
- **Tablet**: 44px height
- **Mobile**: 38px height

**Applied to:**

- Shift key
- Z key
- Fn key
- ctrl key
- option key

**CSS:**

```css
.key-shift,
.key-z,
.key-fn,
.key-ctrl,
.key-option {
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
}
```

### 2. Standardized Bottom Row Widths ✅

**Fn, ctrl, option all same width:**

- **Desktop**: 75px min-width
- **Tablet**: 65px min-width
- **Mobile**: 58px min-width

**Before:**

- Fn: varied padding
- ctrl: 75px
- option: 50px ❌ (different!)

**After:**

- Fn: 75px ✅
- ctrl: 75px ✅
- option: 75px ✅

### 3. Bigger Action Lines ⚡️

**Dramatically increased size:**

**Desktop:**

- Start: 24px (was 14px)
- Peak: 30px (was 16px)
- End: 36px (was 18px)
- Width: 3px (was 2.5px)
- **~71% larger!**

**Tablet:**

- Start: 20px
- Peak: 26px
- End: 32px
- Width: 2.5px

**Mobile:**

- Start: 18px
- Peak: 24px
- End: 28px
- Width: 2px

**Positioning:**

- Top: -2px (slightly above key)
- Left line: 6px from left edge
- Right line: 6px from right edge
- Rotation: ±35° → ±45° (more dramatic angle)

### 4. Visual Comparison

**Before (V4):**

```
[Shift-----] [Z]
[Fn] [ctrl--] [⌥-]  ← Different widths
 ↖↗                 ← Tiny lines (14-18px)
```

**After (V5):**

```
[Shift-----] [Z]   ← All same height
[Fn] [ctrl] [⌥]    ← All same width & height
  ↖  ↗             ← Bigger lines (24-36px)
```

## Detailed Specifications

### Desktop (Default)

**All Keys:**

- Height: 52px
- Base padding: 0 20px
- Border-radius: 6-7px

**Specific Keys:**

- **Shift**: 100px min-width
- **Z**: 52px min-width (square-ish)
- **Fn**: 75px min-width, 20px font
- **ctrl**: 75px min-width, 12px font
- **option**: 75px min-width, 18px font

**Action Lines:**

- Initial: 24px tall, 3px wide
- Peak (86%): 30px tall
- Final (94%): 36px tall
- Rotation: -35° to -45° (left), +35° to +45° (right)
- Move up: 6px total
- Opacity: 0 → 0.85 → 0

### Tablet (768px - 968px)

**All Keys:**

- Height: 44px
- Base padding: 0 16px

**Specific Keys:**

- **Shift**: 85px min-width
- **Z**: 44px min-width
- **Fn**: 65px min-width, 18px font
- **ctrl**: 65px min-width
- **option**: 65px min-width, 16px font

**Action Lines:**

- Initial: 20px tall, 2.5px wide
- Peak: 26px tall
- Final: 32px tall

### Mobile (< 480px)

**All Keys:**

- Height: 38px
- Base padding: 0 14px

**Specific Keys:**

- **Shift**: 70px min-width
- **Z**: 38px min-width
- **Fn**: 58px min-width, 16px font
- **ctrl**: 58px min-width
- **option**: 58px min-width, 14px font

**Action Lines:**

- Initial: 18px tall, 2px wide
- Peak: 24px tall
- Final: 28px tall

## Animation Enhancements

### Action Line Timing

**Synchronized with key press:**

- 0-82%: Hidden (resting)
- 86%: Key presses + lines appear
- 94%: Lines fade out
- 100%: Reset

**Rotation Animation:**

- Starts: ±35°
- Middle: ±40°
- Ends: ±45°
- Creates outward burst effect

**Height Growth:**

- Desktop: 24px → 36px (50% growth)
- Tablet: 20px → 32px (60% growth)
- Mobile: 18px → 28px (56% growth)

**Vertical Movement:**

- Starts: 0px offset
- Middle: -3px up
- Ends: -6px up
- Enhances burst effect

## CSS Structure

### Base Uniformity

```css
.key-shift,
.key-z,
.key-fn,
.key-ctrl,
.key-option {
  height: 52px; /* Same height */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px; /* Same padding */
}
```

### Width Standardization

```css
.key-fn,
.key-ctrl,
.key-option {
  min-width: 75px; /* All bottom row same */
}
```

### Action Line Size

```css
.action-line.line-left,
.action-line.line-right {
  height: 24px; /* Bigger starting size */
  width: 3px; /* Thicker lines */
  /* ... */
}

@keyframes action-burst-left {
  /* ... */
  86% {
    height: 30px; /* Bigger peak */
  }
  94% {
    height: 36px; /* Bigger end */
  }
}
```

## Visual Improvements

### Consistency

- ✅ All keys aligned perfectly
- ✅ Professional, uniform appearance
- ✅ No visual oddities or misalignment
- ✅ Clean grid layout

### Action Lines

- ✅ Much more visible (71% larger)
- ✅ Dynamic burst effect
- ✅ Professional but impactful
- ✅ Clear comic-book style
- ✅ Synchronized with key press

### Hierarchy

- **Fn key**: Black, stands out
- **Other keys**: Light gray, uniform
- **Action lines**: Brief but dramatic

## Files Changed

**`src/pages/index.astro`:**

- Standardized all key heights to 52px (desktop)
- Made Fn/ctrl/option same width (75px)
- Increased action line size (24-36px)
- Updated responsive breakpoints
- Enhanced rotation angles (±45°)
- Added vertical movement to burst

## View Changes

Refresh **http://localhost:4321/** to see:

- ✅ All keys same height
- ✅ Fn, ctrl, option same width
- ✅ Much bigger, more visible action lines
- ✅ Dramatic corner burst effect
- ✅ Professional, uniform keyboard layout
- ✅ Clean alignment and spacing

---

**Result:** The keyboard now has perfect uniformity with all keys matching in height, bottom row matching in width, and action lines that are dramatically more visible! 💥✨

