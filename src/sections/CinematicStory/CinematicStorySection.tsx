import React from 'react';
import { Container, Badge } from '../../components/ui';
import { FadeUp, ParallaxWrapper, TextReveal } from '../../components/motion';
import { ResponsiveImage, MediaFrame } from '../../components/media';

export interface CinematicStorySectionProps {
  id?: string;
}

export const CinematicStorySection: React.FC<CinematicStorySectionProps> = ({
  id = 'cinematic-story',
}) => {
  return (
    <section
      id={id}
      aria-labelledby="cinematic-story-heading"
      className="py-24 md:py-36 bg-botanical-950 relative overflow-hidden"
    >
      <Container size="architectural">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Editorial Text Left Column */}
          <div className="lg:col-span-6 space-y-6">
            <FadeUp delay={0.1}>
              <div className="flex items-center gap-3">
                <Badge variant="gold">Editorial Perspective</Badge>
                <span className="editorial-subtitle">Land Stewardship</span>
              </div>
            </FadeUp>

            <TextReveal
              as="h2"
              text="Cultivating the Land with Reverence and Scientific Precision"
              className="text-display-lg font-display text-ivory-100 leading-tight"
              delay={0.15}
            />

            <FadeUp delay={0.3}>
              <blockquote className="border-l-2 border-earth-gold pl-6 py-2 my-6 font-serif-editorial text-2xl text-ivory-200 italic leading-snug">
                &ldquo;True agricultural prosperity is measured not merely by yield, but by the vitality of the soil left behind for the next generation.&rdquo;
              </blockquote>
            </FadeUp>

            <FadeUp delay={0.4}>
              <p className="text-body-md text-sand-300 font-sans leading-relaxed">
                At Guru Agro Products, every agricultural plot is treated as an active bio-sanctuary. By combining traditional agro-ecological principles with modern biological soil monitoring, we ensure that our crops, livestock, sericulture, and aquaculture thrive in continuous equilibrium.
              </p>
            </FadeUp>
          </div>

          {/* Media Feature Right Column */}
          <div className="lg:col-span-6">
            <ParallaxWrapper offset={30}>
              <MediaFrame tag="CINEMATIC FOOTAGE PLACEHOLDER" borderColor="gold">
                <ResponsiveImage
                  src="/media/hero/hero-poster.svg"
                  alt="Cinematic aerial perspective of Guru Agro Products sustainable cultivation landscape"
                  aspectRatio="4/3"
                  className="w-full"
                />
              </MediaFrame>
            </ParallaxWrapper>
          </div>
        </div>
      </Container>
    </section>
  );
};
