/**
 * Generates three static assets into /public:
 *   og-image.jpg        — 1200×630 social preview screenshot of the live site
 *   apple-touch-icon.png — 180×180 iOS home screen icon
 *   favicon-96x96.png    — 96×96 legacy browser favicon
 *
 * Usage:
 *   npm run screenshot
 *
 * Requires Playwright to be installed:
 *   npm install --save-dev playwright
 *   npx playwright install chromium
 */

import { chromium } from 'playwright';
import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = resolve(__dirname, '../public');

const SITE_URL = 'https://gios-barbershop.vercel.app/';

// Logo SVG inner content (uses currentColor — set color:white via CSS)
const LOGO_INNER = `
  <rect x="26" y="8" width="12" height="44" rx="6" fill="#fff" stroke="currentColor" stroke-width="2"/>
  <clipPath id="pole-clip-logo">
    <rect x="26" y="8" width="12" height="44" rx="6"/>
  </clipPath>
  <g clip-path="url(#pole-clip-logo)">
    <rect x="24" y="4" width="5" height="56" transform="rotate(-30 32 30)" fill="currentColor" opacity="0.15"/>
    <rect x="30" y="4" width="5" height="56" transform="rotate(-30 32 30)" fill="currentColor" opacity="0.5"/>
    <rect x="36" y="4" width="5" height="56" transform="rotate(-30 32 30)" fill="currentColor" opacity="0.15"/>
  </g>
  <rect x="23" y="6" width="18" height="5" rx="2.5" fill="currentColor"/>
  <rect x="23" y="53" width="18" height="5" rx="2.5" fill="currentColor"/>
  <path d="M10 20 Q14 26 18 30" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" fill="none"/>
  <circle cx="10" cy="20" r="3" fill="none" stroke="currentColor" stroke-width="2"/>
  <path d="M10 40 Q14 34 18 30" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" fill="none"/>
  <circle cx="10" cy="40" r="3" fill="none" stroke="currentColor" stroke-width="2"/>
  <circle cx="18" cy="30" r="2" fill="currentColor"/>
  <rect x="46" y="18" width="3" height="28" rx="1.5" fill="currentColor"/>
  <line x1="49" y1="20" x2="54" y2="20" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  <line x1="49" y1="24" x2="54" y2="24" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  <line x1="49" y1="28" x2="54" y2="28" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  <line x1="49" y1="32" x2="54" y2="32" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  <line x1="49" y1="36" x2="54" y2="36" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  <line x1="49" y1="40" x2="54" y2="40" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  <line x1="49" y1="44" x2="54" y2="44" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
`;

function iconHtml(size) {
  const iconSize = Math.round(size * 0.65);
  return `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body {
    width: ${size}px;
    height: ${size}px;
    background: #1A1410;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
</head>
<body>
  <svg xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 64 64"
       fill="none"
       style="width:${iconSize}px;height:${iconSize}px;color:white;">
    ${LOGO_INNER}
  </svg>
</body>
</html>`;
}

async function run() {
  console.log('Launching browser…');
  const browser = await chromium.launch();

  try {
    // ── 1. OG Image (1200×630) ──────────────────────────────────────────────
    console.log(`Navigating to ${SITE_URL}`);
    const ogPage = await browser.newPage();
    await ogPage.setViewportSize({ width: 1200, height: 630 });
    await ogPage.goto(SITE_URL, { waitUntil: 'networkidle', timeout: 30000 });
    // Let any CSS animations settle
    await ogPage.waitForTimeout(800);
    const ogBuffer = await ogPage.screenshot({ type: 'jpeg', quality: 88, fullPage: false });
    writeFileSync(resolve(publicDir, 'og-image.jpg'), ogBuffer);
    console.log('✓  public/og-image.jpg');
    await ogPage.close();

    // ── 2. Apple Touch Icon (180×180) ───────────────────────────────────────
    const applePage = await browser.newPage();
    await applePage.setViewportSize({ width: 180, height: 180 });
    await applePage.setContent(iconHtml(180), { waitUntil: 'domcontentloaded' });
    const appleBuffer = await applePage.screenshot({ type: 'png' });
    writeFileSync(resolve(publicDir, 'apple-touch-icon.png'), appleBuffer);
    console.log('✓  public/apple-touch-icon.png');
    await applePage.close();

    // ── 3. Favicon 96×96 ───────────────────────────────────────────────────
    const faviconPage = await browser.newPage();
    await faviconPage.setViewportSize({ width: 96, height: 96 });
    await faviconPage.setContent(iconHtml(96), { waitUntil: 'domcontentloaded' });
    const faviconBuffer = await faviconPage.screenshot({ type: 'png' });
    writeFileSync(resolve(publicDir, 'favicon-96x96.png'), faviconBuffer);
    console.log('✓  public/favicon-96x96.png');
    await faviconPage.close();

  } finally {
    await browser.close();
  }

  console.log('\nDone. All assets saved to /public.');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
