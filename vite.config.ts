import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig, type Plugin } from 'vite';

const SITE = 'https://kendyux.online';

// Pages that get their own share metadata. The app is a SPA, so link-preview crawlers
// only see index.html; this writes a copy per route with that page's tags.
const pageMeta = [
  {
    path: 'loremiq-revenue-workspace',
    title: 'LoremIQ Revenue Workspace · Saurav Kendre',
    description:
      'A revenue workspace where a sales rep and her manager each get their answer in ten seconds, from the same system.',
    image: '/images/loremiq/cover.png',
  },
];

const escape = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

function perPageMeta(): Plugin {
  let outDir = 'dist';
  return {
    name: 'per-page-meta',
    apply: 'build',
    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir);
    },
    closeBundle() {
      const base = readFileSync(resolve(outDir, 'index.html'), 'utf8');
      for (const page of pageMeta) {
        const url = `${SITE}/${page.path}`;
        const t = escape(page.title);
        const d = escape(page.description);
        const img = `${SITE}${page.image}`;
        const html = base
          .replace(/<title>[^<]*<\/title>/, `<title>${t}</title>\n    <link rel="canonical" href="${url}" />`)
          .replace(/(<meta name="description" content=")[^"]*/, `$1${d}`)
          .replace(/(<meta property="og:type" content=")[^"]*/, '$1article')
          .replace(/(<meta property="og:title" content=")[^"]*/, `$1${t}`)
          .replace(/(<meta property="og:description" content=")[^"]*/, `$1${d}`)
          .replace(/(<meta property="og:image" content=")[^"]*"( \/>)/, `$1${img}"$2\n    <meta property="og:url" content="${url}" />\n    <meta property="og:image:width" content="1200" />\n    <meta property="og:image:height" content="630" />`)
          .replace(/(<meta name="twitter:title" content=")[^"]*/, `$1${t}`)
          .replace(/(<meta name="twitter:description" content=")[^"]*/, `$1${d}`)
          .replace(/(<meta name="twitter:image" content=")[^"]*/, `$1${img}`);
        mkdirSync(resolve(outDir, page.path), { recursive: true });
        writeFileSync(resolve(outDir, page.path, 'index.html'), html);
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), perPageMeta()],
  server: {
    port: 3000,
  },
});
