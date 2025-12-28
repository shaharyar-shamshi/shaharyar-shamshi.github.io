import { Zap, Building2, TrendingUp, Users, GraduationCap, Award, Sparkles, Mail, Linkedin, Github, Star } from "lucide-react";

export const siteConfig = {
  name: "Shaharyar Shamshi",
  title: "Co-Founder & CTO at HelioExpect",
  socials: {
    github: "https://github.com/shaharyar-shamshi",
    linkedin: "https://www.linkedin.com/in/shaharyarshamshi/",
  },
  hero: {
    tagline: "Building advanced forecasting and predictive monitoring tools to empower renewable energy producers. Passionate about leveraging technology to accelerate renewable energy adoption.",
    highlight: "HelioExpect",
  },
  about: {
    tagline: "Building the future of renewable energy through technology",
    bio: [
      "As Co-Founder and CTO at HelioExpect (Incubated by AIC-IIITH, IIIT Hyderabad), I'm leading the development of cutting-edge forecasting and predictive monitoring tools that empower renewable energy producers. Our mission is to reduce grid penalties and enable seamless integration with national power infrastructure, accelerating renewable energy adoption and strengthening the resilience of our energy systems.",
      "With over 5 years of professional experience as a Full-Stack Engineer, I've built scalable solutions across diverse industries including fintech, EdTech, SaaS platforms, and renewable energy. I've contributed to products serving millions of users and led teams in building robust cloud infrastructure on AWS and Azure.",
      "My technical expertise spans the entire stack—from React and Next.js on the frontend to Spring Boot and Django on the backend, with extensive experience in cloud architecture, DevOps, and database optimization. I'm passionate about writing clean, maintainable code and building systems that scale."
    ],
    cards: [
      { title: "Innovation", description: "Leveraging advanced technology to solve complex renewable energy challenges", icon: Zap, color: "primary" },
      { title: "Impact", description: "Accelerating the transition to sustainable energy systems globally", icon: TrendingUp, color: "secondary" },
      { title: "Reliability", description: "Building resilient infrastructure for the future of energy", icon: "Shield", color: "accent" } // shield handled in component map or import
    ]
  }
};

export const projects = [
  {
    title: "HelioExpect Platform",
    company: "HelioExpect",
    description: "Advanced forecasting and predictive monitoring platform for renewable energy producers. Reduces grid penalties through AI-powered solar generation predictions and real-time monitoring. Enables seamless integration with national power infrastructure.",
    icon: Zap,
    tags: ["AI/ML", "IoT", "Forecasting", "Renewable Energy"],
  },
  {
    title: "B2B SaaS Platform",
    company: "Chima (YC-W23)",
    description: "Enterprise-grade SaaS platform for content creation and management. Built scalable cloud infrastructure on AWS and Azure. Implemented centralized authentication server for microservices architecture.",
    icon: Building2,
    tags: ["Next.js", "AWS", "Azure", "Microservices"],
  },
  {
    title: "PDF SDK Solutions",
    company: "PSPDFKit",
    description: "Cutting-edge PDF SDK with advanced features. Accelerated document printing with parallel processing. Implemented accessibility features following WCAG guidelines and dynamic font loading system.",
    icon: TrendingUp,
    tags: ["React", "PDF", "Performance", "Accessibility"],
  },
  {
    title: "Loan Management System",
    company: "BharatPe",
    description: "Comprehensive loan management and distributor onboarding platform. Reduced onboarding time by 75% through optimized KYC flow. Built features for lending operations and D2R products.",
    icon: Users,
    tags: ["Spring Boot", "React", "MongoDB", "Kafka"],
  },
];

export const experiences = [
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
    description: "Contributed to PDF SDK solutions. Accelerated document printing with parallel processing. Implemented accessibility features including point-snapping with K-D Tree algorithms.",
    tags: ["React", "PDF", "Performance", "Accessibility"],
  },
  {
    company: "Countly",
    role: "Full Stack Developer",
    period: "September 2021 - July 2022",
    location: "Remote",
    description: "Open source contributor focused on modernizing the platform. Migrated multiple plugins from jQuery to Vue.js, improving performance and maintainability.",
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
    description: "Built subscription management, PDF report generation, and AutoCAD export features. Set up CI/CD on Azure DevOps. Migrated to GKE and configured ECS infrastructure.",
    tags: ["Django", "Vue.js", "AWS", "Docker", "Kubernetes"],
  },
  {
    company: "JungleWorks",
    role: "Software Engineer",
    period: "July 2019 - February 2020",
    location: "Chandigarh",
    description: "Created Dynamic Theme Engine for Yelo product using Angular. Built AI-powered content engine KIKI. Developed news scraping library and trending algorithms.",
    tags: ["Angular", "Node.js", "AI/ML"],
  },
  {
    company: "Dexecure",
    role: "Software Developer",
    period: "May 2018 - April 2019",
    location: "Singapore (Remote)",
    description: "Developed backend solutions for optimization dashboard. Integrated Stripe payment gateway. Migrated image processing to GraphicsMagick for efficiency.",
    tags: ["Node.js", "JavaScript", "Stripe"],
  },
];

export const skillCategories = [
  {
    category: "Languages",
    items: ["Java", "JavaScript", "TypeScript", "Python", "Node.js"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Vue.js", "Angular", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Spring Boot", "Django", "Express", "ActionHero"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD"],
  },
  {
    category: "Tools",
    items: ["Apache Kafka", "Git", "AWS Lambda", "CloudFront", "ECS"],
  },
];

export const education = [
  {
    type: "Degree",
    title: "B.Tech in Computer Science",
    institution: "Indian Institute of Information Technology Una",
    period: "2015 - 2019",
    icon: GraduationCap,
    color: "primary"
  },
  {
    type: "Recognition",
    title: "Recognition",
    items: [
      "GAEA Challenge Certification",
      "Employee of the Quarter",
      "Processing Fellowship 2019"
    ],
    icon: Award,
    color: "secondary"
  }
];

export const openSourceContributions = [
  {
    project: "Material-UI (MUI)",
    role: "Open Source Contributor",
    period: "2018 - 2019",
    description: "Contributed to Material-UI, one of the world's most popular React component libraries.",
    tags: ["React", "TypeScript", "Material Design"],
    link: "https://github.com/mui/material-ui",
    contributions: [
      "Fixed bugs in core components",
      "Improved component accessibility",
      "Enhanced TypeScript definitions"
    ]
  },
  {
    project: "Countly",
    role: "Open Source FullStack Developer",
    period: "Sep 2021 - July 2022",
    description: "Major contributor to Countly analytics platform. Migrated plugins from jQuery to Vue.js.",
    tags: ["Vue.js", "JavaScript", "Migration"],
    link: "https://github.com/Countly",
    contributions: [
      "Migrated 15+ plugins to Vue.js",
      "Contributed to UI library",
      "Enhanced performance"
    ]
  },
  {
    project: "TEAMMATES",
    role: "Contributor",
    period: "Dec 2017 - May 2018",
    description: "Contributor to TEAMMATES, an online peer evaluation tool for education.",
    tags: ["Java", "JavaScript", "EdTech"],
    link: "https://github.com/TEAMMATES",
    contributions: [
      "Fixed critical bugs",
      "Enhanced UI/UX",
      "Improved test coverage"
    ]
  },
  {
    project: "Processing Foundation",
    role: "Processing Fellow 2019",
    period: "Mar 2019 - May 2019",
    description: "Selected for prestigious Processing Fellowship to contribute to creative coding tools.",
    tags: ["Processing", "Creative Coding"],
    link: "https://processingfoundation.org/",
    contributions: [
      "Developed educational resources",
      "Contributed to documentation",
      "Community mentorship"
    ]
  }
];

export const githubStats = [
  { label: "Public Repos", value: "50+", icon: Github, color: "text-primary" },
  { label: "Total Stars", value: "100+", icon: Star, color: "text-accent" },
  { label: "Contributions", value: "1000+", icon: Github, color: "text-primary" }, // Using Github icon as GitFork might be redundant visually
  { label: "Followers", value: "100+", icon: Users, color: "text-accent" },
];

export const featuredRepos = [
  {
    name: "Countly SDK Contributions",
    description: "Major contributions to Countly analytics platform including Vue.js migrations and UI improvements",
    language: "Vue.js",
    stars: 50,
    forks: 15,
    url: "https://github.com/Countly",
  },
  {
    name: "TEAMMATES Contributions",
    description: "Open source peer evaluation tool for educational institutions with enhanced features",
    language: "Java",
    stars: 30,
    forks: 10,
    url: "https://github.com/TEAMMATES",
  },
  {
    name: "Processing Foundation",
    description: "Creative coding tools and educational resources for the Processing community",
    language: "Processing",
    stars: 25,
    forks: 8,
    url: "https://processingfoundation.org/",
  },
];


