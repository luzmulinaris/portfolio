// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// GitHub Pages (project site): https://luzmulinaris.github.io/portfolio
const SITE = 'https://luzmulinaris.github.io';
const BASE = '/portfolio';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'always',
  prefetch: { prefetchAll: true, defaultStrategy: 'viewport' },

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: true,
      // Root -> /en/ is handled by src/pages/index.astro (base-aware), so the
      // automatic locale redirect is disabled to keep it deterministic.
      redirectToDefaultLocale: false,
    },
  },

  integrations: [
    react(),
    mdx(),
    sitemap({
      // The root /portfolio/ page is a noindex meta-refresh redirect to /en/.
      // Exclude it so Search Console doesn't flag "Submitted URL marked
      // 'noindex'" and so the home cluster doesn't emit duplicate hreflang=en.
      filter: (page) => page !== `${SITE}${BASE}/`,
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', es: 'es' },
      },
    }),
  ],
});
