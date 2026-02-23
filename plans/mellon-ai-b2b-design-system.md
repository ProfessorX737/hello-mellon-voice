# Mellon AI B2B - Design System

## Brand Direction: "Warm Professional"

A sophisticated yet approachable aesthetic that balances enterprise credibility with human warmth. This direction positions Mellon AI as a trusted Australian partner—not just another tech vendor, but an extension of your team.

---

## Design Philosophy

**Core Idea**: "Your AI team, personally delivered"

- **Trust through warmth**: Avoid cold, sterile tech aesthetics
- **Professional without being corporate**: Human, conversational, accessible
- **Australian authenticity**: Local presence, personal service, no-nonsense reliability
- **Premium but approachable**: High-end feel without intimidation

---

## Color Palette

### Primary Colors
```
--color-bg-primary: #FAF9F7        /* Warm off-white - main background */
--color-bg-secondary: #F5F3EF      /* Slightly deeper warm gray */
--color-bg-tertiary: #EDE9E3       /* Card backgrounds, sections */
--color-bg-elevated: #FFFFFF       /* Pure white for pop */
```

### Neutral Scale
```
--color-warm-50: #FAF9F7
--color-warm-100: #F5F3EF
--color-warm-200: #E8E4DC
--color-warm-300: #D4CFC4
--color-warm-400: #A8A199
--color-warm-500: #7A756E
--color-warm-600: #5C5752
--color-warm-700: #3D3A36
--color-warm-800: #1F1D1B
--color-warm-900: #0D0C0B
```

### Accent Colors (Warm & Energetic)
```
--color-accent-primary: #D4854A    /* Terracotta/Amber - primary CTA */
--color-accent-secondary: #2D5A4C  /* Forest Green - trust, growth */
--color-accent-tertiary: #C9A227   /* Warm Gold - highlights, premium */
--color-accent-soft: #E8B4A3       /* Soft Coral - backgrounds, tags */
```

### Semantic Colors
```
--color-success: #2D5A4C
--color-warning: #C9A227
--color-error: #B5423F
--color-info: #4A6FA5
```

---

## Typography

### Font Families

**Display/Headlines**: `Playfair Display` (already in use)
- Elegant, editorial feel
- Use for major headlines and section titles
- Weights: 600, 700

**Body/UI**: `DM Sans` or `Inter` (but customized)
- Clean, warm, highly readable
- Use for body text, buttons, navigation
- Weights: 400, 500, 600, 700

**Accent/Quotes**: `Crimson Text` or `Source Serif Pro`
- For testimonials, quotes, editorial moments

### Type Scale
```
--font-hero: 4.5rem / 72px (Playfair Display, 700)
--font-h1: 3.5rem / 56px (Playfair Display, 600)
--font-h2: 2.5rem / 40px (Playfair Display, 600)
--font-h3: 1.75rem / 28px (DM Sans, 600)
--font-h4: 1.25rem / 20px (DM Sans, 600)
--font-body-large: 1.125rem / 18px (DM Sans, 400)
--font-body: 1rem / 16px (DM Sans, 400)
--font-small: 0.875rem / 14px (DM Sans, 400)
--font-caption: 0.75rem / 12px (DM Sans, 500)
```

### Typography Patterns
- **Headlines**: Tight letter-spacing (-0.02em), generous line-height (1.1-1.2)
- **Body**: Comfortable line-height (1.6-1.7)
- **Labels/Tags**: Uppercase, wide letter-spacing (0.05em), small size

---

## Spacing System

```
--space-xs: 4px
--space-sm: 8px
--space-md: 16px
--space-lg: 24px
--space-xl: 32px
--space-2xl: 48px
--space-3xl: 64px
--space-4xl: 96px
--space-5xl: 128px
```

### Section Spacing
- Hero padding: 160px top, 96px bottom
- Section padding: 96px vertical
- Card padding: 32px
- Component gaps: 24px-48px

---

## Border Radius

```
--radius-sm: 6px    /* Small buttons, tags */
--radius-md: 12px   /* Cards, inputs */
--radius-lg: 20px   /* Large cards, modals */
--radius-xl: 28px   /* Feature cards */
--radius-pill: 999px /* Buttons, tags */
--radius-full: 50%  /* Avatars, circles */
```

---

## Shadows (Soft & Warm)

```
--shadow-sm: 0 1px 2px rgba(61, 58, 54, 0.04)
--shadow-md: 0 4px 12px rgba(61, 58, 54, 0.08)
--shadow-lg: 0 8px 24px rgba(61, 58, 54, 0.10)
--shadow-xl: 0 16px 48px rgba(61, 58, 54, 0.12)
--shadow-glow: 0 0 40px rgba(212, 133, 74, 0.15)
```

---

## Visual Elements

### Cards
- Background: White or `--color-bg-elevated`
- Border: 1px solid `--color-warm-200`
- Border-radius: `--radius-lg` (20px)
- Shadow: `--shadow-md`
- Hover: Lift with `--shadow-lg`

### Buttons

**Primary Button**
- Background: `--color-accent-primary` (Terracotta)
- Text: White
- Padding: 16px 32px
- Border-radius: `--radius-pill`
- Font: 600 weight, 1rem
- Hover: Darken 10%, subtle lift

**Secondary Button**
- Background: Transparent
- Border: 2px solid `--color-warm-300`
- Text: `--color-warm-700`
- Hover: Background `--color-warm-100`

**Ghost Button**
- Background: Transparent
- Text: `--color-accent-primary`
- Hover: Background `--color-accent-soft` with low opacity

### Tags/Badges
- Background: `--color-accent-soft` (20% opacity)
- Text: `--color-accent-primary`
- Padding: 6px 12px
- Border-radius: `--radius-pill`
- Font: 500 weight, 0.75rem, uppercase, letter-spacing 0.05em

### Avatars (AI Team Members)
- Size: 80px-120px for featured, 48px for small
- Border-radius: `--radius-full`
- Border: 3px solid white
- Shadow: `--shadow-md`
- Style: Illustrated/3D rendered portraits (not photos)

---

## Animations & Interactions

### Page Load Sequence
1. Background fades in (300ms)
2. Navigation slides down (400ms, ease-out)
3. Hero content stagger reveals (100ms delay between elements)
4. Floating elements begin gentle motion

### Scroll Animations
- Elements fade up on scroll (translateY: 30px → 0, opacity: 0 → 1)
- Duration: 600ms
- Easing: cubic-bezier(0.16, 1, 0.3, 1)
- Stagger: 100ms between related elements

### Hover States
- Cards: translateY(-4px), shadow increase
- Buttons: Background darken, subtle scale(1.02)
- Links: Color transition, underline reveal
- Avatars: Subtle glow, scale(1.05)

### Micro-interactions
- Button clicks: Scale down briefly (0.98)
- Focus states: Ring with accent color
- Loading: Warm amber spinner

### Ambient Motion
- Gradient orbs: Slow drift (20s cycle)
- Floating shapes: Gentle bob (6s cycle)
- No jarring or fast movements—calm, professional

---

## Imagery Style

### AI Team Avatars
- Warm, approachable illustrated portraits
- Soft lighting, friendly expressions
- Consistent style across all team members
- Slight 3D depth, not flat illustrations
- Background: Soft gradient matching brand colors

### Icons
- Line style, 1.5-2px stroke
- Rounded caps and joins
- Consistent 24x24 base size
- Color: Inherit from text or accent

### Photography (if used)
- Warm, natural lighting
- Australian office/workplace settings
- Diverse, real people
- Slight desaturation for cohesion

---

## Layout Principles

### Container
- Max-width: 1200px
- Padding: 24px (mobile), 32px (tablet), 48px (desktop)

### Grid
- 12-column grid system
- Gutter: 24px
- Common patterns: 2-col, 3-col, 4-col

### Responsive Breakpoints
```
Mobile: < 640px
Tablet: 640px - 1024px
Desktop: 1024px - 1280px
Large: > 1280px
```

---

## Voice & Tone

### Brand Voice
- **Conversational**: Like talking to a knowledgeable friend
- **Confident**: Expert but not arrogant
- **Australian**: Direct, no-nonsense, trustworthy
- **Warm**: Human-first, not tech-first

### Copy Patterns
- Use "you" and "your team" frequently
- Lead with benefits, not features
- "We come to you" — emphasize personal service
- Avoid jargon unless explaining it
- Use contractions (we're, don't, can't)

### Example Phrases
- "Your AI team, ready to work"
- "We set everything up — in person or remote"
- "No lock-ins. No questions asked."
- "Built by developers who've worked at Atlassian"
- "Australian-based, privacy-first"

---

## Component Library

### AI Team Member Card
```
┌─────────────────────────────┐
│  ┌─────┐                    │
│  │ 👤  │  Name              │
│  └─────┘  Role             │
│         ─────────────────   │
│  • Skill 1                  │
│  • Skill 2                  │
│  • Skill 3                  │
│         ┌──────────────┐    │
│         │  Learn More  │    │
│         └──────────────┘    │
└─────────────────────────────┘
```

### Pricing Card
```
┌─────────────────────────────┐
│  MOST POPULAR               │
│                             │
│  Business                   │
│  $299/month                 │
│  Up to 5 team members       │
│                             │
│  ✓ Feature 1                │
│  ✓ Feature 2                │
│  ✓ Feature 3                │
│                             │
│  ┌─────────────────────┐    │
│  │  Start Free Trial   │    │
│  └─────────────────────┘    │
└─────────────────────────────┘
```

### Cost Comparison Row
```
┌──────────────────────────────────────────────┐
│  Role          Human        AI Equivalent    │
│  ─────────────────────────────────────────   │
│  EA         $75k/yr    →   $49/mo           │
│  [Bar showing 95% savings]                   │
└──────────────────────────────────────────────┘
```

---

## Accessibility

- Minimum contrast ratio: 4.5:1 for text
- Focus indicators visible on all interactive elements
- Reduced motion support for animations
- Semantic HTML structure
- Alt text for all images
- Keyboard navigation support

---

## File Structure

```
src/
├── components/
│   ├── ui/                    # Reusable UI components
│   │   ├── Button.astro
│   │   ├── Card.astro
│   │   ├── Badge.astro
│   │   ├── Avatar.astro
│   │   └── PriceTag.astro
│   ├── sections/              # Page sections
│   │   ├── HeroSection.astro
│   │   ├── AITeamSection.astro
│   │   ├── ServicesSection.astro
│   │   ├── ComparisonSection.astro
│   │   ├── PricingSection.astro
│   │   ├── TrustSection.astro
│   │   └── CTASection.astro
│   ├── Header.astro
│   └── Footer.astro
├── data/
│   ├── ai-team.ts            # AI worker personas
│   ├── pricing.ts            # Pricing tiers
│   └── services.ts           # Service offerings
├── styles/
│   ├── global.css            # Design system variables
│   └── animations.css        # Shared animations
└── pages/
    └── index.astro
```

---

## Implementation Notes

1. **Use CSS custom properties** for all design tokens
2. **Component-based architecture** for maintainability
3. **Progressive enhancement** for animations
4. **Optimize images** — use WebP with fallbacks
5. **Lazy load** below-fold sections
6. **Test on real devices** — especially mobile
