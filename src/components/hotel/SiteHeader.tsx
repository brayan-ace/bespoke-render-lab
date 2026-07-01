import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";
import { NAV_LINKS, PHONE_TEL, WHATSAPP_URL } from "./data";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled || open
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60 shadow-[0_10px_30px_-25px_rgba(0,0,0,0.35)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8 lg:px-10">
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
          aria-label="Hollyken Hotel — home"
        >
          <img src={logo} alt="" width={40} height={40} className="h-10 w-10 object-contain" />
          <span
            className={`font-display text-lg leading-none sm:text-xl ${
              scrolled || open ? "text-foreground" : "text-white"
            }`}
          >
            Hollyken<span className="text-gold"> · </span>Hotel
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className={`group relative text-sm font-medium transition-colors ${
                scrolled ? "text-foreground/80 hover:text-foreground" : "text-white/85 hover:text-white"
              }`}
              activeProps={{ className: "text-gold" }}
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${PHONE_TEL}`}
            className={`flex items-center gap-2 text-sm ${
              scrolled ? "text-foreground/70" : "text-white/80"
            }`}
            aria-label="Call the hotel"
          >
            <Phone size={14} /> {PHONE_TEL}
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-gold text-sm">
            Book Now
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className={`lg:hidden flex h-11 w-11 items-center justify-center rounded-full border ${
            scrolled || open ? "border-border text-foreground" : "border-white/40 text-white"
          }`}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-border/60 bg-background px-6 py-6">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 font-display text-xl text-foreground hover:bg-secondary"
                  activeProps={{ className: "text-gold" }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-col gap-3">
            <a href={`tel:${PHONE_TEL}`} className="flex items-center justify-center gap-2 rounded-full border border-border py-3 text-sm">
              <Phone size={14} /> Call {PHONE_TEL}
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-gold">
              Book on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}