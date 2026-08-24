import React from 'react';
import { SustainabilityOpening } from './SustainabilityOpening';
import { SustainabilityScrollStory } from './SustainabilityScrollStory';
import { SustainabilityMobileStory } from './SustainabilityMobileStory';
import { FutureMoment } from './FutureMoment';

export interface SustainabilitySectionProps {
  id?: string;
}

export const SustainabilitySection: React.FC<SustainabilitySectionProps> = ({
  id = 'sustainability',
}) => {
  return (
    <section
      id={id}
      aria-labelledby="sustainability-heading"
      className="relative bg-botanical-950 text-ivory-100 overflow-hidden border-t border-ivory-200/10"
    >
      {/* 01: Contemplative Opening Transition */}
      <SustainabilityOpening />

      {/* 02: Desktop Pinned 5-Step Storytelling Canvas (>= 1024px) */}
      <div className="hidden lg:block">
        <SustainabilityScrollStory />
      </div>

      {/* 02: Mobile & Tablet Vertical Progressive Flow (< 1024px) */}
      <div className="block lg:hidden">
        <SustainabilityMobileStory />
      </div>

      {/* 03: Final Chapter Moment: THE FUTURE IS CULTIVATED */}
      <FutureMoment />
    </section>
  );
};
