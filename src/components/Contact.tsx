import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, Linkedin } from "lucide-react";
import { toast } from "sonner";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch("https://caiosantosscl.app.n8n.cloud/webhook/portfolio", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Mensagem enviada com sucesso!", {
          description: "Obrigado pelo contato. Responderei em breve."
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Erro ao enviar mensagem");
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      toast.error("Erro ao enviar mensagem", {
        description: "Por favor, tente novamente mais tarde."
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-24 bg-background" id="contato">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Entre em Contato
            </h2>
            <p className="text-lg text-muted-foreground">
              Interessado em projetos, consultas ou oportunidades profissionais? Vamos conversar!
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {/* Contact Info */}
            <div className="md:col-span-2 space-y-6">
              <Card className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-1">Email</h3>
                      <a 
                        href="mailto:caioscl74@gmail.com"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        caioscl74@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-secondary/10 rounded-lg">
                      <Phone className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-1">Telefone</h3>
                      <p className="text-sm text-muted-foreground">(11) 98012-9280</p>
                      <p className="text-sm text-muted-foreground">(11) 96294-6876</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <MapPin className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-1">Localização</h3>
                      <p className="text-sm text-muted-foreground">
                        Suzano/SP, Brasil
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <h3 className="font-semibold text-card-foreground mb-3">Redes Sociais</h3>
                    <a 
                      href="https://linkedin.com/in/caio-santos-da-silva-6689b9180"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-3">
              <Card className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-card-foreground">
                        Nome Completo
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Seu nome"
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-card-foreground">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="seu@email.com"
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-card-foreground">
                      Assunto
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Motivo do contato"
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-card-foreground">
                      Mensagem
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Descreva sua proposta, projeto ou consulta..."
                      required
                      rows={6}
                      className="resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg"
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Enviar Mensagem
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
