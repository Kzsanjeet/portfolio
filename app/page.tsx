import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import ParticlesBackground from "@/components/particlesBackground";
import AboutMe from "@/components/aboutme";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <ParticlesBackground />
      <div className="relative z-10">
        <Navigation />
        <main>
          <Hero />
          <AboutMe />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
