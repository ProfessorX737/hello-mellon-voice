export interface PricingTier {
  id: string;
  name: string;
  price: number | 'custom';
  period: string;
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
    description: 'For solopreneurs and small teams just getting started',
    teamSize: '1-2 employees',
    featured: false,
    features: [
      '3 AI workers of your choice',
      '500 tasks per month',
      'Email & calendar integration',
      'Basic reporting dashboard',
      'Zoom support',
      'Remote setup included'
    ],
    cta: {
      text: 'Start Free Trial',
      href: '#trial'
    }
  },
  {
    id: 'business',
    name: 'Business',
    price: 299,
    period: 'month',
    description: 'For growing businesses ready to scale',
    teamSize: 'Up to 5 employees',
    featured: true,
    features: [
      '6 AI workers (full team)',
      'Unlimited tasks',
      'All integrations (Slack, Notion, Xero, etc.)',
      'Advanced analytics & insights',
      'Priority support',
      'Custom AI training',
      'Quarterly strategy reviews',
      'In-person setup available'
    ],
    cta: {
      text: 'Start Free Trial',
      href: '#trial'
    }
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'custom',
    period: 'month',
    description: 'For larger teams with complex needs',
    teamSize: '10+ employees',
    featured: false,
    features: [
      'Unlimited AI workers',
      'Unlimited everything',
      'Dedicated account manager',
      'Custom AI development',
      'On-site setup included',
      'SLA guarantee',
      'White-label options',
      'API access'
    ],
    cta: {
      text: 'Book a Call',
      href: '#book-call'
    }
  }
];

export const pricingNotes = [
  '30-day free trial',
  'No credit card required',
  'Cancel anytime',
  'No setup fees'
];
