import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { GitHubProfile } from "@/components/GitHubProfile";
import { OpenSource } from "@/components/OpenSource";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <GitHubProfile />
      <OpenSource />
      <Education />
      <Contact />
    </div>
  );
};

export default Index;
