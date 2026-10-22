import { cp, mkdir, rm, stat } from 'node:fs/promises';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const outDir = join(root, 'dist');

const entries = ['index.html', 'translations.js', 'images'];

async function exists(path) {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
}

await rm(outDir, { recursive: true, force: true });
await mkdir(outDir, { recursive: true });

for (const entry of entries) {
  const from = join(root, entry);
  if (!(await exists(from))) {
    console.warn(`[build] skipped missing "${entry}"`);
    continue;
  }
  await cp(from, join(outDir, entry), { recursive: true });
  console.log(`[build] copied ${entry}`);
}

console.log(`[build] done -> ${relative(root, outDir) || 'dist'}/`);
