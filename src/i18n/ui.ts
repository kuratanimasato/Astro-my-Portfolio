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
    'home.viewWork': '作品を見る ',
    'home.selectedWork': '作品',
    'home.viewAll': '全ての作品を見る ',
    'home.aboutEyebrow': '私について',
    'home.aboutMore': '私の仕事のやり方についてもっと詳しく知る',
    'home.contactEyebrow': 'お問い合わせ',
    'home.contactTitle': 'ご相談・お問い合わせはこちらから',
    'work.allWork': '全ての作品一覧',
    'work.back': '全ての作品一覧へ戻る',
    'about.eyebrow': '私について',
    'about.tools': 'ツール',
    'site.description':
      'Webサイトの受託運用（3年）軸に、デザインから実装・改善まで対応。異業種で培った確実な作業精度とユーザー視点で、成果につながるサイトを構築します。',
    'site.role': '人や地域の課題をIT・Web・AIの力で解決する。',
    'about.contact': '連絡を取る',
    'nav.skills': 'スキル',
    'skills.title': 'スキル',
    'skills.description': '私が普段使用している技術やツールの一覧です。',
  },
  en: {
    'nav.work': 'Work',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'home.viewWork': 'View Work',
    'home.selectedWork': 'Works ',
    'home.viewAll': 'View all projects ',
    'home.aboutEyebrow': 'About',
    'home.aboutMore': 'Learn more about how I work ',
    'home.contactEyebrow': 'Contact',
    'home.contactTitle': 'Get in touch',
    'work.allWork': 'All work',
    'work.back': 'Back to All Works',
    'about.eyebrow': 'About',
    'about.tools': 'Tools',
    'about.contact': 'Get in touch',
    'site.description':
      'Building results-driven websites through design, development, and continuous management—backed by three years of experience. Delivering reliable execution and a user-first perspective cultivated across diverse industries.',
    'site.role': 'Empowering people and local businesses with IT, Web, and AI solutions.',
    'nav.skills': 'Skills',
    'skills.title': 'Skills',
    'skills.description': 'A list of technologies and tools I use.',
  },
} as const;
