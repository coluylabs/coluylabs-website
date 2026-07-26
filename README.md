# coluylabs.org

Personal site for Coluy Labs — applied cryptography notes and projects.

Next.js App Router, single static page. No client state, no Tailwind.

```
app/
├── layout.tsx      # fonts, metadata, SVG mark sprite
├── page.tsx        # full page
└── globals.css     # design tokens + section styles
public/
└── favicon.svg
```

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build / deploy

```bash
npm run build
npm start
```

Deploy the repo on Vercel, Netlify, or Cloudflare Pages (framework: Next.js). Output is a static prerender of `/`.

## Before going live

1. Confirm domain in `app/layout.tsx` metadata (`metadataBase`, Open Graph URL) if it differs from `coluylabs.org`.
2. Add `public/og.png` — 1200×630, ink background `#16171B` with the reversed mark and wordmark.
3. Check `mailto:hi@coluylabs.org` and the LinkedIn URL in `app/page.tsx`.

## Design tokens

CSS variables in `app/globals.css`:

| Token | Value | Use |
| --- | --- | --- |
| `--paper` | `#FBFAF7` | page background |
| `--paper-2` | `#F3F1EC` | alternating sections |
| `--ink` | `#16171B` | headings, buttons, footer |
| `--ink-2` | `#42444C` | body copy |
| `--muted` | `#6B6D76` | labels, mono meta |
| `--rule` | `#E2E0DA` | hairlines |
| `--accent` | `#2B4A9B` | one element per screen |

Type: Newsreader (display), IBM Plex Sans (body), IBM Plex Mono (labels), loaded via `next/font/google`.
