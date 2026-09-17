// Edit this file to re-label the entire site. Header, Footer, the homepage
// and SEO defaults all read from here instead of hardcoding copy.
export const SITE = {
  name: 'Masato Portfolio',
  role: '人や地域の課題をIT・Web・AIの力で解決する。',
  email: 'tyutyumasato@gmail.com',
  tagline: 'Portfolio Masato kuratani',
  description:
    'Webサイトの受託運用（3年）軸に、デザインから実装・改善まで対応。異業種で培った確実な作業精度とユーザー視点で、成果につながるサイトを構築します。',
  status: '',
  social: [{ label: 'GitHub', href: 'https://github.com/kuratanimasato' }],
} as const;

export const NAV_LINKS = [
  { label: 'HOME', href: '/' },
  { label: '私について', href: '/about' },
  { label: '作品', href: '/work' },
  { label: 'スキル', href: '/skills' },
] as const;

export const SKILL_CATEGORIES = [
  {
    title: 'Frontend / Frameworks',
    skills: [
      {
        name: 'HTML5 / CSS3',
        level: 3,
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      },
      {
        name: 'JavaScript',
        level: 3,
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      },
      {
        name: 'TypeScript',
        level: 2,
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      },
      {
        name: 'Astro',
        level: 2,
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/astro/astro-original.svg',
      },
      {
        name: 'Svelte / SvelteKit',
        level: 2,
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg',
      },
      {
        name: 'Tailwind CSS',
        level: 3,
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
      },
    ],
  },
  {
    title: 'Backend',
    skills: [
      {
        name: 'PHP',
        level: 3,
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
      },
      {
        name: 'MySQL',
        level: 2,
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      },
      {
        name: 'WordPress',
        level: 3,
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg',
      },
    ],
  },
  {
    title: 'Design / Tools',
    skills: [
      {
        name: 'Figma',
        level: 3,
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
      },
      {
        name: 'Photoshop',
        level: 3,
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg',
      },
      {
        name: 'Illustrator',
        level: 3,
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg',
      },
      {
        name: 'Affinity',
        level: 2,
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg',
      },
    ],
  },
  {
    title: 'Other',
    skills: [
      {
        name: 'Git / GitHub',
        level: 3,
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      },
      {
        name: 'Node.js',
        level: 2,
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      },
      {
        name: 'VS Code',
        level: 3,
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
      },
      {
        name: 'Vercel',
        level: 2,
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg',
      },
      {
        name: 'Zed',
        level: 2,
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg',
      },
    ],
  },
];
