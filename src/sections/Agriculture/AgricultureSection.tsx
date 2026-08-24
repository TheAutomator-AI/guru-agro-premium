import React from 'react';
import { AgricultureHeader } from './AgricultureHeader';
import { DesktopEcosystem } from './DesktopEcosystem';
import { MobileEcosystem } from './MobileEcosystem';

export interface AgricultureSectionProps {
  id?: string;
}

export const AgricultureSection: React.FC<AgricultureSectionProps> = ({ id = 'agriculture' }) => {
  return (
    <section
      id={id}
      aria-labelledby="agriculture-heading"
      className="relative bg-botanical-950 text-ivory-100 overflow-hidden border-t border-ivory-200/10"
    >
      {/* Section Editorial Header */}
      <AgricultureHeader />

      {/* Desktop Signature Interactive Experience (>= 1024px) */}
      <div className="hidden lg:block">
        <DesktopEcosystem />
      </div>

      {/* Mobile & Small Screen Vertical Editorial Flow (< 1024px) */}
      <div className="block lg:hidden">
        <MobileEcosystem />
      </div>
    </section>
  );
};
