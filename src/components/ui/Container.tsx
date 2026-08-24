import React from 'react';
import { cn } from '../../lib/utils';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'architectural' | 'editorial' | 'narrow' | 'full';
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'main' | 'header' | 'footer';
}

export const Container: React.FC<ContainerProps> = ({
  size = 'architectural',
  children,
  className = '',
  as: Component = 'div',
  ...props
}) => {
  const sizeClasses = {
    architectural: 'container-architectural',
    editorial: 'container-editorial',
    narrow: 'container-narrow',
    full: 'w-full px-4 sm:px-6 lg:px-8',
  };

  return (
    <Component className={cn(sizeClasses[size], className)} {...props}>
      {children}
    </Component>
  );
};
