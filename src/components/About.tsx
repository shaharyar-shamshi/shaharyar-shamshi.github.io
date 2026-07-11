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
    <section id="about" className="section border-t border-foreground/80">
      <div className="section-inner max-w-content">
        <SectionHeader eyebrow="The Profile" title={siteConfig.about.tagline} />

        <Reveal
          className="news-columns text-[0.975rem] leading-relaxed text-foreground/90 justify-text lg:[columns:3]"
          as="div"
        >
          <p className="dropcap">{lead}</p>
          {rest.map((paragraph, i) => (
            <p key={i} className="mt-4">
              {paragraph}
            </p>
          ))}
        </Reveal>

        <Reveal className="mx-auto my-12 max-w-3xl">
          <blockquote className="pullquote py-5 text-center text-2xl leading-tight md:text-3xl">
            &ldquo;Building systems that scale &mdash; and that move the energy transition
            forward.&rdquo;
          </blockquote>
        </Reveal>

        <div className="grid gap-px border border-border bg-border sm:grid-cols-3">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 80} className="bg-card">
              <div className="h-full p-6">
                <div className="flex items-center gap-3">
                  <p.icon className="h-5 w-5 text-brand" />
                  <h3 className="font-display text-lg font-bold">{p.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
