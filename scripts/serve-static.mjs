import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import { createServer } from 'node:http';
import { dirname, extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const outDir = join(root, 'dist');
const port = Number(process.env.PORT ?? 5173);

const mime = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.json': 'application/json; charset=utf-8',
  '.woff2': 'font/woff2',
};

createServer(async (req, res) => {
  const url = decodeURIComponent((req.url ?? '/').split('?')[0]);
  const safe = normalize(url).replace(/^(\.\.[/\\])+/, '');
  let filePath = join(outDir, safe);

  try {
    const info = await stat(filePath);
    if (info.isDirectory()) filePath = join(filePath, 'index.html');
  } catch {
    filePath = join(outDir, 'index.html');
  }

  try {
    await stat(filePath);
  } catch {
    res.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' });
    res.end('404 — run `npm run build` first');
    return;
  }

  res.writeHead(200, {
    'content-type': mime[extname(filePath).toLowerCase()] ?? 'application/octet-stream',
    'cache-control': 'no-cache',
  });
  createReadStream(filePath).pipe(res);
}).listen(port, () => {
  console.log(`[preview] serving dist/ at http://localhost:${port}`);
});
