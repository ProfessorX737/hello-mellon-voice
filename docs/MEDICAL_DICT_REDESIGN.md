# Medical Dictionary Redesign

## Problem Statement

The original Medical Dictionary section felt like a marketing hero section rather than a tool component:

- ❌ Huge vertical padding and white space
- ❌ Center-aligned content (billboard style)
- ❌ Large decorative number without context
- ❌ No clear affordance or control
- ❌ Ambiguous mental model (Is it enabled? Is it an upsell?)

This broke the visual contract established by the Custom Dictionary section above it.

## Design Principle

> **Treat Medical Dictionary as a Module, not a Section**

The Medical Dictionary should feel like:

- A pre-built dictionary pack
- A plug-in or add-on
- A toggleable augmentation
- A settings panel option

## Solution

### Before (Marketing Hero Style)

```
┌─────────────────────────────────┐
│                                 │
│          [Large Icon]           │
│                                 │
│      Medical Dictionary         │
│                                 │
│          600,000+              │
│                                 │
│   Long marketing description    │
│                                 │
│    [Pill badge]                │
│                                 │
└─────────────────────────────────┘
```

### After (Compact Module Style)

```
┌──────────────────────────────────────────────────────────┐
│ [Icon]  Medical Dictionary  600,000+ clinical terms      │
│         Preloaded clinical terminology for healthcare    │
│                                                          │
│         • Includes UMLS, SNOMED CT, and ICD-10          │
│         • Pharmaceutical and anatomical terms            │    [Toggle]
│         ✓ Zero performance impact                        │  [Active]
└──────────────────────────────────────────────────────────┘
```

## Key Improvements

### 1. **Information Density**

- Matched the compact density of Custom Dictionary
- Removed theatrical vertical padding
- Left-aligned content (not center)
- Tight line height (1.3-1.4)

### 2. **Clear Affordance**

- Added toggle switch on the right
- "Active" label provides status feedback
- Makes it feel like a configurable option

### 3. **Specific, Confident Copy**

- Changed "600,000+" → "600,000+ clinical terms" (noun added)
- Changed vague "trusted sources" → specific "UMLS, SNOMED CT, ICD-10"
- Removed salesy language
- Added specific use case: "healthcare workflows"

### 4. **Visual Hierarchy**

- Icon + Title on same line (compact)
- Term count as inline metadata
- Subtitle provides context
- Bullet points show what's included
- Performance reassurance at bottom (matches Custom Dictionary)

### 5. **Consistent System Language**

- Both dictionaries now use similar patterns:
  - Title + metadata in parentheses/inline
  - Specific feature bullets
  - Performance reassurance
  - Tool-like affordances

### 6. **Section Reframing**

Changed section header from:

- "Built for Specialists, Designed for Precision"
- "Accurate transcription for professionals who demand it."

To:

- **"Dictionaries"**
- "Extend recognition accuracy with custom and pre-built dictionaries."

This reframes the entire section as a configuration area, not a feature showcase.

## Technical Implementation

### Layout

- Grid layout: `1fr auto` (content | toggle)
- Padding: `24-28px` (matches Custom Dictionary)
- Gap: `32px` between sections
- Left-aligned text throughout

### Toggle Component

- macOS/iOS style toggle switch
- Green (#34c759) when active
- Smooth 0.2s transitions
- Clear visual state

### Responsive Behavior

- Stack vertically on mobile/tablet
- Toggle moves below content
- Font sizes scale down appropriately
- Maintains density across breakpoints

## Strategic Impact

This design communicates:

- **"We are a precision tool, not a feature buffet."**
- Aligns with Mellon/Wispr positioning
- UX-over-features philosophy
- Professional, understated confidence

You're not _selling_ the Medical Dictionary.
You're _offering_ it.

## Future Extensibility

This pattern supports future dictionary packs:

```
Dictionaries
├─ Custom Dictionary (editable)
├─ Medical Dictionary (pre-built)
├─ Legal Dictionary (future)
├─ Technical Dictionary (future)
└─ [Add more...]
```

Each would follow the same compact, module-style layout.
