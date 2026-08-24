import React from 'react';
import { cn } from '../../lib/utils';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'botanical' | 'gold' | 'ivory' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'botanical',
  size = 'md',
  className = '',
}) => {
  const variantStyles = {
    botanical: 'bg-botanical-850 text-botanical-300 border-botanical-700/60',
    gold: 'bg-earth-gold/15 text-earth-gold-light border-earth-gold/30',
    ivory: 'bg-ivory-100 text-botanical-950 border-ivory-300',
    outline: 'bg-transparent text-sand-300 border-sand-700',
  };

  const sizeStyles = {
    sm: 'text-[10px] tracking-widest px-2.5 py-0.5',
    md: 'text-xs tracking-wider px-3.5 py-1',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center font-mono font-medium uppercase rounded-full border shadow-sm',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </span>
  );
};
