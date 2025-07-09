import { CheckCircle, Award, Users, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const stats = [
    {
      icon: <Clock className="w-8 h-8 text-zener-blue" />,
      title: "20+ Anos",
      description: "De experiência no mercado"
    },
    {
      icon: <Users className="w-8 h-8 text-zener-blue" />,
      title: "1000+ Clientes",
      description: "Satisfeitos em toda São Paulo"
    },
    {
      icon: <Award className="w-8 h-8 text-zener-blue" />,
      title: "Certificações",
      description: "Profissionais qualificados"
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
              Líder em segurança eletrônica, oferecendo proteção completa com tecnologia de ponta
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Nossa História
              </h3>
              <p className="text-zener-gray leading-relaxed mb-6">
                Fundada em 2003, a ZENER Segurança Eletrônica nasceu com o compromisso de oferecer 
                soluções completas em segurança eletrônica para residências e empresas. 
                Ao longo de mais de 20 anos, construímos uma reputação sólida baseada na 
                qualidade, confiabilidade e atendimento personalizado.
              </p>
              <p className="text-zener-gray leading-relaxed">
                Nossa equipe altamente qualificada utiliza as tecnologias mais avançadas do mercado, 
                garantindo proteção eficaz e tranquilidade para nossos clientes em toda a Grande São Paulo.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Instalação e manutenção de câmeras de segurança",
                "Sistemas de alarme residencial e empresarial",
                "Controle de acesso biométrico",
                "Monitoramento 24 horas",
                "Automação residencial",
                "Suporte técnico especializado"
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