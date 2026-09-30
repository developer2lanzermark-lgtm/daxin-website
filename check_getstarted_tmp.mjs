import { chromium } from "playwright";
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1300, height: 900 } });
const errors = [];
page.on("pageerror", e => errors.push(e.message));

await page.goto("http://localhost:5173/careers", { waitUntil: "networkidle" });
const careersBtn = await page.$eval(".get-started__cta", el => ({ tag: el.tagName, text: el.textContent, href: el.getAttribute("href"), target: el.getAttribute("target") }));
console.log("On /careers:", careersBtn);

await page.goto("http://localhost:5173/", { waitUntil: "networkidle" });
const homeBtn = await page.$eval(".get-started__cta", el => ({ tag: el.tagName, text: el.textContent }));
console.log("On /:", homeBtn);

await page.goto("http://localhost:5173/about", { waitUntil: "networkidle" });
const aboutBtn = await page.$eval(".get-started__cta", el => ({ tag: el.tagName, text: el.textContent }));
console.log("On /about:", aboutBtn);

console.log("Errors:", errors);
await browser.close();
