import { motion } from "framer-motion";
import { ArrowRight, MapPin, Star } from "lucide-react";
import heroImage from "@/assets/outdoor.jpg";
import { WHATSAPP_URL } from "./data";

export function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] w-full overflow-hidden">
      <img
        src={heroImage}
        alt="Hollyken Hotel — welcoming exterior with elegant gated entry"
        width={1920}
        height={1200}
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,10,8,0.18)_0%,rgba(3,8,7,0.45)_45%,rgba(3,8,7,0.82)_100%)]" />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 500px at 20% 90%, oklch(0.28 0.07 165 / 0.55), transparent 60%)",
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-20 pt-40 text-white sm:px-8 sm:pb-28 sm:pt-48 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-[44rem] rounded-[2rem] border border-white/15 bg-black/20 p-6 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.65)] backdrop-blur-xl sm:p-8 lg:p-10"
        >
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.38em] text-[color:var(--gold)]"
          >
            <span className="gold-divider" /> Hollyken Hotel
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-3xl font-display text-[clamp(2.35rem,6vw,5rem)] leading-[0.96] text-white"
          >
            Experience <em className="not-italic text-[color:var(--gold)]">Comfort</em>, Luxury &amp;
            Hospitality Like Never Before.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg"
          >
            Whether you're visiting for business, family, relaxation, or a weekend getaway, Hollyken
            Hotel offers elegant rooms, exceptional hospitality, delicious dining and a peaceful
            atmosphere designed to make every stay unforgettable.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-gold w-full justify-center sm:w-auto">
              Book Your Stay <ArrowRight size={16} />
            </a>
            <a
              href="/rooms"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-[0.9rem] text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/15 sm:w-auto"
            >
              Explore Rooms
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-white/80 sm:mt-12"
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