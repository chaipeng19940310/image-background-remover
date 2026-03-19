# Image Background Remover

A lightweight web app to remove image backgrounds instantly using the [remove.bg](https://www.remove.bg) API.

## Features

- Drag & drop or click to upload
- Supports JPG, PNG, WEBP (max 10MB)
- Before / after comparison
- One-click PNG download
- No image storage — all in-memory

## Tech Stack

- Next.js 14 (App Router)
- Tailwind CSS
- remove.bg API
- TypeScript

## Getting Started

```bash
npm install
```

Create `.env.local`:

```
REMOVE_BG_API_KEY=your_api_key_here
```

Get your API key at [remove.bg/api](https://www.remove.bg/api).

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

Deploy to [Vercel](https://vercel.com) in one click. Add `REMOVE_BG_API_KEY` in the environment variables settings.
