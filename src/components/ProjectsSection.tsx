import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Code2 } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      title: "LeetCode Problem Tracker",
      description: "A comprehensive web application to track LeetCode progress, analyze problem patterns, and identify weak areas. Features include difficulty tracking, topic categorization, and performance analytics.",
      image: project1,
      tags: ["React", "Node.js", "MongoDB", "Chart.js", "LeetCode API"],
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "Algorithm Visualizer",
      description: "Interactive visualization tool for common algorithms and data structures. Helps understand sorting algorithms, graph traversals, and dynamic programming with step-by-step animations.",
      image: project2,
      tags: ["JavaScript", "D3.js", "HTML5 Canvas", "CSS3", "Algorithms"],
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "Coding Interview Simulator",
      description: "Mock interview platform with real-time code execution, multiple programming languages support, and automated test case validation. Perfect for FAANG interview preparation.",
      image: project3,
      tags: ["Python", "Docker", "WebSockets", "Judge0 API", "React"],
      github: "#",
      demo: "#",
      featured: false
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-accent">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            <span className="text-gradient">Coding Projects</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of algorithmic solutions and tools that enhance the competitive programming experience
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className={`card-glass card-hover animate-slide-up overflow-hidden ${
                project.featured ? 'lg:col-span-2 xl:col-span-1' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                {project.featured && (
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    Featured
                  </Badge>
                )}
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag}
                      variant="outline"
                      className="text-xs border-border/50 hover:border-primary/50 transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="btn-outline-glow flex-1"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="btn-outline-glow flex-1"
                  >
                    <Code2 className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button className="btn-hero px-8 py-3">
            <ExternalLink className="mr-2 h-5 w-5" />
            View GitHub Profile
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;