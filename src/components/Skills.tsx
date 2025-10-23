import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "JavaScript", "TypeScript", "Python", "Node.js"],
    color: "primary",
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Vue.js", "Angular", "Tailwind CSS"],
    color: "secondary",
  },
  {
    title: "Backend",
    skills: ["Spring Boot", "Django", "Express", "ActionHero"],
    color: "accent",
  },
  {
    title: "Database",
    skills: ["PostgreSQL", "MongoDB", "MySQL"],
    color: "primary",
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD"],
    color: "secondary",
  },
  {
    title: "Tools",
    skills: ["Apache Kafka", "Git", "AWS Lambda", "CloudFront", "ECS"],
    color: "accent",
  },
];

export const Skills = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Technical Skills
          </h2>
          
          <p className="text-xl text-muted-foreground text-center mb-16">
            Full-stack expertise with a focus on scalable solutions
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="p-6 shadow-soft hover:shadow-medium transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="outline"
                      className="text-sm font-medium"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
