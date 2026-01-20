import { Hero } from "./Hero";
import { TechCarousel } from "./TechCarousel";
import { About } from "./About";
import { Projects } from "./Projects";
import { Experience } from "./Experience";
import { Education } from "./Education";
import { Skills } from "./Skills";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

export function HomePage() {
  return (
    <>
      <Hero />
      <TechCarousel />
      <About />
      <Projects />
      <Experience />
      <Education />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}