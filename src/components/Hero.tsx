import { Github, Linkedin, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import { siteConfig } from "@/data/resume";

const stats = [
  ["Experience", "6+ years"],
  ["Focus", "Renewable energy"],
  ["Discipline", "Full-stack"],
  ["Scale", "4+ GW · 30+ sites"],
];

export const Hero = () => {
  return (
    <section id="hero" className="pt-40 pb-20 md:pt-48 md:pb-28">
      <div className="section-inner max-w-content reveal is-visible">
        <div className="grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
          <div>
            <span className="eyebrow">Co-Founder &amp; CTO, HelioExpect</span>

            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
              Building tools to accelerate the renewable energy transition.
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {siteConfig.hero.tagline} A full-stack engineer with 6+ years across fintech,
              developer tools and SaaS, now focused on forecasting and predictive monitoring
              for the grid.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="mailto:shaharyarshamshi@gmail.com"
                className="inline-flex h-11 items-center gap-2 rounded-pill bg-primary px-5 text-sm font-medium text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
              >
                <Mail className="h-4 w-4" />
                Get in touch
              </a>
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-pill border border-border bg-background px-5 text-sm font-medium transition-colors hover:bg-accent"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-pill border border-border bg-background px-5 text-sm font-medium transition-colors hover:bg-accent"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>

            <dl className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
              {stats.map(([k, v]) => (
                <div key={k}>
                  <dt className="mono-tag">{k}</dt>
                  <dd className="mt-1 font-display text-lg font-semibold">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mx-auto w-full max-w-sm md:mx-0">
            <div className="overflow-hidden rounded-elev border border-border/60 shadow-elev">
              <img
                src={profilePhoto}
                alt="Shaharyar Shamshi"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <p className="mt-3 text-center text-sm text-muted-foreground md:text-left">
              Shaharyar Shamshi, Co-Founder &amp; CTO of HelioExpect
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
