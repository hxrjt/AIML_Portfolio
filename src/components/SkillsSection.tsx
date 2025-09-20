import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Database, Code, BarChart3, Cloud, Cpu } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Brain,
      title: "Machine Learning",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "XGBoost", "LightGBM"],
      color: "text-primary"
    },
    {
      icon: Code,
      title: "Programming",
      skills: ["Python", "R", "SQL", "JavaScript", "Java", "C++"],
      color: "text-accent"
    },
    {
      icon: Database,
      title: "Data Engineering",
      skills: ["Apache Spark", "Airflow", "Docker", "Kubernetes", "PostgreSQL", "MongoDB"],
      color: "text-primary"
    },
    {
      icon: BarChart3,
      title: "Data Visualization",
      skills: ["Streamlit", "Plotly", "Tableau", "Power BI", "D3.js", "Matplotlib"],
      color: "text-accent"
    },
    {
      icon: Cloud,
      title: "Cloud Platforms",
      skills: ["AWS", "Google Cloud", "Azure", "Databricks", "Snowflake", "BigQuery"],
      color: "text-primary"
    },
    {
      icon: Cpu,
      title: "MLOps",
      skills: ["MLflow", "Kubeflow", "DVC", "Weights & Biases", "TensorBoard", "Neptune"],
      color: "text-accent"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            <span className="text-gradient">def skills():</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent systems and extracting insights from data
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="card-glass card-hover animate-slide-up border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-accent mr-4`}>
                    <category.icon className={`h-8 w-8 ${category.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill}
                      variant="secondary"
                      className="bg-secondary/50 text-secondary-foreground border border-border/30 hover:border-primary/50 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
          {[
            { number: "50+", label: "Projects Completed" },
            { number: "5+", label: "Years Experience" },
            { number: "15+", label: "Technologies" },
            { number: "100K+", label: "Lines of Code" }
          ].map((stat, index) => (
            <div 
              key={stat.label} 
              className="text-center animate-slide-up"
              style={{ animationDelay: `${0.6 + index * 0.1}s` }}
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-sm sm:text-base text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;