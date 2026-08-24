import React from 'react';
import { RefreshCw, Leaf, Droplets, Sun } from 'lucide-react';
import { Container, SectionHeader } from '../../components/ui';
import { FadeUp, StaggerContainer } from '../../components/motion';

export interface EcosystemSectionProps {
  id?: string;
}

const ECOSYSTEM_PILLARS = [
  {
    icon: Leaf,
    title: 'Living Soil & Organic Inoculation',
    description:
      'Continuous replenishment of native mycorrhizal fungi and beneficial microbes using Jeevamrutha and organic green compost.',
  },
  {
    icon: Droplets,
    title: 'Precision Hydrology & Rain Recharge',
    description:
      'Gravity-fed retention swales, micro-drip networks, and freshwater recharge ponds conserving every drop of seasonal precipitation.',
  },
  {
    icon: RefreshCw,
    title: 'Closed-Loop Bio-Nutrient Cycle',
    description:
      'Livestock manure directly powers soil conditioning, while crop residue feeds livestock and moriculture biomass without landfill waste.',
  },
  {
    icon: Sun,
    title: 'Multi-Tier Canopy Solar Capture',
    description:
      'Vertical space optimization pairing tall coconut crowns with mid-tier fruit trees and shade-loving ground vegetable crops.',
  },
];

export const EcosystemSection: React.FC<EcosystemSectionProps> = ({ id = 'ecosystem' }) => {
  return (
    <section
      id={id}
      aria-labelledby="ecosystem-heading"
      className="py-24 md:py-32 bg-botanical-900 border-t border-b border-ivory-200/10 relative"
    >
      <Container size="architectural">
        <SectionHeader
          badgeText="Circular Model"
          tagline="Ecosystem Architecture"
          title="The Closed-Loop Regenerative Blueprint"
          subtitle="Every output within our agricultural systems serves as a biological input for another discipline, establishing total nutrient retention and zero chemical dependency."
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
          {ECOSYSTEM_PILLARS.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <FadeUp
                key={pillar.title}
                className="p-8 bg-botanical-950/80 border border-botanical-750/40 rounded-sm relative overflow-hidden group hover:border-earth-gold/40 transition-colors"
              >
                <div className="flex items-start gap-5">
                  <div className="p-3 bg-botanical-850 border border-botanical-700/60 text-earth-gold rounded-sm shrink-0 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-earth-gold mb-1">
                      PILLAR // 0{index + 1}
                    </div>
                    <h3 className="text-xl font-display font-medium text-ivory-100 mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-sm font-sans text-sand-300 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </StaggerContainer>
      </Container>
    </section>
  );
};
