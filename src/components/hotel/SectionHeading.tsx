import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  invert = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  invert?: boolean;
}) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <p
          className={`font-display text-xs uppercase tracking-[0.3em] ${
            invert ? "text-[color:var(--gold)]" : "text-[color:var(--gold)]"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`mt-3 font-display text-[clamp(2rem,4.3vw,3rem)] leading-[1.05] sm:text-[clamp(2.35rem,5vw,3.5rem)] lg:text-[clamp(2.8rem,5.5vw,4rem)] ${
          invert ? "text-white" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
            invert ? "text-white/80" : "text-muted-foreground"
          }`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}