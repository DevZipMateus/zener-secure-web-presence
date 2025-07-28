
import { CheckCircle, Award, Users, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import NoTranslate from "@/components/ui/no-translate";

const AboutSection = () => {
  const stats = [
    {
      icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />,
      title: "Empresa Sólida",
      description: "Atuação consolidada no mercado"
    },
    {
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />,
      title: "Atendimento Completo",
      description: "Residências, comércios e indústrias"
    },
    {
      icon: <Award className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />,
      title: "Produtos Inovadores",
      description: "Tecnologia de ponta em segurança"
    }
  ];

  return (
    <section id="sobre" className="py-12 sm:py-16 lg:py-20 bg-zener-gray-light">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Sobre a <NoTranslate as="span">ZENER</NoTranslate>
            </h2>
            <p className="text-lg sm:text-xl text-zener-gray max-w-2xl mx-auto px-4">
              Empresa sólida especializada em segurança eletrônica e elétrica para total proteção
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
            <div className="order-2 md:order-1">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">
                Nossa Missão
              </h3>
              <p className="text-zener-gray leading-relaxed mb-4 sm:mb-6">
                A <NoTranslate as="span">ZENER</NoTranslate> é uma empresa sólida que atua no controle de segurança eletrônica e elétrica 
                para indústrias, comércios, residências e condomínios em Bauru e região.
              </p>
              <p className="text-zener-gray leading-relaxed">
                Nosso principal objetivo é promover soluções integradas em sistemas de segurança, 
                através de produtos inovadores e flexibilidade em seus processos, garantindo 
                total tranquilidade aos nossos clientes.
              </p>
            </div>

            <div className="order-1 md:order-2 space-y-3 sm:space-y-4">
              {[
                "Sistema de alarme residencial e empresarial",
                "Sistema de câmera (CFTV) de alta qualidade",
                "Automatização de portão eletrônico",
                "Fechadura elétrica moderna",
                "Cerca elétrica para perímetro",
                "Interfone e vídeo porteiro",
                "Eletricista residencial e predial"
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-zener-success flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-zener-gray">
                    <NoTranslate as="span">{item}</NoTranslate>
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-2">
                    <NoTranslate as="span">{stat.title}</NoTranslate>
                  </h4>
                  <p className="text-sm sm:text-base text-zener-gray">
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
