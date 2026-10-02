import { chromium } from "playwright";
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1300, height: 900 } });
await page.goto("http://localhost:5173/careers", { waitUntil: "networkidle" });
const titles = await page.$$eval(".careers-split-content .section-title", els => els.map(el => ({
  text: el.textContent,
  overflow: el.scrollWidth > el.clientWidth
})));
console.log(titles);
await browser.close();
