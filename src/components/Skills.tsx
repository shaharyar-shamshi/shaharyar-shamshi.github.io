import { skillCategories } from "@/data/resume";
import { Code2, Database, Layout, Server, Cloud, Cpu, Terminal } from "lucide-react";

export const Skills = () => {
  const getIcon = (category: string) => {
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

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-background">
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display tracking-tight">
            Tech Architecture
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and toolbelt
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((categoryGroup, index) => {
            const Icon = getIcon(categoryGroup.category);

            return (
              <div
                key={index}
                className="glass-panel p-8 rounded-3xl hover:border-primary/30 transition-all duration-300 card-hover-3d group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors group-hover:scale-110 duration-300">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold font-display tracking-tight">
                    {categoryGroup.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {categoryGroup.items.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1.5 bg-secondary/5 text-secondary-foreground text-sm font-medium rounded-lg border border-secondary/10 hover:bg-primary/10 hover:border-primary/20 hover:text-primary transition-all duration-300 cursor-default hover:-translate-y-0.5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
