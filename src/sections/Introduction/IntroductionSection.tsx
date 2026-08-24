import React from 'react';
import { IntroStatement } from './IntroStatement';
import { WordStory } from './WordStory';
import { CropsStory } from './CropsStory';
import { HumanStory } from './HumanStory';
import { HarvestStory } from './HarvestStory';
import { AgriculturePreview } from './AgriculturePreview';

export interface IntroductionSectionProps {
  id?: string;
}

export const IntroductionSection: React.FC<IntroductionSectionProps> = ({ id = 'introduction' }) => {
  return (
    <section id={id} aria-label="Introduction & Agricultural Story" className="relative w-full overflow-hidden">
      {/* 01: Editorial Statement: MORE THAN AGRICULTURE */}
      <IntroStatement />

      {/* 02: Word Sequence: LAND, PEOPLE, FOOD, FUTURE */}
      <WordStory />

      {/* 03: Crops: 01 CULTIVATION with V02-crops.mp4 */}
      <CropsStory />

      {/* 04: Human Element: THE LAND IS NOTHING WITHOUT THE PEOPLE with V03-human.mp4 */}
      <HumanStory />

      {/* 05: Harvest: CULTIVATE -> GROW -> HARVEST with V06-harvest.mp4 */}
      <HarvestStory />

      {/* 06: Preview of the 7 Agriculture Divisions */}
      <AgriculturePreview />
    </section>
  );
};
