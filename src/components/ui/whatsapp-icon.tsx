
interface WhatsAppIconProps {
  size?: number;
  className?: string;
}

const WhatsAppIcon = ({ size = 24, className = "" }: WhatsAppIconProps) => {
  return (
    <img 
      src="/lovable-uploads/98189a81-fee6-476d-ae0d-155998c3ee5a.png" 
      alt="WhatsApp" 
      width={size} 
      height={size}
      className={className}
    />
  );
};

export default WhatsAppIcon;
