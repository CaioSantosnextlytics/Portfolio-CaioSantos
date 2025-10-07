import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Target, CheckCircle2, TrendingUp } from "lucide-react";

const experienceData = [
  {
    id: "yassaka",
    company: "Yassaka Consultoria e Treinamento em Gestão Empresarial",
    role: "Analista de CRM e Dados",
    period: "Maio/2025 – Atualmente",
    description: "Responsável por análises estratégicas de CRM, desenvolvimento de integrações e criação de dashboards para apoiar decisões comerciais e de marketing.",
    responsibilities: [
      "Análises estratégicas de CRM e apoio a decisões comerciais e de marketing",
      "Desenvolvimento de integrações de dados entre sistemas distintos",
      "Automação completa de relatórios para maior eficiência operacional",
      "Criação de dashboards no Power BI para monitoramento de funil de vendas, marketing e faturamento",
      "Implementação de processos de melhoria contínua",
      "Suporte analítico a times multidisciplinares"
    ],
    achievements: [
      "Implementação de sistema integrado de CRM",
      "Redução significativa no tempo de geração de insights",
      "Dashboards estratégicos para toda liderança"
    ]
  },
  {
    id: "tmkt-traffic",
    company: "TMKT Serviços de Marketing",
    role: "Monitor de Tráfego (Control Desk)",
    period: "Outubro/2020 – Maio/2025",
    description: "Responsável pelo controle e monitoramento estratégico de atividades, com foco em desenvolvimento de dashboards e automação de relatórios.",
    responsibilities: [
      "Controle e monitoramento estratégico de todas as atividades internas",
      "Desenvolvimento de dashboards complexos em Power BI",
      "Criação de relatórios automatizados em SQL Server",
      "Análise de indicadores de desempenho e produtividade",
      "Otimização de processos operacionais",
      "Suporte a tomada de decisões estratégicas"
    ],
    achievements: [
      "Redução de 60% no tempo de geração de relatórios",
      "Implementação de 15+ dashboards operacionais",
      "Melhoria na visibilidade de KPIs críticos"
    ]
  },
  {
    id: "tmkt-quality",
    company: "TMKT Serviços de Marketing",
    role: "Monitor de Qualidade",
    period: "Dezembro/2012 – Outubro/2020",
    description: "Focado em monitoramento de atendimentos, identificação de melhorias e elaboração de relatórios de desempenho.",
    responsibilities: [
      "Monitoramento detalhado de qualidade de atendimentos",
      "Identificação proativa de oportunidades de melhoria",
      "Aplicação de feedbacks estruturados para equipes",
      "Elaboração de relatórios mensais de desempenho",
      "Análise aprofundada de indicadores de qualidade",
      "Contribuição direta para melhoria contínua de processos"
    ],
    achievements: [
      "Aumento consistente nos índices de satisfação do cliente",
      "Implementação de processos de feedback estruturado",
      "Redução de reclamações através de ações preventivas"
    ]
  }
];

export const ExperienceDetails = () => {
  return (
    <section className="py-24 bg-muted/30" id="detalhes">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Detalhamento das Experiências
            </h2>
            <p className="text-lg text-muted-foreground">
              Responsabilidades, projetos e resultados mensuráveis
            </p>
          </div>

          <Tabs defaultValue="yassaka" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto gap-2 mb-8 bg-transparent">
              {experienceData.map((exp) => (
                <TabsTrigger 
                  key={exp.id} 
                  value={exp.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground h-auto py-4 px-6 text-left"
                >
                  <div className="space-y-1">
                    <p className="font-semibold">{exp.role}</p>
                    <p className="text-xs opacity-80">{exp.company}</p>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            {experienceData.map((exp) => (
              <TabsContent key={exp.id} value={exp.id} className="space-y-6">
                <Card className="p-8 border-2">
                  <div className="space-y-6">
                    <div className="pb-4 border-b">
                      <h3 className="text-3xl font-bold text-card-foreground mb-2">
                        {exp.role}
                      </h3>
                      <p className="text-xl text-primary font-semibold">
                        {exp.company}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {exp.period}
                      </p>
                    </div>

                    <p className="text-base text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>

                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <Target className="h-5 w-5 text-primary" />
                        <h4 className="text-xl font-bold text-card-foreground">
                          Responsabilidades
                        </h4>
                      </div>
                      <ul className="space-y-3">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-6 border-t">
                      <div className="flex items-center gap-2 mb-4">
                        <TrendingUp className="h-5 w-5 text-accent" />
                        <h4 className="text-xl font-bold text-card-foreground">
                          Principais Conquistas
                        </h4>
                      </div>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="inline-block w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2" />
                            <span className="text-sm font-medium text-card-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};
