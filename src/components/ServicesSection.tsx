import { Camera, Shield, Lock, Zap, Radio, Phone, DoorClosed, Settings } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Sistema de Alarme",
      description: "Sistemas de alarme residencial e empresarial com sensores de movimento, abertura e tecnologia anti-jamming para máxima segurança."
    },
    {
      icon: <Camera className="w-8 h-8 text-primary" />,
      title: "Sistema de Câmera (CFTV)",
      description: "Circuito fechado de televisão com câmeras de alta resolução, gravação digital e monitoramento remoto 24 horas."
    },
    {
      icon: <DoorClosed className="w-8 h-8 text-primary" />,
      title: "Automatização de Portão",
      description: "Sistemas automatizados para portões residenciais e empresariais com controle remoto e sensores de segurança."
    },
    {
      icon: <Lock className="w-8 h-8 text-primary" />,
      title: "Fechadura Elétrica",
      description: "Fechaduras eletrônicas modernas com controle de acesso por cartão, código ou biometria para total segurança."
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Cerca Elétrica",
      description: "Instalação de cercas elétricas para perímetro com sistema de desenergização e alarme integrado."
    },
    {
      icon: <Radio className="w-8 h-8 text-primary" />,
      title: "Interfone",
      description: "Sistemas de interfone para comunicação entre portaria e residências ou apartamentos com qualidade de áudio."
    },
    {
      icon: <Phone className="w-8 h-8 text-primary" />,
      title: "Vídeo Porteiro",
      description: "Sistemas de vídeo porteiro com tela colorida, visão noturna e controle de abertura remota."
    },
    {
      icon: <Settings className="w-8 h-8 text-primary" />,
      title: "Eletricista Residencial e Predial",
      description: "Serviços elétricos completos para residências e prédios com equipe qualificada e materiais de qualidade."
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
              Soluções completas em segurança eletrônica e elétrica para proteger o que mais importa
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
            <div className="bg-primary p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-4">
                Precisa de um orçamento personalizado?
              </h3>
              <p className="text-lg mb-6">
                Entre em contato conosco e receba uma proposta sob medida para suas necessidades
              </p>
              <button
                onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition-colors"
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