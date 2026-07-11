import { Code2, Database, Layout, Server, Cloud, Terminal, Cpu } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { skillCategories } from "@/data/resume";

const iconFor = (category: string) => {
  switch (category.toLowerCase()) {
    case "languages": return Code2;
    case "frontend": return Layout;
    case "backend": return Server;
    case "database": return Database;
    case "cloud & devops": return Cloud;
    case "tools": return Terminal;
    default: return Cpu;
  }
};

export const Skills = () => {
  return (
    <section id="skills" className="section border-t border-foreground/80">
      <div className="section-inner">
        <SectionHeader
          eyebrow="Toolkit"
          title="The stack I build with"
          subtitle="End-to-end — from interface to infrastructure."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((group, i) => {
            const Icon = iconFor(group.category);
            return (
              <Reveal key={group.category} delay={(i % 3) * 70}>
                <div className="surface surface-hover h-full p-6">
                  <div className="flex items-center gap-3">
                    <div className="grid h-9 w-9 place-items-center rounded-lg bg-secondary text-foreground">
                      <Icon className="h-[1.1rem] w-[1.1rem]" />
                    </div>
                    <h3 className="text-sm font-semibold uppercase tracking-wide">
                      {group.category}
                    </h3>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
