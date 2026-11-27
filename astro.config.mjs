// @ts-check
import { defineConfig } from 'astro/config';
import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = dirname(fileURLToPath(import.meta.url));

function isLocalRequest(request) {
  const remoteAddress = request.socket.remoteAddress ?? '';
  const isLoopback =
    remoteAddress === '::1' ||
    remoteAddress.startsWith('127.') ||
    remoteAddress.startsWith('::ffff:127.');

  if (!isLoopback) return false;

  try {
    const hostname = new URL(`http://${request.headers.host ?? ''}`).hostname;
    return ['localhost', '127.0.0.1', '[::1]'].includes(hostname);
  } catch {
    return false;
  }
}

function localPublishingWorkbench() {
  return {
    name: 'local-publishing-workbench',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use(async (request, response, next) => {
        let pathname;
        try {
          pathname = new URL(request.url ?? '/', 'http://localhost').pathname;
        } catch {
          return next();
        }

        if (pathname !== '/admin' && pathname !== '/admin/') return next();
        if (!isLocalRequest(request) || request.method !== 'GET') {
          response.statusCode = 404;
          response.end('Not found');
          return;
        }

        try {
          const html = await readFile(join(projectRoot, 'dev', 'admin.html'), 'utf8');
          response.statusCode = 200;
          response.setHeader('content-type', 'text/html; charset=utf-8');
          response.end(html);
        } catch (error) {
          console.error('[local-publishing-workbench] Could not load admin page:', error);
          response.statusCode = 500;
          response.end('Could not load the local publishing workbench.');
        }
      });
    },
  };
}

export default defineConfig({
  vite: {
    plugins: [localPublishingWorkbench()],
  },
});
