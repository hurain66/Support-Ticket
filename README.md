# Support Dashboard

A production-ready Support Dashboard built with **React + Vite + Tailwind CSS**, featuring:

- Kanban ticket workflow columns for **New**, **In Progress**, and **Resolved**
- SLA badges and ticket metadata
- Support volume trend chart (ECharts)
- Response and performance stat cards
- Recurring issue tags in dummy support tickets
- Sidebar navigation, top search, and filters
- Responsive, light-purple SaaS UI with rounded cards, soft shadows, and minimal iconography

## Preview the app locally

```bash
npm run bootstrap
npm run dev
```

Then open the local URL printed by Vite (usually `http://localhost:5173`).

## Build

```bash
npm run build
```

## Fixing `npm install` 403 (restricted networks)

If you see `403 Forbidden` when installing dependencies, your environment likely blocks direct access to `https://registry.npmjs.org`.

Use an approved internal npm registry:

```bash
export NPM_REGISTRY_URL="https://<your-company-registry>/"
export NPM_TOKEN="<token-if-required>"
npm run bootstrap
```

The bootstrap script will:

1. Set npm to use `NPM_REGISTRY_URL` (if provided)
2. Configure token auth with `NPM_TOKEN` (if provided)
3. Run `npm ping` to confirm access
4. Run `npm install`
