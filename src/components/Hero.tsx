import { Button } from "@/components/ui/button";
import { Download, Linkedin, Mail, Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    
    // CORREÇÃO CRUCIAL: Incluindo o nome do repositório no caminho
    // E usando o nome do arquivo simplificado (que você deve ter renomeado na pasta public)
    link.href = '/Curriculo_CaioSantos/curriculo-caio-santos.docx';
    
    link.download = 'curriculo-caio-santos.docx'; // O nome sugerido para o download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-secondary/90" />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8 py-20">
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground">
              Caio Santos da Silva
            </h1>
            <p className="text-2xl md:text-3xl text-primary-foreground/90 font-medium">
              Analista de Dados
            </p>
          </div>

          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            Especialista em <span className="font-semibold text-primary-foreground">Power BI, SQL Server e Python</span>, 
            desenvolvendo dashboards interativos e automação de relatórios para apoiar decisões estratégicas 
            e otimizar resultados empresariais.
          </p>

          <div className="flex flex-wrap gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={handleDownloadCV}
            >
              <Download className="mr-2 h-5 w-5" />
              Baixar Currículo
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold px-8 shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2 h-5 w-5" />
              Entre em Contato
            </Button>
          </div>

          <div className="flex gap-6 justify-center items-center pt-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
            <a 
              href="https://linkedin.com/in/caio-santos-da-silva-6689b9180" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-foreground hover:text-accent transition-colors duration-300"
            >
              <Linkedin className="h-8 w-8" />
            </a>
            <a 
              href="mailto:caioscl74@gmail.com"
              className="text-primary-foreground hover:text-accent transition-colors duration-300"
            >
              <Mail className="h-8 w-8" />
            </a>
            <a 
              href="tel:+5511980129280"
              className="text-primary-foreground hover:text-accent transition-colors duration-300"
            >
              <Phone className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary-foreground rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};