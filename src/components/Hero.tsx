import { Github, Linkedin, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import { siteConfig } from "@/data/resume";

const previously = ["BharatPe", "PSPDFKit", "Chima (YC W23)", "The Solar Labs"];

export const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="pointer-events-none absolute inset-0 dot-grid" aria-hidden />

      <div className="container relative mx-auto px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.5fr_1fr]">
          {/* Left: intro */}
          <div>
            <span className="eyebrow">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
              </span>
              Available for advisory &amp; collaboration
            </span>

            <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tighter sm:text-6xl md:text-7xl">
              {siteConfig.name}
            </h1>

            <p className="mt-5 max-w-xl text-lg text-muted-foreground md:text-xl">
              Co-Founder &amp; CTO at{" "}
              <span className="font-medium text-foreground">{siteConfig.hero.highlight}</span>.
              I build advanced forecasting and predictive monitoring tools to{" "}
              <span className="text-foreground">accelerate renewable energy adoption</span>.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="mailto:shaharyarshamshi@gmail.com"
                className="inline-flex h-11 items-center gap-2 rounded-lg bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                <Mail className="h-4 w-4" />
                Get in touch
              </a>
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-lg border border-border px-5 text-sm font-medium transition-colors hover:border-foreground/30 hover:bg-accent"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-lg border border-border px-5 text-sm font-medium transition-colors hover:border-foreground/30 hover:bg-accent"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>

            <div className="mt-12">
              <p className="mono-tag uppercase tracking-[0.18em]">Previously</p>
              <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-2 font-display text-sm font-medium text-muted-foreground">
                {previously.map((c) => (
                  <span key={c}>{c}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: portrait */}
          <div className="order-first flex justify-center lg:order-none lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-3 rounded-2xl border border-border" aria-hidden />
              <img
                src={profilePhoto}
                alt="Shaharyar Shamshi"
                className="relative h-48 w-48 rounded-2xl object-cover md:h-64 md:w-64 lg:h-72 lg:w-72"
              />
              <div className="absolute -bottom-4 -right-4 flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-brand" />
                <span className="font-mono text-xs text-muted-foreground">5+ yrs · Full-Stack</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
