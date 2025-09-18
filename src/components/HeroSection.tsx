import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github, Linkedin, Mail, Download, Upload } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

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
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center animate-slide-up">
        {/* Profile Picture Area */}
        <div className="mb-8 flex justify-center">
          <div className="relative group">
            <Avatar className="w-32 h-32 ring-4 ring-primary/20 transition-all duration-300 group-hover:ring-primary/40">
              <AvatarImage src="" alt="Profile Picture" />
              <AvatarFallback className="bg-gradient-primary text-primary-foreground text-2xl font-bold">
                AC
              </AvatarFallback>
            </Avatar>
            <div className="absolute inset-0 rounded-full bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer">
              <Upload className="h-8 w-8 text-white" />
            </div>
            <input 
              type="file" 
              accept="image/png,image/jpeg,image/jpg" 
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer rounded-full"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onload = (event) => {
                    const avatar = document.querySelector('[alt="Profile Picture"]') as HTMLImageElement;
                    if (avatar && event.target?.result) {
                      avatar.src = event.target.result as string;
                    }
                  };
                  reader.readAsDataURL(file);
                }
              }}
            />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-foreground">Hi, I'm </span>
          <span className="hero-gradient">Alex Chen</span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8 font-light">
          AI/ML Engineer & Data Scientist
        </h2>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Transforming complex data into intelligent solutions. Specializing in machine learning, 
          deep learning, and scalable AI systems that drive business impact.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button className="btn-hero px-8 py-6 text-lg font-semibold">
            <Mail className="mr-2 h-5 w-5" />
            Get In Touch
          </Button>
          <Button variant="outline" className="btn-outline-glow px-8 py-6 text-lg">
            <Download className="mr-2 h-5 w-5" />
            Download CV
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 justify-center">
          <a href="#" className="p-3 rounded-full bg-card border border-border hover:border-primary transition-colors hover:bg-card/80">
            <Github className="h-6 w-6" />
          </a>
          <a href="#" className="p-3 rounded-full bg-card border border-border hover:border-primary transition-colors hover:bg-card/80">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="#" className="p-3 rounded-full bg-card border border-border hover:border-primary transition-colors hover:bg-card/80">
            <Mail className="h-6 w-6" />
          </a>
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