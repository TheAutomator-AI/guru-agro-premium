import React from 'react';
import { cn } from '../../lib/utils';

export interface MediaFrameProps {
  children: React.ReactNode;
  tag?: string;
  className?: string;
  borderColor?: 'subtle' | 'gold' | 'strong';
}

export const MediaFrame: React.FC<MediaFrameProps> = ({
  children,
  tag,
  className = '',
  borderColor = 'subtle',
}) => {
  const borderClasses = {
    subtle: 'border-botanical-750/50',
    gold: 'border-earth-gold/30',
    strong: 'border-ivory-200/20',
  };

  return (
    <div className={cn('relative p-2 sm:p-3 bg-botanical-900 border rounded-sm', borderClasses[borderColor], className)}>
      {/* Architectural Corner Accent Marks */}
      <span className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-earth-gold pointer-events-none" aria-hidden="true" />
      <span className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-earth-gold pointer-events-none" aria-hidden="true" />
      <span className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-earth-gold pointer-events-none" aria-hidden="true" />
      <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-earth-gold pointer-events-none" aria-hidden="true" />

      {tag && (
        <div className="absolute top-4 left-4 z-10 px-2.5 py-1 bg-botanical-950/90 backdrop-blur-sm border border-earth-gold/40 text-[10px] font-mono tracking-widest text-earth-gold uppercase">
          {tag}
        </div>
      )}

      {children}
    </div>
  );
};
