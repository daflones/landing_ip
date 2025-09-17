import React from 'react';
import { cn } from '../../../utils/cn';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={cn('container-custom', className)}>
      {children}
    </div>
  );
};
