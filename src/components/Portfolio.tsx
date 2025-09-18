import HeroSection from "./HeroSection";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";

const Portfolio = () => {
  return (
    <main className="relative">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-gradient">
              Alex Chen
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'Skills', 'Projects', 'About', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Sections */}
      <section id="home">
        <HeroSection />
      </section>
      
      <section id="skills">
        <SkillsSection />
      </section>
      
      <section id="projects">
        <ProjectsSection />
      </section>
      
      <section id="about">
        <AboutSection />
      </section>
      
      <section id="contact">
        <ContactSection />
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border/50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Alex Chen. Built with React, TypeScript, and Tailwind CSS.
          </p>
          <p className="text-sm text-muted-foreground/70 mt-2">
            Inspired by Streamlit's elegant design philosophy
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Portfolio;