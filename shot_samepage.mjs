import { chromium } from "playwright";
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1300, height: 900 } });
await page.goto("http://localhost:5176/about", { waitUntil: "networkidle" });
await page.evaluate(() => window.scrollTo(0, 1200));
await page.waitForTimeout(200);
const scrollBefore = await page.evaluate(() => window.scrollY);
console.log("scroll before clicking About Us (already on /about):", scrollBefore);

await page.click(".zoho-footer__menu-link >> text=About Us");
await page.waitForTimeout(1200);

const info = await page.evaluate(() => ({
  scrollAfter: window.scrollY,
  pathname: location.pathname,
}));
console.log(JSON.stringify(info, null, 2));
await browser.close();
