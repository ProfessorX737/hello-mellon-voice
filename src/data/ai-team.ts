export interface TeamMember {
  id: string;
  name: string;
  role: string;
  tagline: string;
  avatar: string;
  skills: string[];
  gradient: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 'emma',
    name: 'Emma',
    role: 'Executive Assistant',
    tagline: 'Your right hand, always available',
    avatar: '/avatars/emma.svg',
    skills: [
      'Calendar & email management',
      'Meeting notes & action items',
      'Travel & expense coordination',
      'Client communication'
    ],
    gradient: 'linear-gradient(135deg, #E8B4A3 0%, #D4854A 100%)'
  },
  {
    id: 'marcus',
    name: 'Marcus',
    role: 'Marketing Director',
    tagline: 'Strategy that actually works',
    avatar: '/avatars/marcus.svg',
    skills: [
      'Campaign planning & execution',
      'Content strategy',
      'Market research & analysis',
      'Brand voice development'
    ],
    gradient: 'linear-gradient(135deg, #4A90A5 0%, #2D5A4C 100%)'
  },
  {
    id: 'sophie',
    name: 'Sophie',
    role: 'Social Media Manager',
    tagline: 'Your brand, everywhere',
    avatar: '/avatars/sophie.svg',
    skills: [
      'Content creation & scheduling',
      'Community management',
      'Trend monitoring',
      'Analytics & reporting'
    ],
    gradient: 'linear-gradient(135deg, #E8A3C9 0%, #C94A7C 100%)'
  },
  {
    id: 'james',
    name: 'James',
    role: 'SEO Strategist',
    tagline: 'Rank higher, get found',
    avatar: '/avatars/james.svg',
    skills: [
      'Keyword research',
      'Content optimization',
      'Technical SEO audits',
      'Competitor analysis'
    ],
    gradient: 'linear-gradient(135deg, #A3E8C9 0%, #4AC97C 100%)'
  },
  {
    id: 'olivia',
    name: 'Olivia',
    role: 'Bookkeeper',
    tagline: 'Numbers that make sense',
    avatar: '/avatars/olivia.svg',
    skills: [
      'Expense tracking',
      'Invoice management',
      'Financial reporting',
      'BAS preparation'
    ],
    gradient: 'linear-gradient(135deg, #F5E6A3 0%, #C9A227 100%)'
  },
  {
    id: 'alex',
    name: 'Alex',
    role: 'Business Coach',
    tagline: 'Level up your thinking',
    avatar: '/avatars/alex.svg',
    skills: [
      'Goal setting & tracking',
      'Performance analysis',
      'Strategic planning',
      'Accountability partner'
    ],
    gradient: 'linear-gradient(135deg, #C9A3E8 0%, #8B4AC9 100%)'
  }
];
