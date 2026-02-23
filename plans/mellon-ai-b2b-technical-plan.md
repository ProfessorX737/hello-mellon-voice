# Mellon AI B2B - Technical Implementation Plan

## Tech Stack

- **Framework**: Astro 4.x (Static Site Generation)
- **Styling**: CSS Custom Properties + Scoped component styles
- **Animations**: CSS animations + Intersection Observer API
- **Icons**: SVG (inline for critical, sprite for others)
- **Fonts**: Google Fonts (DM Sans, Playfair Display)
- **Deployment**: Netlify (existing setup)

---

## File Structure

```
src/
├── components/
│   ├── ui/                          # Reusable UI primitives
│   │   ├── Button.astro
│   │   ├── Badge.astro
│   │   ├── Card.astro
│   │   ├── Avatar.astro
│   │   ├── SectionHeader.astro
│   │   └── PriceTag.astro
│   │
│   ├── sections/                    # Page sections
│   │   ├── HeroSection.astro
│   │   ├── AITeamSection.astro
│   │   ├── HowItWorksSection.astro
│   │   ├── ServicesSection.astro
│   │   ├── ComparisonSection.astro
│   │   ├── PricingSection.astro
│   │   ├── TrustSection.astro
│   │   ├── FAQSection.astro
│   │   └── CTASection.astro
│   │
│   ├── Header.astro
│   ├── Footer.astro
│   └── ScrollAnimations.astro       # Client-side scroll observer
│
├── data/
│   ├── ai-team.ts                   # AI worker personas data
│   ├── pricing.ts                   # Pricing tiers data
│   ├── services.ts                  # Services/features data
│   ├── faq.ts                       # FAQ items data
│   └── testimonials.ts              # Testimonials data
│
├── layouts/
│   └── BaseLayout.astro
│
├── pages/
│   ├── index.astro                  # Main landing page
│   ├── book-call.astro              # Booking page (optional)
│   ├── privacy.astro                # Privacy policy
│   ├── terms.astro                  # Terms of service
│   └── thank-you.astro              # Form success page
│
├── styles/
│   ├── global.css                   # Design system + reset
│   ├── animations.css               # Shared animations
│   └── utilities.css                # Utility classes
│
└── types/
    └── index.ts                     # TypeScript interfaces
```

---

## Component Specifications

### UI Components

#### Button.astro
```typescript
interface Props {
  variant: 'primary' | 'secondary' | 'ghost';
  size: 'small' | 'medium' | 'large';
  href?: string;                    // If provided, renders as <a>
  type?: 'button' | 'submit';       // For <button> variant
  id?: string;
  class?: string;
}
```

**Features**:
- Renders as `<a>` if href provided, else `<button>`
- Built-in hover/active states
- Focus ring for accessibility
- Loading state support (optional)

#### Badge.astro
```typescript
interface Props {
  variant: 'default' | 'accent' | 'success' | 'warning';
  size: 'small' | 'medium';
  text: string;
  icon?: string;                    // Optional SVG icon
}
```

#### Card.astro
```typescript
interface Props {
  variant: 'default' | 'elevated' | 'featured';
  padding: 'small' | 'medium' | 'large';
  hover?: boolean;                  // Enable hover lift effect
}
```

#### Avatar.astro
```typescript
interface Props {
  src: string;
  alt: string;
  size: 'small' | 'medium' | 'large' | 'xlarge';
  border?: boolean;
  glow?: boolean;
}
```

#### SectionHeader.astro
```typescript
interface Props {
  badge?: string;
  title: string;
  subtitle?: string;
  align: 'left' | 'center';
  size: 'large' | 'medium';
}
```

---

## Data Files

### ai-team.ts
```typescript
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  tagline: string;
  avatar: string;
  skills: string[];
  color: string;                    // Accent color for card
}

export const teamMembers: TeamMember[] = [
  {
    id: 'emma',
    name: 'Emma',
    role: 'Executive Assistant',
    tagline: 'Your right hand, always available',
    avatar: '/avatars/emma.png',
    skills: ['Calendar & email management', 'Meeting notes', 'Travel coordination', 'Client communication'],
    color: '#D4854A'
  },
  // ... more members
];
```

### pricing.ts
```typescript
export interface PricingTier {
  id: string;
  name: string;
  price: number | 'custom';
  period: 'month';
  description: string;
  teamSize: string;
  featured: boolean;
  features: string[];
  cta: {
    text: string;
    href: string;
  };
}

export const pricingTiers: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: 149,
    period: 'month',
    description: 'For solopreneurs and small teams',
    teamSize: '1-2 employees',
    featured: false,
    features: ['3 AI workers', '500 tasks/month', 'Email & calendar integration', 'Basic reporting', 'Zoom support'],
    cta: { text: 'Start Free Trial', href: '#trial' }
  },
  // ... more tiers
];
```

### services.ts
```typescript
export interface ServiceCategory {
  id: string;
  name: string;
  icon: string;
  features: string[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'admin',
    name: 'Administrative',
    icon: 'clipboard',
    features: ['Email management', 'Calendar scheduling', 'Meeting notes', 'Document prep']
  },
  // ... more categories
];
```

### faq.ts
```typescript
export interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    question: 'Is this just ChatGPT with a fancy wrapper?',
    answer: 'No. We use multiple AI models...'
  },
  // ... more items
];
```

---

## Section Components

### HeroSection.astro
**Props**: None (self-contained)
**Features**:
- Animated badge
- Staggered text reveal
- Avatar cluster with floating animation
- Dual CTAs

**Animations**:
- Badge: fadeIn 300ms
- Headline: fadeUp 400ms, delay 100ms
- Subheadline: fadeUp 400ms, delay 200ms
- CTAs: fadeUp 400ms, delay 300ms
- Avatars: fadeIn 600ms, delay 400ms + continuous float

### AITeamSection.astro
**Props**: None (uses data file)
**Features**:
- Grid of team member cards
- Hover effects on cards
- Skills reveal on hover

**Animations**:
- Cards: staggered fadeUp on scroll
- Hover: translateY(-8px), shadow increase

### HowItWorksSection.astro
**Props**: None
**Features**:
- 3-step timeline
- Connecting line between steps (desktop)
- Physical setup callout box

**Animations**:
- Steps: staggered fadeUp
- Line: draw animation on scroll
- Callout: fadeIn after steps

### ServicesSection.astro
**Client-side JS required**: Yes (tab switching)

**Features**:
- Tab navigation for categories
- Feature lists with icons
- Integration logos

**State**:
- activeTab: string (category ID)

### ComparisonSection.astro
**Client-side JS required**: Yes (calculator)

**Features**:
- Comparison table
- Interactive savings calculator
- Animated counter

**State**:
- teamSize: number (for calculator)

### PricingSection.astro
**Props**: None (uses data file)
**Features**:
- 3 pricing cards
- Featured card styling
- Feature comparison

**Animations**:
- Cards: staggered fadeUp
- Featured card: subtle pulse on load

### TrustSection.astro
**Props**: None (uses data file)
**Features**:
- Founder story
- Trust badges row
- Testimonial cards

**Animations**:
- Badges: staggered fadeIn
- Testimonials: carousel or grid fadeUp

### FAQSection.astro
**Client-side JS required**: Yes (accordion)

**Features**:
- Accordion Q&A
- Smooth expand/collapse
- "Still have questions" CTA

**State**:
- openItem: string | null (ID of open FAQ)

### CTASection.astro
**Props**: None
**Features**:
- High-impact centered layout
- Large CTA button
- Trust badges

---

## Client-Side Scripts

### Scroll Animation Observer
```javascript
// ScrollAnimations.astro
const observerOptions = {
  root: null,
  rootMargin: '0px 0px -100px 0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('[data-animate]').forEach(el => {
  observer.observe(el);
});
```

### FAQ Accordion
```javascript
// FAQSection.astro (client:load)
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');
  
  question.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    
    // Close all others
    faqItems.forEach(i => {
      i.classList.remove('open');
      i.querySelector('.faq-answer').style.maxHeight = '0';
    });
    
    // Open clicked if was closed
    if (!isOpen) {
      item.classList.add('open');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
});
```

### Savings Calculator
```javascript
// ComparisonSection.astro (client:load)
const slider = document.getElementById('team-size-slider');
const savingsDisplay = document.getElementById('total-savings');

const savingsPerPerson = 425000;

slider.addEventListener('input', (e) => {
  const teamSize = parseInt(e.target.value);
  const totalSavings = teamSize * savingsPerPerson;
  savingsDisplay.textContent = formatCurrency(totalSavings);
});
```

---

## CSS Architecture

### global.css Structure
```css
/* 1. CSS Variables (Design System) */
:root {
  /* Colors */
  /* Typography */
  /* Spacing */
  /* Shadows */
  /* Radii */
  /* Transitions */
}

/* 2. Reset & Base */
*, *::before, *::after { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { /* base styles */ }

/* 3. Typography */
h1, h2, h3, h4, h5, h6 { /* heading styles */ }
p, ul, ol { /* body styles */ }

/* 4. Utilities */
.container { /* max-width, padding */ }
.text-center { text-align: center; }
/* ... more utilities */
```

### animations.css Structure
```css
/* Keyframes */
@keyframes fadeUp { /* ... */ }
@keyframes fadeIn { /* ... */ }
@keyframes float { /* ... */ }
@keyframes pulse { /* ... */ }

/* Animation Classes */
.animate-fade-up { animation: fadeUp 0.6s ease-out forwards; }
.animate-float { animation: float 6s ease-in-out infinite; }

/* Scroll-triggered Animation States */
[data-animate] {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

[data-animate].animate-visible {
  opacity: 1;
  transform: translateY(0);
}
```

---

## Responsive Strategy

### Breakpoints
```css
/* Mobile first approach */
/* Base: < 640px */

/* sm: 640px+ */
@media (min-width: 640px) { }

/* md: 768px+ */
@media (min-width: 768px) { }

/* lg: 1024px+ */
@media (min-width: 1024px) { }

/* xl: 1280px+ */
@media (min-width: 1280px) { }
```

### Key Responsive Changes

**Hero**:
- Mobile: Stacked, full-width
- Desktop: Two-column (60/40)

**AI Team Grid**:
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3 columns

**Pricing**:
- Mobile: Stacked cards
- Desktop: Side by side, center card elevated

**Navigation**:
- Mobile: Hamburger menu
- Desktop: Full horizontal nav

---

## Performance Checklist

### Images
- [ ] Avatars: WebP format, 200x200px
- [ ] Icons: SVG, inline for critical
- [ ] Photos: Optimized, lazy loaded
- [ ] Use srcset for responsive images

### Fonts
- [ ] Preload critical fonts
- [ ] Use font-display: swap
- [ ] Subset fonts if possible

### CSS
- [ ] Minimize unused styles
- [ ] Use CSS containment where appropriate
- [ ] Critical CSS inlined

### JavaScript
- [ ] Only hydrate interactive components
- [ ] Use client:visible for below-fold
- [ ] Debounce scroll handlers

### General
- [ ] Enable compression (gzip/brotli)
- [ ] Use CDN for assets
- [ ] Implement caching headers

---

## Accessibility Requirements

### ARIA
- [ ] Navigation: role="navigation", aria-label
- [ ] Buttons: aria-pressed where applicable
- [ ] FAQ: aria-expanded, aria-controls
- [ ] Images: meaningful alt text

### Keyboard
- [ ] All interactive elements focusable
- [ ] Visible focus indicators
- [ ] Logical tab order
- [ ] Escape closes modals/menus

### Motion
- [ ] Respect prefers-reduced-motion
- [ ] No auto-playing video
- [ ] Animations are subtle

### Contrast
- [ ] 4.5:1 minimum for text
- [ ] 3:1 for large text
- [ ] Test all color combinations

---

## Build & Deploy

### Build Command
```bash
npm run build
```

### Output
- Static files in `dist/`
- HTML, CSS, JS, images

### Deployment
- Platform: Netlify
- Build command: `npm run build`
- Publish directory: `dist`

### Environment Variables
None required for static site.

---

## Testing Checklist

### Visual
- [ ] Matches design mockups
- [ ] Consistent spacing
- [ ] Proper typography hierarchy
- [ ] Color consistency

### Functional
- [ ] All links work
- [ ] Navigation scrolls correctly
- [ ] FAQ accordion works
- [ ] Calculator functions
- [ ] Mobile menu toggles

### Responsive
- [ ] Mobile (320px - 414px)
- [ ] Tablet (768px - 1024px)
- [ ] Desktop (1280px+)
- [ ] Large screens (1920px+)

### Performance
- [ ] Lighthouse score > 90
- [ ] First Contentful Paint < 1.5s
- [ ] Time to Interactive < 3.5s
- [ ] No layout shift

### Accessibility
- [ ] Keyboard navigable
- [ ] Screen reader tested
- [ ] Color contrast passed
- [ ] Reduced motion respected
