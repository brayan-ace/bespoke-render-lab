import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/hotel/SectionHeading";
import { Stagger, StaggerItem } from "@/components/hotel/Reveal";
import { AmenityIcon } from "@/components/hotel/AmenityIcon";
import { BookingCta } from "@/components/hotel/BookingCta";
import { AMENITIES, WHY_CHOOSE } from "@/components/hotel/data";

export const Route = createFileRoute("/amenities")({
  head: () => ({
    meta: [
      { title: "Amenities — Hollyken Hotel" },
      { name: "description", content: "Free Wi-Fi, 24/7 reception, restaurant, room service, secure parking and more — every detail thoughtfully taken care of at Hollyken Hotel." },
      { property: "og:title", content: "Amenities — Hollyken Hotel" },
      { property: "og:description", content: "Every detail thoughtfully taken care of." },
      { property: "og:url", content: "/amenities" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/amenities" }],
  }),
  component: AmenitiesPage,
});

function AmenitiesPage() {
  return (
    <>
      <section className="bg-gradient-emerald pb-16 pt-40 text-white sm:pt-48">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <SectionHeading invert eyebrow="Amenities" title="Everything you need, elegantly done" subtitle="A collection of considered essentials that quietly elevate your stay." />
        </div>
      </section>

      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {AMENITIES.map((a) => (
              <StaggerItem key={a.title}>
                <div className="group flex h-full items-start gap-4 rounded-3xl border border-border bg-card p-5 transition hover:-translate-y-1 hover:border-[color:var(--gold)]/50 hover:shadow-soft sm:gap-5 sm:p-7">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-gold text-[color:var(--charcoal)]">
                    <AmenityIcon name={a.icon as never} className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-display text-lg">{a.title}</div>
                    <p className="mt-1 text-sm text-muted-foreground">{a.copy}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-secondary/60 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <SectionHeading eyebrow="Why Hollyken" title="Why guests love staying with us" />
          <Stagger className="mt-14 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_CHOOSE.map((item, i) => (
              <StaggerItem key={item.title}>
                <div className="border-t border-foreground/15 pt-6">
                  <div className="font-display text-sm text-[color:var(--gold)]">{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="mt-3 font-display text-xl">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.copy}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <BookingCta />
    </>
  );
}