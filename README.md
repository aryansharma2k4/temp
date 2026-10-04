# Dharani Tharan — Portfolio

Personal portfolio for a backend developer / competitive programmer (CSE @ VIT Chennai).

Built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Structure

```txt
/            Hero, About, Skills, Experience, Featured Projects, Stats, Contact
/projects    Full project archive
```

`/stats` and `/contact` redirect to their homepage sections.

Content (links, skills, experience, projects) lives in `lib/data.tsx`. The first two projects are featured on the homepage. Leave `liveUrl`/`imageUrl` out for a project that has no demo or screenshot; the card then hides the demo link and shows a plain preview tile.

## Stats

The GitHub contribution heatmap uses the GitHub GraphQL contribution calendar and needs a `GITHUB_TOKEN`. If the request fails, the card says "Unavailable right now" instead of showing zeros.

## Environment variables

Every integration is optional. If its keys are missing, that piece is hidden (or says so) instead of showing fake data.

| Variable | Used for |
|----------|----------|
| `GITHUB_TOKEN` | GitHub contribution heatmap, "last updated" date in the footer |
| `SPOTIFY_CLIENT_ID`, `SPOTIFY_CLIENT_SECRET`, `SPOTIFY_REFRESH_TOKEN` | "Last played" line in the hero (refresh token needs the `user-read-recently-played` scope). Shows "Nothing playing right now" until set |
| `RESEND_API_KEY` (+ optional `CONTACT_FROM_EMAIL`) | Contact form delivery via [Resend](https://resend.com). Without a verified domain, Resend only delivers to the account owner's address, so sign up with the portfolio email |
| `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN` | Visitor counter next to the quote ([Upstash Redis](https://upstash.com), free tier). **Shows a random placeholder number until set** |

## Development

```bash
pnpm install
cp .env.example .env.local   # then fill in the keys you want
pnpm dev
```

Run the streak/active-days check: `node --test lib/activity.test.mjs`
