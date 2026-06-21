/** Prefix a root-relative asset path with the configured Astro base. */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}`;
}

/** Strip the locale subfolder from a content-collection id ("en/foo" -> "foo"). */
export function stripLocale(id: string): string {
  return id.replace(/^(en|es)\//, '');
}

/** Format a date for a given locale. */
export function formatDate(date: Date, lang: 'en' | 'es'): string {
  return new Intl.DateTimeFormat(lang === 'es' ? 'es-AR' : 'en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    // Frontmatter dates are bare calendar dates parsed as UTC midnight; format in
    // UTC so the displayed day is deterministic regardless of the build host's TZ.
    timeZone: 'UTC',
  }).format(date);
}

/** Map a project category to its UI translation key. */
export const categoryKey = {
  editorial: 'cat.editorial',
  packaging: 'cat.packaging',
  social: 'cat.social',
  identity: 'cat.identity',
  information: 'cat.information',
  other: 'cat.other',
} as const;
