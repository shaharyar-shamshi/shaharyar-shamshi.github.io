import { GraduationCap, Award, Sparkles } from "lucide-react";

export const Education = () => {
  return (
    <section id="education" className="py-32 relative overflow-hidden bg-background">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-center text-3xl md:text-5xl font-bold mb-8 tracking-tight">
            Education & Recognition
          </h2>

          <p className="text-xl text-muted-foreground text-center mb-20 font-light leading-relaxed">
            Academic excellence and professional achievements
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-panel p-10 rounded-3xl hover:-translate-y-1 transition-transform duration-300 card-hover-3d relative overflow-hidden group flex flex-col items-center text-center">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl -mr-12 -mt-12 group-hover:bg-primary/20 transition-all"></div>

              <div className="flex flex-col items-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="w-8 h-8 text-primary" />
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
            </div>

            <div className="glass-panel p-10 rounded-3xl hover:-translate-y-1 transition-transform duration-300 card-hover-3d relative overflow-hidden group flex flex-col items-center text-center">
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/10 rounded-full blur-2xl -ml-12 -mb-12 group-hover:bg-secondary/20 transition-all"></div>

              <div className="flex flex-col items-center gap-5 w-full">
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-secondary" />
                </div>
                <div className="w-full">
                  <h3 className="text-xl font-display font-semibold mb-4 tracking-tight">
                    Recognition
                  </h3>
                  <ul className="space-y-4 inline-block text-left">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
