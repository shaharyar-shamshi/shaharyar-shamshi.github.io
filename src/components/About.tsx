import { Zap, TrendingUp, Shield } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-32 relative bg-background overflow-hidden">
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] animate-pulse"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-center mb-8 tracking-tight">
            About Me
          </h2>

          <p className="text-xl text-muted-foreground text-center mb-20 font-light leading-relaxed">
            Building the future of renewable energy through technology
          </p>

          <div className="glass-panel p-10 md:p-14 rounded-3xl mb-16 relative overflow-hidden text-center">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
            <p className="text-lg md:text-xl leading-relaxed text-foreground/80 mb-8 font-light max-w-3xl mx-auto">
              As Co-Founder and CTO at <span className="font-semibold text-primary">HelioExpect</span>{" "}
              <span className="text-base text-muted-foreground">(Incubated by AIC-IIITH, IIIT Hyderabad)</span>,
              I'm leading the development of cutting-edge forecasting and predictive monitoring tools
              that empower renewable energy producers. Our mission is to reduce grid penalties and
              enable seamless integration with national power infrastructure, accelerating renewable
              energy adoption and strengthening the resilience of our energy systems.
            </p>

            <p className="text-lg md:text-xl leading-relaxed text-foreground/80 mb-8 font-light max-w-3xl mx-auto">
              With over <span className="font-semibold text-secondary">5 years of professional experience</span> as
              a Full-Stack Engineer, I've built scalable solutions across diverse industries including fintech,
              EdTech, SaaS platforms, and renewable energy. I've contributed to products serving millions of users
              and led teams in building robust cloud infrastructure on AWS and Azure.
            </p>

            <p className="text-lg md:text-xl leading-relaxed text-foreground/80 font-light max-w-3xl mx-auto">
              My technical expertise spans the entire stack—from React and Next.js on the frontend to Spring Boot
              and Django on the backend, with extensive experience in cloud architecture, DevOps, and database
              optimization. I'm passionate about writing clean, maintainable code and building systems that scale.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-panel p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 card-hover-3d flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3 tracking-tight">Innovation</h3>
              <p className="text-muted-foreground leading-relaxed font-light">
                Leveraging advanced technology to solve complex renewable energy challenges
              </p>
            </div>

            <div className="glass-panel p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 card-hover-3d flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3 tracking-tight">Impact</h3>
              <p className="text-muted-foreground leading-relaxed font-light">
                Accelerating the transition to sustainable energy systems globally
              </p>
            </div>

            <div className="glass-panel p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 card-hover-3d flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3 tracking-tight">Reliability</h3>
              <p className="text-muted-foreground leading-relaxed font-light">
                Building resilient infrastructure for the future of energy
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
