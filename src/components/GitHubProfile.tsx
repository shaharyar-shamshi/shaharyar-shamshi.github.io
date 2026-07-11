import { Github, Star, GitFork, ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { githubStats, featuredRepos } from "@/data/resume";

export const GitHubProfile = () => {
  return (
    <section id="github" className="section border-t border-border">
      <div className="section-inner">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            eyebrow="Open Source Activity"
            title="Building in the open"
            subtitle="An active contributor to the developer community."
            className="mb-0"
          />
          <Reveal>
            <a
              href="https://github.com/shaharyar-shamshi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-lg border border-border px-4 text-sm font-medium transition-colors hover:border-foreground/30 hover:bg-accent"
            >
              <Github className="h-4 w-4" />
              View profile
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>

        {/* Stat tiles */}
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {githubStats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 60}>
              <div className="surface p-6">
                <div className="font-mono text-3xl font-semibold tracking-tight md:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-xs uppercase tracking-wide text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Featured repos */}
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {featuredRepos.map((repo, i) => (
            <Reveal key={repo.name} delay={(i % 3) * 70}>
              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="surface surface-hover group flex h-full flex-col p-6"
              >
                <div className="flex items-center justify-between">
                  <Github className="h-5 w-5 text-muted-foreground" />
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <h3 className="mt-4 font-semibold tracking-tight">{repo.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {repo.description}
                </p>
                <div className="mt-5 flex items-center gap-4 font-mono text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <span className="h-2.5 w-2.5 rounded-full bg-brand" />
                    {repo.language}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="h-3.5 w-3.5" />
                    {repo.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="h-3.5 w-3.5" />
                    {repo.forks}
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
