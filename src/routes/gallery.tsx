import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/hotel/SectionHeading";
import { Stagger, StaggerItem } from "@/components/hotel/Reveal";
import { BookingCta } from "@/components/hotel/BookingCta";
import heroAsset from "@/assets/hero-exterior.asset.json";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomExecutive from "@/assets/room-executive.jpg";
import roomFamily from "@/assets/room-family.jpg";
import roomStandard from "@/assets/room-standard.jpg";
import reception from "@/assets/reception.jpg";
import restaurant from "@/assets/restaurant.jpg";
import hallway from "@/assets/hallway.jpg";
import outdoor from "@/assets/outdoor.jpg";
import bathroom from "@/assets/bathroom.jpg";
import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Hollyken Hotel" },
      { name: "description", content: "A visual walk through Hollyken Hotel — rooms, reception, restaurant, hallways, outdoor spaces and cuisine." },
      { property: "og:title", content: "Gallery — Hollyken Hotel" },
      { property: "og:description", content: "A visual walk through Hollyken Hotel." },
      { property: "og:url", content: "/gallery" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

const IMAGES: { src: string; alt: string; span?: string }[] = [
  { src: heroAsset.url, alt: "Hollyken Hotel exterior", span: "sm:col-span-2 sm:row-span-2" },
  { src: reception, alt: "Reception with emerald marble desk" },
  { src: roomDeluxe, alt: "Deluxe room with warm lighting" },
  { src: restaurant, alt: "Restaurant dining room", span: "sm:col-span-2" },
  { src: roomExecutive, alt: "Executive suite lounge" },
  { src: hallway, alt: "Elegant hotel hallway", span: "sm:row-span-2" },
  { src: outdoor, alt: "Terrace at golden hour" },
  { src: dish1, alt: "Signature dish" },
  { src: roomFamily, alt: "Family room" },
  { src: bathroom, alt: "Marble bathroom with gold fixtures" },
  { src: dish2, alt: "Breakfast spread" },
  { src: roomStandard, alt: "Standard room" },
];

function GalleryPage() {
  return (
    <>
      <section className="bg-gradient-emerald pb-16 pt-40 text-white sm:pt-48">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <SectionHeading invert eyebrow="Gallery" title="A walk around Hollyken" subtitle="Rooms, restaurant, reception and quiet corners — a look at the details that make the difference." />
        </div>
      </section>
      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <Stagger className="grid auto-rows-[180px] grid-cols-1 gap-4 sm:auto-rows-[200px] sm:grid-cols-2 lg:grid-cols-4">
            {IMAGES.map((img, i) => (
              <StaggerItem key={i} className={`overflow-hidden rounded-2xl shadow-soft ${img.span ?? ""}`}>
                <img src={img.src} alt={img.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] hover:scale-105" />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
      <BookingCta />
    </>
  );
}