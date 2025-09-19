import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Zap, Trophy, Target, BookOpen } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["Python", "Java", "C++", "JavaScript", "TypeScript", "Go"],
      color: "text-primary"
    },
    {
      icon: Zap,
      title: "Data Structures",
      skills: ["Arrays", "Linked Lists", "Trees", "Graphs", "Hash Tables", "Heaps"],
      color: "text-accent"
    },
    {
      icon: Target,
      title: "Algorithms",
      skills: ["Dynamic Programming", "Greedy", "Backtracking", "DFS/BFS", "Sorting", "Binary Search"],
      color: "text-primary"
    },
    {
      icon: Trophy,
      title: "Competitive Programming",
      skills: ["LeetCode", "Codeforces", "AtCoder", "TopCoder", "HackerRank", "CodeChef"],
      color: "text-accent"
    },
    {
      icon: Database,
      title: "System Design",
      skills: ["Scalability", "Load Balancing", "Caching", "Databases", "Microservices", "APIs"],
      color: "text-primary"
    },
    {
      icon: BookOpen,
      title: "Interview Prep",
      skills: ["Coding Interviews", "System Design", "Behavioral", "Mock Interviews", "FAANG Prep", "Whiteboarding"],
      color: "text-accent"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            <span className="text-gradient">Coding Arsenal</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for solving algorithmic challenges and acing technical interviews
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
            { number: "1000+", label: "Problems Solved" },
            { number: "3+", label: "Years Coding" },
            { number: "Expert", label: "LeetCode Rating" },
            { number: "50K+", label: "Lines of Code" }
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