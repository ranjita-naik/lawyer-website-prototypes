// Usage: node screenshot.js <baseUrl> <outDir> <page1,page2,...> [widths=1440,768,375]
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

async function main() {
  const [baseUrl, outDir, pagesArg, widthsArg] = process.argv.slice(2);
  if (!baseUrl || !outDir || !pagesArg) {
    console.error('Usage: node screenshot.js <baseUrl> <outDir> <page1,page2,...> [widths=1440,768,375]');
    process.exit(1);
  }
  const pages = pagesArg.split(',').map((p) => p.trim());
  const widths = (widthsArg || '1440,768,375').split(',').map((w) => parseInt(w, 10));

  fs.mkdirSync(outDir, { recursive: true });

  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.emulateMedia({ reducedMotion: 'reduce' });

  for (const slug of pages) {
    const url = `${baseUrl}/${slug}`;
    for (const width of widths) {
      const height = width <= 480 ? 900 : width <= 900 ? 1000 : 900;
      await page.setViewportSize({ width, height });
      try {
        await page.goto(url, { waitUntil: 'networkidle', timeout: 15000 });
      } catch (e) {
        console.error(`Failed to load ${url}: ${e.message}`);
        continue;
      }
      await page.waitForTimeout(150);
      const fileName = `${slug.replace(/\.html$/, '') || 'index'}-${width}.png`;
      const outPath = path.join(outDir, fileName);
      await page.screenshot({ path: outPath, fullPage: true });
      console.log(`Saved ${outPath}`);
    }
  }

  await browser.close();
}

main();
