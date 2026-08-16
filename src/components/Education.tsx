import { GraduationCap, Award, Sparkles } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { education } from "@/data/resume";

export const Education = () => {
  const degree = education.find((e) => e.type === "Degree");
  const recognition = education.find((e) => e.type === "Recognition");

  return (
    <section id="education" className="section bg-card">
      <div className="section-inner">
        <SectionHeader
          eyebrow="Background"
          title="Education & recognition"
        />

        <div className="mx-auto grid max-w-4xl gap-8 border-t border-border pt-8 md:grid-cols-2 md:gap-10">
          {degree && (
            <Reveal>
              <GraduationCap className="h-5 w-5 text-brand" />
              <h3 className="mt-4 text-lg font-semibold tracking-tight">{degree.title}</h3>
              <p className="mt-1 text-sm text-brand">{degree.institution}</p>
              <p className="mt-1 text-xs text-muted-foreground">{degree.period}</p>
            </Reveal>
          )}

          {recognition && (
            <Reveal delay={80}>
              <Award className="h-5 w-5 text-foreground" />
              <h3 className="mt-4 text-lg font-semibold tracking-tight">Recognition</h3>
              <ul className="mt-3 space-y-3">
                {recognition.items?.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Sparkles className="h-4 w-4 shrink-0 text-brand" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
};
