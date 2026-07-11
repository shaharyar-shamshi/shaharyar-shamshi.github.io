import { ArrowUpRight, Check } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { openSourceContributions } from "@/data/resume";

export const OpenSource = () => {
  return (
    <section id="opensource" className="section border-t border-border">
      <div className="section-inner">
        <SectionHeader
          eyebrow="Community"
          title="Open source contributions"
          subtitle="Giving back to the tools and libraries developers rely on every day."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {openSourceContributions.map((contrib, i) => (
            <Reveal key={contrib.project} delay={(i % 2) * 80}>
              <a
                href={contrib.link}
                target="_blank"
                rel="noopener noreferrer"
                className="surface surface-hover group flex h-full flex-col p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight">{contrib.project}</h3>
                    <p className="mt-1 text-sm text-brand">{contrib.role}</p>
                  </div>
                  <span className="flex items-center gap-2">
                    <span className="font-mono text-xs text-muted-foreground">{contrib.period}</span>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {contrib.description}
                </p>

                <ul className="mt-5 space-y-2">
                  {contrib.contributions.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {contrib.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border px-2 py-0.5 font-mono text-[0.7rem] text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
