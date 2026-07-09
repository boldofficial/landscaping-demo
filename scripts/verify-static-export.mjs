import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const outDir = path.join(root, "out");
const srcAppDir = path.join(root, "src", "app");
const failures = [];

function fail(message) {
  failures.push(message);
}

function walk(dir) {
  if (!existsSync(dir)) {
    return [];
  }

  return readdirSync(dir).flatMap((entry) => {
    const fullPath = path.join(dir, entry);
    const stats = statSync(fullPath);
    return stats.isDirectory() ? walk(fullPath) : [fullPath];
  });
}

function routeToFile(route) {
  if (route === "/") {
    return path.join(outDir, "index.html");
  }

  return path.join(outDir, `${route.replace(/^\//, "")}.html`);
}

function sourceRouteExists(route) {
  if (route === "/") {
    return existsSync(path.join(srcAppDir, "page.tsx"));
  }

  return existsSync(path.join(srcAppDir, route.replace(/^\//, ""), "page.tsx"));
}

if (!existsSync(outDir)) {
  fail("out/ does not exist. Run npm run build before verify:export.");
} else {
  for (const requiredFile of ["sitemap.xml", "robots.txt", "index.html", "about.html", "services.html", "portfolio.html", "blog.html", "contact.html"]) {
    if (!existsSync(path.join(outDir, requiredFile))) {
      fail(`Missing exported file: out/${requiredFile}`);
    }
  }

  if (existsSync(path.join(outDir, "spring-promo.html")) && !sourceRouteExists("/spring-promo")) {
    fail("Stale export detected: out/spring-promo.html exists without a source route.");
  }

  const htmlFiles = walk(outDir).filter((file) => file.endsWith(".html"));
  const internalRoutes = new Set();

  for (const file of htmlFiles) {
    const html = readFileSync(file, "utf8");
    const rel = path.relative(outDir, file).replaceAll(path.sep, "/");

    if (!/<title>[^<]+<\/title>/.test(html)) {
      fail(`${rel} is missing a title tag.`);
    }

    if (!/<meta name="description" content="[^"]+"/.test(html)) {
      fail(`${rel} is missing a meta description.`);
    }

    for (const match of html.matchAll(/\shref="(\/[^"#?]+)"/g)) {
      const href = match[1].replace(/\/$/, "") || "/";
      if (
        href.startsWith("/_next") ||
        href.startsWith("/images") ||
        href === "/favicon.ico" ||
        path.extname(href)
      ) {
        continue;
      }
      internalRoutes.add(href);
    }
  }

  for (const route of internalRoutes) {
    if (!existsSync(routeToFile(route))) {
      fail(`Internal link points to missing export: ${route}`);
    }
  }
}

if (failures.length > 0) {
  console.error("Static export verification failed:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log("Static export verification passed.");
