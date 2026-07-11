import { GraduationCap, Award, Sparkles } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { education } from "@/data/resume";

export const Education = () => {
  const degree = education.find((e) => e.type === "Degree");
  const recognition = education.find((e) => e.type === "Recognition");

  return (
    <section id="education" className="section border-t border-foreground/80">
      <div className="section-inner">
        <SectionHeader
          eyebrow="Background"
          title="Education & recognition"
        />

        <div className="grid gap-4 md:grid-cols-2">
          {degree && (
            <Reveal>
              <div className="surface h-full p-7">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-brand/10 text-brand">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">{degree.title}</h3>
                <p className="mt-1 text-sm text-brand">{degree.institution}</p>
                <p className="mt-1 font-mono text-xs text-muted-foreground">{degree.period}</p>
              </div>
            </Reveal>
          )}

          {recognition && (
            <Reveal delay={80}>
              <div className="surface h-full p-7">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-secondary text-foreground">
                  <Award className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">Recognition</h3>
                <ul className="mt-4 space-y-3">
                  {recognition.items?.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Sparkles className="h-4 w-4 shrink-0 text-brand" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
};
