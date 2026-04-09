/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // In production the site is served under /weil-de-vega/ on GitHub Pages.
  // In dev we serve from root so `npm run dev` Just Works.
  base: mode === 'production' ? '/weil-de-vega/' : '/',
  test: {
    globals: true,
    environment: 'node',
  },
}));
