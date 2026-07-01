import { Phone } from "lucide-react";
import { PHONE_TEL, WHATSAPP_URL } from "./data";
import { Reveal } from "./Reveal";

export function BookingCta({
  eyebrow = "Reservations",
  title = "Reserve Your Perfect Stay Today",
  subtitle = "Comfort, elegance and exceptional hospitality await you.",
}: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-emerald py-16 text-white sm:py-24 lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(600px circle at 20% 20%, oklch(0.78 0.14 85 / 0.4), transparent 60%), radial-gradient(500px circle at 80% 80%, oklch(0.78 0.14 85 / 0.25), transparent 55%)",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <p className="font-display text-sm uppercase tracking-[0.3em] text-[color:var(--gold)]">{eyebrow}</p>
          <h2 className="mt-4 font-display text-[clamp(2.15rem,5vw,3.5rem)] leading-tight">{title}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-white/80 sm:text-lg">{subtitle}</p>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-gold w-full justify-center sm:w-auto">
              Book on WhatsApp
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-[0.9rem] text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
            >
              <Phone size={16} /> Call Now
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}