# Fleet Feet Vermont Holiday Gift Guide 2026

A responsive, buildless holiday gift guide with product photography, runner and budget filters, and a take-to-store wish list.

## Run locally

From this directory:

```sh
python3 -m http.server 8000
```

Open http://localhost:8000. No dependency installation or build step is required.

## Features

- Responsive mobile and desktop layouts.
- Shop by runner, product category, search, and budget.
- Saved gifts and individual notes persist in this browser using localStorage.
- Download a phone-friendly PNG; print or save as PDF through the browser.
- Native file sharing appears on supported devices.
- Mobile gift-list bar, gift-card options, directions, phone links, and store FAQs.

## Update the guide

The `gifts` array in `index.html` holds product names, images, online reference prices, product links, and runner categories. Keep IDs stable so existing saved lists continue to work. The HTML, styles, and browser JavaScript are intentionally self-contained in that file. Product and lifestyle assets are in `assets/`.

Prices are online references checked October 27, 2026, not a live local inventory feed. Local selection, final prices, holiday hours, and any holiday return exceptions need store confirmation before a public launch. Products with an unverified price say Ask in store and are excluded from budget filters. Price ranges filter using their lowest reference price.

Regular store information and product-reference links are documented in `SOURCES.md`. Image provenance is recorded in `assets/photo-sources.json`. The wordmark and gift-card graphic are typographic/illustrative placeholders; use approved brand artwork for production.

## Hosting

Serve the repository root from any static host. There is no server, account system, or database. Saved lists stay in the visitor’s browser on the current device; downloaded files are portable. Google Fonts is loaded from the web, with system-font fallbacks. Existing historical files in the repository (`image/`, `main.js`, and `style.css`) are not used by the 2026 page.
