import { Mail, Linkedin, Github } from "lucide-react";
import { Reveal } from "./Reveal";
import { siteConfig } from "@/data/resume";

const EMAIL = "shaharyarshamshi@gmail.com";

export const Contact = () => {
  return (
    <section id="contact" className="section border-t border-foreground/80">
      <div className="section-inner max-w-content">
        <Reveal>
          <div className="border-y-2 border-foreground py-12 text-center md:py-16">
            <p className="eyebrow justify-center">Op-Ed &middot; Contact the Desk</p>
            <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-black leading-[1.05] md:text-6xl">
              Let&apos;s build something that matters.
            </h2>
            <p className="mx-auto mt-5 max-w-xl font-display text-lg italic leading-snug text-muted-foreground md:text-xl">
              Interested in renewable energy, technology, or a collaboration? Letters to the editor
              are always welcome.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex h-11 items-center gap-2 bg-primary px-5 font-mono text-sm font-medium uppercase tracking-wide text-primary-foreground transition-opacity hover:opacity-90"
              >
                <Mail className="h-4 w-4" />
                {EMAIL}
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
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 border border-foreground/60 px-5 font-mono text-sm font-medium uppercase tracking-wide transition-colors hover:bg-accent"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </div>
        </Reveal>

        <footer className="mt-10 flex flex-col items-center gap-2 text-center">
          <p className="font-display text-2xl font-black tracking-tight">Shaharyar Shamshi</p>
          <p className="mono-tag">
            Published from Delhi &middot; © {new Date().getFullYear()} &middot; All rights reserved
          </p>
          <p className="mt-1 max-w-md text-sm italic text-muted-foreground">
            Set in Playfair Display, PT Serif &amp; Oswald. Building a sustainable future through
            technology.
          </p>
        </footer>
      </div>
    </section>
  );
};
