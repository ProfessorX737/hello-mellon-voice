export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    id: 'what-is',
    question: 'Is this just ChatGPT with a fancy wrapper?',
    answer: 'No. We use multiple AI models (including Claude, GPT-4, and specialized models) and customize them specifically for your business. Plus, we handle all the integration, training, and ongoing support — something you don\'t get with raw AI tools. Think of us as your AI implementation partner, not just another app.'
  },
  {
    id: 'trial',
    question: 'How does the free trial work?',
    answer: 'Simple. You get 30 days of full access to your AI team. No credit card required. If you don\'t love it, cancel anytime with no questions asked. If you stay, your first month starts after the trial. We\'ll even help you export your data if you decide to leave.'
  },
  {
    id: 'in-person',
    question: 'Can you really come to my office?',
    answer: 'Absolutely. We\'re based in Sydney and regularly travel to Melbourne and Brisbane for in-person setups. There\'s no extra charge for the service itself — just cover our travel costs. Remote setup is always free and works great too. Most clients choose remote for speed, but in-person is perfect for larger teams who want hands-on training.'
  },
  {
    id: 'custom',
    question: 'What if I need something custom?',
    answer: 'That\'s our specialty. Our developers can build custom AI workflows, integrations, and automations specific to your business. It\'s included in Business and Enterprise plans. We\'ve built everything from custom CRM integrations to industry-specific compliance workflows. Just ask — if it\'s possible, we\'ll make it happen.'
  },
  {
    id: 'privacy',
    question: 'Is my data safe?',
    answer: 'Completely. We\'re privacy-first by design. We can keep all your data on local Australian servers if you prefer. We never sell your data, never train models on your information without explicit consent, and you can delete everything anytime. We\'re transparent about our data practices because we believe trust is everything.'
  },
  {
    id: 'setup-time',
    question: 'How quickly can we get started?',
    answer: 'Most teams are up and running within 48 hours of their setup call. If you choose in-person setup, we\'ll schedule within a week (depending on location). We\'ve streamlined our onboarding so you spend less time configuring and more time getting value. Your AI team comes pre-trained with industry best practices.'
  },
  {
    id: 'mistakes',
    question: 'What if my AI team makes a mistake?',
    answer: 'They\'re constantly learning and improving. Plus, you have direct access to our developers for adjustments. We monitor quality and proactively reach out if we see ways to improve. In the rare case something goes wrong, we\'re accountable and will make it right. That\'s the Mellon difference.'
  },
  {
    id: 'cancellation',
    question: 'What happens if I want to cancel?',
    answer: 'You can cancel anytime with no questions asked. We mean it. No exit fees, no hard feelings. We\'ll even help you export your data and workflows so you\'re not locked in. We believe in earning your business every month, not trapping you in a contract.'
  }
];
