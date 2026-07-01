import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { SectionHeading } from "@/components/hotel/SectionHeading";
import { Reveal } from "@/components/hotel/Reveal";
import { FAQS, MAPS_URL, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "@/components/hotel/data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Reservations — Hollyken Hotel" },
      { name: "description", content: "Reach Hollyken Hotel by phone, WhatsApp or email. Fastest booking is on WhatsApp — a real member of our team will confirm your stay." },
      { property: "og:title", content: "Contact & Reservations — Hollyken Hotel" },
      { property: "og:description", content: "Call, WhatsApp or email Hollyken Hotel to book your stay." },
      { property: "og:url", content: "/contact" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <section className="bg-gradient-emerald pb-16 pt-40 text-white sm:pt-48">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <SectionHeading invert eyebrow="Contact" title="Let's plan your stay" subtitle="A real person will get back to you — usually within a few hours. WhatsApp is the fastest way." />
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-10 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            <InfoCard icon={<Phone size={16} />} label="Phone" value={PHONE_DISPLAY} href={`tel:${PHONE_TEL}`} />
            <InfoCard icon={<Mail size={16} />} label="Email" value="reservations@hollykenhotel.com" href="mailto:reservations@hollykenhotel.com" />
            <InfoCard icon={<MapPin size={16} />} label="Location" value="View on Google Maps" href={MAPS_URL} />
            <InfoCard icon={<Clock size={16} />} label="Reception" value="Open 24 hours, every day" />
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-gold w-full justify-center">
              Chat on WhatsApp
            </a>
          </div>

          <Reveal className="lg:col-span-3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="rounded-3xl border border-border bg-card p-8 shadow-soft"
            >
              <div className="font-display text-2xl">Send us a message</div>
              <p className="mt-1 text-sm text-muted-foreground">We'll reply as soon as we can.</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Field label="Full name" name="name" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" />
                <Field label="Arrival date" name="arrival" type="date" />
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium">Message</label>
                <textarea required rows={4} name="message" className="mt-2 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-[color:var(--gold)] focus:ring-2 focus:ring-[color:var(--gold)]/30" />
              </div>
              <div className="mt-6 flex items-center justify-between gap-4">
                <button type="submit" className="btn-gold">Send message</button>
                {sent && <span className="text-sm text-[color:var(--emerald-soft)]">Thank you — we'll be in touch shortly.</span>}
              </div>
            </form>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary/60 py-24">
        <div className="mx-auto max-w-4xl px-6 sm:px-10">
          <SectionHeading align="center" eyebrow="FAQ" title="Good questions, straight answers" />
          <div className="mt-12 divide-y divide-border rounded-3xl border border-border bg-card">
            {FAQS.map((f, i) => (
              <details
                key={i}
                open={open === i}
                onToggle={(e) => setOpen((e.currentTarget as HTMLDetailsElement).open ? i : null)}
                className="group px-6 py-5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <span className="font-display text-base sm:text-lg">{f.q}</span>
                  <span className="text-[color:var(--gold)] transition-transform group-open:rotate-45 text-2xl leading-none">+</span>
                </summary>
                <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-sm font-medium">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-[color:var(--gold)] focus:ring-2 focus:ring-[color:var(--gold)]/30"
      />
    </div>
  );
}

function InfoCard({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const inner = (
    <div className="flex items-start gap-4 rounded-3xl border border-border bg-card p-6 transition hover:border-[color:var(--gold)]/50 hover:shadow-soft">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-gold text-[color:var(--charcoal)]">{icon}</div>
      <div>
        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</div>
        <div className="mt-1 font-display text-lg">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">{inner}</a> : inner;
}