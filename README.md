# RM Psyllium Website

Static B2B lead-generation website for RM Psyllium, built with Astro, Tailwind CSS, Netlify Forms, GA4, and Microsoft Clarity.

## Stack

- Astro static output
- Tailwind CSS through PostCSS
- Netlify hosting, forms, redirects, and headers
- GA4 and Microsoft Clarity through public environment variables
- Placeholder booking flow until a Calendly URL is available
- Data-driven multilingual microsites for products, regions, ICPs, and insights

Requires Node.js `>=22.12.0`.

## Microsite Architecture

Generated language hubs:

- `/en/`
- `/es/`
- `/fr/`
- `/de/`

Generated route families:

- `/{lang}/products/{product}/`
- `/{lang}/regions/{region}/`
- `/{lang}/industries/{industry}/`
- `/{lang}/insights/{post}/`

Content is managed in `src/data/site.ts`.

Current product routes:

- Psyllium Seeds
- Psyllium Husk
- Psyllium Husk Powder
- Psyllium Khakha Powder
- Organic Psyllium
- Psyllium Cattle Feed

Current ICP routes:

- Pharma & Nutraceutical
- Food, Beverage & Bakery
- Animal Feed
- Industrial & Personal Care

Current region routes:

- United States
- European Union
- Canada
- Middle East
- Australia

## Setup

```bash
npm install
npm run dev
```

Build and preview:

```bash
npm run build
npm run preview
```

## Environment Variables

Create these in Netlify once real IDs are available:

```bash
PUBLIC_GA4_ID=G-XXXXXXXXXX
PUBLIC_CLARITY_ID=xxxxxxxxxx
PUBLIC_BOOKING_URL=https://calendly.com/your-link/sourcing-call
```

Use `.env.example` as the local template.

If `PUBLIC_BOOKING_URL` is empty, the site shows a booking placeholder and spec-builder submissions redirect to `/thank-you`.

## Netlify Deploy

1. Push the project to GitHub.
2. Create a Netlify site from the repository.
3. Use build command `npm run build` and publish directory `dist`.
4. Add the environment variables above.
5. Enable HTTPS and attach the production domain.
6. Confirm Netlify Forms detects `spec-builder` and `playbook-download` after the first deploy.

## Analytics Events

The site exposes `window.rmTrack(eventName, params)` when GA4 or Clarity is configured.

Tracked events include:

- `hero_book_click`
- `hero_playbook_click`
- `spec_builder_submit`
- `guide_download_request`
- `guide_download`
- `email_booking_click`
- `manual_playbook_download`

In GA4, mark the most important events as conversions after data appears. In Clarity, use events to filter recordings around sourcing intent.

## Media Replacement Checklist

Generated facility and product imagery now lives in `public/assets/generated/`.
Before launch, review the generated photography against real RM Psyllium facility
photos when available and replace any asset that should be fully authentic.

Remaining launch media tasks:

- `public/assets/compliance-lab.svg`, if a compliance/lab visual is added to an active page
- `public/playbook-rm-psyllium.pdf`
- `public/favicon.svg`, if a final brand mark exists

Also replace placeholder certification claims with verified certificate IDs, scopes, issue dates, and expiry dates.

## KPI Dashboard Setup

Track weekly:

- Qualified sourcing calls booked
- Spec-builder submissions
- Playbook download requests
- Visitor-to-form conversion rate
- Form-to-call conversion rate
- Top landing pages by qualified intent

Suggested GA4 funnel:

1. `page_view`
2. `hero_playbook_click` or `spec_builder_submit`
3. `guide_download_request`
4. `email_booking_click` or future Calendly booked event

## Launch Validation

Before launch:

```bash
npm run build
npm run preview
```

Then verify:

- No console errors
- No mobile horizontal overflow
- Tap targets are at least 44px
- Netlify forms submit in production
- Redirect `/playbook` resolves to `/resources/playbook`
- GA4 Realtime receives events
- Clarity starts session capture
- Lighthouse scores are 90+ minimum, with 95+ as the target
