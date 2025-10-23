import { Card } from "@/components/ui/card";
import { Zap, TrendingUp, Shield } from "lucide-react";

export const About = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            About Me
          </h2>
          
          <p className="text-xl text-muted-foreground text-center mb-16">
            Building the future of renewable energy through technology
          </p>
          
          <Card className="p-8 md:p-12 shadow-medium border-0 mb-12">
            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              As Co-Founder and CTO at <span className="font-semibold text-primary">HelioExpect</span>, 
              I'm leading the development of cutting-edge forecasting and predictive monitoring tools 
              that empower renewable energy producers. Our mission is to reduce grid penalties and 
              enable seamless integration with national power infrastructure, accelerating renewable 
              energy adoption and strengthening the resilience of our energy systems.
            </p>
            
            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              With over <span className="font-semibold text-secondary">5 years of professional experience</span> as 
              a Full-Stack Engineer, I've built scalable solutions across diverse industries including fintech, 
              EdTech, SaaS platforms, and renewable energy. I've contributed to products serving millions of users 
              and led teams in building robust cloud infrastructure on AWS and Azure.
            </p>
            
            <p className="text-lg leading-relaxed text-foreground/90">
              My technical expertise spans the entire stack—from React and Next.js on the frontend to Spring Boot 
              and Django on the backend, with extensive experience in cloud architecture, DevOps, and database 
              optimization. I'm passionate about writing clean, maintainable code and building systems that scale.
            </p>
          </Card>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 shadow-soft border-0 hover:shadow-medium transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                Leveraging advanced technology to solve complex renewable energy challenges
              </p>
            </Card>
            
            <Card className="p-6 shadow-soft border-0 hover:shadow-medium transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Impact</h3>
              <p className="text-muted-foreground">
                Accelerating the transition to sustainable energy systems globally
              </p>
            </Card>
            
            <Card className="p-6 shadow-soft border-0 hover:shadow-medium transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Reliability</h3>
              <p className="text-muted-foreground">
                Building resilient infrastructure for the future of energy
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
