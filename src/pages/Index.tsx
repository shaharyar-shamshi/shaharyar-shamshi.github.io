import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { OpenSource } from "@/components/OpenSource";
import { Education } from "@/components/Education";
import { ContactForm } from "@/components/ContactForm";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <OpenSource />
      <Education />
      <ContactForm />
      <Contact />
    </div>
  );
};

export default Index;
