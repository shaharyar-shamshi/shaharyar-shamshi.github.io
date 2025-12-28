import { Badge } from "@/components/ui/badge";
import { experiences } from "@/data/resume";

export const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-background relative">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 font-display">
            Experience
          </h2>

          <p className="text-xl text-muted-foreground text-center mb-16">
            Building impactful products across industries
          </p>

          <div className="relative">
            <div className="absolute left-0 md:left-8 top-4 bottom-4 w-px bg-gradient-to-b from-primary via-secondary to-transparent opacity-30"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 md:pl-20 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="absolute left-[-4px] md:left-[28px] top-6 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background shadow-[0_0_10px_rgba(56,189,248,0.5)]"></div>

                  <div className="glass-panel p-8 rounded-3xl hover:border-primary/20 transition-all duration-300 group">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-primary mb-1 group-hover:text-accent transition-colors">
                          {exp.company}
                        </h3>
                        <p className="text-lg font-medium text-foreground">
                          {exp.role}
                        </p>
                      </div>
                      <div className="text-muted-foreground mt-2 md:mt-0 md:text-right text-sm">
                        <p className="font-medium text-foreground/80">{exp.period}</p>
                        <p>{exp.location}</p>
                      </div>
                    </div>

                    <p className="text-foreground/80 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-secondary/5 text-secondary-foreground text-xs font-medium rounded-full border border-secondary/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
