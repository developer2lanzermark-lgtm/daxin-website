import { chromium } from "playwright";
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1300, height: 900 } });
await page.goto("http://localhost:5176/", { waitUntil: "networkidle" });
await page.evaluate(() => window.scrollTo(0, 5000));
await page.waitForTimeout(200);

await page.click(".zoho-footer__menu-link >> text=About Us");
await page.waitForTimeout(800);
const info = await page.evaluate(() => ({ pathname: location.pathname, scrollY: window.scrollY }));
console.log("clicked About Us from Home page:", JSON.stringify(info));
await browser.close();
