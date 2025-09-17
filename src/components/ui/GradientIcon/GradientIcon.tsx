import React from 'react';

interface GradientIconProps {
  Icon: React.ElementType;
  id: string;
  className?: string;
}

const GradientIcon: React.FC<GradientIconProps> = ({ Icon, id, className }) => {
  return (
    <>
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A78BFA" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>
      </svg>
      <Icon 
        className={className} 
        stroke={`url(#${id})`} 
        fill="none" 
        strokeWidth={2.5} 
      />
    </>
  );
};

export default GradientIcon;
