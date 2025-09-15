import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = process.cwd();
const appFiles = [
  path.join("src", "App.js"),
  path.join("src", "App.jsx"),
  path.join("src", "app", "App.js"),
];

let appContent = "";
for (const f of appFiles) {
  const full = path.resolve(projectRoot, f);
  if (fs.existsSync(full)) {
    appContent = fs.readFileSync(full, "utf8");
    console.log(`Found routes in: ${f}`);
    break;
  }
}

if (!appContent) {
  console.warn("Could not find src/App.js or src/App.jsx. Falling back to manual routes.");
}

// 🔍 Extract all path="..." occurrences
const routesSet = new Set();
if (appContent) {
  const routeRegex = /<Route[^>]*\bpath\s*=\s*["']([^"']+)["'][^>]*>/g;
  let m;
  while ((m = routeRegex.exec(appContent)) !== null) {
    let p = m[1].trim();
    if (p === "" || p === "/") p = "/";
    if (!p.startsWith("/")) p = "/" + p;
    if (p.includes("*") || p.includes(":")) continue; // ignore wildcards/dynamic
    routesSet.add(p);
  }
}

// Fallback manual routes
const manualRoutes = [
  "/",
  "/about",
  "/services",
  "/contact",
  "/careers",
  "/services/lead-generation",
  "/services/inbound-services",
  "/services/transcriptions",
  "/services/life-insurance-sales",
  "/about/team",
];

if (routesSet.size === 0) {
  manualRoutes.forEach((r) => routesSet.add(r));
}

// Base URL — change or set SITE_URL env var
const baseUrl = process.env.SITE_URL || "https://www.nextelbpo.co";

// 📝 Build XML
const routes = Array.from(routesSet).sort();
const urlEntries = routes
  .map((route) => {
    const loc = `${baseUrl}${route}`;
    const lastmod = new Date().toISOString();
    const priority = route === "/" ? "1.0" : "0.8";
    return `
  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>`;
  })
  .join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;

const outPath = path.resolve(projectRoot, "public", "sitemap.xml");
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, sitemap, "utf8");

console.log(`✅ sitemap.xml written to ${outPath} (contains ${routes.length} urls)`);
