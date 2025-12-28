import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-32 pb-20">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10 dark:opacity-20 animate-gradient"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2djEyaDEyVjE2SDM2ek0xMiAxNnYxMmgxMlYxNkgxMnpNMzYgNDB2MTJoMTJWNDBIMzZ6TTEyIDQwdjEyaDEyVjQwSDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30 dark:opacity-20"></div>

      {/* Decorative Blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px] animate-pulse animation-delay-200"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-scale-in relative inline-block group">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-pulse"></div>
            <img
              src={profilePhoto}
              alt="Shaharyar Shamshi"
              className="w-40 h-40 md:w-48 md:h-48 rounded-full relative z-10 mx-auto object-cover border-4 border-white/10 shadow-2xl animate-float transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 dark:from-white dark:to-white/70">
            Shaharyar Shamshi
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-8 animate-fade-in-up animation-delay-100 max-w-2xl mx-auto">
            Co-Founder & CTO at <span className="text-primary dark:text-accent">HelioExpect</span>
          </p>

          <p className="text-lg md:text-xl text-muted-foreground/80 max-w-2xl mx-auto mb-12 animate-fade-in-up animation-delay-200 leading-relaxed font-light">
            Building advanced forecasting and predictive monitoring tools to empower renewable energy producers.
            Passionate about leveraging technology to <span className="text-foreground font-medium">accelerate renewable energy adoption</span>.
          </p>

          <div className="flex flex-wrap gap-6 justify-center mb-20 animate-fade-in-up animation-delay-300">
            <Button
              variant="default"
              size="lg"
              className="h-12 px-8 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-glow hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              asChild
            >
              <a href="https://github.com/shaharyar-shamshi" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="h-12 px-8 rounded-full border-primary/20 hover:border-primary/50 hover:bg-primary/5 text-foreground font-medium backdrop-blur-sm hover:-translate-y-1 transition-all duration-300"
              asChild
            >
              <a href="https://www.linkedin.com/in/shaharyarshamshi/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>

            <Button
              variant="ghost"
              size="lg"
              className="h-12 px-8 rounded-full hover:bg-accent/10 hover:text-accent font-medium hover:-translate-y-1 transition-all duration-300"
              asChild
            >
              <a href="mailto:shaharyarshamshi@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Email
              </a>
            </Button>
          </div>

          <div className="animate-bounce">
            <svg
              className="w-6 h-6 mx-auto text-muted-foreground/50"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
            <span className="text-xs text-muted-foreground/50 mt-2 block uppercase tracking-widest">Scroll</span>
          </div>
        </div>
      </div>
    </section>
  );
};
