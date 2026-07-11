import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { experiences } from "@/data/resume";

export const Experience = () => {
  return (
    <section id="experience" className="section border-t border-foreground/80">
      <div className="section-inner max-w-content">
        <SectionHeader
          eyebrow="Experience"
          title="A decade of shipping across industries"
          subtitle="Fintech, EdTech, developer tools, SaaS, and renewable energy — front to back."
        />

        <div className="mx-auto max-w-4xl border-t-2 border-foreground">
          {experiences.map((exp, i) => (
            <Reveal key={`${exp.company}-${i}`} delay={Math.min(i, 4) * 50}>
              <article className="grid gap-3 border-b border-border py-6 md:grid-cols-[10rem_1fr] md:gap-8">
                <div className="md:text-right">
                  <p className="font-mono text-xs uppercase tracking-wide text-foreground">
                    {exp.period}
                  </p>
                  <p className="mt-1 font-mono text-[0.7rem] uppercase tracking-wide text-muted-foreground">
                    {exp.location}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h3 className="font-display text-xl font-bold leading-tight">{exp.role}</h3>
                    <p className="font-display text-sm font-bold uppercase tracking-wide text-brand">
                      {exp.company}
                    </p>
                  </div>
                  <p className="mt-2 max-w-prose text-sm leading-relaxed text-foreground/85">
                    {exp.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-border px-2 py-0.5 font-mono text-[0.7rem] uppercase tracking-wide text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
