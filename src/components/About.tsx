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
  const [lead, ...rest] = siteConfig.about.bio;

  return (
    <section id="about" className="section bg-card">
      <div className="section-inner max-w-content">
        <SectionHeader eyebrow="The Profile" title={siteConfig.about.tagline} />

        <Reveal className="mx-auto max-w-3xl space-y-4 text-center text-lg leading-relaxed text-muted-foreground">
          <p>{lead}</p>
          {rest.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </Reveal>

        <Reveal className="mx-auto my-12 max-w-3xl">
          <blockquote className="rounded-card bg-brand-soft px-8 py-8 text-center font-display text-2xl font-semibold leading-tight text-foreground md:text-3xl">
            &ldquo;Building systems that scale &mdash; and that move the energy transition
            forward.&rdquo;
          </blockquote>
        </Reveal>

        <div className="grid gap-8 border-t border-border pt-8 sm:grid-cols-3 sm:gap-10">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <p.icon className="h-5 w-5 text-brand" />
              <h3 className="mt-4 font-display text-lg font-bold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
