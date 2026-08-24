import React from 'react';
import { motion } from 'framer-motion';

export type DivisionFilterType = 'ALL' | 'CULTIVATION' | 'LIVESTOCK' | 'AQUACULTURE_SERICULTURE';

export interface DivisionFilterProps {
  activeFilter: DivisionFilterType;
  onSelectFilter: (filter: DivisionFilterType) => void;
  counts: Record<DivisionFilterType, number>;
}

const FILTER_TABS: Array<{ id: DivisionFilterType; label: string }> = [
  { id: 'ALL', label: 'All Disciplines' },
  { id: 'CULTIVATION', label: 'Cultivation & Flora' },
  { id: 'LIVESTOCK', label: 'Livestock & Avian' },
  { id: 'AQUACULTURE_SERICULTURE', label: 'Aquaculture & Sericulture' },
];

export const DivisionFilter: React.FC<DivisionFilterProps> = ({
  activeFilter,
  onSelectFilter,
  counts,
}) => {
  return (
    <div
      role="tablist"
      aria-label="Filter Agricultural Divisions"
      className="flex flex-wrap items-center gap-2 sm:gap-3 pb-8 md:pb-12"
    >
      {FILTER_TABS.map((tab) => {
        const isActive = activeFilter === tab.id;
        const count = counts[tab.id] || 0;

        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onSelectFilter(tab.id)}
            data-cursor="open"
            data-cursor-text="FILTER"
            className={`relative px-4 sm:px-5 py-2.5 rounded-sm font-sans text-xs tracking-wider uppercase transition-colors duration-200 flex items-center gap-2 cursor-pointer focus-visible:outline-2 focus-visible:outline-botanical-300 ${
              isActive
                ? 'text-botanical-950 font-semibold'
                : 'text-sand-300 hover:text-ivory-100 bg-botanical-900/60 border border-ivory-200/10'
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="active-division-filter"
                className="absolute inset-0 bg-earth-gold rounded-sm z-0"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
            <span
              className={`relative z-10 font-mono text-[10px] px-1.5 py-0.5 rounded-full ${
                isActive
                  ? 'bg-botanical-950/20 text-botanical-950 font-bold'
                  : 'bg-botanical-850 text-sand-400'
              }`}
            >
              {count < 10 ? `0${count}` : count}
            </span>
          </button>
        );
      })}
    </div>
  );
};
