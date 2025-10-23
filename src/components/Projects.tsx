import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Zap, Building2, TrendingUp, Users } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const projects = [
  {
    title: "HelioExpect Platform",
    company: "HelioExpect",
    description:
      "Advanced forecasting and predictive monitoring platform for renewable energy producers. Reduces grid penalties through AI-powered solar generation predictions and real-time monitoring. Enables seamless integration with national power infrastructure.",
    icon: Zap,
    tags: ["AI/ML", "IoT", "Forecasting", "Renewable Energy"],
    highlights: [
      "Predictive analytics for solar energy generation",
      "Real-time monitoring and alerting system",
      "Grid integration optimization",
      "Penalty reduction algorithms",
    ],
  },
  {
    title: "B2B SaaS Platform",
    company: "Chima (YC-W23)",
    description:
      "Enterprise-grade SaaS platform for content creation and management. Built scalable cloud infrastructure on AWS and Azure. Implemented centralized authentication server for microservices architecture.",
    icon: Building2,
    tags: ["Next.js", "AWS", "Azure", "Microservices"],
    highlights: [
      "Centralized authentication across microservices",
      "Content creation dashboard with AWS Lambda",
      "Infrastructure migration AWS → Azure",
      "Automated CI/CD pipelines",
    ],
  },
  {
    title: "PDF SDK Solutions",
    company: "PSPDFKit",
    description:
      "Cutting-edge PDF SDK with advanced features. Accelerated document printing with parallel processing. Implemented accessibility features following WCAG guidelines and dynamic font loading system.",
    icon: TrendingUp,
    tags: ["React", "PDF", "Performance", "Accessibility"],
    highlights: [
      "70% faster document printing with parallel processing",
      "WCAG-compliant semantic HTML rendering",
      "K-D Tree point-snapping algorithm",
      "Dynamic font loading for annotations",
    ],
  },
  {
    title: "Loan Management System",
    company: "BharatPe",
    description:
      "Comprehensive loan management and distributor onboarding platform. Reduced onboarding time by 75% through optimized KYC flow. Built features for lending operations and D2R products.",
    icon: Users,
    tags: ["Spring Boot", "React", "MongoDB", "Kafka"],
    highlights: [
      "75% reduction in distributor onboarding time",
      "Third-party KYC & bank verification integration",
      "Automated image asset size checking with GitHub Actions",
      "Real-time lending operations dashboard",
    ],
  },
];

export const Projects = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 font-display tracking-tight">
            Key Projects
          </h2>

          <p className="text-xl text-muted-foreground text-center mb-16 font-light">
            Building scalable solutions that make a real-world impact
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              const { ref, isVisible } = useScrollReveal();
              return (
                <Card
                  key={index}
                  ref={ref}
                  className={`p-8 shadow-soft hover:shadow-elegant transition-all duration-500 group hover-lift hover-glow elegant-border bg-gradient-card ${
                    isVisible ? 'animate-scale-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <ExternalLink className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <h3 className="text-2xl font-semibold mb-2">
                    {project.title}
                  </h3>

                  <p className="text-sm text-primary font-medium mb-4">
                    {project.company}
                  </p>

                  <p className="text-foreground/80 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-3 text-foreground/70">
                      Key Highlights:
                    </h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2 mt-1.5 flex-shrink-0"></span>
                          <span className="text-foreground/80">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
