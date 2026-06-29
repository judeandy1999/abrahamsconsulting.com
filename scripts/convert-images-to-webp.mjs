import { readdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const PUBLIC_DIR = path.join(process.cwd(), "public");
const RASTER_EXT = new Set([".png", ".jpg", ".jpeg"]);
const QUALITY = 85;

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)));
    } else if (entry.isFile()) {
      files.push(fullPath);
    }
  }

  return files;
}

async function convertFile(sourcePath) {
  const ext = path.extname(sourcePath).toLowerCase();
  if (!RASTER_EXT.has(ext)) {
    return null;
  }

  const targetPath = sourcePath.replace(/\.(png|jpe?g)$/i, ".webp");
  const sourceStat = await stat(sourcePath);
  let targetStat = null;

  try {
    targetStat = await stat(targetPath);
  } catch {
    targetStat = null;
  }

  if (targetStat && targetStat.mtimeMs >= sourceStat.mtimeMs) {
    return { sourcePath, targetPath, skipped: true };
  }

  await sharp(sourcePath).webp({ quality: QUALITY, effort: 4 }).toFile(targetPath);

  const savedPct = (((sourceStat.size - (await stat(targetPath)).size) / sourceStat.size) * 100).toFixed(1);

  return { sourcePath, targetPath, skipped: false, savedPct };
}

const files = await walk(PUBLIC_DIR);
const results = [];

for (const file of files) {
  const result = await convertFile(file);
  if (result) {
    results.push(result);
  }
}

const converted = results.filter((result) => !result.skipped);
const skipped = results.filter((result) => result.skipped);

console.log(`Converted ${converted.length} image(s) to WebP.`);
for (const result of converted) {
  console.log(`  ${path.relative(PUBLIC_DIR, result.sourcePath)} -> ${path.relative(PUBLIC_DIR, result.targetPath)} (${result.savedPct}% smaller)`);
}

if (skipped.length > 0) {
  console.log(`Skipped ${skipped.length} up-to-date WebP file(s).`);
}
