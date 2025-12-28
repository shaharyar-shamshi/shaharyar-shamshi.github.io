import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-background to-accent/90 dark:from-primary/20 dark:via-background dark:to-accent/20 animate-gradient"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2djEyaDEyVjE2SDM2ek0xMiAxNnYxMmgxMlYxNkgxMnpNMzYgNDB2MTJoMTJWNDBIMzZ6TTEyIDQwdjEyaDEyVjQwSDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            Let's Connect
          </h2>

          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Interested in renewable energy, technology, or collaboration opportunities?
          </p>

          <div className="glass-panel p-8 md:p-12 rounded-[2rem] border-white/20 bg-white/10 dark:bg-black/30 backdrop-blur-xl shadow-2xl">
            <div className="flex gap-4 justify-center">
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 border-white/20 hover:bg-white/20 text-white rounded-xl h-12 px-6 hover:scale-105 transition-all"
                asChild
              >
                <a href="https://www.linkedin.com/in/shaharyarshamshi/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 border-white/20 hover:bg-white/20 text-white rounded-xl h-12 px-6 hover:scale-105 transition-all"
                asChild
              >
                <a href="https://github.com/shaharyar-shamshi" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>

          <p className="text-white/60 mt-12 text-sm font-light">
            © 2025 Shaharyar Shamshi. Building a sustainable future through technology.
          </p>
        </div>
      </div>
    </section>
  );
};
