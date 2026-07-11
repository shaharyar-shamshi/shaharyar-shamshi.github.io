import { Github, Linkedin, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import { siteConfig } from "@/data/resume";

const today = new Date().toLocaleDateString("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});

export const Hero = () => {
  return (
    <section id="hero" className="pt-20">
      <div className="section-inner max-w-content">
        {/* Masthead utility row */}
        <div className="rule flex flex-wrap items-center justify-between gap-2 py-2 mono-tag">
          <span>{today}</span>
          <span className="hidden sm:inline">Vol. I &middot; No. 1</span>
          <span>shaharyarshamshi.com</span>
        </div>

        {/* Nameplate */}
        <div className="border-y-2 border-foreground py-6 text-center md:py-8">
          <h1 className="font-display text-5xl font-black leading-none tracking-tight sm:text-7xl md:text-8xl">
            Shaharyar Shamshi
          </h1>
        </div>
        <div className="rule-double mt-[3px] flex items-center justify-center py-2">
          <p className="mono-tag tracking-[0.35em]">
            Technology &middot; Renewable Energy &middot; Software Engineering
          </p>
        </div>

        {/* Lead story */}
        <div className="mt-8 grid gap-8 md:mt-10 md:grid-cols-3">
          <div className="md:col-span-2 md:border-r md:border-border md:pr-8">
            <p className="eyebrow">Lead Story</p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-[1.08] sm:text-4xl md:text-5xl">
              Co-Founder &amp; CTO Builds Tools to Accelerate the Renewable Energy Transition
            </h2>
            <p className="mt-4 font-display text-lg italic leading-snug text-muted-foreground md:text-xl">
              A full-stack engineer with 5+ years across fintech, developer tools and SaaS turns his
              focus to forecasting and predictive monitoring for the grid.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 rule-hair pt-3 mono-tag">
              <span className="text-foreground">By Shaharyar Shamshi</span>
              <span aria-hidden>&mdash;</span>
              <span>HelioExpect, Delhi</span>
            </div>

            <div className="news-columns mt-5 text-[0.975rem] leading-relaxed text-foreground/90 justify-text">
              <p className="dropcap">
                {siteConfig.hero.tagline} At HelioExpect &mdash; incubated by AIC-IIITH, IIIT
                Hyderabad &mdash; the mission is to reduce grid penalties and enable seamless
                integration with national power infrastructure.
              </p>
              <p className="mt-4">
                The work spans the full stack: React and Next.js on the front end, Spring Boot and
                Django on the back end, and cloud architecture on AWS and Azure &mdash; the same
                breadth that has powered products serving millions of users.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="mailto:shaharyarshamshi@gmail.com"
                className="inline-flex h-11 items-center gap-2 bg-primary px-5 font-mono text-sm font-medium uppercase tracking-wide text-primary-foreground transition-opacity hover:opacity-90"
              >
                <Mail className="h-4 w-4" />
                Get in touch
              </a>
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 border border-foreground/60 px-5 font-mono text-sm font-medium uppercase tracking-wide transition-colors hover:bg-accent"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 border border-foreground/60 px-5 font-mono text-sm font-medium uppercase tracking-wide transition-colors hover:bg-accent"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Portrait column */}
          <figure className="md:pt-6">
            <div className="border border-foreground/70 p-1.5">
              <img
                src={profilePhoto}
                alt="Shaharyar Shamshi"
                className="aspect-[4/5] w-full object-cover grayscale contrast-[1.05]"
              />
            </div>
            <figcaption className="mt-2 border-t border-border pt-2 font-display text-sm italic text-muted-foreground">
              Shaharyar Shamshi, Co-Founder &amp; CTO of HelioExpect, photographed in 2025.
            </figcaption>

            <div className="mt-5 border border-border">
              <p className="border-b border-border bg-accent px-3 py-1.5 mono-tag text-foreground">
                By the numbers
              </p>
              <dl className="divide-y divide-border">
                {[
                  ["Experience", "5+ years"],
                  ["Focus", "Renewable energy"],
                  ["Discipline", "Full-stack"],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-center justify-between px-3 py-2 text-sm">
                    <dt className="mono-tag">{k}</dt>
                    <dd className="font-display font-bold">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
};
