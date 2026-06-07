import { ui, defaultLang, languages, type Lang, type UiKey } from './ui';

export { languages, defaultLang, type Lang, type UiKey };

/** Read the active locale from a URL pathname (works with the configured base). */
export function getLangFromUrl(url: URL): Lang {
  const segments = url.pathname.split('/').filter(Boolean);
  for (const seg of segments) {
    if (seg in ui) return seg as Lang;
  }
  return defaultLang;
}

/** Returns a translator bound to a locale, falling back to the default language. */
export function useTranslations(lang: Lang) {
  return function t(key: UiKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** Pick a localized value from a `{ en, es }` record (content frontmatter). */
export function pick<T>(value: Record<Lang, T> | T, lang: Lang): T {
  if (value && typeof value === 'object' && 'en' in (value as object)) {
    const rec = value as Record<Lang, T>;
    return rec[lang] ?? rec[defaultLang];
  }
  return value as T;
}

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/**
 * Build a localized, base-prefixed, trailing-slash path.
 * localePath('es', 'work/el-balde') -> "/portfolio/es/work/el-balde/"
 */
export function localePath(lang: Lang, path = ''): string {
  const clean = path.replace(/^\/+|\/+$/g, '');
  return `${BASE}/${lang}/${clean ? clean + '/' : ''}`;
}

/** Same path on the *other* locale, derived from the current URL pathname. */
export function alternatePath(url: URL, target: Lang): string {
  let rest = url.pathname;
  if (BASE && rest.startsWith(BASE)) rest = rest.slice(BASE.length);
  rest = rest.replace(/^\/+(en|es)\b/, '').replace(/^\/+|\/+$/g, '');
  return localePath(target, rest);
}

export const localeNames = languages;
