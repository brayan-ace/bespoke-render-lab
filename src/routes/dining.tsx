import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/hotel/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/hotel/Reveal";
import { BookingCta } from "@/components/hotel/BookingCta";
import restaurantImg from "@/assets/restaurant.jpg";
import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";

export const Route = createFileRoute("/dining")({
  head: () => ({
    meta: [
      { title: "Dining — Hollyken Hotel Restaurant" },
      { name: "description", content: "Fresh local dishes and international cuisine served all day at Hollyken Hotel. Breakfast, lunch, dinner and in-room dining." },
      { property: "og:title", content: "Dining — Hollyken Hotel Restaurant" },
      { property: "og:description", content: "Fresh, warm and thoughtfully prepared. Discover dining at Hollyken Hotel." },
      { property: "og:url", content: "/dining" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/dining" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "Hollyken Hotel Restaurant",
          servesCuisine: ["Local", "International"],
          priceRange: "$$",
          telephone: "+237674844485",
        }),
      },
    ],
  }),
  component: DiningPage,
});

const MEALS = [
  { title: "Breakfast", copy: "A generous, unhurried start to the day — fresh fruit, warm pastries and freshly brewed coffee." },
  { title: "Lunch", copy: "Bright, balanced plates that make the middle of the day feel like a small treat." },
  { title: "Dinner", copy: "A candlelit dining room, thoughtful service and menus that celebrate local and international flavours." },
  { title: "Room Service", copy: "Dine in the calm of your own room, from morning coffee to a late supper." },
];

function DiningPage() {
  return (
    <>
      <section className="relative isolate min-h-[70vh] w-full overflow-hidden pt-40">
        <img src={restaurantImg} alt="Hollyken Hotel restaurant interior" width={1280} height={896} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-hero-veil" />
        <div className="relative mx-auto flex min-h-[50vh] max-w-7xl flex-col justify-end px-6 pb-16 sm:px-10">
          <SectionHeading invert eyebrow="Dining" title={<>Fresh, warm, <em className="not-italic text-gold">unhurried</em>.</>} subtitle="Our restaurant serves fresh local dishes alongside international favourites, from breakfast through late dinner." />
        </div>
      </section>

      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <Stagger className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {MEALS.map((m) => (
              <StaggerItem key={m.title}>
                <div className="h-full rounded-3xl border border-border bg-card p-6 sm:p-7">
                  <div className="font-display text-xl text-foreground">{m.title}</div>
                  <div className="mt-3 h-px w-10 bg-[color:var(--gold)]" />
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{m.copy}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-secondary/60 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <SectionHeading eyebrow="From the kitchen" title="A menu that changes with the season" subtitle="A quiet balance of local traditions and international classics — prepared with real care." />
          <Stagger className="mt-14 grid gap-4 grid-cols-1 sm:grid-cols-3">
            {[dish1, dish2, dish3].map((src, i) => (
              <StaggerItem key={i}>
                <div className="overflow-hidden rounded-3xl shadow-soft">
                  <img src={src} alt="Signature dish at Hollyken Hotel" loading="lazy" width={1024} height={1024} className="aspect-square h-full w-full object-cover transition-transform duration-[1200ms] hover:scale-105" />
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <BookingCta title="Reserve a table or a table for one" subtitle="Whether it's dinner for two or a working lunch, we'll set the table beautifully." />
    </>
  );
}