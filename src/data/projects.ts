import type { ProjectItem } from './types';

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'proj-agroforestry',
    title: 'Integrated Multi-Tier Agroforestry Model',
    slug: 'integrated-agroforestry-model',
    category: 'Sustainable Forestry & Plantation',
    location: 'Tamil Nadu Agro-Belt, India',
    description:
      'A multi-tier canopy model integrating tall perennial coconut palms, fruit-bearing mid-canopy trees, and shade-tolerant organic vegetable understory.',
    highlights: [
      'Multi-layer solar energy harvesting through vertical canopy architecture',
      'Micro-climate stabilization and organic humidity retention',
      'Continuous seasonal organic harvest cycles with zero synthetic inputs',
    ],
    mediaPlaceholder: '/media/projects/agro-forestry-model.svg',
    mediaAlt: 'Integrated multi-tier agroforestry canopy demonstration model',
    videoSrc: '/media/video/V02-crops.mp4',
  },
  {
    id: 'proj-soil-vitality',
    title: 'Regenerative Soil Health & Pedology Reserve',
    slug: 'regenerative-soil-health-reserve',
    category: 'Soil Restoration & Bio-Fertilizers',
    location: 'Regional Demonstration Farm, Tamil Nadu',
    description:
      'Dedicated field research and application zone implementing indigenous bio-inoculants, green manure crop rotations, and closed-loop soil conditioning.',
    highlights: [
      'Restoration of native living soil microbiology and mycorrhizal fungi',
      'Enhanced moisture retention without synthetic conditioners',
      'Closed-loop biomass recycling into organic vermicompost',
    ],
    mediaPlaceholder: '/media/projects/soil-vitality-reserve.svg',
    mediaAlt: 'Regenerative soil vitality test grounds and bio-fertilizer reserves',
    videoSrc: '/media/video/V06-harvest.mp4',
  },
];
