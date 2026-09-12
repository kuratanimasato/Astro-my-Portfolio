export const languages = {
  ja: 'JP',
  en: 'EN',
} as const;

export const defaultLang = 'ja' as const;

export type Locale = keyof typeof languages;

export const ui = {
  ja: {
    'nav.work': '作品',
    'nav.about': '私について',
    'nav.contact': 'お問い合わせ',
    'home.viewWork': '作品を見る →',
    'home.selectedWork': 'Selected work',
    'home.viewAll': '全ての作品を見る →',
    'home.aboutEyebrow': '私について',
    'home.aboutMore': '私の仕事のやり方についてもっと詳しく知る →',
    'home.contactEyebrow': 'お問い合わせ',
    'home.contactTitle': 'お問い合わせはこちらから',
    'work.allWork': 'All work',
    'work.back': '← 全ての作品',
    'about.eyebrow': '私について',
    'about.tools': 'Tools',
    'about.contact': 'Get in touch',
  },
  en: {
    'nav.work': 'Work',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'home.viewWork': 'View Work →',
    'home.selectedWork': 'Selected work',
    'home.viewAll': 'View all projects →',
    'home.aboutEyebrow': 'About',
    'home.aboutMore': 'Learn more about how I work →',
    'home.contactEyebrow': 'Contact',
    'home.contactTitle': 'Get in touch',
    'work.allWork': 'All work',
    'work.back': '← All work',
    'about.eyebrow': 'About',
    'about.tools': 'Tools',
    'about.contact': 'Get in touch',
  },
} as const;
