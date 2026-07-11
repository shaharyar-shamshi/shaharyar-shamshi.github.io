import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { experiences } from "@/data/resume";

export const Experience = () => {
  return (
    <section id="experience" className="section border-t border-foreground/80">
      <div className="section-inner">
        <SectionHeader
          eyebrow="Experience"
          title="A decade of shipping across industries"
          subtitle="Fintech, EdTech, developer tools, SaaS, and renewable energy — front to back."
        />

        <div className="relative max-w-4xl">
          <div className="absolute left-0 top-2 bottom-2 w-px bg-border md:left-[7.5rem]" aria-hidden />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <Reveal key={`${exp.company}-${i}`} delay={Math.min(i, 4) * 60}>
                <div className="relative grid gap-4 pl-8 md:grid-cols-[7.5rem_1fr] md:gap-8 md:pl-0">
                  {/* Period rail */}
                  <div className="md:pr-8 md:text-right">
                    <p className="font-mono text-xs leading-relaxed text-muted-foreground">
                      {exp.period}
                    </p>
                    <p className="mt-1 font-mono text-[0.7rem] text-muted-foreground/70">
                      {exp.location}
                    </p>
                  </div>

                  {/* Node */}
                  <span
                    className="absolute left-[-5px] top-1.5 h-2.5 w-2.5 border border-background bg-brand md:left-[7.5rem] md:-translate-x-[calc(50%+0.5px)]"
                    aria-hidden
                  />

                  {/* Content */}
                  <div className="md:pl-2">
                    <h3 className="text-lg font-semibold tracking-tight">{exp.role}</h3>
                    <p className="text-sm font-medium text-brand">{exp.company}</p>
                    <p className="mt-3 max-w-prose text-sm leading-relaxed text-muted-foreground">
                      {exp.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-border px-2 py-0.5 font-mono text-[0.7rem] text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
