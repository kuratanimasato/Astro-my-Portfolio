// Edit this file to re-label the entire site. Header, Footer, the homepage
// and SEO defaults all read from here instead of hardcoding copy.
export const SITE = {
  name: 'Masato Portfoilio',
  role: 'site.role',
  email: 'tyutyumasato@gmail.com',
  tagline: 'Portfolio Masato kuratani',
  description: 'site.description',
  status: '',
  social: [{ label: 'GitHub', href: 'https://github.com/your-username' }],
  locale: 'ja',
} as const;

export const NAV_LINKS = [
  { label: 'HOME', href: '/' },
  { label: '作品', href: '/work' },
  { label: '私について', href: '/about' },
] as const;
