# Content Buddy

A mobile-first, single-page content analytics and management dashboard. It's a mashup of a social media analytics dashboard and a content planning tool, designed to help creators see what's performing, manage subscriptions, plan uploads, respond to top comments, and track trending topics.

## Features

- **Highs and Lows** — Content Feed Overview showing the top 2 over-performing and bottom 2 under-performing posts (2x2 grid).
- **Subscription Management** — Three cards for Total Subscribers, New Subscribers this month, and Lost Subscribers, each with a month-over-month change indicator.
- **Upload Queue** — Scheduled posts going out over the next week (up to 5 per day).
- **Engagement Summary** — Top 5 comments to respond to.
- **Trending Section** — Trending topics, hashtags, and music.
- **Change Indicators** — Small up/down arrows and color cues to show change from the previous month.
- **Dark / Light Theme** — Vuetify dark theme by default, with a toggle in the top app bar.
- **Mobile Responsive** — Cards stack on small screens using Vuetify's responsive grid.

## Tech Stack

- **[Vue 3](https://vuejs.org/)** — Composition API + `<script setup>` single-file components
- **[TypeScript](https://www.typescriptlang.org/)** — Type-safe components and data models
- **[Vuetify 3](https://vuetifyjs.com/)** — Material Design component library (app bar, cards, grid)
- **[Chart.js](https://www.chartjs.org/)** + **[vue-chartjs](https://vue-chartjs.org/)** — Charts with a cohesive color palette
- **[Vite 6](https://vitejs.dev/)** — Dev server and build tool
- **[Material Design Icons](https://pictogrammers.com/library/mdi/)** (`@mdi/font`) — Icon set
- **Local JSON data** — Fake dataset in `src/datametrics.json` (12 months, Jan–Dec 2025), no API calls

## Project Structure

```
index.html
package.json
vite.config.ts
tsconfig.json
PLAN.md
src/
  App.vue                  # Root layout (v-app-bar + sections)
  main.ts                  # App bootstrap + Vuetify plugin registration
  datametrics.json         # 12 months of fake analytics data
  types.ts                 # Shared TypeScript types
  shims-vue.d.ts           # Vue SFC type shims
  components/
    ChangeIndicator.vue    # Up/down arrow + color for MoM change
    EngagementSummary.vue  # Top comments to respond to
    HighsAndLows.vue       # Over/under performing posts
    MetricCard.vue         # Reusable metric card
    PostCard.vue           # Reusable post preview card
    SubscriptionManagement.vue
    TrendingSection.vue    # Topics, hashtags, music
    UploadQueue.vue        # Scheduled posts for the week
  plugins/
    vuetify.ts             # Vuetify theme + config
  utils/
    format.ts              # Number/date formatting helpers
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Install

```bash
npm install
```

### Run the dev server

```bash
npm run dev
```

Open http://localhost:5173 in your browser.

### Build for production

```bash
npm run build
```

This runs `vue-tsc --noEmit` for a type-check pass and then builds with Vite. Output is written to `dist/`.

### Preview the production build

```bash
npm run preview
```

## Data Model

All data is loaded from `src/datametrics.json`. Each of the 12 months contains:

- Content Feed Overview (over-performing and under-performing posts)
- Subscription Management (subscriber counts and changes)
- Upload Queue (scheduled posts by date)
- Engagement Summary (top comments)
- Trending (topics, hashtags, music)

Shared TypeScript types live in `src/types.ts`.

## Design Notes

- Dark theme by default; light theme available via app bar toggle.
- Clean, minimal layout with generous whitespace.
- Charts use a cohesive (non-rainbow) palette for readability.
- Responsive grid built with `v-container`, `v-row`, and `v-col` — cards stack on small screens.
- Single page — no routing needed.

## Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build locally |

## See Also

- [PLAN.md](PLAN.md) — Original product plan and requirements.
