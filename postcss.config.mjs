// Tailwind CSS v4 via PostCSS (avoids the @tailwindcss/vite native resolver,
// which is incompatible with the Rolldown-based Vite bundled in Astro 6).
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
};
