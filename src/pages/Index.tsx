import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { ExperienceDetails } from "@/components/ExperienceDetails";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Education />
      <ExperienceDetails />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
