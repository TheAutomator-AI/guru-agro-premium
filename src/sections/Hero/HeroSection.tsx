import React from 'react';
import { Container } from '../../components/ui';
import { HeroMedia } from './HeroMedia';
import { HeroAtmosphere } from './HeroAtmosphere';
import { HeroTypography } from './HeroTypography';
import { HeroCTA } from './HeroCTA';
import { HeroScrollIndicator } from './HeroScrollIndicator';

export interface HeroSectionProps {
  id?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ id = 'hero' }) => {
  return (
    <section
      id={id}
      aria-label="Cinematic Hero Opening"
      className="relative w-full min-h-[100svh] py-20 sm:py-24 md:py-28 overflow-hidden flex flex-col justify-between bg-botanical-950 z-[1]"
    >
      {/* Layer 1: Cinematic Full-Bleed Video Media */}
      <HeroMedia
        videoSrc="/media/video/V01-hero.mp4"
        posterSrc="/media/hero/hero-poster.svg"
      />

      {/* Layer 2: Filmic Atmosphere & Lighting Overlay */}
      <HeroAtmosphere />

      {/* Layer 3: Central Foreground Content & Editorial Statement */}
      <div className="relative z-10 w-full my-auto pt-16 sm:pt-20 md:pt-24 pb-8">
        <Container size="architectural" className="flex flex-col gap-6 md:gap-8">
          <HeroTypography />
          <HeroCTA />
        </Container>
      </div>

      {/* Layer 4: Minimal Bottom Metadata & Scroll Indicator */}
      <div className="relative z-10 w-full pb-4 sm:pb-6">
        <Container size="architectural">
          <HeroScrollIndicator />
        </Container>
      </div>
    </section>
  );
};
