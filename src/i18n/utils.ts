import { ui, defaultLang, languages, type Locale } from './ui';

export function getLangFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Locale;
  return defaultLang;
}

export function useTranslations(lang: Locale) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    // ui[lang] にキーが存在しない場合でも safe にアクセスできるようにキャストし、
    // フォールバック（デフォルト言語 → キー文字列そのもの）を設定
    const langDict = ui[lang] as Record<string, string>;
    const defaultDict = ui[defaultLang] as Record<string, string>;

    return langDict[key] || defaultDict[key] || key;
  };
}

export function getCleanPathname(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length > 0 && segments[0] in languages) {
    segments.shift();
  }
  return '/' + segments.join('/');
}
