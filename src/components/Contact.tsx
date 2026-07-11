import { Mail, Linkedin, Github } from "lucide-react";
import { Reveal } from "./Reveal";
import { siteConfig } from "@/data/resume";

const EMAIL = "shaharyarshamshi@gmail.com";

export const Contact = () => {
  return (
    <section id="contact" className="section border-t border-border">
      <div className="section-inner">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card px-6 py-16 text-center md:px-12 md:py-24">
            <div className="pointer-events-none absolute inset-0 dot-grid" aria-hidden />
            <div className="relative mx-auto max-w-prose">
              <span className="eyebrow justify-center">
                <span className="h-px w-6 bg-brand" aria-hidden />
                Contact
              </span>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-5xl">
                Let&apos;s build something that matters.
              </h2>
              <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
                Interested in renewable energy, technology, or a collaboration? I&apos;d love to hear
                from you.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex h-11 items-center gap-2 rounded-lg bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  <Mail className="h-4 w-4" />
                  {EMAIL}
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
                <a
                  href={siteConfig.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center gap-2 rounded-lg border border-border px-5 text-sm font-medium transition-colors hover:border-foreground/30 hover:bg-accent"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        <footer className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Shaharyar Shamshi</p>
          <p className="font-mono text-xs">Building a sustainable future through technology.</p>
        </footer>
      </div>
    </section>
  );
};
