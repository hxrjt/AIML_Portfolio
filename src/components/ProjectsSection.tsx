import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Play } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Neural Style Transfer App",
      description: "A deep learning application that applies artistic styles to images using convolutional neural networks. Built with TensorFlow and deployed as an interactive Streamlit app.",
      image: project1,
      tags: ["TensorFlow", "Streamlit", "Computer Vision", "Deep Learning"],
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "Real-time Sales Analytics",
      description: "A comprehensive dashboard for real-time sales analytics with predictive modeling. Processes 100K+ transactions daily with ML-powered insights.",
      image: project2,
      tags: ["Python", "Apache Spark", "Tableau", "AWS", "MLflow"],
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "Medical Image Classification",
      description: "CNN-based system for medical image analysis achieving 95% accuracy. Deployed in production to assist radiologists in diagnosis.",
      image: project3,
      tags: ["PyTorch", "OpenCV", "Docker", "FastAPI", "PostgreSQL"],
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
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of AI/ML solutions that solve real-world problems and drive business value
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
                    <Play className="h-4 w-4 mr-2" />
                    Demo
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
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;