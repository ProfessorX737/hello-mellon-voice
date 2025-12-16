# macOS-Style Blockquote Design

## ✅ Implementation Complete

Following authentic macOS design patterns from the Swift/UIKit guidance you provided.

### Design Specifications

#### **Border**

- **Width**: 3px (macOS standard: 3-4pt)
- **Color**: `rgba(brown-600, 0.15)` - quaternary grey (very subtle)
- **Left-aligned**: Classic blockquote pattern

#### **Background**

- **Color**: `rgba(brown-600, 0.03)` - controlBackgroundColor equivalent
- **Very subtle**: Light grey fill, barely visible
- **Purpose**: Adds depth without overwhelming

#### **Corner Radius**

- **8px**: Matches macOS buttons and control style
- **Subtle roundness**: Not too sharp, not too round

#### **Padding**

- **16px vertical, 12px horizontal**: macOS standard (12-16pt)
- **Breathing room**: Generous but not excessive
- **Follows Apple's spacing guidelines**

#### **Typography**

- **Font**: SF Pro (via `-apple-system`)
- **Size**: 16px (14-16pt body/callout range)
- **Weight**: 400 (regular, not bold)
- **Style**: Italic (adds emphasis, traditional for quotes)
- **Line height**: 1.65 (includes +2pt line spacing)
- **Color**: `var(--color-text-secondary)` - .secondary grey

## Correction Positioning Strategy

### Two Different Positions

**First Line (Aaron):**

- Correction appears **ABOVE** the strikethrough
- Position: `top: -28px`
- Arrow points **DOWN** to the error
- Clear association before text wraps

**Wrapped Line (Mellon):**

- Correction appears **BELOW** the strikethrough
- Position: `bottom: -28px`
- Arrow points **UP** to the error
- Clearer when text has already wrapped

### Why This Works

```
        Aeron          ← Correction above
          ↓
"Hey, Aaron, have      ← First line
 you tried the Melon   ← Wrapped line
          ↑
        Mellon         ← Correction below
 app?"
```

**Benefits:**

- First correction doesn't interfere with second line
- Second correction doesn't interfere with wrapped text
- Clear visual hierarchy
- Natural reading flow

## CSS Implementation

### macOS Blockquote Style

```css
.correction-example-card {
  border-left: 3px solid rgba(var(--color-brown-600-rgb), 0.15);
  padding: 16px 12px;
  background-color: rgba(var(--color-brown-600-rgb), 0.03);
  border-radius: 8px;
}
```

### macOS Typography

```css
.example-text {
  font-size: 16px;
  line-height: 1.65; /* +2pt line spacing */
  color: var(--color-text-secondary);
  font-weight: 400;
  font-style: italic;
}
```

### Dual Correction System

```css
/* Top correction (Aaron) */
.correction-top {
  top: -28px;
}
.correction-top::after {
  bottom: -4px;
  border-top: 4px solid #22c55e; /* Arrow down */
}

/* Bottom correction (Mellon) */
.correction-bottom {
  bottom: -28px;
}
.correction-bottom::after {
  top: -4px;
  border-bottom: 4px solid #22c55e; /* Arrow up */
}
```

## Responsive Behavior

### Desktop (Default)

- Border: 3px
- Padding: 16px × 12px
- Font: 16px
- Corrections: ±28px from text

### Tablet (< 768px)

- Border: 3px
- Padding: 14px × 12px
- Font: 15px
- Corrections: ±26px from text

### Mobile (< 480px)

- Border: 3px
- Padding: 12px × 10px
- Font: 14px
- Corrections: ±24px from text

## macOS Design Principles Applied

### 1. **Semantic Colors**

Following macOS semantic color system:

- **Border**: Quaternary grey (4th tier, very subtle)
- **Text**: Secondary grey (readable but de-emphasized)
- **Background**: Control background (subtle fill)

### 2. **SF Pro Typography**

Native system font automatically:

- Responds to Dynamic Type
- Respects accessibility settings
- Matches macOS UI patterns
- Professional, familiar feel

### 3. **Subtle Emphasis**

macOS style is about restraint:

- Thin border (3px, not 5px)
- Subtle background (3% opacity)
- Gentle corner radius (8px)
- No heavy shadows or effects

### 4. **Italic for Quotes**

Classic editorial pattern:

- Distinguishes quote from body text
- Adds subtle emphasis
- Traditional typography convention
- Pairs nicely with border

### 5. **Generous Spacing**

Apple's spacing philosophy:

- 12-16pt padding (not cramped)
- +2pt line spacing (readability)
- Breathing room around content
- Comfortable reading experience

## Visual Comparison

### Before (Web-Style)

```
┃  Bold 4px border
┃  26px text
┃  Heavy contrast
┃  No background
```

### After (macOS-Style)

```
│  Subtle 3px border
│  16px italic text
│  Gentle grey tones
│  Light background fill
│  8px corner radius
```

## Design Rationale

### Why Italic?

- **Traditional**: Quotes are often italic in print
- **Distinction**: Separates from body text
- **Emphasis**: Adds subtle weight without boldness
- **macOS Pattern**: Common in Apple documentation

### Why Smaller Text?

- **16px vs 26px**: Quotes shouldn't overpower
- **Readable**: Still comfortable to read
- **Hierarchy**: Secondary content, not headline
- **Native**: Matches macOS body text size

### Why Subtle Colors?

- **Apple Aesthetic**: Restraint and elegance
- **Semantic**: Adapts to light/dark mode
- **Accessible**: Meets contrast requirements
- **Professional**: Sophisticated, not flashy

### Why Light Background?

- **Depth**: Subtle separation from page
- **macOS Pattern**: controlBackgroundColor standard
- **Readable**: Doesn't distract, just defines
- **Modern**: Flat design with subtle depth

## Accessibility

✅ **Color Contrast**: Secondary grey meets WCAG standards
✅ **Font Size**: 16px is comfortable for reading
✅ **Line Spacing**: Enhanced for readability
✅ **Semantic HTML**: Proper structure maintained
✅ **Responsive**: Adjusts for small screens

## Browser Compatibility

✅ **border-left with rgba**: Universal
✅ **background-color rgba**: Universal
✅ **border-radius**: Universal
✅ **font-style: italic**: Universal
✅ **Dual positioning**: Universal

## Result

The blockquote now follows **authentic macOS design patterns**:

1. ✅ **3px subtle border** (quaternary grey)
2. ✅ **Light background fill** (controlBackgroundColor)
3. ✅ **8px corner radius** (macOS control style)
4. ✅ **16px italic text** (SF Pro body/callout)
5. ✅ **Secondary grey color** (semantic system grey)
6. ✅ **12-16px padding** (generous spacing)
7. ✅ **+2pt line spacing** (readability)
8. ✅ **Smart correction positioning** (above for first line, below for wrapped)

This creates a **native macOS feel** that's:

- Professional and polished
- Familiar to Mac users
- Accessible and readable
- Responsive and adaptive
- Elegant and restrained

Perfect for showcasing corrections in a way that feels like a natural part of the macOS ecosystem!
