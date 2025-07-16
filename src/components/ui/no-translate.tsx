
import React from 'react';

interface NoTranslateProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export const NoTranslate: React.FC<NoTranslateProps> = ({ 
  children, 
  className = "", 
  as: Component = "span" 
}) => {
  return (
    <Component 
      className={`notranslate ${className}`}
      translate="no"
    >
      {children}
    </Component>
  );
};

export default NoTranslate;
