export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'Python', 'Ruby', 'HTML/CSS'],
  },
  {
    category: 'Front-End',
    skills: ['React', 'Next.js', 'Astro', 'React Native', 'Redux Toolkit', 'Redux-Saga', 'Tailwind CSS', 'Sass'],
  },
  {
    category: 'Back-End & APIs',
    skills: ['Node.js', 'GraphQL', 'REST APIs', 'Rails', 'Apollo'],
  },
  {
    category: 'Infrastructure',
    skills: ['AWS Lambda', 'DynamoDB', 'S3', 'Firebase', 'Serverless', 'Vercel'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'Webpack', 'Vite', 'Jest', 'Cypress', 'Postman', 'Figma'],
  },
  {
    category: 'AI & Emerging',
    skills: ['OpenAI API', 'LLM Integration', 'Prompt Engineering', 'AI-Assisted Dev'],
  },
];
