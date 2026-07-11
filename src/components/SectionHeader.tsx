import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

interface SectionHeaderProps {
  /** Small monospace label above the title. */
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

/** Consistent eyebrow + title + subtitle rhythm across all sections. */
export const SectionHeader = ({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeaderProps) => {
  return (
    <Reveal
      className={cn(
        "mb-12 md:mb-16 max-w-prose",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <span className="eyebrow">
        <span className="h-px w-6 bg-brand" aria-hidden />
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
};
