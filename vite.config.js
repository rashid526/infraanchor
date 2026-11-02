import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const pages = ['index', 'services', 'industries', 'about', 'work', 'insights', 'contact', 'unsubscribe', '404'];

function inlineStylesheets() {
  return {
    name: 'inline-stylesheets',
    apply: 'build',
    enforce: 'post',
    generateBundle(_, bundle) {
      const styles = [];
      for (const [name, file] of Object.entries(bundle)) {
        if (file.type === 'asset' && name.endsWith('.css')) {
          styles.push(String(file.source));
          delete bundle[name];
        }
      }
      if (styles.length === 0) return;

      const cssText = JSON.stringify(styles.join('\n'));
      const injector = `(function(){var s=document.createElement('style');s.textContent=${cssText};document.head.appendChild(s);})();\n`;

      for (const file of Object.values(bundle)) {
        if (file.type === 'chunk') {
          file.code = injector + file.code;
        }
        if (file.type === 'asset' && file.fileName.endsWith('.html')) {
          file.source = String(file.source).replace(/<link rel="stylesheet"[^>]*href="\/assets\/[^"]+\.css"[^>]*>/g, '');
        }
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), inlineStylesheets()],
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        pages.map((page) => [page, fileURLToPath(new URL(`./${page}.html`, import.meta.url))]),
      ),
    },
  },
});
