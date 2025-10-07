import { Briefcase, TrendingUp, BarChart3 } from "lucide-react";

const experiences = [
  {
    company: "Yassaka Consultoria",
    role: "Analista de CRM e Dados",
    period: "Maio/2025 – Atualmente",
    current: true,
    icon: TrendingUp,
    highlights: [
      "Análises estratégicas de CRM",
      "Integrações de dados entre sistemas",
      "Dashboards Power BI para funil de vendas"
    ]
  },
  {
    company: "TMKT Serviços de Marketing LTDA",
    role: "Monitor de Tráfego (Control Desk)",
    period: "Outubro/2020 – Maio/2025",
    current: false,
    icon: BarChart3,
    highlights: [
      "Dashboards em Power BI",
      "Relatórios automatizados SQL Server",
      "Redução no tempo de geração de relatórios"
    ]
  },
  {
    company: "TMKT Serviços de Marketing LTDA",
    role: "Monitor de Qualidade",
    period: "Dezembro/2012 – Outubro/2020",
    current: false,
    icon: Briefcase,
    highlights: [
      "Monitoramento de atendimentos",
      "Relatórios de desempenho",
      "Melhoria contínua de processos"
    ]
  }
];

export const Experience = () => {
  return (
    <section className="py-24 bg-background" id="experiencia">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Experiência Profissional
            </h2>
            <p className="text-lg text-muted-foreground">
              Trajetória de evolução e conquistas na área de análise de dados
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

            <div className="space-y-12">
              {experiences.map((exp, index) => {
                const Icon = exp.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <div 
                    key={index} 
                    className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                        exp.current 
                          ? 'bg-gradient-to-br from-accent to-secondary shadow-lg shadow-accent/50' 
                          : 'bg-gradient-to-br from-primary to-secondary'
                      }`}>
                        <Icon className="h-8 w-8 text-primary-foreground" />
                      </div>
                    </div>

                    {/* Content card */}
                    <div className={`flex-1 ml-24 md:ml-0 ${isEven ? 'md:pr-16' : 'md:pl-16'}`}>
                      <div className={`bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/50 ${
                        isEven ? 'md:text-right' : 'md:text-left'
                      }`}>
                        <div className="space-y-3">
                          <div className="flex items-start gap-2 justify-between">
                            <div className={isEven ? 'md:order-2' : ''}>
                              {exp.current && (
                                <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full mb-2">
                                  Atual
                                </span>
                              )}
                              <h3 className="text-2xl font-bold text-card-foreground">
                                {exp.role}
                              </h3>
                              <p className="text-lg font-semibold text-primary">
                                {exp.company}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {exp.period}
                              </p>
                            </div>
                          </div>
                          
                          <ul className={`space-y-2 text-sm text-muted-foreground ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                            {exp.highlights.map((highlight, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className={`inline-block w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0 ${isEven ? 'md:order-2' : ''}`} />
                                <span className="flex-1">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
