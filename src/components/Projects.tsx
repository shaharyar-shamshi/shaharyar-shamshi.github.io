import { ExternalLink, FolderGit2 } from "lucide-react";
import { projects } from "@/data/resume";

export const Projects = () => {
  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-background">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] animate-pulse"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work in renewable energy tech, full-stack applications, and predictive analytics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={project.title}
                className={`group glass-panel rounded-3xl p-6 relative overflow-hidden card-hover-3d animate-fade-in-up`}
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="h-6 w-6 text-accent" />
                </div>

                <div className="mb-6 mt-2">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-sm font-medium text-accent mb-3">{project.company}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-4">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary/10 text-secondary-foreground text-xs font-medium rounded-full border border-secondary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
