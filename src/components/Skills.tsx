import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Database, BarChart3, Code, TrendingUp } from "lucide-react";

const skillCategories = [
  {
    title: "Análise de Dados",
    icon: BarChart3,
    skills: [
      { name: "Power BI", level: 95 },
      { name: "Python", level: 85 },
      { name: "Excel Avançado", level: 90 },
      { name: "DAX", level: 90 }
    ]
  },
  {
    title: "Banco de Dados",
    icon: Database,
    skills: [
      { name: "SQL Server", level: 95 },
      { name: "Consultas Avançadas", level: 90 },
      { name: "Administração BD", level: 85 },
      { name: "Otimização", level: 85 }
    ]
  },
  {
    title: "Desenvolvimento",
    icon: Code,
    skills: [
      { name: "HTML5", level: 80 },
      { name: "CSS3", level: 80 },
      { name: "Automação", level: 90 },
      { name: "Integração de Sistemas", level: 85 }
    ]
  },
  {
    title: "Business Intelligence",
    icon: TrendingUp,
    skills: [
      { name: "Dashboards Interativos", level: 95 },
      { name: "Modelagem de Dados", level: 90 },
      { name: "Relatórios Estratégicos", level: 90 },
      { name: "KPIs e Métricas", level: 95 }
    ]
  }
];

export const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-muted/30" id="habilidades">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Habilidades & Competências
            </h2>
            <p className="text-lg text-muted-foreground">
              Expertise técnica e ferramentas dominadas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <Card 
                  key={categoryIndex}
                  className="p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-xl">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold text-card-foreground">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-card-foreground">
                            {skill.name}
                          </span>
                          <span className="text-sm font-semibold text-primary">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2.5 bg-muted rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full transition-all duration-1000 ease-out"
                            style={{ 
                              width: isVisible ? `${skill.level}%` : '0%',
                              transitionDelay: `${skillIndex * 100}ms`
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
