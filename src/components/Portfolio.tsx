import HeroSection from "./HeroSection";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import ThemeToggle from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Portfolio = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = ['Home', 'Skills', 'Projects', 'About', 'Contact'];

  const handleNavClick = (item: string) => {
    setMobileMenuOpen(false);
    // Smooth scroll to section
    const element = document.getElementById(item.toLowerCase());
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="relative">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-gradient">
              <p>hxrjt.dev</p>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  {item}
                </button>
              ))}
              <ThemeToggle />
            </div>
            
            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center space-x-4">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border/50">
              <div className="px-4 py-4 space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => handleNavClick(item)}
                    className="block w-full text-left px-4 py-3 text-muted-foreground hover:text-primary hover:bg-accent/20 rounded-lg transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
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
      {/* <footer className="py-8 px-4 sm:px-6 border-t border-border/50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm sm:text-base text-muted-foreground">
            © 2024 Alex Chen. Built with React, TypeScript, and Tailwind CSS.
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground/70 mt-2">
            Inspired by Streamlit's elegant design philosophy
          </p>
        </div>
      </footer> */}
    </main>
  );
};

export default Portfolio;