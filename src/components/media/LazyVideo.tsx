import React, { useRef, useState, useEffect } from 'react';
import { cn } from '../../lib/utils';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export interface LazyVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  poster?: string;
  aspectRatio?: '16/9' | '4/3' | '3/2' | '1/1' | '21/9' | 'auto';
  className?: string;
  videoClassName?: string;
  cursorText?: string;
}

export const LazyVideo: React.FC<LazyVideoProps> = ({
  src,
  poster,
  aspectRatio = '16/9',
  className = '',
  videoClassName = '',
  cursorText = 'VIEW',
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const prefersReduced = useReducedMotion();

  const aspectStyles: Record<string, string> = {
    '16/9': 'aspect-[16/9]',
    '4/3': 'aspect-[4/3]',
    '3/2': 'aspect-[3/2]',
    '1/1': 'aspect-square',
    '21/9': 'aspect-[21/9]',
    auto: 'aspect-auto',
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container || typeof IntersectionObserver === 'undefined') {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            // Play video if available
            if (videoRef.current && !prefersReduced) {
              const playPromise = videoRef.current.play();
              if (playPromise !== undefined) {
                playPromise.catch(() => {});
              }
            }
          } else {
            // Pause video when out of viewport to conserve battery & GPU
            if (videoRef.current) {
              videoRef.current.pause();
            }
          }
        });
      },
      { rootMargin: '300px 0px' }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [prefersReduced]);

  const handleCanPlay = () => {
    setIsLoaded(true);
    if (videoRef.current && !prefersReduced) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn('relative overflow-hidden w-full bg-botanical-950', aspectStyles[aspectRatio], className)}
      data-cursor="view"
      data-cursor-text={cursorText}
    >
      {/* Poster Fallback */}
      {poster && (
        <img
          src={poster}
          alt=""
          className={cn(
            'absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-out z-[1]',
            isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
          )}
        />
      )}

      {/* Loading Skeleton */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-botanical-900 animate-pulse flex items-center justify-center z-0" aria-hidden="true">
          <div className="w-8 h-8 rounded-full border border-botanical-700/60 border-t-earth-gold animate-spin" />
        </div>
      )}

      {/* Lazy Video */}
      {isInView && (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          autoPlay={!prefersReduced}
          muted
          loop
          playsInline
          preload="metadata"
          onCanPlay={handleCanPlay}
          onLoadedData={handleCanPlay}
          className={cn(
            'w-full h-full object-cover transition-opacity duration-1000 ease-out z-[2]',
            isLoaded ? 'opacity-100' : 'opacity-0',
            videoClassName
          )}
          {...props}
        />
      )}
    </div>
  );
};
