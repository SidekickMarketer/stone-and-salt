const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

// ===== STONE & SALT — ALL PAGES =====
const PAGES = [
  // Core pages
  { name: 'homepage', path: '/' },
  { name: 'about', path: '/about' },
  { name: 'contact', path: '/contact' },
  // Services
  { name: 'commercial-grounds', path: '/services/commercial-grounds' },
  { name: 'snow-removal', path: '/services/snow-removal' },
  { name: 'hardscapes', path: '/services/hardscapes' },
  { name: 'maintenance', path: '/services/maintenance' },
  { name: 'estate-maintenance', path: '/services/estate-maintenance' },
  // Special
  { name: 'snow-emergency', path: '/snow-emergency' },
  // Areas
  { name: 'areas', path: '/areas' },
  { name: 'area-liberty-township', path: '/areas/liberty-township' },
  { name: 'area-west-chester', path: '/areas/west-chester' },
  { name: 'area-mason', path: '/areas/mason' },
  { name: 'area-blue-ash', path: '/areas/blue-ash' },
  { name: 'area-loveland', path: '/areas/loveland' },
  { name: 'area-indian-hill', path: '/areas/indian-hill' },
  { name: 'area-anderson-township', path: '/areas/anderson-township' },
  { name: 'area-hyde-park', path: '/areas/hyde-park' },
  { name: 'area-montgomery', path: '/areas/montgomery' },
  { name: 'area-oxford', path: '/areas/oxford' },
  { name: 'area-waynesville', path: '/areas/waynesville' },
  // Legal
  { name: 'privacy', path: '/privacy' },
  { name: 'terms', path: '/terms' },
];

const BASE_URL = 'http://localhost:3000';
// ===== END CONFIG =====

const VIEWPORTS = [
  { name: 'mobile', width: 375, height: 812 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1440, height: 900 },
];

const OUTPUT_DIR = process.env.SCREENSHOT_DIR || './screenshots';

(async () => {
  if (fs.existsSync(OUTPUT_DIR)) {
    fs.rmSync(OUTPUT_DIR, { recursive: true });
  }
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const browser = await chromium.launch();

  for (const viewport of VIEWPORTS) {
    const context = await browser.newContext({
      viewport: { width: viewport.width, height: viewport.height },
    });
    const page = await context.newPage();

    for (const p of PAGES) {
      try {
        await page.goto(`${BASE_URL}${p.path}`, { waitUntil: 'networkidle', timeout: 15000 });

        // Full page screenshot
        await page.screenshot({
          path: path.join(OUTPUT_DIR, `${p.name}-${viewport.name}-full.png`),
          fullPage: true,
        });

        // Above-the-fold screenshot
        await page.screenshot({
          path: path.join(OUTPUT_DIR, `${p.name}-${viewport.name}-fold.png`),
          fullPage: false,
        });

        console.log(`Done: ${p.name} @ ${viewport.name}`);
      } catch (err) {
        console.log(`Failed: ${p.name} @ ${viewport.name}: ${err.message}`);
      }
    }

    await context.close();
  }

  await browser.close();
  console.log(`\nScreenshots saved to ${OUTPUT_DIR}/`);
})();
