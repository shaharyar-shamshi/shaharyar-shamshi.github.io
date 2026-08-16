import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { skillCategories } from "@/data/resume";

export const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="section-inner max-w-content">
        <SectionHeader
          eyebrow="Toolkit"
          title="The stack, for the record"
          subtitle="End-to-end — from interface to infrastructure."
        />

        <Reveal as="dl" className="surface mx-auto max-w-4xl divide-y divide-border p-2">
          {skillCategories.map((group) => (
            <div
              key={group.category}
              className="grid gap-2 px-4 py-4 sm:grid-cols-[10rem_1fr] sm:gap-6"
            >
              <dt className="font-display text-base font-bold">{group.category}</dt>
              <dd className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-pill bg-secondary px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
};
