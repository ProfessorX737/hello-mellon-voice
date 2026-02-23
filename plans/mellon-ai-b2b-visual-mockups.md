# Mellon AI B2B - Visual Mockup Descriptions

## Overview

Since we're working with code, these are detailed visual descriptions that guide the implementation. Each section is described with layout, colors, typography, and interactions.

---

## Section 1: Header/Navigation

### Layout
- Fixed position, full width
- Height: 72px
- Background: Transparent → rgba(250, 249, 247, 0.9) on scroll
- Backdrop blur on scroll: 12px
- Border-bottom on scroll: 1px solid var(--color-warm-200)

### Content Structure
```
[Logo]                    [Nav Links]                    [CTA Button]
Mellon AI                 How It Works • AI Team        Book a Call
                          Pricing • FAQ
```

### Logo
- Icon: Stylized "M" or abstract team icon
- Text: "Mellon AI" in DM Sans, 600 weight
- Color: var(--color-warm-800)

### Nav Links
- Font: DM Sans, 500 weight, 14px
- Color: var(--color-warm-600)
- Hover: var(--color-accent-primary)
- Spacing: 32px between items

### CTA Button
- Background: var(--color-accent-primary)
- Text: White, 600 weight
- Padding: 10px 20px
- Border-radius: pill

### Mobile
- Hamburger icon (3 lines)
- Full-screen overlay menu
- Large tap targets (48px min)

---

## Section 2: Hero Section

### Background
- Base: var(--color-bg-primary) #FAF9F7
- Subtle gradient mesh in corners:
  - Top-right: Soft coral (#E8B4A3) at 10% opacity
  - Bottom-left: Soft gold (#C9A227) at 8% opacity
- Grain texture overlay at 3% opacity

### Layout (Desktop)
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  [Australian-Based AI Team]                                 │
│                                                             │
│  Hire an AI Team for                                        │
│  Less Than One Employee                                     │
│                                                             │
│  Get a full team of AI workers — executive                  │
│  assistants, marketers, accountants, and more...            │
│                                                             │
│  ✓ Free 30-day trial  ✓ No credit card  ✓ Cancel anytime   │
│                                                             │
│  [Book Your Free Setup Call]  [See How Much You'll Save]   │
│                                                             │
│                                    ┌─────────────────────┐  │
│                                    │   👤 👤 👤          │  │
│                                    │  👤  👤  👤         │  │
│                                    │   (floating)        │  │
│                                    └─────────────────────┘  │
│                                                             │
│                          ↓                                  │
└─────────────────────────────────────────────────────────────┘
```

### Left Column (60%)

**Badge**
- Background: rgba(212, 133, 74, 0.1)
- Border: 1px solid rgba(212, 133, 74, 0.2)
- Text: var(--color-accent-primary)
- Font: 12px uppercase, 600 weight, letter-spacing 0.05em
- Padding: 6px 12px
- Border-radius: pill
- Icon: Small Australian flag emoji or icon before text

**Headline**
- Font: Playfair Display, 700 weight
- Size: 56px (desktop), 40px (mobile)
- Color: var(--color-warm-800)
- Line-height: 1.1
- Letter-spacing: -0.02em
- Max-width: 600px

**Subheadline**
- Font: DM Sans, 400 weight
- Size: 20px
- Color: var(--color-warm-600)
- Line-height: 1.6
- Max-width: 520px
- Margin-top: 24px

**Trust Badges**
- Horizontal row of 3 items
- Icon + text format
- Icon: Checkmark in circle, var(--color-success)
- Text: 14px, var(--color-warm-500)
- Spacing: 24px between items

**CTA Group**
- Primary button: Large, terracotta
- Secondary button: Ghost style, "See How Much You'll Save"
- Gap: 16px between buttons
- Margin-top: 32px

### Right Column (40%)

**AI Team Cluster**
- 6 avatars arranged in organic cluster
- Sizes vary: 80px, 100px, 120px
- Overlapping slightly (negative margins)
- Floating animation (gentle bob, 6s cycle)
- Subtle shadow under each

**Avatar Styling**
- Circular (border-radius: 50%)
- Border: 3px solid white
- Shadow: 0 4px 20px rgba(0,0,0,0.1)
- Background: Gradient unique to each team member

**Decorative Elements**
- Soft orbs behind avatars
- Dotted pattern (subtle)
- Connecting lines between avatars (faint)

### Scroll Indicator
- Position: Bottom center
- Icon: Chevron down
- Animation: Bounce (2s infinite)
- Color: var(--color-warm-400)

---

## Section 3: AI Team Section

### Background
- Color: var(--color-bg-secondary) #F5F3EF
- Subtle top border: 1px solid var(--color-warm-200)

### Section Header
- Badge: "YOUR AI TEAM" (uppercase, small)
- Title: "Meet Your New Team" (Playfair, 48px)
- Subtitle: Description text (DM Sans, 18px, warm-600)
- All centered

### Team Grid
```
┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│    👤       │  │    👤       │  │    👤       │
│   Emma      │  │   Marcus    │  │   Sophie    │
│   EA        │  │  Marketing  │  │   Social    │
│             │  │             │  │             │
│ • Skill 1   │  │ • Skill 1   │  │ • Skill 1   │
│ • Skill 2   │  │ • Skill 2   │  │ • Skill 2   │
│ • Skill 3   │  │ • Skill 3   │  │ • Skill 3   │
└─────────────┘  └─────────────┘  └─────────────┘

┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│    👤       │  │    👤       │  │    👤       │
│   James     │  │   Olivia    │  │    Alex     │
│    SEO      │  │  Bookkeeper │  │    Coach    │
│             │  │             │  │             │
│ • Skill 1   │  │ • Skill 1   │  │ • Skill 1   │
│ • Skill 2   │  │ • Skill 2   │  │ • Skill 2   │
│ • Skill 3   │  │ • Skill 3   │  │ • Skill 3   │
└─────────────┘  └─────────────┘  └─────────────┘
```

### Team Member Card

**Structure**
- Background: White
- Border: 1px solid var(--color-warm-200)
- Border-radius: 20px
- Padding: 32px
- Shadow: 0 4px 12px rgba(0,0,0,0.04)

**Avatar Area**
- Size: 100px
- Centered at top
- Unique gradient background per member:
  - Emma: Coral to peach
  - Marcus: Blue to teal
  - Sophie: Pink to rose
  - James: Green to mint
  - Olivia: Gold to amber
  - Alex: Purple to lavender

**Name**
- Font: DM Sans, 600 weight, 20px
- Color: var(--color-warm-800)
- Centered

**Role**
- Font: DM Sans, 500 weight, 14px
- Color: var(--color-accent-primary)
- Uppercase, letter-spacing 0.05em
- Centered

**Tagline**
- Font: DM Sans, 400 weight, 14px, italic
- Color: var(--color-warm-500)
- Centered
- Margin: 8px 0 16px

**Skills List**
- Bullet points (•)
- Font: 14px
- Color: var(--color-warm-600)
- Spacing: 8px between items

**Hover State**
- Transform: translateY(-8px)
- Shadow: 0 12px 32px rgba(0,0,0,0.08)
- Transition: 300ms ease

---

## Section 4: How It Works

### Background
- White

### Section Header
- Left-aligned
- Title: "Set Up in 3 Simple Steps"
- Subtitle: Brief description

### Steps Layout
```
┌──────────┐         ┌──────────┐         ┌──────────┐
│    1     │────────│    2     │────────│    3     │
│   📅     │   ──   │   🔧     │   ──   │   🚀     │
│  Book    │        │  Build   │        │  Start   │
│  Your    │        │  Your    │        │  Working │
│  Call    │        │  Team    │        │          │
└──────────┘         └──────────┘         └──────────┘
```

### Step Card
- Background: var(--color-bg-primary)
- Border-radius: 20px
- Padding: 40px
- Text-align: center

**Number Badge**
- Size: 48px circle
- Background: var(--color-accent-primary)
- Color: White
- Font: 600 weight, 20px
- Position: Top center, slightly overlapping card

**Icon**
- Size: 48px
- Color: var(--color-accent-primary)
- Margin: 24px 0

**Title**
- Font: DM Sans, 600 weight, 20px
- Color: var(--color-warm-800)

**Description**
- Font: 16px
- Color: var(--color-warm-600)
- Line-height: 1.6

### Connecting Line (Desktop)
- Horizontal line between cards
- Color: var(--color-warm-300)
- Dashed or solid
- Animated draw on scroll

### Physical Setup Callout
```
┌─────────────────────────────────────────────────────────────┐
│  🏢  Want us in person?                                     │
│                                                             │
│  We offer on-site setup across Australia's east coast.      │
│  Same price, just add travel costs.                         │
│                                                             │
│  [Sydney] [Melbourne] [Brisbane]                           │
└─────────────────────────────────────────────────────────────┘
```

- Background: var(--color-accent-secondary) at 8% opacity
- Border: 1px solid var(--color-accent-secondary) at 20% opacity
- Border-radius: 16px
- Padding: 24px 32px
- Margin-top: 48px

---

## Section 5: Services Section

### Background
- var(--color-bg-primary) #FAF9F7

### Layout
- Tabs at top
- Content area below

### Tabs
```
[Administrative] [Marketing] [Financial] [Strategic] [Technical]
```

- Horizontal scroll on mobile
- Active tab: Background white, shadow
- Inactive: Transparent
- Border-radius: pill
- Padding: 12px 24px

### Feature Grid (per tab)
```
┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
│  📧             │ │  📅             │ │  📝             │
│  Email          │ │  Calendar       │ │  Meeting        │
│  Management     │ │  Scheduling     │ │  Notes          │
│                 │ │                 │ │                 │
│  We handle      │ │  Never miss     │ │  Action items   │
│  your inbox...  │ │  a meeting...   │ │  captured...    │
└─────────────────┘ └─────────────────┘ └─────────────────┘
```

### Feature Card
- Background: White
- Border: 1px solid var(--color-warm-200)
- Border-radius: 16px
- Padding: 24px
- Icon: 32px, var(--color-accent-primary)

---

## Section 6: Cost Comparison

### Background
- var(--color-accent-secondary) #2D5A4C
- Text: White

### Layout
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│              The Math Is Simple                             │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  Role          Human      AI Equivalent    Savings  │   │
│  │  ─────────────────────────────────────────────────  │   │
│  │  Executive     $75k/yr →  $49/mo          99%      │   │
│  │  Marketing     $95k/yr →  Included        99%      │   │
│  │  [Progress bars showing savings]                    │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                                                     │   │
│  │   Save over $425,000 per year                       │   │
│  │                                                     │   │
│  │   [Team Size Slider]                                │   │
│  │                                                     │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Table Styling
- Background: rgba(255,255,255,0.08)
- Border-radius: 16px
- Row hover: rgba(255,255,255,0.04)

### Savings Badge
- Large centered text
- Font: Playfair Display, 56px
- Animated counter on scroll

### Slider
- Custom styled range input
- Track: rgba(255,255,255,0.2)
- Thumb: White
- Labels below: Team size

---

## Section 7: Pricing Section

### Background
- White

### Layout
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│              Simple Pricing, No Surprises                   │
│                                                             │
│  Start with a free 30-day trial. No credit card required.   │
│                                                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │              │  │  MOST        │  │              │      │
│  │   Starter    │  │  POPULAR     │  │  Enterprise  │      │
│  │              │  │              │  │              │      │
│  │   $149/mo    │  │   $299/mo    │  │   Custom     │      │
│  │   1-2 emp    │  │   Up to 5    │  │   10+ emp    │      │
│  │              │  │              │  │              │      │
│  │  ✓ Feature   │  │  ✓ Feature   │  │  ✓ Feature   │      │
│  │  ✓ Feature   │  │  ✓ Feature   │  │  ✓ Feature   │      │
│  │  ✓ Feature   │  │  ✓ Feature   │  │  ✓ Feature   │      │
│  │              │  │  ✓ Feature   │  │  ✓ Feature   │      │
│  │  [Start]     │  │  ✓ Feature   │  │  ✓ Feature   │      │
│  │              │  │              │  │              │      │
│  │              │  │  [Start]     │  │  [Call Us]   │      │
│  │              │  │              │  │              │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
│                                                             │
│  ✓ 30-day free trial  ✓ Cancel anytime  ✓ No setup fees    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Pricing Card

**Default**
- Background: var(--color-bg-primary)
- Border: 1px solid var(--color-warm-200)

**Featured**
- Background: White
- Border: 2px solid var(--color-accent-primary)
- Transform: translateY(-16px)
- Shadow: 0 24px 48px rgba(0,0,0,0.1)

**Badge (Featured)**
- Background: var(--color-accent-primary)
- Text: White
- Position: Top center, overlapping
- Border-radius: pill

**Price Display**
- Currency: $ (small, superscript)
- Amount: Large (48px), bold
- Period: /month (small)

**Feature List**
- Checkmark icon (var(--color-success))
- Text: var(--color-warm-600)
- Spacing: 12px between items

---

## Section 8: Trust Section

### Background
- var(--color-bg-secondary) #F5F3EF

### Layout
Multiple subsections:

**Founder Story**
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  ┌──────┐  "Built by developers who've worked at           │
│  │ 👥   │   Atlassian and built products used by millions" │
│  └──────┘                                                   │
│                                                             │
│  We're Daniel and Xavier — brothers who believe AI should   │
│  be accessible to every Australian business...              │
│                                                             │
│  [Daniel] [Xavier]                                          │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Trust Badges Row**
- 4 badges in horizontal row
- Icon + title + short description
- Equal width columns

**Testimonials**
- 3 cards in row
- Quote text, author name, company
- 5-star rating

---

## Section 9: FAQ Section

### Background
- White

### Accordion Item
```
┌─────────────────────────────────────────────────────────────┐
│  ❓ Is this just ChatGPT with a fancy wrapper?          [+] │
├─────────────────────────────────────────────────────────────┤
│  ❓ How does the free trial work?                         [+] │
├─────────────────────────────────────────────────────────────┤
│  ❓ Can you really come to my office?                     [+] │
└─────────────────────────────────────────────────────────────┘
```

**Closed State**
- Border-bottom: 1px solid var(--color-warm-200)
- Padding: 24px 0
- Question: DM Sans, 500 weight, 18px

**Open State**
- Answer slides down
- Answer text: var(--color-warm-600)
- Icon rotates 45° (becomes ×)

---

## Section 10: Final CTA

### Background
- Gradient: var(--color-accent-primary) to darker shade
- Or: Solid var(--color-accent-primary)

### Content
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│              Ready to Meet Your AI Team?                    │
│                                                             │
│   Book your free 30-minute setup call. No pressure,         │
│   no obligation.                                            │
│                                                             │
│              [Book Your Free Call]                          │
│                                                             │
│   Or start your free trial now →                            │
│                                                             │
│   ✓ 30-day free trial  ✓ No credit card  ✓ Cancel anytime   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Styling
- All text: White
- Headline: Playfair Display, 48px
- Button: White background, terracotta text
- Centered layout

---

## Section 11: Footer

### Background
- var(--color-warm-800) #1F1D1B
- Text: White and var(--color-warm-400)

### Layout
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  [Logo] Mellon AI          Product    Company    Legal      │
│  Your AI team, personally  How It     About      Privacy    │
│  delivered                 Works      Blog       Terms      │
│                            AI Team    Careers               │
│  [Social icons]            Pricing    Contact               │
│                            FAQ                              │
│                                                             │
│  ─────────────────────────────────────────────────────────  │
│                                                             │
│  © 2025 Mellon AI. All rights reserved.                     │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Styling
- Padding: 64px 0 32px
- Link color: var(--color-warm-400)
- Link hover: White
- Social icons: 24px, white

---

## Animation Specifications

### Page Load Sequence
| Element | Delay | Duration | Animation |
|---------|-------|----------|-----------|
| Header | 0ms | 400ms | slideDown |
| Hero badge | 200ms | 300ms | fadeIn |
| Hero headline | 300ms | 500ms | fadeUp |
| Hero subhead | 400ms | 500ms | fadeUp |
| Hero CTAs | 500ms | 500ms | fadeUp |
| Hero avatars | 600ms | 600ms | fadeIn + float |

### Scroll Animations
| Section | Trigger | Animation |
|---------|---------|-----------|
| All sections | 20% visible | fadeUp |
| Team cards | stagger 100ms | fadeUp |
| Pricing cards | stagger 150ms | fadeUp |
| Comparison table | 30% visible | fadeIn |
| FAQ items | stagger 50ms | fadeUp |

### Hover Effects
| Element | Effect | Duration |
|---------|--------|----------|
| Cards | translateY(-8px), shadow | 300ms |
| Buttons | darken 10%, scale(1.02) | 200ms |
| Avatars | scale(1.05), glow | 300ms |
| Nav links | color change | 150ms |

### Continuous Animations
| Element | Animation | Duration |
|---------|-----------|----------|
| Hero avatars | float (y: -10px to 10px) | 6s |
| Background orbs | drift | 20s |
| Scroll indicator | bounce | 2s |

---

## Responsive Adaptations

### Mobile (< 640px)
- Hero: Stacked, full-width
- Team grid: 1 column
- Pricing: Stacked cards
- Steps: Vertical timeline
- Comparison: Horizontal scroll table

### Tablet (640px - 1024px)
- Hero: Stacked or narrow split
- Team grid: 2 columns
- Pricing: Side by side, smaller
- Steps: Horizontal with condensed text

### Desktop (> 1024px)
- Full layouts as described
- Max-width containers
- Generous spacing
