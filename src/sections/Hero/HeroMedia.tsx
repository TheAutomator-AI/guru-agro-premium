import React, { useRef, useEffect, useState } from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export interface HeroMediaProps {
  scrollYProgress?: MotionValue<number>;
  videoSrc?: string;
  posterSrc?: string;
}

export const HeroMedia: React.FC<HeroMediaProps> = ({
  scrollYProgress,
  videoSrc = '/media/video/V01-hero.mp4',
  posterSrc = '/media/hero/hero-poster.svg',
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const prefersReduced = useReducedMotion();

  // Scroll transformations for camera approach
  // Default values when scrollYProgress is not passed
  const defaultProgress = useTransform(() => 0);
  const progress = scrollYProgress || defaultProgress;

  // 0% -> 1.0, 20% -> 1.04, 40% -> 1.08, 80% -> 1.15, 100% -> 1.20
  const videoScale = useTransform(progress, [0, 0.2, 0.4, 0.8, 1], [1.0, 1.04, 1.08, 1.15, 1.2]);
  const videoY = useTransform(progress, [0, 1], ['0%', '8%']);
  const videoOpacity = useTransform(progress, [0, 0.75, 1], [1, 0.9, 0.35]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      setIsVideoLoaded(true);
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('loadeddata', handleCanPlay);

    // Attempt playback with error suppression
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsVideoLoaded(true);
        })
        .catch(() => {
          // Autoplay policy or low power mode; poster will remain visible
        });
    }

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('loadeddata', handleCanPlay);
    };
  }, [videoSrc]);

  return (
    <div
      className="absolute inset-0 w-full h-full overflow-hidden bg-botanical-950 select-none pointer-events-auto"
      data-cursor="view"
      data-cursor-text="VIEW"
      aria-hidden="true"
    >
      {/* Poster Fallback / Initial Atmosphere */}
      <img
        src={posterSrc}
        alt=""
        className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-out ${
          isVideoLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      />

      {/* Cinematic Full-Bleed Video */}
      <motion.div
        className="w-full h-full will-change-transform"
        style={{
          scale: prefersReduced ? 1 : videoScale,
          y: prefersReduced ? 0 : videoY,
          opacity: prefersReduced ? 1 : videoOpacity,
        }}
      >
        <video
          ref={videoRef}
          src={videoSrc}
          poster={posterSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className={`w-full h-full object-cover object-[center_35%] md:object-center transition-opacity duration-1200 ease-out ${
            isVideoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </motion.div>
    </div>
  );
};
