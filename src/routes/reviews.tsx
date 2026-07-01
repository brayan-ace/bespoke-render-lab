import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "@/components/hotel/SectionHeading";
import { Stagger, StaggerItem } from "@/components/hotel/Reveal";
import { BookingCta } from "@/components/hotel/BookingCta";
import { REVIEWS } from "@/components/hotel/data";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — Hollyken Hotel" },
      { name: "description", content: "Read honest reviews from Hollyken Hotel guests — excellent service, comfortable rooms, quiet setting and warm hospitality." },
      { property: "og:title", content: "Reviews — Hollyken Hotel" },
      { property: "og:description", content: "Honest guest reflections from real stays at Hollyken Hotel." },
      { property: "og:url", content: "/reviews" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "center" });
  const [selected, setSelected] = useState(0);

  const scrollPrev = useCallback(() => embla?.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla?.scrollNext(), [embla]);

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setSelected(embla.selectedScrollSnap());
    embla.on("select", onSelect);
    onSelect();
  }, [embla]);

  return (
    <>
      <section className="bg-gradient-emerald pb-16 pt-40 text-white sm:pt-48">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <SectionHeading invert eyebrow="Reviews" title="What our guests say" subtitle="A collection of honest reflections — including areas we're always working to improve." />
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="mx-auto max-w-5xl px-6 sm:px-10">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {REVIEWS.map((r) => (
                <div key={r.name} className="min-w-0 flex-[0_0_100%] px-2">
                  <figure className="mx-auto max-w-2xl rounded-3xl bg-card p-10 text-center shadow-luxe">
                    <Quote className="mx-auto h-8 w-8 text-[color:var(--gold)]" aria-hidden="true" />
                    <blockquote className="mt-6 font-display text-2xl leading-snug text-foreground sm:text-3xl">
                      "{r.quote}"
                    </blockquote>
                    <div className="mt-6 flex justify-center gap-0.5 text-[color:var(--gold)]">
                      {[...Array(r.stars)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                      ))}
                    </div>
                    <figcaption className="mt-4 text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">{r.name}</span> · {r.stay}
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 flex items-center justify-center gap-4">
            <button onClick={scrollPrev} aria-label="Previous review" className="flex h-11 w-11 items-center justify-center rounded-full border border-border transition hover:border-[color:var(--gold)] hover:text-[color:var(--gold)]">
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {REVIEWS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => embla?.scrollTo(i)}
                  aria-label={`Go to review ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    selected === i ? "w-8 bg-[color:var(--gold)]" : "w-2 bg-border"
                  }`}
                />
              ))}
            </div>
            <button onClick={scrollNext} aria-label="Next review" className="flex h-11 w-11 items-center justify-center rounded-full border border-border transition hover:border-[color:var(--gold)] hover:text-[color:var(--gold)]">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      <section className="bg-secondary/60 py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <SectionHeading eyebrow="All reviews" title="Highlights from recent stays" />
          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {REVIEWS.map((r) => (
              <StaggerItem key={r.name}>
                <figure className="flex h-full flex-col rounded-3xl bg-card p-7 shadow-soft">
                  <div className="flex gap-0.5 text-[color:var(--gold)]">
                    {[...Array(r.stars)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                  <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">"{r.quote}"</blockquote>
                  <figcaption className="mt-4 border-t border-border pt-4 text-xs text-muted-foreground">
                    <span className="font-semibold text-foreground">{r.name}</span> · {r.stay}
                  </figcaption>
                </figure>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <BookingCta />
    </>
  );
}