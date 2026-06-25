import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import TechStack from "@/components/sections/TechStack";
import Projects from "@/components/sections/Projects";
import BackendSection from "@/components/sections/BackendSection";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import MarqueeTicker from "@/components/effects/MarqueeTicker";
import ParticleField from "@/components/effects/ParticleField";
import FloatingOrbs from "@/components/effects/FloatingOrbs";

export default function Home() {
  return (
    <>
      <ParticleField />
      <FloatingOrbs />
      <Hero />
      <MarqueeTicker />
      <About />
      <Services />
      <TechStack />
      <Projects />
      <MarqueeTicker />
      <BackendSection />
      <Testimonials />
      <Contact />
    </>
  );
}
