import { openSourceContributions } from "@/data/resume";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, GitFork, Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const OpenSource = () => {
  return (
    <section id="opensource" className="py-24 relative bg-background overflow-hidden">
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full blur-[100px] animate-pulse"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 font-display tracking-tight hover:scale-105 transition-transform duration-500">
            Open Source Contributions
          </h2>

          <p className="text-xl text-muted-foreground text-center mb-16 font-light">
            Contributing to the developer community and open source ecosystem
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {openSourceContributions.map((contrib, index) => {
              const { ref, isVisible } = useScrollReveal();
              return (
                <div
                  key={index}
                  ref={ref}
                  className={`glass-panel p-8 rounded-3xl hover:-translate-y-2 transition-all duration-500 card-hover-3d relative group ${isVisible ? 'animate-fade-in-up' : 'opacity-0'
                    }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                        <Github className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold font-display">{contrib.project}</h3>
                    </div>
                    <a
                      href={contrib.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <GitFork className="w-5 h-5" />
                    </a>
                  </div>

                  <p className="text-primary font-medium mb-1">{contrib.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{contrib.period}</p>

                  <p className="text-foreground/80 mb-6 leading-relaxed font-light line-clamp-3">
                    {contrib.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {contrib.contributions.slice(0, 2).map((contribution, idx) => (
                      <div key={idx} className="flex items-start text-sm text-foreground/70">
                        <Star className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                        <span>{contribution}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {contrib.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 bg-secondary/10 text-secondary-foreground text-xs font-medium rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <div className="glass-panel inline-block p-8 rounded-[2rem] bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
              <p className="text-lg mb-6 font-light">
                Interested in collaborating on open source projects?
              </p>
              <Button
                size="lg"
                className="rounded-full shadow-glow hover:shadow-elegant hover:scale-105 transition-all duration-300"
                asChild
              >
                <a
                  href="https://github.com/shaharyar-shamshi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-5 w-5" />
                  Follow on GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
