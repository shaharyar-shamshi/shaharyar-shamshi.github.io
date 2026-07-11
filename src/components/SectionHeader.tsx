import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

interface SectionHeaderProps {
  /** Small condensed label set between rules. */
  eyebrow: string;
  title: string;
  subtitle?: string;
  className?: string;
}

/** Newspaper section divider: ─── KICKER ─── over a serif headline. */
export const SectionHeader = ({ eyebrow, title, subtitle, className }: SectionHeaderProps) => {
  return (
    <Reveal className={cn("mb-10 text-center md:mb-12", className)}>
      <div className="divider mx-auto max-w-md">
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-3 max-w-prose font-display text-base italic leading-snug text-muted-foreground md:text-lg">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
};
