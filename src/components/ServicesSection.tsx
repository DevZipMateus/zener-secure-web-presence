import { Camera, Shield, Lock, Eye, Home, Settings } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: <Camera className="w-8 h-8 text-zener-blue" />,
      title: "CFTV",
      description: "Sistemas de circuito fechado de televisão com câmeras de alta resolução, gravação digital e monitoramento remoto."
    },
    {
      icon: <Shield className="w-8 h-8 text-zener-blue" />,
      title: "Alarmes",
      description: "Sistemas de alarme residencial e empresarial com sensores de movimento, abertura e tecnologia anti-jamming."
    },
    {
      icon: <Lock className="w-8 h-8 text-zener-blue" />,
      title: "Controle de Acesso",
      description: "Sistemas biométricos, cartões de proximidade e códigos para controle de entrada em residências e empresas."
    },
    {
      icon: <Eye className="w-8 h-8 text-zener-blue" />,
      title: "Monitoramento",
      description: "Central de monitoramento 24 horas com resposta rápida e comunicação direta com forças de segurança."
    },
    {
      icon: <Home className="w-8 h-8 text-zener-blue" />,
      title: "Automação",
      description: "Sistemas de automação residencial integrados com segurança, iluminação e controle de portões."
    },
    {
      icon: <Settings className="w-8 h-8 text-zener-blue" />,
      title: "Manutenção",
      description: "Serviços de manutenção preventiva e corretiva com equipe técnica especializada e peças originais."
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nossos Serviços
            </h2>
            <p className="text-xl text-zener-gray max-w-2xl mx-auto">
              Soluções completas em segurança eletrônica para proteger o que mais importa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-zener-gray leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-zener-blue-light p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-4">
                Precisa de um orçamento personalizado?
              </h3>
              <p className="text-lg mb-6">
                Entre em contato conosco e receba uma proposta sob medida para suas necessidades
              </p>
              <button
                onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-white text-zener-blue-dark hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Solicitar Orçamento
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;