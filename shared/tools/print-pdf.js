// Usage: node print-pdf.js <htmlFilePath> <outPdfPath> [widthPx=1280] [heightPx=800]
const { chromium } = require('playwright');
const path = require('path');

async function main() {
  const [htmlFilePath, outPdfPath, widthArg, heightArg] = process.argv.slice(2);
  if (!htmlFilePath || !outPdfPath) {
    console.error('Usage: node print-pdf.js <htmlFilePath> <outPdfPath> [widthPx=1280] [heightPx=800]');
    process.exit(1);
  }
  const width = parseInt(widthArg || '1280', 10);
  const height = parseInt(heightArg || '800', 10);
  const fileUrl = `file://${path.resolve(htmlFilePath)}`;

  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width, height } });
  await page.emulateMedia({ media: 'print', reducedMotion: 'reduce' });
  await page.goto(fileUrl, { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(200);

  await page.pdf({
    path: path.resolve(outPdfPath),
    width: `${width}px`,
    height: `${height}px`,
    printBackground: true,
    margin: { top: '0px', bottom: '0px', left: '0px', right: '0px' },
  });

  console.log(`Saved ${outPdfPath}`);
  await browser.close();
}

main();
