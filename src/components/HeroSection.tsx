import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github, Linkedin, Mail, Download, Upload } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import leetcodeIcon from "@/assets/leetcode-icon.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="AI/ML Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-background/80" />
      </div>
      
      {/* Floating particles animation */}
      <div className="absolute inset-0 z-10">
        <div className="animate-float absolute top-20 left-20 w-2 h-2 bg-primary rounded-full opacity-60" />
        <div className="animate-float absolute top-40 right-32 w-1 h-1 bg-accent rounded-full opacity-40" style={{ animationDelay: '1s' }} />
        <div className="animate-float absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-primary rounded-full opacity-50" style={{ animationDelay: '2s' }} />
        <div className="animate-float absolute bottom-20 right-20 w-1 h-1 bg-accent rounded-full opacity-60" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 w-full animate-slide-up">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen py-20 pt-24 lg:py-20">
          {/* Left Column - Text Content */}
          <div className="flex flex-col justify-center text-center lg:text-left lg:pr-8 order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-foreground">Hi, I'm </span>
              <span className="hero-gradient">Alex Chen</span>
            </h1>
            
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 font-light">
              Software Engineer & Algorithm Expert
            </h2>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-8 sm:mb-12 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Solving complex algorithmic challenges with elegant code. Specializing in data structures, 
              algorithms, and competitive programming with 1000+ LeetCode problems solved.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 justify-center lg:justify-start">
              <Button className="btn-hero px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold">
                <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Get In Touch
              </Button>
              <Button variant="outline" className="btn-outline-glow px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg">
                <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Download CV
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 sm:gap-6 justify-center lg:justify-start">
              <a href="#" className="p-2 sm:p-3 rounded-full bg-card border border-border hover:border-primary transition-colors hover:bg-card/80 touch-target">
                <Github className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a href="#" className="p-2 sm:p-3 rounded-full bg-card border border-border hover:border-primary transition-colors hover:bg-card/80 touch-target">
                <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a href="#" className="p-2 sm:p-3 rounded-full bg-card border border-border hover:border-primary transition-colors hover:bg-card/80 touch-target">
                <img src={leetcodeIcon} alt="LeetCode" className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            </div>
          </div>

          {/* Right Column - Profile Picture */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative group">
              <img 
                src="" 
                alt="Profile Picture"
                className="w-64 h-80 sm:w-80 sm:h-96 md:w-96 md:h-[450px] lg:w-[400px] lg:h-[500px] object-cover transition-all duration-300 group-hover:shadow-lg"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer">
                <Upload className="h-8 w-8 sm:h-12 sm:w-12 md:h-16 md:w-16 text-white" />
              </div>
              <input 
                type="file" 
                accept="image/png,image/jpeg,image/jpg" 
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                      const img = document.querySelector('[alt="Profile Picture"]') as HTMLImageElement;
                      if (img && event.target?.result) {
                        img.src = event.target.result as string;
                      }
                    };
                    reader.readAsDataURL(file);
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;