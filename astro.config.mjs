// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Replace with your production URL after deploying to Vercel / Netlify.
// It powers the sitemap and the canonical / Open Graph URLs in BaseLayout.
const SITE_URL = 'https://astro-starter-portfolio.vercel.app';

export default defineConfig({
  site: SITE_URL,

  integrations: [sitemap()],

  // Prefetches internal links on hover/viewport entry for near-instant navigation.
  prefetch: true,

  vite: {
    build: {
      chunkSizeWarningLimit: 1000,
    },
    plugins: [tailwindcss()],
  },
});
