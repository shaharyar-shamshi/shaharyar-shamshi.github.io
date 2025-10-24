import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero animate-gradient pt-16">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2djEyaDEyVjE2SDM2ek0xMiAxNnYxMmgxMlYxNkgxMnpNMzYgNDB2MTJoMTJWNDBIMzZ6TTEyIDQwdjEyaDEyVjQwSDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 animate-gradient"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8 animate-scale-in">
            <img
              src={profilePhoto}
              alt="Shaharyar Shamshi"
              className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-white/20 shadow-2xl hover:scale-110 transition-transform duration-500 animate-glow-pulse"
            />
          </div>
          
          <h1 className="font-display text-white mb-6 animate-fade-in-up tracking-tight">
            Shaharyar Shamshi
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 font-medium mb-6 animate-fade-in-up animation-delay-100">
            Co-Founder & CTO at HelioExpect
          </p>
          
          <p className="text-lg md:text-xl text-white/75 max-w-3xl mx-auto mb-12 animate-fade-in-up animation-delay-200 leading-relaxed font-light">
            Building advanced forecasting and predictive monitoring tools to empower renewable energy producers.
            Passionate about leveraging technology to accelerate renewable energy adoption.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-16 animate-fade-in-up animation-delay-300">
            <Button
              variant="secondary"
              size="lg"
              className="backdrop-blur-sm shadow-elegant hover:shadow-glow transition-all duration-500 font-medium hover:scale-105 animation-delay-100"
              asChild
            >
              <a href="https://github.com/shaharyar-shamshi" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
            
            <Button
              variant="secondary"
              size="lg"
              className="backdrop-blur-sm shadow-elegant hover:shadow-glow transition-all duration-500 font-medium hover:scale-105 animation-delay-200"
              asChild
            >
              <a href="https://www.linkedin.com/in/shaharyarshamshi/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
            
            <Button
              variant="secondary"
              size="lg"
              className="backdrop-blur-sm shadow-elegant hover:shadow-glow transition-all duration-500 font-medium hover:scale-105 animation-delay-300"
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
              className="w-6 h-6 mx-auto text-white/60"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
