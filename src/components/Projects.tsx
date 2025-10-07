import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Calculator, FileText, Bot } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Implantação de Dashboard",
    description: "Desenvolvimento e implantação de dashboards estratégicos em Power BI para monitoramento de KPIs críticos do negócio.",
    icon: BarChart3,
    tags: ["Power BI", "SQL Server", "DAX", "ETL"],
    achievements: [
      "Dashboards de funil de vendas e marketing",
      "Monitoramento de faturamento em tempo real",
      "Automação de relatórios gerenciais"
    ]
  },
  {
    id: 2,
    title: "Simulador Yassaka",
    description: "Aplicação web e mobile para simulações e cálculos personalizados, proporcionando experiência otimizada para usuários.",
    icon: Calculator,
    tags: ["Web App", "Mobile App", "React", "Responsivo"],
    achievements: [
      "Interface intuitiva e responsiva",
      "Cálculos em tempo real",
      "Compatibilidade multiplataforma"
    ]
  },
  {
    id: 3,
    title: "Página de Propostas dos Heads",
    description: "Sistema web para gestão e apresentação de propostas comerciais, facilitando o processo de aprovação e acompanhamento.",
    icon: FileText,
    tags: ["Python", "Streamlit", "Web App", "CRM"],
    achievements: [
      "Processo de aprovação otimizado",
      "Interface profissional e moderna",
      "Integração com CRM"
    ]
  },
  {
    id: 4,
    title: "Robô de CRM",
    description: "Automação de processos de CRM para otimização de tarefas repetitivas e integração de dados entre sistemas.",
    icon: Bot,
    tags: ["Python", "Automação", "API", "Integração"],
    achievements: [
      "Redução de trabalho manual",
      "Integração entre sistemas distintos",
      "Processos automatizados de atualização"
    ]
  }
];

export const Projects = () => {
  return (
    <section className="py-24 bg-background" id="projetos">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Projetos Realizados
            </h2>
            <p className="text-lg text-muted-foreground">
              Principais projetos desenvolvidos para empresas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <Card 
                  key={project.id} 
                  className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="pt-4 border-t">
                      <h4 className="text-sm font-semibold text-foreground mb-3">
                        Destaques:
                      </h4>
                      <ul className="space-y-2">
                        {project.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
