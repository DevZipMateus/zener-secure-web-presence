
interface WhatsAppIconProps {
  size?: number;
  className?: string;
}

const WhatsAppIcon = ({ size = 24, className = "" }: WhatsAppIconProps) => {
  return (
    <img 
      src="/lovable-uploads/46673b62-f37a-4b41-be5c-2a041dbdacaf.png" 
      alt="WhatsApp" 
      width={size} 
      height={size}
      className={className}
    />
  );
};

export default WhatsAppIcon;
