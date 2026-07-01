import { ArrowUpRight } from "lucide-react";
import type { Room } from "./data";
import { WHATSAPP_URL } from "./data";

export function RoomCard({ room }: { room: Room }) {
  return (
    <article className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-3xl bg-card shadow-luxe ring-1 ring-black/5 transition-transform duration-500 hover:-translate-y-1">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={room.image}
          alt={`${room.name} at Hollyken Hotel`}
          loading="lazy"
          width={1280}
          height={896}
          className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <div className="absolute left-5 top-5 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white backdrop-blur-md">
          Signature
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6 sm:p-7">
        <div>
          <h3 className="font-display text-2xl leading-tight text-foreground">{room.name}</h3>
          <p className="mt-1 text-sm text-[color:var(--gold)]">{room.tagline}</p>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">{room.description}</p>
        <ul className="mt-1 flex flex-wrap gap-2">
          {room.highlights.map((h) => (
            <li
              key={h}
              className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground"
            >
              {h}
            </li>
          ))}
        </ul>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center justify-center gap-2 self-start rounded-full border border-foreground/15 px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-[color:var(--gold)] hover:text-[color:var(--gold)]"
        >
          Book this room <ArrowUpRight size={14} />
        </a>
      </div>
    </article>
  );
}