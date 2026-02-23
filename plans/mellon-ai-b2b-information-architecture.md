# Mellon AI B2B - Information Architecture & Page Structure

## Page Overview

**Single Page Application Structure**
- One main landing page with anchor navigation
- All sections flow vertically
- Smooth scroll between sections
- Mobile-responsive hamburger menu

---

## Site Map

```
mellon-ai-b2b/
├── /
│   └── index.astro (Main Landing Page)
│       ├── Header (Navigation)
│       ├── Hero Section
│       ├── AI Team Section
│       ├── How It Works Section
│       ├── Services Section
│       ├── Cost Comparison Section
│       ├── Pricing Section
│       ├── Trust/Social Proof Section
│       ├── FAQ Section
│       ├── Final CTA Section
│       └── Footer
│
├── /book-call (Optional separate page)
│   └── Booking form/integration
│
├── /privacy
│   └── Privacy Policy
│
├── /terms
│   └── Terms of Service
│
└── /thank-you
    └── Post-form submission page
```

---

## Section Flow & User Journey

### 1. Header/Navigation
**Purpose**: Persistent navigation, brand recognition
**Sticky**: Yes, with scroll-based background blur
**Elements**:
- Logo (Mellon AI)
- Nav links: How It Works, AI Team, Pricing, FAQ
- CTA: "Book a Call" (primary button)
- Mobile: Hamburger menu

---

### 2. Hero Section
**Purpose**: Immediate value proposition, emotional hook
**Height**: 100vh or min-height 800px
**Layout**: Two-column (60/40 split on desktop)

**Left Column (Content)**:
- Badge: "Australian-Based AI Team"
- Headline: "Hire an AI Team for Less Than One Employee"
- Subheadline: Description of service
- Trust badges: Free trial, no CC, cancel anytime
- Primary CTA: "Book Your Free Setup Call"
- Secondary CTA: "See How Much You'll Save" (scrolls to comparison)

**Right Column (Visual)**:
- Cluster of AI team member avatars
- Floating animation
- Subtle gradient background

**Scroll Indicator**: Subtle bounce animation

---

### 3. AI Team Section
**Purpose**: Introduce the concept of AI workers as team members
**Background**: Light warm gray (#F5F3EF)
**Layout**: Grid of team member cards

**Structure**:
- Section header with title and description
- 6 team member cards in 3x2 grid (desktop), 2x3 (tablet), 1 column (mobile)
- Each card: Avatar, name, role, skills list
- Hover: Card lifts, skills expand

**Team Members**:
1. Emma - Executive Assistant
2. Marcus - Marketing Director
3. Sophie - Social Media Manager
4. James - SEO Strategist
5. Olivia - Bookkeeper
6. Alex - Business Coach

**CTA**: "See What Your Team Can Do" → scrolls to services

---

### 4. How It Works Section
**Purpose**: Clear, simple process explanation
**Background**: White
**Layout**: 3-step horizontal timeline

**Structure**:
- Section header
- 3 step cards with connecting line (desktop)
- Each step: Number, icon, title, description
- Physical setup note callout box

**Steps**:
1. Book Your Call (Calendar icon)
2. We Build Your Team (Tools icon)
3. Start Working (Rocket icon)

**Callout Box**:
- "Want us in person?"
- Description of on-site setup
- Sydney/Melbourne/Brisbane mention

---

### 5. Services Section
**Purpose**: Detailed feature breakdown by category
**Background**: Warm off-white (#FAF9F7)
**Layout**: Tabbed or accordion interface

**Structure**:
- Section header
- Category tabs: Admin, Marketing, Financial, Strategic, Technical
- Feature list for each category
- Integration logos (Slack, Notion, Xero, etc.)

**Visual**: Icon + text for each feature

---

### 6. Cost Comparison Section
**Purpose**: Demonstrate value through savings
**Background**: Dark accent (#2D5A4C) with white text
**Layout**: Comparison table + visual savings calculator

**Structure**:
- Section header: "The Math Is Simple"
- Comparison table (Human vs AI costs)
- Animated counter showing total savings
- "Save over $425,000 per year" badge
- Note about 24/7 availability

**Interactive Element**: 
- Slider to adjust team size
- Real-time savings calculation

---

### 7. Pricing Section
**Purpose**: Clear pricing tiers with trial emphasis
**Background**: White
**Layout**: 3 pricing cards, center one featured

**Structure**:
- Section header with trial emphasis
- 3 pricing cards side by side
- Starter | Business (featured) | Enterprise
- Feature lists with checkmarks
- CTAs for each tier

**Trust Elements Below**:
- "All plans include" checklist
- "No credit card required for trial"
- Money-back guarantee mention

---

### 8. Trust/Social Proof Section
**Purpose**: Build credibility and trust
**Background**: Warm gray (#F5F3EF)
**Layout**: Multi-part section

**Structure**:
- Founder story (Daniel & Xavier)
- Trust badges row (4 items)
- Testimonial cards (3 testimonials)
- Company logos (if available)

**Trust Badges**:
1. 🇦🇺 Australian-Based
2. 🔒 Privacy First
3. 🤝 Personal Service
4. 💼 Atlassian Alumni

---

### 9. FAQ Section
**Purpose**: Address objections, reduce friction
**Background**: White
**Layout**: Accordion-style Q&A

**Structure**:
- Section header
- 7-8 FAQ items in accordion
- Expand/collapse functionality
- "Still have questions?" CTA at bottom

---

### 10. Final CTA Section
**Purpose**: Convert interested visitors
**Background**: Accent color (#D4854A) or gradient
**Layout**: Centered, high impact

**Structure**:
- Large headline: "Ready to Meet Your AI Team?"
- Subheadline with value recap
- Primary CTA button (large)
- Trust badges row
- Alternative: "Start Free Trial Now" link

---

### 11. Footer
**Purpose**: Navigation, legal, contact
**Background**: Dark (#1F1D1B) with light text
**Layout**: Multi-column

**Structure**:
- Logo + tagline
- 3 link columns: Product, Company, Legal
- Newsletter signup (optional)
- Social links
- Copyright

---

## Navigation Flow

### Anchor Links
- `#how-it-works` → How It Works Section
- `#ai-team` → AI Team Section
- `#pricing` → Pricing Section
- `#faq` → FAQ Section

### Smooth Scroll Behavior
- Duration: 800ms
- Easing: cubic-bezier(0.16, 1, 0.3, 1)
- Offset: 80px (for fixed header)

### Active State
- Navigation highlights current section on scroll
- Intersection Observer triggers at 50% visibility

---

## Responsive Breakpoints

### Mobile (< 640px)
- Single column layout
- Hamburger menu
- Stacked pricing cards
- Collapsed team grid (1 column)
- Reduced section padding

### Tablet (640px - 1024px)
- Two column where appropriate
- Expanded hamburger or condensed nav
- 2-column team grid
- Side-by-side pricing (horizontal scroll if needed)

### Desktop (> 1024px)
- Full multi-column layouts
- Horizontal navigation
- 3-column team grid
- All pricing cards visible

---

## Component Hierarchy

```
BaseLayout.astro
├── Header.astro
│   ├── Logo
│   ├── NavLinks
│   └── CTAButton
│
├── main
│   ├── HeroSection.astro
│   │   ├── Badge
│   │   ├── Headline
│   │   ├── Subheadline
│   │   ├── CTAGroup
│   │   └── AITeamVisual
│   │       └── AvatarCluster
│   │
│   ├── AITeamSection.astro
│   │   ├── SectionHeader
│   │   └── TeamGrid
│   │       └── TeamMemberCard (x6)
│   │           ├── Avatar
│   │           ├── Name
│   │           ├── Role
│   │           └── SkillsList
│   │
│   ├── HowItWorksSection.astro
│   │   ├── SectionHeader
│   │   ├── StepsTimeline
│   │   │   └── StepCard (x3)
│   │   └── SetupCallout
│   │
│   ├── ServicesSection.astro
│   │   ├── SectionHeader
│   │   ├── CategoryTabs
│   │   └── FeatureGrid
│   │
│   ├── ComparisonSection.astro
│   │   ├── SectionHeader
│   │   ├── ComparisonTable
│   │   ├── SavingsCalculator
│   │   └── SavingsBadge
│   │
│   ├── PricingSection.astro
│   │   ├── SectionHeader
│   │   ├── PricingGrid
│   │   │   └── PricingCard (x3)
│   │   └── TrustNotes
│   │
│   ├── TrustSection.astro
│   │   ├── FounderStory
│   │   ├── TrustBadges
│   │   └── TestimonialCarousel
│   │
│   ├── FAQSection.astro
│   │   ├── SectionHeader
│   │   └── FAQAccordion
│   │       └── FAQItem (x7)
│   │
│   └── CTASection.astro
│       ├── Headline
│       ├── Subheadline
│       ├── CTAButton
│       └── TrustBadges
│
└── Footer.astro
    ├── BrandColumn
    ├── LinkColumns (x3)
    └── Copyright
```

---

## Animation Sequence (Page Load)

1. **0ms**: Background color fades in
2. **100ms**: Header slides down (translateY: -100% → 0)
3. **300ms**: Hero badge fades in
4. **400ms**: Hero headline fades up
5. **500ms**: Hero subheadline fades up
6. **600ms**: Hero CTAs fade up
7. **700ms**: Hero visual (avatar cluster) fades in + begins floating
8. **900ms+**: Scroll indicator begins bouncing

---

## Scroll-Triggered Animations

Each section animates in when scrolling into view:
- **Trigger**: 20% of element visible
- **Animation**: Fade up (opacity 0→1, translateY 30px→0)
- **Duration**: 600ms
- **Stagger**: 100ms between child elements
- **Easing**: cubic-bezier(0.16, 1, 0.3, 1)

---

## Performance Considerations

### Lazy Loading
- Images below fold: loading="lazy"
- Sections: Intersection Observer for animation trigger only
- No actual component lazy loading (single page)

### Animation Performance
- Use transform and opacity only
- will-change on animated elements
- Respect prefers-reduced-motion

### Asset Optimization
- Avatars: WebP format, multiple sizes
- Icons: SVG, inline for critical
- Fonts: Preload critical, swap for others
