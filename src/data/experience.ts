export interface Experience {
  role: string;
  company: string;
  location: string;
  dates: string;
  description: string;
  bullets: string[];
}

export const experiences: Experience[] = [
  {
    role: 'Senior Software Engineer',
    company: 'Chia Network',
    location: 'Remote',
    dates: 'Aug 2024 — Mar 2026',
    description:
      "Built full-stack features for Chia's Cloud Wallet, a browser-based blockchain wallet where transaction mistakes can't be undone. That constraint shapes a lot of the decisions.",
    bullets: [
      'Built transaction flows in React/TypeScript covering signing, confirmation, and real-time wallet state sync',
      'Wrote backend APIs for wallet balances, transaction lifecycle management, and distributed state across wallet instances',
      'Designed async UX with optimistic updates and state reconciliation for operations that can\'t be rolled back',
      'Used AI tools to move faster through unfamiliar parts of the codebase and write tests more efficiently',
    ],
  },
  {
    role: 'Front-End Lead',
    company: 'SureFront',
    location: 'Los Angeles, CA',
    dates: 'Mar 2023 — Aug 2024',
    description:
      'Led front-end architecture at a B2B SaaS company building tools for commercial real estate teams.',
    bullets: [
      'Migrated legacy Redux to Redux Toolkit across the app, which cut a lot of boilerplate and made state logic easier to follow',
      'Added Redux-Saga for the async-heavy flows and fixed reliability issues that had been causing problems in production',
      'Ran bi-weekly front-end architecture sessions and mentored a couple of junior engineers on the team',
    ],
  },
  {
    role: 'Co-Founder',
    company: 'Avocado Finance',
    location: 'Los Angeles, CA',
    dates: 'May 2021 — Oct 2022',
    description:
      'Co-founded a personal finance app in React Native. I was the only engineer, so I built everything and shipped the first version in about 10 months.',
    bullets: [
      'Built everything from scratch in React Native: screens, navigation, API integrations, and infrastructure',
      'Integrated Plaid, Yodlee, and Finicity for bank account linking and transaction data',
      'Handled the product side too: user interviews, roadmap decisions, and early growth',
    ],
  },
  {
    role: 'Senior Software Engineer',
    company: 'The Black Tux',
    location: 'Santa Monica, CA',
    dates: 'Jul 2016 — May 2021',
    description:
      'Worked on the full stack at a suit and tuxedo rental company for nearly five years. Touched most parts of the codebase at some point.',
    bullets: [
      'Built a Node.js GraphQL gateway to stitch together a Django monolith and several serverless services',
      'Worked on product pages, appointment scheduling, and internal tools used by the support team',
      'Wrote REST APIs on Node.js, Lambda, and DynamoDB powering customer-facing features',
      'Set up A/B testing infrastructure for the SPA so the product team could run experiments',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Lunchbox LP',
    location: 'Culver City, CA',
    dates: 'Aug 2015 — Jul 2016',
    description:
      'My first job out of college, at a small digital agency building promotional campaigns for consumer brands.',
    bullets: [
      'Built campaigns for Walmart, Kraft, Dove, Oreo, and Suave using JavaScript, HTML5/CSS3, and Sass',
      'Mostly responsive landing pages and multimedia product pages',
      'Added analytics and social integrations to most projects',
    ],
  },
];
