import { Zap, TrendingUp, ShieldCheck } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { siteConfig } from "@/data/resume";

const principles = [
  {
    title: "Innovation",
    description: "Leveraging advanced technology to solve complex renewable energy challenges.",
    icon: Zap,
  },
  {
    title: "Impact",
    description: "Accelerating the transition to sustainable energy systems globally.",
    icon: TrendingUp,
  },
  {
    title: "Reliability",
    description: "Building resilient infrastructure for the future of energy.",
    icon: ShieldCheck,
  },
];

export const About = () => {
  return (
    <section id="about" className="section">
      <div className="section-inner">
        <SectionHeader
          eyebrow="About"
          title="Building the future of renewable energy through technology"
        />

        <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr]">
          <Reveal className="max-w-prose space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            {siteConfig.about.bio.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </Reveal>

          <div className="space-y-4">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div className="surface surface-hover flex gap-4 p-5">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand/10 text-brand">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold tracking-tight">{p.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {p.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
