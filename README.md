# Image Background Remover

A lightweight MVP for removing image backgrounds online with the remove.bg API.

## Stack

- Next.js 14 (App Router)
- Tailwind CSS
- TypeScript
- Cloudflare Pages deployment target
- remove.bg API for background removal

## MVP features

- Upload a single JPG, PNG, or WEBP image
- File size limit: 10MB
- In-memory processing only
- Transparent PNG response
- SEO-friendly landing pages
- Privacy Policy and Terms pages
- sitemap.xml and robots.txt support

## Local development

```bash
npm install
```

Create `.env.local`:

```bash
REMOVE_BG_API_KEY=your_remove_bg_api_key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Run the dev server:

```bash
npm run dev
```

Open <http://localhost:3000>.

## API

### `POST /api/remove-bg`

Accepts `multipart/form-data` with the field:

- `image`

Returns:

- `image/png` on success
- JSON error payload on failure

## Deployment notes

Deploy to Cloudflare Pages and set these environment variables:

- `REMOVE_BG_API_KEY`
- `NEXT_PUBLIC_SITE_URL`

Recommended production value for `NEXT_PUBLIC_SITE_URL`:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Privacy model

This app is designed not to permanently store uploaded images or processed outputs. Images are forwarded to remove.bg only to fulfill the current request.
