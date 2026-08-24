/**
 * Data Model Type Definitions — Guru Agro Products
 */

export interface CompanyInfo {
  name: string;
  legalName: string;
  tagline: string;
  mission: string;
  foundingEthos: string;
  headquarters: {
    addressLine1: string;
    locality: string;
    city: string;
    postalCode: string;
    state: string;
    country: string;
  };
  contact: {
    primaryPhone: string;
    secondaryPhone: string;
    email: string;
    hours: string;
  };
  socialLinks: Array<{
    platform: string;
    url: string;
    ariaLabel: string;
  }>;
}

export interface AgricultureCategory {
  id: string;
  title: string;
  slug: string;
  subtitle: string;
  description: string;
  division: 'CULTIVATION' | 'PLANTATION' | 'SERICULTURE' | 'LIVESTOCK' | 'AQUACULTURE' | 'AVIAN';
  focusPillars: string[];
  mediaPlaceholder: string;
  mediaAlt: string;
  status: 'ACTIVE' | 'DEVELOPMENT';
  videoSrc?: string;
  ecosystemRole?: string;
  operationalMethodology?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  slug: string;
  category: string;
  location: string;
  description: string;
  highlights: string[];
  mediaPlaceholder: string;
  mediaAlt: string;
  videoSrc?: string;
}

export interface EcosystemPillar {
  id: string;
  title: string;
  tagline: string;
  description: string;
  methodology: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  ariaLabel: string;
  badge?: string;
  isExternal?: boolean;
}

export interface StatItem {
  id: string;
  label: string;
  value: string;
  unit?: string;
  description: string;
}
