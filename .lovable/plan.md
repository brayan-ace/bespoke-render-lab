
# Hollyken Hotel — Luxury Website Plan

A premium, multi-page hotel site with emerald + gold branding, using your uploaded photo as the hero and AI-generated cohesive imagery everywhere else.

## Design system

- **Palette**: Deep Emerald `oklch(0.32 0.07 165)`, Warm Gold `oklch(0.78 0.14 85)`, Cream `oklch(0.96 0.02 85)`, Charcoal `oklch(0.22 0.01 260)`, soft white backgrounds. Gold gradient CTAs with elegant hover lift.
- **Typography**: Playfair Display (headings, elegant serif) + Inter (body). Large tracking, generous line-height.
- **Tokens** in `src/styles.css`: semantic colors, `--gradient-gold`, `--gradient-emerald-veil`, `--shadow-luxe`, `--shadow-soft-gold`, rounded-2xl defaults.
- **Motion**: framer-motion for fade/rise on scroll, subtle parallax on hero, hover scale on cards, floating hero badges.

## Route architecture (TanStack Start)

Each gets its own `head()` with unique title/description/OG tags + JSON-LD:

- `/` — Home (hero, highlights, featured rooms, amenities preview, dining teaser, testimonials, booking CTA)
- `/rooms` — All 4 room types with details
- `/dining` — Restaurant, menu highlights, food gallery
- `/gallery` — Masonry gallery
- `/amenities` — Full amenities grid + "Why choose us"
- `/reviews` — Testimonials carousel + written reviews
- `/location` — Embedded Google Map + directions + nearby landmarks
- `/contact` — Form, phone, WhatsApp, hours

Sticky nav (transparent → solid on scroll), elegant mobile drawer, floating WhatsApp button sitewide, footer with quick links + socials + back-to-top.

## Imagery

- **Hero**: your uploaded exterior photo (kept as-is, warm cinematic gradient overlay).
- **Generated (photorealistic, warm/elegant grade to match hero)**: logo (gold+emerald mark), 4 room interiors, reception, restaurant interior, 3 food plates, hallway, exterior detail, pool/relaxation, amenity thumbnails as needed. Saved to `src/assets/`.

## Content sections (per master prompt)

Hero copy, rooms (Deluxe/Executive/Family/Standard), 12 amenity cards, Why Choose (8 points), Dining, Gallery, Reviews carousel (honest sentiment), About, Location, Contact, Booking CTA, FAQ, newsletter, footer.

## Interactive/booking

- Primary CTA "Book Your Stay" → WhatsApp deep link: `https://wa.me/237674844485?text=Hello%20Hollyken%20Hotel...`
- "Call Now" → `tel:+237674844485`
- Floating WhatsApp bubble (bottom-right, all pages)
- Contact form (client-side validation; posts to a placeholder — real email/DB backend not in scope unless you want Lovable Cloud enabled)

## SEO & performance

- Per-route meta + canonical + OG/Twitter
- JSON-LD: `Hotel` schema on `/`, `LocalBusiness` schema, `Restaurant` on `/dining`, `BreadcrumbList` on inner routes
- Lazy-loaded images, `loading="lazy"`, width/height set
- Semantic HTML, single H1 per route, alt text everywhere
- Accessible nav (keyboard, ARIA, focus rings), reduced-motion respected

## Technical notes

- All content in React components under `src/components/hotel/*`
- Framer Motion for animations, embla-carousel for reviews/gallery
- Google Map embedded via iframe pointing at your shared location URL (no API key needed)
- No backend needed unless you want form submissions stored — say the word to enable Lovable Cloud

## Out of scope (unless you confirm)

- Real booking engine / availability calendar
- Payment processing
- CMS for editing content
- Multi-language

Ready to build once you approve.
