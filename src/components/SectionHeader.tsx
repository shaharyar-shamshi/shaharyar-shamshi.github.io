import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

interface SectionHeaderProps {
  /** Small condensed label set between rules. */
  eyebrow: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export const SectionHeader = ({ eyebrow, title, subtitle, className }: SectionHeaderProps) => {
  return (
    <Reveal className={cn("mb-10 text-center md:mb-12", className)}>
      <span className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-3xl font-bold tracking-tighter md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-3 max-w-prose text-base leading-relaxed text-muted-foreground md:text-lg">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
};
