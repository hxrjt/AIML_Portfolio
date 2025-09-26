import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, Download } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import leetcodeIcon from "@/assets/leetcode-icon.png";
import githubIcon from "@/assets/github-icon.png";
import linkedinIcon from "@/assets/linkedin-icon.png";
import heroSectionImg from "@/assets/heroSectionImg.png"; // Save the image as steve.png in your assets folder
import React, { useEffect, useState } from "react";

const HeroSection = () => {
  const fullText = "Hi, I'm Harjyot Singh";
  const [typedText, setTypedText] = useState("");
  const [showContent, setShowContent] = useState(false);
  const [showPrimaryColor, setShowPrimaryColor] = useState(false);

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) {
        clearInterval(typingInterval);
        setTimeout(() => {
          setShowContent(true);
          setShowPrimaryColor(true); // Transition to green after fade-in
        }, 400);
      }
    }, 70);
    return () => clearInterval(typingInterval);
  }, []);

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
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 min-h-[2.5em]">
              <span className="text-foreground">
                {typedText.split("Harjyot Singh")[0]}
                <span
                  className={showPrimaryColor ? "text-primary transition-colors duration-700" : "transition-colors duration-700"}
                  style={{ transitionProperty: 'color' }}
                >
                  {typedText.includes("Harjyot Singh") ? "Harjyot Singh" : ""}
                </span>
                <span className="animate-blink text-primary" style={{marginLeft: '2px'}}>|</span>
              </span>
            </h1>
            <div
              style={{
                opacity: showContent ? 1 : 0,
                transition: "opacity 0.7s",
                pointerEvents: showContent ? "auto" : "none",
              }}
            >
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 font-light">
                IT Undergrad
              </h2>
              
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-8 sm:mb-12 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Specializing in Machine Learning, 
                Deep Learning, with a keen interest in growing within the field of Data Science.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 justify-center lg:justify-start">
                <Button
                  className="btn-hero px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold"
                  onClick={() => {
                    window.open("mailto:harjyotgdsc@gmail.com", "_blank");
                  }}
                >
                  <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Get In Touch
                </Button>
                <Button
                  variant="outline"
                  className="btn-outline-glow px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg"
                  onClick={() => {
                    window.open(
                      "https://drive.google.com/file/d/1EpuYyQp_p8Mk-jU6FO5A8ASycNATx1dO/view?usp=sharing", // <-- Replace with your actual Drive file ID
                      "_blank"
                    );
                  }}
                >
                  <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Download CV
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 sm:gap-6 justify-center lg:justify-start">
                <a href="https://github.com/hxrjt" target="_blank" rel="noopener noreferrer" className="p-2 sm:p-3 rounded-full bg-card border border-border hover:border-primary transition-colors hover:bg-card/80 touch-target">
                  <img src={githubIcon} alt="GitHub" className="h-5 w-5 sm:h-6 sm:w-6" />
                </a>
                <a href="https://www.linkedin.com/in/harjyot-singh-75a835254/" target="_blank" rel="noopener noreferrer" className="p-2 sm:p-3 rounded-full bg-card border border-border hover:border-primary transition-colors hover:bg-card/80 touch-target">
                  <img src={linkedinIcon} alt="LinkedIn" className="h-5 w-5 sm:h-6 sm:w-6" />
                </a>
                <a href="https://leetcode.com/hxrjt/" target="_blank" rel="noopener noreferrer" className="p-2 sm:p-3 rounded-full bg-card border border-border hover:border-primary transition-colors hover:bg-card/80 touch-target">
                  <img src={leetcodeIcon} alt="LeetCode" className="h-5 w-5 sm:h-6 sm:w-6" />
                </a>
              </div>
            </div>
          </div>
          {/* Right Column - Profile Picture */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative group">
              <img 
                src={heroSectionImg} 
                alt="Minecraft Steve"
                className="w-64 h-80 sm:w-80 sm:h-96 md:w-96 md:h-[450px] lg:w-[400px] lg:h-[500px] object-cover transition-all duration-300 group-hover:shadow-lg"
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