import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { projects } from "@/data/resume";

export const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="section-inner">
        <SectionHeader
          eyebrow="Selected Work"
          title="Products I've helped build"
          subtitle="A snapshot of platforms spanning renewable energy, SaaS, developer tools, and fintech."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <Reveal key={project.title} delay={(i % 2) * 80}>
                <article className="surface surface-hover group h-full p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div className="grid h-11 w-11 place-items-center rounded-card bg-brand-soft text-brand">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-xs text-muted-foreground">{project.company}</span>
                  </div>

                  <h3 className="mt-5 text-xl font-semibold tracking-tight">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-pill bg-secondary px-2.5 py-0.5 text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
