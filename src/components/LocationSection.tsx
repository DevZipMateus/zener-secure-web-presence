import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const LocationSection = () => {
  return (
    <section id="localizacao" className="py-20 bg-zener-gray-light">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nossa Localização
            </h2>
            <p className="text-xl text-zener-gray max-w-2xl mx-auto">
              Estamos localizados em São Paulo, atendendo toda a Grande São Paulo
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-zener-blue flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        Endereço
                      </h3>
                      <p className="text-zener-gray">
                        Rua Exemplo, 123<br />
                        Bairro Exemplo - São Paulo, SP<br />
                        CEP: 01234-567
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-zener-blue flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        Telefone
                      </h3>
                      <p className="text-zener-gray">
                        (11) 99999-9999<br />
                        (11) 3333-3333
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-zener-blue flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        E-mail
                      </h3>
                      <p className="text-zener-gray">
                        contato@zenerseguranca.com.br
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-zener-blue flex-shrink-0 mt-1" />
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

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-square bg-zener-gray-light flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-zener-blue mx-auto mb-4" />
                  <p className="text-zener-gray">Mapa em breve</p>
                  <p className="text-sm text-zener-gray mt-2">
                    Integração com Google Maps
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-zener-blue p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-4">
                Atendemos toda a Grande São Paulo
              </h3>
              <p className="text-lg">
                Instalação, manutenção e suporte técnico em toda a região metropolitana
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;