import { Card } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

export const Education = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Education & Recognition
          </h2>
          
          <p className="text-xl text-muted-foreground text-center mb-16">
            Academic background and achievements
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    B.Tech in Computer Science
                  </h3>
                  <p className="text-primary font-medium mb-1">
                    Indian Institute of Information Technology Una
                  </p>
                  <p className="text-muted-foreground">2015 - 2019</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Recognition
                  </h3>
                  <ul className="space-y-2 text-foreground/90">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2"></span>
                      GAEA Challenge Certification
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2"></span>
                      Employee of the Quarter
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2"></span>
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
