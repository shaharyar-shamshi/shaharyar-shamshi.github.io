import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, GitFork, Star } from "lucide-react";

const contributions = [
  {
    project: "Countly",
    role: "Open Source FullStack Developer",
    period: "September 2021 - July 2022",
    description:
      "Major contributor to Countly analytics platform. Migrated multiple plugins from jQuery to Vue.js, significantly improving performance and maintainability.",
    contributions: [
      "Migrated 15+ plugins from jQuery to Vue.js",
      "Contributed to UI component library",
      "Improved code consistency across application",
      "Enhanced performance with modern framework patterns",
    ],
    tags: ["Vue.js", "JavaScript", "jQuery Migration"],
    link: "https://github.com/Countly",
  },
  {
    project: "TEAMMATES",
    role: "Multiple Contributor",
    period: "December 2017 - May 2018",
    description:
      "Active contributor to TEAMMATES, an online peer evaluation/feedback tool used by educational institutions globally.",
    contributions: [
      "Fixed critical bugs in student submission flow",
      "Enhanced UI/UX for feedback forms",
      "Improved test coverage",
      "Documentation improvements",
    ],
    tags: ["Java", "JavaScript", "Education Tech"],
    link: "https://github.com/TEAMMATES",
  },
  {
    project: "Processing Foundation",
    role: "Processing Fellowship 2019",
    period: "March 2019 - May 2019",
    description:
      "Selected for prestigious Processing Fellowship to contribute to creative coding community and tools.",
    contributions: [
      "Developed educational resources",
      "Contributed to Processing documentation",
      "Community engagement and mentorship",
      "Workshop facilitation",
    ],
    tags: ["Processing", "Creative Coding", "Education"],
    link: "https://processingfoundation.org/",
  },
];

export const OpenSource = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Open Source Contributions
          </h2>

          <p className="text-xl text-muted-foreground text-center mb-16">
            Contributing to the developer community and open source ecosystem
          </p>

          <div className="space-y-8">
            {contributions.map((contrib, index) => (
              <Card
                key={index}
                className="p-8 shadow-soft hover:shadow-medium transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Github className="w-6 h-6 text-primary" />
                      <h3 className="text-2xl font-semibold">{contrib.project}</h3>
                    </div>
                    <p className="text-lg font-medium text-foreground mb-1">
                      {contrib.role}
                    </p>
                    <p className="text-muted-foreground">{contrib.period}</p>
                  </div>

                  <Button
                    variant="outline"
                    className="mt-4 md:mt-0"
                    asChild
                  >
                    <a
                      href={contrib.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View Project
                    </a>
                  </Button>
                </div>

                <p className="text-foreground/80 mb-6 leading-relaxed">
                  {contrib.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold mb-3 flex items-center gap-2 text-foreground/70">
                    <GitFork className="w-4 h-4" />
                    Key Contributions:
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {contrib.contributions.map((contribution, idx) => (
                      <div key={idx} className="flex items-start">
                        <Star className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground/80">
                          {contribution}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {contrib.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="p-8 bg-gradient-hero text-white inline-block">
              <p className="text-lg mb-4">
                Interested in collaborating on open source projects?
              </p>
              <Button
                variant="secondary"
                size="lg"
                className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 text-white"
                asChild
              >
                <a
                  href="https://github.com/shaharyar-shamshi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-5 w-5" />
                  Follow on GitHub
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
