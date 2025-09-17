import React from 'react';
import { cn } from '../../../utils/cn';

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'outline-light' | 'secondary-outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  isLoading?: boolean;
  as?: 'button' | 'a';
} & (React.ButtonHTMLAttributes<HTMLButtonElement> & React.AnchorHTMLAttributes<HTMLAnchorElement>);

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className,
  isLoading = false,
  disabled,
  as = 'button',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-full';
  
  const variants = {
    primary: 'bg-gradient-primary text-white hover:shadow-lg hover:scale-105',
        secondary: 'bg-white text-primary-purple hover:bg-gray-50 hover:scale-105',
    outline: 'border-2 border-primary-purple text-primary-purple hover:bg-primary-purple hover:text-white',
            'secondary-outline': 'bg-white border-2 border-primary-purple text-primary-purple hover:bg-primary-purple/10 hover:scale-105',
    'outline-light': 'border-2 border-white/40 text-white hover:bg-white/10 backdrop-blur-sm hover:border-white/60',
    ghost: 'text-primary-purple hover:bg-primary-purple/10'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const commonClasses = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    (isLoading || disabled) && 'opacity-50 cursor-not-allowed',
    className
  );

  const content = isLoading ? (
    <>
      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      Processando...
    </>
  ) : children;

  if (as === 'a') {
    return (
      <a
        className={commonClasses}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={commonClasses}
      disabled={disabled || isLoading}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
};
