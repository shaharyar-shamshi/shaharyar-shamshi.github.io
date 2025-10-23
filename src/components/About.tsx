import { Card } from "@/components/ui/card";
import { Zap, TrendingUp, Shield } from "lucide-react";

export const About = () => {
  return (
    <section className="py-32 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-center mb-8 tracking-tight">
            About Me
          </h2>
          
          <p className="text-xl text-muted-foreground text-center mb-20 font-light leading-relaxed">
            Building the future of renewable energy through technology
          </p>
          
          <Card className="p-10 md:p-14 shadow-soft hover:shadow-medium transition-all duration-500 elegant-border bg-gradient-card mb-16">
            <p className="text-lg md:text-xl leading-relaxed text-foreground/80 mb-8 font-light">
              As Co-Founder and CTO at <span className="font-semibold text-primary">HelioExpect</span>, 
              I'm leading the development of cutting-edge forecasting and predictive monitoring tools 
              that empower renewable energy producers. Our mission is to reduce grid penalties and 
              enable seamless integration with national power infrastructure, accelerating renewable 
              energy adoption and strengthening the resilience of our energy systems.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed text-foreground/80 mb-8 font-light">
              With over <span className="font-semibold text-secondary">5 years of professional experience</span> as 
              a Full-Stack Engineer, I've built scalable solutions across diverse industries including fintech, 
              EdTech, SaaS platforms, and renewable energy. I've contributed to products serving millions of users 
              and led teams in building robust cloud infrastructure on AWS and Azure.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed text-foreground/80 font-light">
              My technical expertise spans the entire stack—from React and Next.js on the frontend to Spring Boot 
              and Django on the backend, with extensive experience in cloud architecture, DevOps, and database 
              optimization. I'm passionate about writing clean, maintainable code and building systems that scale.
            </p>
          </Card>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 shadow-elegant elegant-border hover-lift bg-gradient-card group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3 tracking-tight">Innovation</h3>
              <p className="text-muted-foreground leading-relaxed font-light">
                Leveraging advanced technology to solve complex renewable energy challenges
              </p>
            </Card>
            
            <Card className="p-8 shadow-elegant elegant-border hover-lift bg-gradient-card group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary/10 to-secondary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3 tracking-tight">Impact</h3>
              <p className="text-muted-foreground leading-relaxed font-light">
                Accelerating the transition to sustainable energy systems globally
              </p>
            </Card>
            
            <Card className="p-8 shadow-elegant elegant-border hover-lift bg-gradient-card group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3 tracking-tight">Reliability</h3>
              <p className="text-muted-foreground leading-relaxed font-light">
                Building resilient infrastructure for the future of energy
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
