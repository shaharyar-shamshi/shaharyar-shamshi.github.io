import { Github, Star, GitFork, ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { githubStats, featuredRepos } from "@/data/resume";

export const GitHubProfile = () => {
  return (
    <section id="github" className="section border-t border-foreground/80">
      <div className="section-inner max-w-content">
        <SectionHeader
          eyebrow="By the Numbers"
          title="Building in the open"
          subtitle="An active contributor to the tools and libraries developers rely on."
        />

        {/* Stat strip */}
        <Reveal className="grid grid-cols-2 divide-x divide-y divide-border border border-border md:grid-cols-4 md:divide-y-0">
          {githubStats.map((stat) => (
            <div key={stat.label} className="px-6 py-6 text-center">
              <div className="font-mono text-4xl font-bold md:text-5xl">{stat.value}</div>
              <div className="mt-2 mono-tag">{stat.label}</div>
            </div>
          ))}
        </Reveal>

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
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <span className="mono-tag">Repository</span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold">{repo.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {repo.description}
                </p>
                <div className="mt-5 flex items-center gap-4 mono-tag">
                  <span className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 bg-brand" />
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

        <Reveal className="mt-8 text-center">
          <a
            href="https://github.com/shaharyar-shamshi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center gap-2 border border-foreground/60 px-6 font-mono text-sm font-medium uppercase tracking-wide transition-colors hover:bg-accent"
          >
            <Github className="h-4 w-4" />
            Read the full profile
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
};
