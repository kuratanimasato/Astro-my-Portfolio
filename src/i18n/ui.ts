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
    'home.selectedWork': '作品',
    'home.viewAll': '全ての作品を見る →',
    'home.aboutEyebrow': '私について',
    'home.aboutMore': '私の仕事のやり方についてもっと詳しく知る →',
    'home.contactEyebrow': 'お問い合わせ',
    'home.contactTitle': 'お問い合わせはこちらから',
    'work.allWork': 'All work',
    'work.back': '全ての作品',
    'about.eyebrow': '私について',
    'about.tools': 'Tools',
    'site.description':
      '倉谷将人（Masato Kuratani）のポートフォリオ ― スピード、明瞭さ、そして多くの人が見落としがちな細部に重点を置いた、製品デザインとフロントエンドエンジニアリング。',
    'site.role': '製品設計およびフロントエンドエンジニアリング。',
    'about.contact': 'Get in touch',
    'nav.skills': 'スキル',
    'skills.title': 'スキル',
    'skills.description': '私が普段使用している技術やツールの一覧です。',
  },
  en: {
    'nav.work': 'Work',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'home.viewWork': 'View Work →',
    'home.selectedWork': 'Works ',
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
    'site.description':
      'Portfolio of Masato Kuratani — Product design and front-end engineering with a focus on speed, clarity, and details that many overlook.',
    'site.role': 'Product design and front-end engineering.',
    'nav.skills': 'Skills',
    'skills.title': 'Skills',
    'skills.description': 'A list of technologies and tools I use.',
  },
} as const;
