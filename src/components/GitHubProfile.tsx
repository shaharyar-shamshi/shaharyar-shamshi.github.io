import { Button } from "@/components/ui/button";
import { Github, Star, GitFork, Eye, ExternalLink } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { githubStats, featuredRepos } from "@/data/resume";

export const GitHubProfile = () => {
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal();
  const { ref: reposRef, isVisible: reposVisible } = useScrollReveal();

  return (
    <section id="github" className="py-24 bg-gradient-subtle relative overflow-hidden">
      <div className="absolute right-0 top-1/2 w-96 h-96 bg-accent/5 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display tracking-tight">
              GitHub Activity
            </h2>
            <p className="text-xl text-muted-foreground font-light mb-8 max-w-2xl mx-auto">
              Active open source contributor with a passion for building quality software
            </p>
            <Button
              size="lg"
              className="rounded-full shadow-lg hover:shadow-primary/30 transition-all duration-300"
              asChild
            >
              <a
                href="https://github.com/shaharyar-shamshi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-5 w-5" />
                View Full Profile
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Stats Grid */}
          <div
            ref={statsRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          >
            {githubStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className={`glass-panel p-6 text-center rounded-2xl hover:-translate-y-1 transition-all duration-300 ${statsVisible ? 'animate-scale-in' : 'opacity-0'
                    }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-12 h-12 mx-auto mb-3 rounded-full bg-background flex items-center justify-center shadow-inner`}>
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div className="text-3xl font-bold mb-1 font-display">{stat.value}</div>
                  <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* Featured Repositories */}
          <div ref={reposRef}>
            <h3 className="text-2xl font-bold mb-8 text-center font-display tracking-tight flex items-center justify-center gap-2">
              <Star className="w-6 h-6 text-accent fill-accent" /> Featured Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredRepos.map((repo, index) => (
                <div
                  key={index}
                  className={`glass-panel p-6 rounded-3xl hover:border-primary/30 transition-all duration-300 cursor-pointer card-hover-3d group ${reposVisible ? 'animate-fade-in-up' : 'opacity-0'
                    }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                  onClick={() => window.open(repo.url, '_blank')}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Github className="w-5 h-5 text-primary" />
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100" />
                  </div>

                  <h4 className="text-lg font-bold mb-2 font-display group-hover:text-primary transition-colors">
                    {repo.name}
                  </h4>

                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed line-clamp-2">
                    {repo.description}
                  </p>

                  <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1 hover:text-accent transition-colors">
                        <Star className="w-3.5 h-3.5" />
                        {repo.stars}
                      </span>
                      <span className="flex items-center gap-1 hover:text-primary transition-colors">
                        <GitFork className="w-3.5 h-3.5" />
                        {repo.forks}
                      </span>
                    </div>

                    <span className="px-2 py-0.5 rounded-full bg-secondary/10 text-secondary-foreground font-medium border border-secondary/20">
                      {repo.language}
                    </span>
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
