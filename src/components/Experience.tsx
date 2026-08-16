import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { experiences } from "@/data/resume";

export const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="section-inner max-w-content">
        <SectionHeader
          eyebrow="Experience"
          title="A decade of shipping across industries"
          subtitle="Fintech, EdTech, developer tools, SaaS, and renewable energy — front to back."
        />

        <div className="mx-auto max-w-4xl space-y-4">
          {experiences.map((exp, i) => (
            <Reveal key={`${exp.company}-${i}`} delay={Math.min(i, 4) * 50}>
              <article className="surface grid gap-3 p-6 md:grid-cols-[10rem_1fr] md:gap-8">
                <div className="md:text-right">
                  <p className="mono-tag">{exp.period}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{exp.location}</p>
                </div>

                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h3 className="font-display text-xl font-bold leading-tight">{exp.role}</h3>
                    <p className="text-sm font-semibold text-brand">{exp.company}</p>
                  </div>
                  <p className="mt-2 max-w-prose text-sm leading-relaxed text-muted-foreground">
                    {exp.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-pill bg-secondary px-2.5 py-0.5 text-xs text-muted-foreground"
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
