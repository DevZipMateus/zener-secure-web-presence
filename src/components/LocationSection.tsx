
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import NoTranslate from "@/components/ui/no-translate";

const LocationSection = () => {
  return (
    <section id="localizacao" className="py-20 bg-zener-gray-light">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              <NoTranslate as="span">Nossa Localização</NoTranslate>
            </h2>
            <p className="text-xl text-zener-gray max-w-2xl mx-auto">
              Estamos localizados em <NoTranslate as="span">Bauru</NoTranslate>, atendendo toda a região com excelência
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Endereço
                    </h3>
                    <p className="text-zener-gray">
                      <NoTranslate as="span">Rua Antonio Hojas, 1-105</NoTranslate><br />
                      <NoTranslate as="span">Jardim Helena - Bauru, SP</NoTranslate><br />
                      <NoTranslate as="span">CEP: 17033-260</NoTranslate>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Telefone
                    </h3>
                    <p className="text-zener-gray">
                      <NoTranslate as="span">(14) 99833-2104</NoTranslate><br />
                      <NoTranslate as="span">WhatsApp</NoTranslate> disponível
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      E-mail
                    </h3>
                    <p className="text-zener-gray">
                      <NoTranslate as="span">zener_segurancaeletronica@hotmail.com</NoTranslate>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Horário de Atendimento
                    </h3>
                    <p className="text-zener-gray">
                      Segunda à Sexta: 8h às 18h<br />
                      Sábado: 8h às 12h<br />
                      Emergências: 24h
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-primary p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-4">
                Atendemos <NoTranslate as="span">Bauru</NoTranslate> e toda a região
              </h3>
              <p className="text-lg">
                Instalação, manutenção e suporte técnico para residências, comércios e indústrias
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
