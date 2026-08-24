import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../../components/ui';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { TRANSITION_EASINGS } from '../../lib/motion';

interface WordItem {
  id: string;
  number: string;
  word: string;
  subtitle: string;
  description: string;
}

const STORY_WORDS: WordItem[] = [
  {
    id: 'land',
    number: '01',
    word: 'LAND',
    subtitle: 'LIVING SOIL & NATIVE BIOSPHERE',
    description: 'The foundation begins beneath our feet: regenerative pedology, mycorrhizal fungi, and chemical-free soil architecture.',
  },
  {
    id: 'people',
    number: '02',
    word: 'PEOPLE',
    subtitle: 'GENERATIONAL STEWARDSHIP',
    description: 'Dedicated field agronomists and local cultivators blending traditional knowledge with scientific soil management.',
  },
  {
    id: 'food',
    number: '03',
    word: 'FOOD',
    subtitle: 'NUTRITIONAL INTEGRITY',
    description: 'Pure, organic fruits, heritage paddy grains, and natural farm produce cultivated with zero synthetic contaminants.',
  },
  {
    id: 'future',
    number: '04',
    word: 'FUTURE',
    subtitle: 'CLOSED-LOOP EQUILIBRIUM',
    description: 'A lasting multi-tier ecosystem designed to nurture generations ahead while preserving ecological balance.',
  },
];

export const WordStory: React.FC = () => {
  const prefersReduced = useReducedMotion();

  return (
    <div className="py-20 sm:py-28 bg-ivory-100 border-t border-botanical-800/10 text-botanical-950">
      <Container size="architectural" className="space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-botanical-800/15 pb-4">
          <span className="font-mono text-xs text-earth-gold-dark tracking-widest uppercase font-medium">
            THE 4 ESSENTIAL PILLARS // CORE NARRATIVE
          </span>
          <span className="font-mono text-xs text-sand-500 uppercase">
            INTEGRATED ECOSYSTEM
          </span>
        </div>

        {/* 4 Architectural Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STORY_WORDS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: prefersReduced ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.6,
                delay: prefersReduced ? 0 : idx * 0.1,
                ease: TRANSITION_EASINGS.editorial,
              }}
              className="p-8 bg-ivory-200/90 border border-botanical-800/10 rounded-sm space-y-4 hover:border-earth-gold-dark/40 transition-colors"
            >
              <div className="flex items-center justify-between text-xs font-mono text-earth-gold-dark">
                <span>PILLAR // {item.number}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-earth-gold-dark" />
              </div>
              <h3 className="font-display font-medium text-4xl sm:text-5xl text-botanical-950 uppercase tracking-tight">
                {item.word}
              </h3>
              <h4 className="font-mono text-xs text-botanical-800 tracking-wider uppercase font-semibold">
                {item.subtitle}
              </h4>
              <p className="text-sm font-sans text-sand-700 leading-relaxed pt-1">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
};
