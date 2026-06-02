# COSTE — Digital Experience Strategy
### A reservation engine, event platform & tourist guide — not just a website.

> **Pitch line for the owner:** *"This isn't a website. It's a sunset terrace that's
> open 24/7, takes bookings while you sleep, sells your events, and turns every tourist
> searching 'Sidi Bou Said' into a guest at your table."*

---

## 1. The Brand Read (from @coste_sidi_bou)

| Signal | What we extracted | How it shows up in the site |
|---|---|---|
| **Atmosphere** | Whitewashed walls, cobalt blue, bougainvillea, the bay, golden hour | Pure-white canvas, Sidi Bou blue accents, sunset gradients |
| **Photography** | Warm, sunlit, lifestyle-led, people + plates + the sea | Full-bleed imagery, airy spacing, cinematic crops |
| **Emotion** | Slow luxury, Mediterranean escape, "be seen here" | Manifesto, marquee, editorial typography (Cormorant) |
| **Luxury level** | Soho House / Aman, not "café template" | Custom cursor, glassmorphism, choreographed reveals |

**Positioning:** *Luxury Mediterranean Escape* — authentic Sidi Bou Said, elevated to
international destination-brand standard.

---

## 2. Premium Features COSTE Doesn't Have Yet (all built in this concept)

1. **AI WhatsApp Concierge** — floating chat with an intent engine (reserve, hours,
   sunset time, events, catering, directions, menu, membership). Every conversation can
   hand off to a real WhatsApp pre-filled message. *File: `js/main.js → CONCIERGE`.*
2. **Live Reservation System** — 3-step flow choosing **Terrace / Sunset Table / Indoor /
   VIP**, date, time, guests, occasion → confirms instantly via WhatsApp.
3. **Tourist Experience Hub** — Photo Spots / Hidden Gems / Nearby tabs + map. This is the
   **SEO engine** (see §5) to rank for tourism searches.
4. **Events Platform** — Sunset Sessions, Grand Brunch, Live Under the Stars + Private
   Celebrations lead capture.
5. **Influencer / Creator Portal** — application funnel for collaborations & press.
6. **Corporate Catering** — dedicated B2B lead-gen form (proposal request).
7. **White Club Membership** — priority reservations, VIP access, rewards, birthday ritual;
   invitation-request funnel.

---

## 3. SHOT LIST — Image & Reel Usage

The site currently uses **curated Unsplash placeholders that match the COSTE mood** so it
looks finished today. Swap each for the real asset below. Replace `src="…"` in
`index.html`. Target: **2400px wide hero, 1200–1600px sections, q80 JPG/WebP.**

### Reuse directly from Instagram
| Section | ID | Use this kind of @coste_sidi_bou post |
|---|---|---|
| Hero background | **H1** | The hero **rooftop/terrace at golden hour reel** → use as `<video>` background (see §4) |
| Experience · Café | E1 | Morning coffee + pastry on a sunlit table |
| Experience · Brunch | E2 | The signature brunch spread, overhead |
| Experience · Dinner | E3 | Evening table, candles, the bay behind |
| Experience · Sunset (wide) | E4 | Crowd-favourite sunset-over-sea shot |
| Atmosphere split | A1 | Blue door / white wall architecture detail |
| Menu feature | M1 | Best-looking signature dessert or plated dish |
| Gallery (×6) | G1–G6 | Top 6 most-liked grid posts |

### Reels → video backgrounds
| Placement | What to shoot/repurpose |
|---|---|
| **Hero** | 8–12s loop, terrace pan into the sunset, no captions, muted, color-graded warm |
| Events · Private | 6s loop of an event/celebration ambiance |
| Creator section | Reel of a creator/guest moment, candid |

### Professional photos to commission (the gap Instagram doesn't cover)
- **Hero stills** at 2400px for fast first paint (poster frame for the video).
- **Seating "menu" shots**: clean frames of Terrace / Sunset Table / Indoor / VIP so the
  reservation step previews the *actual* experience.
- **Flat menu hero** per category (To Begin / From the Coast / Golden Hour).
- **Tourist Hub originals**: the blue door, bay lookout, bougainvillea steps shot in
  COSTE's grade so the brand *owns* the Sidi Bou Said imagery on Google.
- **White Club** lifestyle set (VIP table, birthday ritual) for the membership pitch.

---

## 4. Turning the hero into a cinematic video

Replace the hero `<img>` in `index.html` with:

```html
<video autoplay muted loop playsinline poster="img/hero-poster.jpg">
  <source src="video/hero.webm" type="video/webm">
  <source src="video/hero.mp4"  type="video/mp4">
</video>
```

Keep the poster image for instant load and reduced-motion users.

---

## 5. Why this becomes a growth engine (the owner's ROI)

| Goal | Mechanism in the build |
|---|---|
| **More reservations** | One-tap live booking + concierge; WhatsApp = highest-converting channel in Tunisia |
| **More tourist traffic** | Tourist Hub ranks for *"things to do Sidi Bou Said", "best sunset Tunisia", "where to eat Sidi Bou Said"* — capturing demand competitors ignore |
| **Higher average order value** | Chef's Table, VIP tables, Sunset Sessions, pairings surfaced before arrival |
| **More private events** | Dedicated private-events + corporate funnels (high-ticket B2B leads) |
| **More influencer visits** | Creator portal turns inbound DMs into a structured pipeline |
| **Direct leads** | Every form + concierge routes to WhatsApp/CRM — no third-party commission |
| **Brand, not a café** | Editorial design + membership = recognisable, defensible brand |

---

## 6. Go-live checklist

1. **`js/main.js` → `WHATSAPP_NUMBER`** — set the real number (intl format, digits only).
2. Swap placeholder images per the **Shot List** (§3) and add the hero video (§4).
3. Point lead forms at a real backend/CRM (search `Hook real` in `main.js`).
4. Add `<meta>` social image, favicon, and Google Business Profile link.
5. Set up Google Search Console + tourism-keyword content for the Tourist Hub.
6. (Optional) Wire the concierge to a real LLM endpoint for open-ended answers.

---

## 7. Tech notes

- **Zero dependencies** — pure HTML/CSS/JS. Fast, secure, hostable anywhere (Netlify,
  Vercel, Cloudflare Pages, any static host). No build step.
- Accessible: keyboard-closable modals, reduced-motion support, semantic landmarks.
- Responsive from 360px → ultrawide.
- Fonts: Cormorant Garamond (display) + Jost (UI), via Google Fonts.
