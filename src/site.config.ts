// Edit this file to re-label the entire site. Header, Footer, the homepage
// and SEO defaults all read from here instead of hardcoding copy.
export const SITE = {
  name: 'Masato Portfoilio',
  role: 'Product design & frontend engineering',
  email: 'tyutyumasato@gmail.com',
  tagline: 'Portfolio Msato Kuratani',
  description:
    'Portfolio of John Doe — product design and frontend engineering, with an emphasis on speed, clarity, and the details most people skip.',
  status: 'Currently building at Studio Co · open to new work, Q3 2026',
  social: [{ label: 'GitHub', href: 'https://github.com/your-username' }],
  locale: 'ja',
} as const;

export const NAV_LINKS = [
  { label: '作品', href: '/work' },
  { label: '私について', href: '/about' },
] as const;
