import { Linkedin, Mail, Phone, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* About */}
            <div className="md:col-span-2 space-y-4">
              <h3 className="text-2xl font-bold text-card-foreground">
                Caio Santos da Silva
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Analista de Dados especializado em Power BI, SQL Server e Python. 
                Transformando dados em insights estratégicos para impulsionar resultados empresariais.
              </p>
              <div className="flex gap-4 pt-2">
                <a 
                  href="https://linkedin.com/in/caio-santos-da-silva-6689b9180"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="mailto:caioscl74@gmail.com"
                  className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </a>
                <a 
                  href="tel:+5511980129280"
                  className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors"
                >
                  <Phone className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-card-foreground">
                Navegação Rápida
              </h4>
              <ul className="space-y-2">
                {[
                  { label: 'Experiência', id: 'experiencia' },
                  { label: 'Habilidades', id: 'habilidades' },
                  { label: 'Formação', id: 'formacao' },
                  { label: 'Contato', id: 'contato' }
                ].map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-card-foreground">
                Contato
              </h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <a href="mailto:caioscl74@gmail.com" className="hover:text-primary transition-colors">
                    caioscl74@gmail.com
                  </a>
                </li>
                <li>(11) 98012-9280</li>
                <li>(11) 96294-6876</li>
                <li className="text-xs pt-2">
                  Suzano/SP, Brasil
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Caio Santos da Silva. Todos os direitos reservados.
            </p>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/Curriculo_Caio_Santos.docx';
                link.download = 'Curriculo_Caio_Santos.docx';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              <Download className="mr-2 h-4 w-4" />
              Baixar CV
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};
