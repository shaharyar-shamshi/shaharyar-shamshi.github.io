import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { skillCategories } from "@/data/resume";

export const Skills = () => {
  return (
    <section id="skills" className="section border-t border-foreground/80">
      <div className="section-inner max-w-content">
        <SectionHeader
          eyebrow="Toolkit"
          title="The stack, for the record"
          subtitle="End-to-end — from interface to infrastructure."
        />

        <Reveal className="mx-auto max-w-4xl border-2 border-foreground">
          <p className="border-b border-foreground bg-accent px-4 py-2 text-center font-mono text-xs font-semibold uppercase tracking-[0.25em]">
            Reference &middot; Technical Almanac
          </p>
          <dl className="divide-y divide-border">
            {skillCategories.map((group) => (
              <div key={group.category} className="grid gap-2 px-4 py-4 sm:grid-cols-[10rem_1fr] sm:gap-6">
                <dt className="font-display text-base font-bold">{group.category}</dt>
                <dd className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="border border-border bg-card px-2.5 py-1 font-mono text-xs uppercase tracking-wide text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
};
