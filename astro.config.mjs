// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// プロダクション（独自ドメイン）の完全なURLを指定します
const SITE_URL = 'https://kuratani-portfolio.work';

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
