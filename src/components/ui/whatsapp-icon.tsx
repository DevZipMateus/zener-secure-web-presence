
interface WhatsAppIconProps {
  size?: number;
  className?: string;
}

const WhatsAppIcon = ({ size = 24, className = "" }: WhatsAppIconProps) => {
  return (
    <img 
      src="/lovable-uploads/5ea54f66-1c16-4243-b607-34addc12d3b4.png" 
      alt="WhatsApp" 
      width={size} 
      height={size}
      className={className}
    />
  );
};

export default WhatsAppIcon;
