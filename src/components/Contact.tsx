import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Phone } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2djEyaDEyVjE2SDM2ek0xMiAxNnYxMmgxMlYxNkgxMnpNMzYgNDB2MTJoMTJWNDBIMzZ6TTEyIDQwdjEyaDEyVjQwSDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Connect
          </h2>
          
          <p className="text-xl text-white/90 mb-12">
            Interested in renewable energy, technology, or collaboration opportunities?
          </p>
          
          <Card className="p-8 md:p-12 bg-white/10 backdrop-blur-md border-white/20 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 border-white/20 hover:bg-white/20 text-white h-auto py-4"
                asChild
              >
                <a href="mailto:shaharyarshamshi@gmail.com" className="flex items-center justify-center gap-3">
                  <Mail className="w-5 h-5" />
                  <div className="text-left">
                    <div className="text-xs text-white/70">Email</div>
                    <div className="font-medium">shaharyarshamshi@gmail.com</div>
                  </div>
                </a>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 border-white/20 hover:bg-white/20 text-white h-auto py-4"
                asChild
              >
                <a href="tel:+919882876634" className="flex items-center justify-center gap-3">
                  <Phone className="w-5 h-5" />
                  <div className="text-left">
                    <div className="text-xs text-white/70">Phone</div>
                    <div className="font-medium">+91 98828 76634</div>
                  </div>
                </a>
              </Button>
            </div>
            
            <div className="flex gap-4 justify-center">
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 border-white/20 hover:bg-white/20 text-white"
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
                className="bg-white/10 border-white/20 hover:bg-white/20 text-white"
                asChild
              >
                <a href="https://github.com/shaharyar-shamshi" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </a>
              </Button>
            </div>
          </Card>
          
          <p className="text-white/70 mt-12">
            © 2025 Shaharyar Shamshi. Building a sustainable future through technology.
          </p>
        </div>
      </div>
    </section>
  );
};
