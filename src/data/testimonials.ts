export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: "I was skeptical about AI 'workers' but Mellon changed my mind. It feels like having a real team that actually understands my business. The personal setup call made all the difference.",
    author: 'Sarah Chen',
    role: 'Founder',
    company: 'Bloom Digital',
    rating: 5
  },
  {
    id: '2',
    quote: "The in-person setup was a game-changer. Having Daniel come to our office and configure everything meant we were productive from day one. Our AI team now handles 80% of our admin work.",
    author: 'Michael Torres',
    role: 'CEO',
    company: 'Torres Consulting',
    rating: 5
  },
  {
    id: '3',
    quote: "We calculated we'd need $400k to hire the team we wanted. With Mellon, we got more capability for under $4k a year. The ROI is incredible, and the quality keeps improving.",
    author: 'Emma Wilson',
    role: 'Operations Director',
    company: 'GreenCo',
    rating: 5
  }
];

export interface TrustBadge {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export const trustBadges: TrustBadge[] = [
  {
    id: 'australian',
    icon: 'map-pin',
    title: 'Australian-Based',
    description: 'Sydney-based team. We understand Australian business because we run one too.'
  },
  {
    id: 'privacy',
    icon: 'shield',
    title: 'Privacy First',
    description: 'Your data stays in Australia. Local servers available. No data selling, ever.'
  },
  {
    id: 'personal',
    icon: 'users',
    title: 'Personal Service',
    description: 'Real humans handle your setup and support. No chatbots, no offshore centers.'
  },
  {
    id: 'experienced',
    icon: 'code',
    title: 'Atlassian Alumni',
    description: 'Built by developers from Atlassian. We know how to build software that scales.'
  }
];

export interface Founder {
  name: string;
  role: string;
  bio: string;
  avatar: string;
}

export const founders: Founder[] = [
  {
    name: 'Daniel',
    role: 'Co-founder',
    bio: 'Former optometrist turned entrepreneur. Experienced the pain of administrative overload firsthand and believed there had to be a better way.',
    avatar: '/pics/daniel-poon-profile-pic.jpg'
  },
  {
    name: 'Xavier',
    role: 'Co-founder',
    bio: 'Software engineer with experience at Atlassian. Passionate about building accessible tools that genuinely change how people work.',
    avatar: '/pics/xavier-profile-pic.jpg'
  }
];
