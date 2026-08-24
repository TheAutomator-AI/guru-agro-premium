import React, { useState } from 'react';
import { cn } from '../../lib/utils';

export interface ResponsiveImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string; // Strictly required for WCAG accessibility
  aspectRatio?: '16/9' | '4/3' | '3/2' | '1/1' | '21/9' | 'auto';
  className?: string;
  imageClassName?: string;
  caption?: string;
  priority?: boolean;
}

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  aspectRatio = '16/9',
  className = '',
  imageClassName = '',
  caption,
  priority = false,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const aspectStyles: Record<string, string> = {
    '16/9': 'aspect-[16/9]',
    '4/3': 'aspect-[4/3]',
    '3/2': 'aspect-[3/2]',
    '1/1': 'aspect-square',
    '21/9': 'aspect-[21/9]',
    auto: 'aspect-auto',
  };

  return (
    <figure className={cn('relative overflow-hidden w-full m-0 bg-botanical-900', className)}>
      <div className={cn('w-full relative overflow-hidden', aspectStyles[aspectRatio])}>
        {/* Loading skeleton placeholder */}
        {!isLoaded && !hasError && (
          <div
            className="absolute inset-0 bg-botanical-850 animate-pulse flex items-center justify-center"
            aria-hidden="true"
          >
            <div className="w-8 h-8 rounded-full border border-botanical-700/60 border-t-earth-gold animate-spin" />
          </div>
        )}

        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={cn(
            'w-full h-full object-cover transition-all duration-700 ease-out',
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105',
            imageClassName
          )}
          {...props}
        />

        {hasError && (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-botanical-950 text-sand-400 text-xs font-mono text-center">
            <span className="font-display uppercase tracking-widest text-sand-400/80">Guru Agro Products</span>
          </div>
        )}
      </div>

      {caption && (
        <figcaption className="mt-2 text-xs font-mono text-sand-400 tracking-wider">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};
