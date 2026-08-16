import { Mail, Linkedin, Github } from "lucide-react";
import { Reveal } from "./Reveal";
import { siteConfig } from "@/data/resume";

const EMAIL = "shaharyarshamshi@gmail.com";

export const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="section-inner max-w-content">
        <Reveal>
          <div className="surface py-12 text-center md:py-16">
            <span className="eyebrow">Get in touch</span>
            <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.08] md:text-6xl">
              Let&apos;s build something that matters.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Interested in renewable energy, technology, or a collaboration? I&apos;d love to hear
              from you.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex h-11 items-center gap-2 rounded-pill bg-primary px-5 text-sm font-medium text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
              >
                <Mail className="h-4 w-4" />
                {EMAIL}
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
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-pill border border-border bg-background px-5 text-sm font-medium transition-colors hover:bg-accent"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </div>
        </Reveal>

        <footer className="mt-10 flex flex-col items-center gap-2 text-center">
          <p className="font-display text-2xl font-bold tracking-tight">Shaharyar Shamshi</p>
          <p className="mono-tag">
            Delhi, India &middot; © {new Date().getFullYear()} &middot; All rights reserved
          </p>
        </footer>
      </div>
    </section>
  );
};
