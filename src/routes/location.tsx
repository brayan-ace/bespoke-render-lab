import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/hotel/SectionHeading";
import { Reveal } from "@/components/hotel/Reveal";
import { BookingCta } from "@/components/hotel/BookingCta";
import { MAPS_EMBED, MAPS_URL } from "@/components/hotel/data";

export const Route = createFileRoute("/location")({
  head: () => ({
    meta: [
      { title: "Location & Directions — Hollyken Hotel" },
      { name: "description", content: "Find Hollyken Hotel — interactive map, directions and nearby landmarks. A calm, well-connected setting." },
      { property: "og:title", content: "Location & Directions — Hollyken Hotel" },
      { property: "og:description", content: "Interactive map and directions to Hollyken Hotel." },
      { property: "og:url", content: "/location" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/location" }],
  }),
  component: LocationPage,
});

function LocationPage() {
  return (
    <>
      <section className="bg-gradient-emerald pb-16 pt-40 text-white sm:pt-48">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <SectionHeading invert eyebrow="Location" title="Come find us" subtitle="A quiet, welcoming setting with easy access. We're happy to help with directions or arrange transport." />
        </div>
      </section>

      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-3 lg:gap-10 lg:px-10">
          <div className="space-y-6 lg:col-span-1">
            <div className="rounded-3xl bg-card p-7 shadow-soft">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-gold text-[color:var(--charcoal)]"><MapPin size={18} /></div>
                <div className="font-display text-lg">Hollyken Hotel</div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                We're just a short journey from the heart of the city — quiet enough for real rest, close enough to everything you need.
              </p>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="btn-gold mt-6 w-full justify-center sm:w-auto">
                Get Directions <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="rounded-3xl border border-border p-7">
              <div className="font-display text-lg">Nearby</div>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li>• Restaurants and cafés</li>
                <li>• Local markets and shops</li>
                <li>• Business and conference venues</li>
                <li>• Beautiful outdoor spaces</li>
              </ul>
            </div>
          </div>

          <Reveal className="overflow-hidden rounded-3xl shadow-luxe lg:col-span-2">
            <iframe
              src={MAPS_EMBED}
              title="Hollyken Hotel on Google Maps"
              loading="lazy"
              className="h-[320px] w-full sm:h-[420px] lg:h-[500px]"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </section>

      <BookingCta />
    </>
  );
}