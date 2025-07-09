
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/ui/whatsapp-icon";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5514998332104"; // ZENER WhatsApp number
    const message = "Olá! Gostaria de saber mais sobre os serviços da ZENER Segurança Eletrônica.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-zener-success hover:bg-zener-success/90 text-white rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 animate-[pulse_4s_ease-in-out_infinite]"
      size="icon"
    >
      <WhatsAppIcon size={24} />
    </Button>
  );
};

export default WhatsAppButton;
