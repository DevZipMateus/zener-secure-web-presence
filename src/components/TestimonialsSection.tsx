
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import WhatsAppIcon from "@/components/ui/whatsapp-icon";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      location: "Bauru - SP",
      text: "Excelente serviço! A ZENER instalou um sistema completo de segurança em minha residência. Profissionais competentes e atendimento de primeira qualidade.",
      rating: 5,
      service: "Sistema de Alarme e CFTV"
    },
    {
      name: "João Santos",
      location: "Bauru - SP", 
      text: "Recomendo demais! A automatização do portão ficou perfeita e o sistema de interfone funciona muito bem. Atendimento rápido e eficiente.",
      rating: 5,
      service: "Automatização de Portão"
    },
    {
      name: "Ana Costa",
      location: "Bauru - SP",
      text: "Empresa séria e confiável. Instalaram as câmeras de segurança em meu comércio e agora tenho total controle e tranquilidade.",
      rating: 5,
      service: "Sistema CFTV"
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-zener-gray-light">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Depoimentos
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Veja o que nossos clientes falam sobre nossos serviços
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-background border-border hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Quote className="w-8 h-8 text-primary mr-3" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-zener-warning text-zener-warning" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-foreground">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.location}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-primary font-medium">
                          {testimonial.service}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Quer compartilhar sua experiência com a ZENER?
            </p>
            <a
              href="https://wa.me/5514998332104?text=Gostaria%20de%20deixar%20um%20depoimento%20sobre%20os%20serviços%20da%20ZENER"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              <WhatsAppIcon size={20} className="mr-2" />
              Deixe seu depoimento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
