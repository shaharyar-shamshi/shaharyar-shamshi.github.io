import { Card } from "@/components/ui/card";
import { GraduationCap, Award, Sparkles } from "lucide-react";

export const Education = () => {
  return (
    <section className="py-32 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-center mb-8 tracking-tight">
            Education & Recognition
          </h2>
          
          <p className="text-xl text-muted-foreground text-center mb-20 font-light leading-relaxed">
            Academic excellence and professional achievements
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-10 shadow-elegant elegant-border hover-lift bg-gradient-card group">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold mb-3 tracking-tight">
                    B.Tech in Computer Science
                  </h3>
                  <p className="text-primary font-medium mb-2 text-lg">
                    Indian Institute of Information Technology Una
                  </p>
                  <p className="text-muted-foreground font-light">2015 - 2019</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-10 shadow-elegant elegant-border hover-lift bg-gradient-card group">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary/10 to-secondary/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-7 h-7 text-secondary" />
                </div>
                <div className="w-full">
                  <h3 className="text-xl font-display font-semibold mb-4 tracking-tight">
                    Recognition
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-foreground/90 font-light">
                      <Sparkles className="w-4 h-4 text-accent mr-3 flex-shrink-0" />
                      GAEA Challenge Certification
                    </li>
                    <li className="flex items-center text-foreground/90 font-light">
                      <Sparkles className="w-4 h-4 text-accent mr-3 flex-shrink-0" />
                      Employee of the Quarter
                    </li>
                    <li className="flex items-center text-foreground/90 font-light">
                      <Sparkles className="w-4 h-4 text-accent mr-3 flex-shrink-0" />
                      Processing Fellowship 2019
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
