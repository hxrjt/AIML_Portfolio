import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Briefcase, Award, Coffee } from "lucide-react";

const AboutSection = () => {
  const experiences = [
    {
      title: "Senior ML Engineer",
      company: "TechCorp AI",
      period: "2022 - Present",
      description: "Leading ML initiatives, building scalable AI systems, and mentoring junior engineers."
    },
    {
      title: "Data Scientist",
      company: "DataInsights Inc",
      period: "2020 - 2022",
      description: "Developed predictive models and analytics solutions for Fortune 500 clients."
    },
    {
      title: "ML Research Intern",
      company: "AI Lab University",
      period: "2019 - 2020",
      description: "Research in computer vision and natural language processing applications."
    }
  ];

  const education = [
    {
      degree: "M.S. Computer Science",
      school: "Stanford University",
      period: "2018 - 2020",
      focus: "Machine Learning & AI"
    },
    {
      degree: "B.S. Data Science",
      school: "UC Berkeley",
      period: "2014 - 2018",
      focus: "Statistics & Mathematics"
    }
  ];

  const certifications = [
    "AWS Certified Machine Learning - Specialty",
    "Google Cloud Professional ML Engineer",
    "TensorFlow Developer Certificate",
    "Databricks Certified Data Engineer"
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            <span className="text-gradient">About Me</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate about leveraging artificial intelligence to solve complex problems and create 
            meaningful impact. With 5+ years of experience in ML engineering and data science, 
            I specialize in building production-ready AI systems that scale.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div className="animate-slide-up">
            <div className="flex items-center mb-8">
              <div className="p-3 rounded-lg bg-gradient-accent mr-4">
                <Briefcase className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Experience</h3>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={exp.title} className="card-glass border-border/50">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-foreground">{exp.title}</h4>
                      <Badge variant="outline" className="text-xs">
                        {exp.period}
                      </Badge>
                    </div>
                    <p className="text-primary font-medium mb-2">{exp.company}</p>
                    <p className="text-muted-foreground text-sm">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center mb-8">
              <div className="p-3 rounded-lg bg-gradient-accent mr-4">
                <GraduationCap className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Education</h3>
            </div>

            <div className="space-y-6 mb-12">
              {education.map((edu, index) => (
                <Card key={edu.degree} className="card-glass border-border/50">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-foreground">{edu.degree}</h4>
                      <Badge variant="outline" className="text-xs">
                        {edu.period}
                      </Badge>
                    </div>
                    <p className="text-primary font-medium mb-2">{edu.school}</p>
                    <p className="text-muted-foreground text-sm">Focus: {edu.focus}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Certifications */}
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-lg bg-gradient-accent mr-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Certifications</h3>
            </div>

            <div className="space-y-3">
              {certifications.map((cert) => (
                <div key={cert} className="flex items-center p-3 rounded-lg bg-card/50 border border-border/30">
                  <Award className="h-4 w-4 text-accent mr-3" />
                  <span className="text-sm text-foreground">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fun Facts */}
        <Card className="card-glass mt-16 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-lg bg-gradient-accent mr-4">
                <Coffee className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Beyond Code</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not training models or analyzing data, you'll find me contributing to open-source projects, 
              writing technical blog posts, or exploring the latest research papers. I'm also passionate about 
              mentoring aspiring data scientists and speaking at ML conferences.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;