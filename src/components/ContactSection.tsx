import { useState } from "react";
import { Mail, Phone, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6 text-zener-blue" />,
      title: "Telefone",
      description: "(11) 99999-9999",
      action: () => window.open("tel:+5511999999999")
    },
    {
      icon: <Mail className="w-6 h-6 text-zener-blue" />,
      title: "E-mail",
      description: "contato@zenerseguranca.com.br",
      action: () => window.open("mailto:contato@zenerseguranca.com.br")
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-zener-blue" />,
      title: "WhatsApp",
      description: "Chat direto conosco",
      action: () => window.open("https://wa.me/5511999999999")
    }
  ];

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Entre em Contato
            </h2>
            <p className="text-xl text-zener-gray max-w-2xl mx-auto">
              Solicite seu orçamento gratuito e descubra como podemos proteger seu patrimônio
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Fale Conosco
              </h3>
              <p className="text-zener-gray mb-8">
                Nossa equipe está pronta para atender você. Entre em contato através dos canais abaixo 
                ou preencha o formulário e retornaremos em breve.
              </p>

              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer" onClick={method.action}>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        {method.icon}
                        <div>
                          <h4 className="text-lg font-semibold text-foreground">
                            {method.title}
                          </h4>
                          <p className="text-zener-gray">
                            {method.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    Solicite seu Orçamento
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Input
                        name="name"
                        placeholder="Seu nome"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="border-zener-gray-light focus:border-zener-blue"
                      />
                    </div>

                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Seu e-mail"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border-zener-gray-light focus:border-zener-blue"
                      />
                    </div>

                    <div>
                      <Input
                        name="phone"
                        placeholder="Seu telefone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="border-zener-gray-light focus:border-zener-blue"
                      />
                    </div>

                    <div>
                      <Textarea
                        name="message"
                        placeholder="Descreva suas necessidades de segurança..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="border-zener-gray-light focus:border-zener-blue"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-zener-blue hover:bg-zener-blue-dark text-white py-3"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;