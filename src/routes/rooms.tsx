import { createFileRoute } from "@tanstack/react-router";
import { RoomCard } from "@/components/hotel/RoomCard";
import { SectionHeading } from "@/components/hotel/SectionHeading";
import { Stagger, StaggerItem } from "@/components/hotel/Reveal";
import { BookingCta } from "@/components/hotel/BookingCta";
import { ROOMS } from "@/components/hotel/data";

export const Route = createFileRoute("/rooms")({
  head: () => ({
    meta: [
      { title: "Rooms & Suites — Hollyken Hotel" },
      { name: "description", content: "Deluxe, Executive, Family and Standard rooms at Hollyken Hotel — thoughtfully designed for real rest, warm comfort and quiet luxury." },
      { property: "og:title", content: "Rooms & Suites — Hollyken Hotel" },
      { property: "og:description", content: "Elegant rooms designed for real comfort. Book your stay at Hollyken Hotel today." },
      { property: "og:url", content: "/rooms" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/rooms" }],
  }),
  component: RoomsPage,
});

function RoomsPage() {
  return (
    <>
      <PageHeader eyebrow="Stay With Us" title="Rooms & Suites" subtitle="Four ways to feel at home, from our welcoming Standard Room to the spacious Executive Suite." />
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <Stagger className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            {ROOMS.map((r) => (
              <StaggerItem key={r.slug}>
                <RoomCard room={r} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
      <BookingCta />
    </>
  );
}

function PageHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  return (
    <section className="bg-gradient-emerald pb-16 pt-40 text-white sm:pt-48">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <SectionHeading invert eyebrow={eyebrow} title={title} subtitle={subtitle} />
      </div>
    </section>
  );
}