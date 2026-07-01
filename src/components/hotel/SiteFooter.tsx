import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.png";
import { NAV_LINKS, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL, MAPS_URL } from "./data";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-[color:var(--charcoal)] text-white/80">
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[color:var(--gold)] to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-10">
        <div>
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="" width={40} height={40} className="h-10 w-10 object-contain" />
            <span className="font-display text-xl text-white">Hollyken · Hotel</span>
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
            Comfort, elegance and warm hospitality — designed to make every stay unforgettable.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {[Facebook, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition hover:border-[color:var(--gold)] hover:text-[color:var(--gold)]"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-[0.2em] text-[color:var(--gold)]">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-white/70 transition hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-[0.2em] text-[color:var(--gold)]">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-2 hover:text-white">
                <Phone size={14} /> {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href="mailto:reservations@hollykenhotel.com" className="flex items-center gap-2 hover:text-white">
                <Mail size={14} /> reservations@hollykenhotel.com
              </a>
            </li>
            <li>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white">
                <MapPin size={14} /> View on map
              </a>
            </li>
          </ul>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-gold mt-6">
            Book on WhatsApp
          </a>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-[0.2em] text-[color:var(--gold)]">Newsletter</h4>
          <p className="mt-4 text-sm text-white/60">
            Occasional letters — new experiences, seasonal menus and quiet offers.
          </p>
          <form
            className="mt-4 flex flex-col gap-2 overflow-hidden rounded-[1.5rem] border border-white/15 bg-white/5 p-2 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="Your email"
              className="flex-1 rounded-full bg-transparent px-4 py-3 text-sm outline-none placeholder:text-white/40"
              aria-label="Email address"
            />
            <button type="submit" className="rounded-full bg-[color:var(--gold)] px-5 py-3 text-sm font-semibold text-[color:var(--charcoal)]">
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-white/50 sm:flex-row sm:px-6 lg:px-10">
          <p>© {new Date().getFullYear()} Hollyken Hotel. Crafted with care.</p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="rounded-full border border-white/15 px-4 py-2 transition hover:border-[color:var(--gold)] hover:text-[color:var(--gold)]"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}