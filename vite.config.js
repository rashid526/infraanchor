import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const pages = ['index', 'services', 'industries', 'about', 'work', 'insights', 'contact', 'unsubscribe', '404'];

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        pages.map((page) => [page, fileURLToPath(new URL(`./${page}.html`, import.meta.url))]),
      ),
    },
  },
});
