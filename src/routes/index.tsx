import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Quote, Star } from "lucide-react";
import { Hero } from "@/components/hotel/Hero";
import { SectionHeading } from "@/components/hotel/SectionHeading";
import { RoomCard } from "@/components/hotel/RoomCard";
import { AmenityIcon } from "@/components/hotel/AmenityIcon";
import { BookingCta } from "@/components/hotel/BookingCta";
import { Reveal, Stagger, StaggerItem } from "@/components/hotel/Reveal";
import { ROOMS, AMENITIES, REVIEWS, WHY_CHOOSE, MAPS_EMBED } from "@/components/hotel/data";
import restaurantImg from "@/assets/restaurant.jpg";
import outdoorImg from "@/assets/outdoor.jpg";
import receptionImg from "@/assets/reception.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hollyken Hotel | Comfortable & Luxury Hotel Accommodation" },
      { name: "description", content: "Experience comfort, hospitality and exceptional accommodation at Hollyken Hotel. Book your stay today and enjoy elegant rooms, delicious dining and outstanding customer service." },
      { property: "og:title", content: "Hollyken Hotel — Comfort, Luxury & Warm Hospitality" },
      { property: "og:description", content: "Elegant rooms, delicious dining and a peaceful atmosphere. Book your stay at Hollyken Hotel today." },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />

      {/* Intro / About preview */}
      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 sm:px-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Welcome"
              title={<>A warm welcome, <em className="not-italic text-gold">every time</em>.</>}
              subtitle="At Hollyken Hotel we blend quiet comfort with genuine hospitality — a place designed for real rest, real conversation and real ease, whether you're travelling for work, family or a weekend of nothing at all."
            />
            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link to="/rooms" className="btn-gold">Explore Rooms</Link>
                <Link to="/amenities" className="inline-flex items-center gap-2 text-sm font-semibold text-foreground/80 hover:text-foreground">
                  See amenities <ArrowUpRight size={14} />
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal className="lg:col-span-7">
            <div className="grid grid-cols-6 gap-4">
              <div className="col-span-4 overflow-hidden rounded-3xl shadow-luxe">
                <img src={receptionImg} alt="Emerald marble reception at Hollyken Hotel" loading="lazy" width={1280} height={896} className="h-72 w-full object-cover transition-transform duration-[1200ms] hover:scale-105" />
              </div>
              <div className="col-span-2 overflow-hidden rounded-3xl shadow-luxe">
                <img src={outdoorImg} alt="Golden hour terrace at Hollyken Hotel" loading="lazy" width={1280} height={896} className="h-72 w-full object-cover transition-transform duration-[1200ms] hover:scale-105" />
              </div>
              <div className="col-span-3 overflow-hidden rounded-3xl shadow-luxe">
                <img src={restaurantImg} alt="Warmly lit hotel restaurant" loading="lazy" width={1280} height={896} className="h-56 w-full object-cover transition-transform duration-[1200ms] hover:scale-105" />
              </div>
              <div className="col-span-3 flex flex-col justify-center rounded-3xl bg-gradient-emerald p-6 text-white shadow-luxe">
                <div className="font-display text-5xl text-[color:var(--gold)]">10+</div>
                <div className="mt-2 text-sm text-white/80">Years of warm hospitality and quietly excellent service.</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Rooms preview */}
      <section className="bg-secondary/60 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Rooms & Suites"
              title="A room for every kind of stay"
              subtitle="Four thoughtfully designed room types, each with its own character — all built around real comfort and calm."
            />
            <Reveal delay={0.2}>
              <Link to="/rooms" className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-5 py-2.5 text-sm font-semibold transition hover:border-[color:var(--gold)] hover:text-[color:var(--gold)]">
                View all rooms <ArrowUpRight size={14} />
              </Link>
            </Reveal>
          </div>
          <Stagger className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {ROOMS.map((r) => (
              <StaggerItem key={r.slug}>
                <RoomCard room={r} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Amenities strip */}
      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <SectionHeading
            align="center"
            eyebrow="Amenities"
            title="Every detail, quietly taken care of"
            subtitle="From high-speed Wi-Fi and 24/7 reception to peaceful surroundings and warm meals — the essentials, done exceptionally well."
          />
          <Stagger className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {AMENITIES.slice(0, 6).map((a) => (
              <StaggerItem key={a.title}>
                <div className="group flex flex-col items-center rounded-3xl bg-secondary/50 p-6 text-center transition hover:-translate-y-1 hover:bg-secondary hover:shadow-soft">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-gold text-[color:var(--charcoal)]">
                    <AmenityIcon name={a.icon as never} className="h-6 w-6" />
                  </div>
                  <div className="mt-4 font-display text-base">{a.title}</div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal delay={0.15} className="mt-10 text-center">
            <Link to="/amenities" className="inline-flex items-center gap-2 text-sm font-semibold text-foreground/80 hover:text-foreground">
              See all amenities <ArrowUpRight size={14} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Why choose */}
      <section className="relative overflow-hidden bg-[color:var(--charcoal)] py-24 text-white sm:py-32">
        <img src={outdoorImg} alt="" loading="lazy" width={1280} height={896} className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--charcoal)] via-[color:var(--charcoal)]/85 to-[color:var(--charcoal)]/60" />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
          <SectionHeading
            invert
            eyebrow="Why Hollyken"
            title="Why guests keep coming back"
            subtitle="A hotel is more than its rooms. Ours is remembered for the way it feels."
          />
          <Stagger className="mt-14 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_CHOOSE.map((item, i) => (
              <StaggerItem key={item.title}>
                <div className="border-t border-white/15 pt-6">
                  <div className="font-display text-sm text-[color:var(--gold)]">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-3 font-display text-xl text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{item.copy}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Reviews preview */}
      <section className="bg-secondary/60 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <SectionHeading
            align="center"
            eyebrow="Guests"
            title="Words from our guests"
            subtitle="Honest reflections from real stays. We're grateful for every one."
          />
          <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
            {REVIEWS.slice(0, 3).map((r) => (
              <StaggerItem key={r.name}>
                <figure className="flex h-full flex-col rounded-3xl bg-card p-8 shadow-soft">
                  <Quote className="h-6 w-6 text-[color:var(--gold)]" aria-hidden="true" />
                  <blockquote className="mt-4 flex-1 font-display text-lg leading-snug text-foreground">
                    "{r.quote}"
                  </blockquote>
                  <figcaption className="mt-6 flex items-center justify-between border-t border-border pt-4">
                    <div>
                      <div className="text-sm font-semibold">{r.name}</div>
                      <div className="text-xs text-muted-foreground">{r.stay}</div>
                    </div>
                    <div className="flex gap-0.5 text-[color:var(--gold)]">
                      {[...Array(r.stars)].map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                      ))}
                    </div>
                  </figcaption>
                </figure>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal delay={0.2} className="mt-10 text-center">
            <Link to="/reviews" className="inline-flex items-center gap-2 text-sm font-semibold text-foreground/80 hover:text-foreground">
              Read all reviews <ArrowUpRight size={14} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Location preview */}
      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-10 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Location"
            title="Easy to find, easy to love"
            subtitle="A calm, welcoming setting with convenient access to what matters. Reach out and we'll happily help with directions."
          />
          <Reveal className="overflow-hidden rounded-3xl shadow-luxe">
            <iframe
              src={MAPS_EMBED}
              title="Hollyken Hotel location on Google Maps"
              loading="lazy"
              className="aspect-[4/3] h-full w-full"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </section>

      <BookingCta />
    </>
  );
}
