# Support Dashboard

A production-ready Support Dashboard built with **React + Vite + Tailwind CSS**.

> Note: this project is a **web app**, not an Android APK. You run it in a browser using a local dev server.

## Features

- Ticket Kanban columns: **New**, **In Progress**, **Resolved**
- SLA badges and priority tags
- Support volume trends (ECharts)
- Sidebar navigation, search, filters
- Responsive light-purple SaaS UI

---

## 1) Prerequisites

Install these first:

- **Node.js 20+** (or 18.18+)
- **npm 9+**

Verify:

```bash
node -v
npm -v
```

---

## 2) Run locally in browser

From the project root:

```bash
npm run bootstrap
npm run dev
```

Then open the URL shown in terminal (typically):

- `http://localhost:5173`

To expose on your LAN (same Wi-Fi):

```bash
npm run dev -- --host
```

---

## 3) If `npm install`/`bootstrap` fails with 403

A `403 Forbidden` means your network blocks direct npmjs access.

Use your company/private npm registry:

```bash
export NPM_REGISTRY_URL="https://<your-company-registry>/"
export NPM_TOKEN="<token-if-required>"
npm run bootstrap
```

What bootstrap does:

1. Sets npm registry from `NPM_REGISTRY_URL` (if provided)
2. Sets auth token from `NPM_TOKEN` (if provided)
3. Runs `npm ping`
4. Runs `npm install`

### Windows PowerShell equivalent

```powershell
$env:NPM_REGISTRY_URL="https://<your-company-registry>/"
$env:NPM_TOKEN="<token-if-required>"
npm run bootstrap
```

---

## 4) Production build and preview

```bash
npm run build
npm run preview
```

Preview URL is usually:

- `http://localhost:4173`

---

## 5) Common issues

- **Port already in use**: run `npm run dev -- --port 5174`
- **Blank page after start**: check terminal for compile errors and open browser devtools console
- **Dependency install still blocked**: ask your admin for the approved npm registry URL/token
