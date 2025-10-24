import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    company: "HelioExpect",
    role: "Co-Founder and CTO",
    period: "January 2025 - Present",
    location: "Delhi, India",
    description: "Leading the development of advanced forecasting and predictive monitoring tools for renewable energy producers. Reducing grid penalties and enabling seamless integration with national power infrastructure.",
    tags: ["Renewable Energy", "Leadership", "Product Development"],
  },
  {
    company: "Chima (YC-W23)",
    role: "FullStack Developer",
    period: "June 2024 - June 2025",
    location: "Remote",
    description: "Developed B2B SaaS platform using Next.js, React, and Tailwind. Architected cloud infrastructure on AWS and led migration to Azure. Built centralized auth server and content creation dashboard.",
    tags: ["Next.js", "AWS", "Azure", "DevOps"],
  },
  {
    company: "PSPDFKit",
    role: "Software Engineer",
    period: "November 2022 - February 2024",
    location: "Remote",
    description: "Contributed to PDF SDK solutions. Accelerated document printing with parallel processing. Implemented accessibility improvements and point-snapping features using K-D Tree algorithms.",
    tags: ["React", "PDF", "Performance", "Accessibility"],
  },
  {
    company: "Countly",
    role: "Full Stack Developer",
    period: "September 2021 - July 2022",
    location: "Remote",
    description: "Open source contributor focused on modernizing the platform. Migrated multiple plugins from jQuery to Vue.js, improving performance and maintainability across the analytics platform.",
    tags: ["Vue.js", "JavaScript", "Open Source"],
  },
  {
    company: "BharatPe",
    role: "Software Engineer",
    period: "September 2021 - February 2023",
    location: "Delhi",
    description: "Optimized distributor onboarding and KYC flow, reducing time by 75%. Built loan management system and D2R products. Contributed to both frontend (React) and backend (Spring Boot).",
    tags: ["Spring Boot", "React", "MongoDB", "Kafka"],
  },
  {
    company: "xoolooloo",
    role: "Software Engineering Lead",
    period: "May 2021 - December 2023",
    location: "Nashville, TN",
    description: "Led engineering efforts to build effective social connections platform for like-minded people.",
    tags: ["Leadership", "Social Platform"],
  },
  {
    company: "The Solar Labs",
    role: "Software Engineer",
    period: "February 2020 - October 2021",
    location: "New Delhi",
    description: "Built subscription management, PDF report generation, and AutoCAD export features. Set up CI/CD on Azure DevOps with AWS deployment. Migrated to GKE and configured ECS infrastructure.",
    tags: ["Django", "Vue.js", "AWS", "Docker", "Kubernetes"],
  },
  {
    company: "JungleWorks",
    role: "Software Engineer",
    period: "July 2019 - February 2020",
    location: "Chandigarh",
    description: "Created Dynamic Theme Engine for Yelo product using Angular. Built AI-powered content engine KIKI from scratch. Developed news scraping library and implemented trending algorithms.",
    tags: ["Angular", "Node.js", "AI/ML"],
  },
  {
    company: "Dexecure",
    role: "Software Developer",
    period: "May 2018 - April 2019",
    location: "Singapore (Remote)",
    description: "Developed backend solutions for optimization dashboard. Integrated Stripe payment gateway. Migrated image processing from ImageMagick to GraphicsMagick, improving efficiency.",
    tags: ["Node.js", "JavaScript", "Stripe"],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Experience
          </h2>
          
          <p className="text-xl text-muted-foreground text-center mb-16">
            Building impactful products across industries
          </p>
          
          <div className="relative">
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"></div>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 md:pl-20">
                  <div className="absolute left-[-6px] md:left-[26px] top-2 w-3 h-3 rounded-full bg-primary border-4 border-background"></div>
                  
                  <Card className="p-6 shadow-soft hover:shadow-medium transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold text-primary mb-1">
                          {exp.company}
                        </h3>
                        <p className="text-lg font-medium text-foreground">
                          {exp.role}
                        </p>
                      </div>
                      <div className="text-muted-foreground mt-2 md:mt-0 md:text-right">
                        <p className="font-medium">{exp.period}</p>
                        <p className="text-sm">{exp.location}</p>
                      </div>
                    </div>
                    
                    <p className="text-foreground/80 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="outline"
                          className="font-light"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
