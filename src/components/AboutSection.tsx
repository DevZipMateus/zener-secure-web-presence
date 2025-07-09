import { CheckCircle, Award, Users, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const stats = [
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Empresa Sólida",
      description: "Atuação consolidada no mercado"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Atendimento Completo",
      description: "Residências, comércios e indústrias"
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Produtos Inovadores",
      description: "Tecnologia de ponta em segurança"
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-zener-gray-light">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Sobre a ZENER
            </h2>
            <p className="text-xl text-zener-gray max-w-2xl mx-auto">
              Empresa sólida especializada em segurança eletrônica e elétrica para total proteção
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Nossa Missão
              </h3>
              <p className="text-zener-gray leading-relaxed mb-6">
                A ZENER é uma empresa sólida que atua no controle de segurança eletrônica e elétrica 
                para indústrias, comércios, residências e condomínios em Bauru e região.
              </p>
              <p className="text-zener-gray leading-relaxed">
                Nosso principal objetivo é promover soluções integradas em sistemas de segurança, 
                através de produtos inovadores e flexibilidade em seus processos, garantindo 
                total tranquilidade aos nossos clientes.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Sistema de alarme residencial e empresarial",
                "Sistema de câmera (CFTV) de alta qualidade",
                "Automatização de portão eletrônico",
                "Fechadura elétrica moderna",
                "Cerca elétrica para perímetro",
                "Interfone e vídeo porteiro",
                "Eletricista residencial e predial"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-zener-success flex-shrink-0" />
                  <span className="text-zener-gray">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <h4 className="text-2xl font-bold text-foreground mb-2">
                    {stat.title}
                  </h4>
                  <p className="text-zener-gray">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;