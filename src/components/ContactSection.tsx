
import { useState } from "react";
import { Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import WhatsAppIcon from "@/components/ui/whatsapp-icon";

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
    
    // Create WhatsApp message with form data
    const whatsappMessage = `Olá! Gostaria de solicitar um orçamento para segurança eletrônica.
    
Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}
Mensagem: ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/5514998332104?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    
    // Show success toast
    toast({
      title: "Redirecionando para WhatsApp!",
      description: "Você será redirecionado para conversar conosco.",
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
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: "Telefone",
      description: "(14) 99833-2104",
      action: () => window.open("tel:+5514998332104")
    },
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: "E-mail",
      description: "zener_segurancaeletronica@hotmail.com",
      action: () => window.open("mailto:zener_segurancaeletronica@hotmail.com")
    },
    {
      icon: <WhatsAppIcon size={24} className="text-primary" />,
      title: "WhatsApp",
      description: "Chat direto conosco",
      action: () => window.open("https://wa.me/5514998332104?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20ZENER%20Segurança%20Eletrônica.")
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
              Solicite seu orçamento gratuito e descubra como podemos fortalecer a sua segurança
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
                        className="border-zener-gray-light focus:border-primary"
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
                        className="border-zener-gray-light focus:border-primary"
                      />
                    </div>

                    <div>
                      <Input
                        name="phone"
                        placeholder="Seu telefone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="border-zener-gray-light focus:border-primary"
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
                        className="border-zener-gray-light focus:border-primary"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-white py-3"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Enviar via WhatsApp
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
