import { GraduationCap, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const education = [
  {
    degree: "Pós-Graduação em Administração em Banco de Dados",
    institution: "Universidade Pitágoras Unopar Anhanguera",
    period: "Julho/2022 – Maio/2023",
    type: "Pós-Graduação"
  },
  {
    degree: "Pós-Graduação em Engenharia de Software",
    institution: "Universidade Pitágoras Unopar Anhanguera",
    period: "Julho/2022 – Junho/2023",
    type: "Pós-Graduação"
  },
  {
    degree: "Análise e Desenvolvimento de Sistemas",
    institution: "Universidade Pitágoras Unopar Anhanguera",
    period: "Agosto/2019 – Junho/2022",
    type: "Graduação"
  }
];

const certifications = [
  { name: "Python Impressionador", institution: "Hashtag Treinamentos", year: "Cursando", active: true },
  { name: "Análise de Dados Impressionador", institution: "Hashtag Treinamentos", year: "2024" },
  { name: "Power BI Impressionador", institution: "Hashtag Treinamentos", year: "2024" },
  { name: "Microsoft SQL Server 2022", institution: "Alura", year: "2023" },
  { name: "HTML5 e CSS3", institution: "Fundação Bradesco", year: "2019" },
  { name: "Pacote Office 2016", institution: "Fundação Bradesco", year: "2018" }
];

export const Education = () => {
  return (
    <section className="py-24 bg-background" id="formacao">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Formação & Certificações
            </h2>
            <p className="text-lg text-muted-foreground">
              Educação continuada e especialização profissional
            </p>
          </div>

          {/* Education */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="h-8 w-8 text-primary" />
              <h3 className="text-3xl font-bold text-foreground">Formação Acadêmica</h3>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card 
                  key={index}
                  className="p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="space-y-2 flex-1">
                      <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-2">
                        {edu.type}
                      </div>
                      <h4 className="text-xl font-bold text-card-foreground">
                        {edu.degree}
                      </h4>
                      <p className="text-base font-medium text-primary">
                        {edu.institution}
                      </p>
                    </div>
                    <div className="text-sm text-muted-foreground md:text-right">
                      {edu.period}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Award className="h-8 w-8 text-secondary" />
              <h3 className="text-3xl font-bold text-foreground">Certificações</h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <Card 
                  key={index}
                  className="p-5 hover:shadow-lg transition-all duration-300 hover:border-secondary/50 border-2"
                >
                  <div className="space-y-2">
                    {cert.active && (
                      <span className="inline-block px-2 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                        Em andamento
                      </span>
                    )}
                    <h4 className="text-base font-bold text-card-foreground leading-tight">
                      {cert.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {cert.institution}
                    </p>
                    <p className="text-sm font-semibold text-secondary">
                      {cert.year}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
