export interface Project {
  name: string;
  description: string;
  stack: string[];
  highlights: string[];
  links: {
    github?: string;
    demo?: string;
  };
}

export const projects: Project[] = [
  {
    name: 'WorthTheDownload',
    description:
      "Two tools in one site: \"Should I Buy It?\" looks up any Steam game and tells you whether to buy, wait for a sale, or skip it. \"What Should I Play?\" helps you pick something based on what you're in the mood for.",
    stack: ['Next.js', 'TypeScript', 'OpenAI API', 'Steam API', 'Tailwind CSS v4', 'shadcn/ui', 'Upstash'],
    highlights: [
      'The recommendation flow runs in parallel: parse intent with the LLM, hit Steam\'s search and tag APIs, scrape Reddit for context, deduplicate, then do a second LLM pass to filter out things the metadata misses',
      'The buy-check API sends the game data and taste description to gpt-4o-mini and gets back a structured verdict with a headline, reasoning bullets, and a price take',
      'Rate limited at 10 req/IP/hour with Upstash and cached Steam and Reddit responses in Next.js to keep API costs reasonable',
    ],
    links: { github: '#', demo: '#' },
  },
  {
    name: 'Avocado Finance',
    description:
      "A personal finance app I co-founded. The goal was to make it easy for people to see where their money actually goes, without the friction most finance apps have. Shipped from zero to production in about 10 months.",
    stack: ['React Native', 'TypeScript', 'Node.js', 'Plaid API', 'Yodlee', 'Finicity'],
    highlights: [
      'Built everything in React Native with no other engineers: architecture, UI, and infrastructure',
      'Integrated Plaid, Yodlee, and Finicity for bank linking and transaction data',
      'Ran the product side too: user interviews, roadmap, launch, and early growth',
    ],
    links: { github: '#', demo: '#' },
  },
  // {
  //   name: 'Blockchain Poker',
  //   description:
  //     'A multiplayer poker game where you connect a crypto wallet to play instead of making an account. Built partly to learn WalletConnect and partly because the idea seemed fun.',
  //   stack: ['React', 'TypeScript', 'WalletConnect', 'Web3.js', 'Node.js'],
  //   highlights: [
  //     'Built the real-time game UI with multiplayer state management',
  //     'Integrated WalletConnect v2 so players could connect any of 100+ supported wallets',
  //     'Kept the crypto stuff out of the way so people who aren\'t into blockchain could just play poker',
  //   ],
  //   links: { github: '#' },
  // },
];
