# Professionals Section - Visual Guide

## Layout Overview

```
┌─────────────────────────────────────────────────────────────┐
│                   Built for Specialists,                    │
│                  Designed for Precision                     │
│        Accurate transcription for professionals who         │
│                        demand it.                           │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                   MEDICAL DICTIONARY                        │
│                         📄                                  │
│                      600,000+                               │
│  Pre-loaded medical terms from trusted sources including    │
│              UMLS, SNOMED CT, and ICD-10                    │
│          ✓ Zero impact on processing speed                 │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  CUSTOM DICTIONARY DEMO (Split Layout)                      │
│                                                             │
│  ┌──────────────────────┬──────────────────────────────┐  │
│  │ LEFT SIDE:           │ RIGHT SIDE:                   │  │
│  │                      │                               │  │
│  │ Custom Dictionary    │ EXAMPLE IN ACTION             │  │
│  │ (Unlimited Words)    │                               │  │
│  │                      │ ┌─────────────────────────┐  │  │
│  │ [🔍 Search or add... │ │         Aaron           │  │  │
│  │                      │ │           ↓             │  │  │
│  │ ┌──────────────────┐ │ │  Hey, Aeron, have you   │  │  │
│  │ │ Aaron  Mellon    │ │ │                         │  │  │
│  │ │ Dr. Sarah Chen   │ │ │         Mellon          │  │  │
│  │ │ methylprednisol..│ │ │           ↓             │  │  │
│  │ │ Cardiovascular.. │ │ │  tried the Melon app?   │  │  │
│  │ │ albuterol        │ │ │                         │  │  │
│  │ │ Patient ID-4782  │ │ └─────────────────────────┘  │  │
│  │ │ ipratropium      │ │                               │  │
│  │ └──────────────────┘ │ Custom terms are             │  │
│  │                      │ automatically recognized      │  │
│  │ ✓ Instant recogn... │ and corrected                 │  │
│  └──────────────────────┴──────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  MEDICAL PROFESSIONALS (Scrolling Right to Left)            │
│  ←←←  [Medical Professionals] [General Practitioners]       │
│       [Cardiologists] [Surgeons] [Psychiatrists]...  ←←←    │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  BEYOND MEDICINE (Scrolling Left to Right)                  │
│  →→→  [Authors and Writers] [Journalists] [Academics]       │
│       [Researchers] [Developers] [Lawyers]...  →→→          │
└─────────────────────────────────────────────────────────────┘
```

## Key Visual Elements

### Correction Example Detail

```
    ┌─────────┐
    │  Aaron  │  ← Green bubble (correction)
    └────┬────┘
         ↓ Small arrow
     Aeron      ← Red strikethrough (error)
     ~~~~~
```

### Dictionary Terms Pills

```
┌───────────────────────────────────────────┐
│  ┌────────┐ ┌────────┐ ┌────────────────┐│
│  │ Aaron  │ │ Mellon │ │ Dr. Sarah Chen ││
│  └────────┘ └────────┘ └────────────────┘│
│  ┌─────────────────────┐ ┌────────────┐  │
│  │methylprednisolone   │ │ albuterol  │  │
│  └─────────────────────┘ └────────────┘  │
│                                           │
│  White pills with gray borders            │
│  Wrapped automatically when too wide      │
└───────────────────────────────────────────┘
```

### Search Bar Mockup

```
┌──────────────────────────────────────────┐
│ 🔍  Search or add new term...            │
└──────────────────────────────────────────┘
  ↑
  Search icon, gray text placeholder
  Looks interactive but is static
```

## Color Scheme

### Medical Dictionary Card

- Background: White (`#ffffff`)
- Border: Light gray (`#eeeeee`)
- Text: Dark gray/black
- Badge: Light gray background

### Custom Dictionary Demo

- **Left Side:**
  - Search bar: Light gray background, darker on hover
  - Dictionary terms: White pills, gray borders
  - Terms background: Very light gray
- **Right Side:**
  - Example box: Light gray background
  - Error strikethrough: Red (`#ef4444`)
  - Correction bubble: Green (`#22c55e`)
  - Correction text: White

### Profession Pills

- Regular: White background, gray border, dark text
- Featured: Black background, white text

## Responsive Transformations

### Desktop (> 968px)

```
┌────────────────┬────────────────┐
│   Dictionary   │    Example     │
│     Terms      │   in Action    │
└────────────────┴────────────────┘
```

### Tablet (< 968px)

```
┌──────────────────────────────────┐
│        Dictionary Terms           │
└──────────────────────────────────┘
┌──────────────────────────────────┐
│        Example in Action          │
└──────────────────────────────────┘
```

### Mobile (< 480px)

- All text sizes reduced
- Tighter spacing
- Smaller correction bubbles
- Compact dictionary pills

## Animation Details

### Profession Rows

- **Medical Row**: Moves right to left at 30s per loop
- **Beyond Medicine Row**: Moves left to right at 25s per loop
- Seamless infinite loops with duplicated content
- Gradient fade masks on both edges

### Hover States

- Dictionary pills: Border darkens, subtle shadow appears
- Search bar: Border darkens, background turns white
- Profession pills: Lift up 2px, shadow appears

## Typography Hierarchy

1. **Section Title**: 40px, bold, dark
2. **Section Subtitle**: 18px, medium gray
3. **Card Titles**: 22-24px, semibold
4. **Stat Numbers**: 32px, bold
5. **Body Text**: 15px, regular
6. **Example Text**: 20px, medium weight
7. **Correction Bubbles**: 14px, bold, white on green
8. **Dictionary Pills**: 13px, medium
9. **Captions**: 13px, italic, gray

## Spacing System

- Section padding: 96px vertical (`--space-4xl`)
- Card padding: 48px (`--space-3xl`)
- Between elements: 24px (`--space-lg`)
- Inside pills: 8px × 24px (`--space-sm` × `--space-lg`)
- Correction bubble: 4px × 8px

## Shadow System

- **Subtle**: Cards at rest
- **Light**: Pills on hover
- **Medium**: Cards on hover
- No heavy shadows (keeps design clean)

## Design Philosophy

1. **Clarity**: Each element has clear purpose
2. **Authenticity**: Mockups look like real app interface
3. **Demonstration**: Show actual use case, not abstract concept
4. **Professionalism**: Medical context with real drug names
5. **Accessibility**: High contrast, clear hierarchy
6. **Responsiveness**: Graceful degradation on smaller screens

## Success Metrics

This design should help users:

- ✅ Understand what Custom Dictionary does in < 5 seconds
- ✅ Imagine their own use cases immediately
- ✅ Feel confident about the feature's value
- ✅ See concrete examples of corrections in action
- ✅ Recognize the professional/medical focus
