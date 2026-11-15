// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

// 오프라인 저장: 빌드 끝에 서비스 워커(sw.js)를 dist 루트에 쓴다.
// 본 적 있는 같은 출처 GET 응답을 저장하고, 연결이 끊기면 저장본을 보여 준다.
const offlineCache = {
  name: 'offline-cache',
  hooks: {
    'astro:build:done': async ({ dir }) => {
      const { writeFileSync } = await import('node:fs');
      const { fileURLToPath } = await import('node:url');
      const sw = `const CACHE = 'semi-learning-${Date.now()}';
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  e.respondWith(
    fetch(req)
      .then((res) => {
        if (res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy));
        }
        return res;
      })
      .catch(() => caches.match(req, { ignoreSearch: true }))
  );
});
`;
      writeFileSync(fileURLToPath(new URL('sw.js', dir)), sw);
    },
  },
};

// https://astro.build/config
export default defineConfig({
  site: 'https://blossuun.github.io',
  base: '/semiconductor-learning',
  integrations: [mdx(), offlineCache]
});