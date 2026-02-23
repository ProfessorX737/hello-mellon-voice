export interface ServiceCategory {
  id: string;
  name: string;
  icon: string;
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'admin',
    name: 'Administrative',
    icon: 'clipboard',
    features: [
      {
        title: 'Email Management',
        description: 'Inbox zero achieved. We draft, sort, and respond to emails in your voice.',
        icon: 'mail'
      },
      {
        title: 'Calendar Scheduling',
        description: 'Never miss a meeting. Smart scheduling that respects your time blocks.',
        icon: 'calendar'
      },
      {
        title: 'Meeting Notes',
        description: 'Every call captured, transcribed, and summarized with action items.',
        icon: 'file-text'
      },
      {
        title: 'Document Preparation',
        description: 'Reports, proposals, and presentations created in your brand voice.',
        icon: 'file'
      },
      {
        title: 'Data Entry',
        description: 'Accurate, fast data processing without the human error.',
        icon: 'database'
      },
      {
        title: 'Travel Coordination',
        description: 'Flights, hotels, itineraries — all handled end-to-end.',
        icon: 'plane'
      }
    ]
  },
  {
    id: 'marketing',
    name: 'Marketing',
    icon: 'megaphone',
    features: [
      {
        title: 'Social Media Management',
        description: 'Consistent posting, engagement, and growth across all platforms.',
        icon: 'share-2'
      },
      {
        title: 'Content Creation',
        description: 'Blog posts, articles, and copy that sounds like you wrote it.',
        icon: 'pen-tool'
      },
      {
        title: 'Email Marketing',
        description: 'Newsletters, campaigns, and sequences that convert.',
        icon: 'send'
      },
      {
        title: 'SEO Optimization',
        description: 'Content that ranks. Technical audits and ongoing improvements.',
        icon: 'search'
      },
      {
        title: 'Ad Copywriting',
        description: 'High-converting copy for Google, Meta, and LinkedIn ads.',
        icon: 'target'
      },
      {
        title: 'Brand Strategy',
        description: 'Positioning, messaging, and voice that differentiates you.',
        icon: 'compass'
      }
    ]
  },
  {
    id: 'financial',
    name: 'Financial',
    icon: 'dollar-sign',
    features: [
      {
        title: 'Expense Tracking',
        description: 'Every receipt captured, categorized, and reconciled.',
        icon: 'receipt'
      },
      {
        title: 'Invoice Management',
        description: 'Invoices sent, followed up, and payments tracked.',
        icon: 'file-invoice'
      },
      {
        title: 'Financial Reporting',
        description: 'Monthly reports that show exactly where you stand.',
        icon: 'bar-chart-2'
      },
      {
        title: 'Budget Monitoring',
        description: 'Stay on track with real-time budget alerts and insights.',
        icon: 'pie-chart'
      },
      {
        title: 'BAS Preparation',
        description: 'Australian tax compliance made simple and accurate.',
        icon: 'calculator'
      },
      {
        title: 'Cash Flow Forecasting',
        description: 'Predict and plan with AI-powered financial modeling.',
        icon: 'trending-up'
      }
    ]
  },
  {
    id: 'strategic',
    name: 'Strategic',
    icon: 'compass',
    features: [
      {
        title: 'Business Planning',
        description: 'Quarterly and annual plans with clear milestones.',
        icon: 'map'
      },
      {
        title: 'Market Research',
        description: 'Competitor analysis, trends, and opportunity identification.',
        icon: 'globe'
      },
      {
        title: 'Goal Tracking',
        description: 'OKRs and KPIs monitored with weekly progress reports.',
        icon: 'check-circle'
      },
      {
        title: 'Performance Analysis',
        description: 'Deep dives into what\'s working and what\'s not.',
        icon: 'activity'
      },
      {
        title: 'Strategic Planning',
        description: 'Long-term vision with actionable short-term steps.',
        icon: 'layers'
      },
      {
        title: 'Decision Support',
        description: 'Data-driven recommendations for major business decisions.',
        icon: 'git-branch'
      }
    ]
  },
  {
    id: 'technical',
    name: 'Technical',
    icon: 'code',
    features: [
      {
        title: 'Code Review',
        description: 'Automated reviews with suggestions for improvement.',
        icon: 'git-pull-request'
      },
      {
        title: 'Documentation',
        description: 'Technical docs, API references, and user guides.',
        icon: 'book'
      },
      {
        title: 'API Integrations',
        description: 'Connect your tools and automate workflows.',
        icon: 'plug'
      },
      {
        title: 'Workflow Automation',
        description: 'Repetitive tasks automated with smart triggers.',
        icon: 'zap'
      },
      {
        title: 'Technical Support',
        description: 'First-line support with escalation to your team.',
        icon: 'help-circle'
      },
      {
        title: 'System Monitoring',
        description: 'Alerts and reports on your tech stack health.',
        icon: 'monitor'
      }
    ]
  }
];

export const integrations = [
  { name: 'Slack', icon: '/icons/slack.svg' },
  { name: 'Notion', icon: '/icons/notion.svg' },
  { name: 'Xero', icon: '/icons/xero.svg' },
  { name: 'Google Workspace', icon: '/icons/google.svg' },
  { name: 'Microsoft 365', icon: '/icons/microsoft.svg' },
  { name: 'HubSpot', icon: '/icons/hubspot.svg' },
  { name: 'Salesforce', icon: '/icons/salesforce.svg' },
  { name: 'Zapier', icon: '/icons/zapier.svg' }
];
