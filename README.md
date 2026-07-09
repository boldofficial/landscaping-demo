# Friendly Landscaping

Static Next.js site for Friendly Landscaping LLC, a Madison-area landscaping and hardscaping business.

## Development

```bash
npm run dev
```

Open `http://localhost:3000`.

## Build and Verify

```bash
npm run lint
npm run build
npm run verify:export
```

The project uses `output: 'export'`, so production files are generated in `out/`. The verification script checks for core exported pages, `sitemap.xml`, `robots.txt`, stale generated routes, missing page metadata, and internal links that point to missing exports.

## Site URL

SEO metadata, canonical URLs, sitemap URLs, and JSON-LD use:

```bash
NEXT_PUBLIC_SITE_URL=https://www.friendlylandscapingllc.com
```

Set this environment variable to the real production domain before deployment if the domain differs.

## Contact Path

The site currently routes quote requests to the known phone number, `(608) 481-9571`. Do not add a success-state contact form until a real static-compatible provider is configured, such as a form service, CRM endpoint, or hosted email workflow.

## Content Source

Public business facts, services, blog posts, portfolio items, and shared route data live in `src/lib/site-content.ts`. Update that file first when changing service names, phone number, service area, metadata, sitemap entries, or structured data.
