import { motion } from "framer-motion";
import { ArrowRight, MapPin, Star } from "lucide-react";
import heroAsset from "@/assets/hero-exterior.asset.json";
import { WHATSAPP_URL } from "./data";

export function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] w-full overflow-hidden">
      <img
        src={heroAsset.url}
        alt="Hollyken Hotel — welcoming exterior with elegant gated entry"
        width={1920}
        height={1200}
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-hero-veil" />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 500px at 20% 90%, oklch(0.28 0.07 165 / 0.55), transparent 60%)",
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-6 pb-20 pt-40 text-white sm:px-10 sm:pb-28 sm:pt-48">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-[color:var(--gold)]"
        >
          <span className="gold-divider" /> Hollyken Hotel
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 max-w-4xl font-display text-[clamp(2.5rem,6vw,5.25rem)] leading-[1.02]"
        >
          Experience <em className="not-italic text-[color:var(--gold)]">Comfort</em>, Luxury &amp;
          Hospitality Like Never Before.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg"
        >
          Whether you're visiting for business, family, relaxation, or a weekend getaway, Hollyken
          Hotel offers elegant rooms, exceptional hospitality, delicious dining and a peaceful
          atmosphere designed to make every stay unforgettable.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-gold">
            Book Your Stay <ArrowRight size={16} />
          </a>
          <a
            href="/rooms"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/5 px-7 py-[0.9rem] text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/15"
          >
            Explore Rooms
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-white/80"
        >
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5 text-[color:var(--gold)]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            Loved by our guests
          </div>
          <div className="hidden h-4 w-px bg-white/25 sm:block" />
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-[color:var(--gold)]" /> A calm, welcoming setting
          </div>
        </motion.div>
      </div>

      {/* Floating gold badge */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
        transition={{ opacity: { duration: 1, delay: 0.9 }, y: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
        className="pointer-events-none absolute right-6 top-32 hidden h-40 w-40 items-center justify-center rounded-full border border-white/25 bg-white/5 text-center backdrop-blur-md sm:right-10 sm:top-40 md:flex"
      >
        <div>
          <div className="font-display text-4xl text-[color:var(--gold)]">24/7</div>
          <div className="mt-1 text-[10px] uppercase tracking-[0.25em] text-white/80">Reception<br/>&amp; Care</div>
        </div>
      </motion.div>
    </section>
  );
}