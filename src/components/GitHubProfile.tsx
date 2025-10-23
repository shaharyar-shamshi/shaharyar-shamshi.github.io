import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Star, GitFork, Eye, ExternalLink } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const githubStats = [
  {
    label: "Public Repos",
    value: "50+",
    icon: Github,
    color: "text-primary",
  },
  {
    label: "Total Stars",
    value: "100+",
    icon: Star,
    color: "text-accent",
  },
  {
    label: "Contributions",
    value: "1000+",
    icon: GitFork,
    color: "text-primary",
  },
  {
    label: "Followers",
    value: "50+",
    icon: Eye,
    color: "text-accent",
  },
];

const featuredRepos = [
  {
    name: "Countly SDK Contributions",
    description: "Major contributions to Countly analytics platform including Vue.js migrations and UI improvements",
    language: "Vue.js",
    stars: 50,
    forks: 15,
    url: "https://github.com/Countly",
  },
  {
    name: "TEAMMATES Contributions",
    description: "Open source peer evaluation tool for educational institutions with enhanced features",
    language: "Java",
    stars: 30,
    forks: 10,
    url: "https://github.com/TEAMMATES",
  },
  {
    name: "Processing Foundation",
    description: "Creative coding tools and educational resources for the Processing community",
    language: "Processing",
    stars: 25,
    forks: 8,
    url: "https://processingfoundation.org/",
  },
];

export const GitHubProfile = () => {
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal();
  const { ref: reposRef, isVisible: reposVisible } = useScrollReveal();

  return (
    <section className="py-32 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display tracking-tight">
              GitHub Activity
            </h2>
            <p className="text-xl text-muted-foreground font-light mb-8">
              Active open source contributor with a passion for building quality software
            </p>
            <Button
              size="lg"
              className="bg-gradient-hero text-white animate-gradient shadow-glow hover:shadow-elegant hover:scale-105 transition-all duration-500"
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
                <Card
                  key={index}
                  className={`p-8 text-center shadow-soft hover:shadow-elegant transition-all duration-500 hover-lift elegant-border bg-gradient-card group ${
                    statsVisible ? 'animate-scale-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Icon className={`w-10 h-10 mx-auto mb-4 ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
                  <div className="text-3xl font-bold mb-2 font-display">{stat.value}</div>
                  <div className="text-sm text-muted-foreground font-light">{stat.label}</div>
                </Card>
              );
            })}
          </div>

          {/* Featured Repositories */}
          <div ref={reposRef}>
            <h3 className="text-3xl font-bold mb-8 text-center font-display tracking-tight">
              Featured Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredRepos.map((repo, index) => (
                <Card
                  key={index}
                  className={`p-6 shadow-soft hover:shadow-elegant transition-all duration-500 hover-lift elegant-border bg-gradient-card group cursor-pointer ${
                    reposVisible ? 'animate-slide-in-right' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                  onClick={() => window.open(repo.url, '_blank')}
                >
                  <div className="flex items-start justify-between mb-4">
                    <Github className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </div>
                  
                  <h4 className="text-xl font-semibold mb-3 font-display group-hover:text-primary transition-colors duration-300">
                    {repo.name}
                  </h4>
                  
                  <p className="text-foreground/80 text-sm mb-4 font-light leading-relaxed">
                    {repo.description}
                  </p>
                  
                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      {repo.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-4 h-4" />
                      {repo.forks}
                    </span>
                  </div>
                  
                  <Badge variant="outline" className="font-light">
                    {repo.language}
                  </Badge>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
