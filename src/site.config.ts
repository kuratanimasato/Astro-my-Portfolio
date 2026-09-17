// Edit this file to re-label the entire site. Header, Footer, the homepage
// and SEO defaults all read from here instead of hardcoding copy.
export const SITE = {
  name: 'Masato Portfolio',
  role: 'site.role',
  email: 'tyutyumasato@gmail.com',
  tagline: 'Portfolio Masato kuratani',
  description: 'site.description',
  status: '',
  social: [{ label: 'GitHub', href: 'https://github.com/kuratanimasato' }], // ← 必要に応じてユーザー名を変更してください
  locale: 'ja',
} as const;

export const NAV_LINKS = [
  { label: 'HOME', href: '/' },
  { label: '私について', href: '/about' },
  { label: '作品', href: '/work' },
  { label: 'スキル', href: '/skills' },
] as const;

export const SKILL_CATEGORIES = [
  {
    title: 'Frontend',
    skills: [
      'HTML5 / CSS3',
      'JavaScript',
      'TypeScript',
      'Astro',
      'Svelte/Svektekit',
      'Tailwind CSS',
    ],
  },
  {
    title: 'Backend',
    skills: ['PHP', 'MySQL', 'WordPress'],
  },
  {
    title: 'Design & Prototyping',
    skills: ['Figma', 'AdobePhotoshop', 'AdobeIllustrator', 'Afinity'],
  },
  {
    title: 'Tools & Workflow',
    skills: ['Git / GitHub', 'Node.js', 'VS Code', 'Vercel', 'Zed'],
  },
];
