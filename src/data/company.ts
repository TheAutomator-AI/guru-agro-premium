import type { CompanyInfo } from './types';

export const COMPANY_INFO: CompanyInfo = {
  name: 'Guru Agro Products',
  legalName: 'Guru Agro Products Private Limited',
  tagline: 'Sustainable Agriculture & Integrated Organic Agro-Ecosystems',
  mission:
    'Dedicated to high-integrity agricultural cultivation, biodiversity conservation, and ecological harmony through holistic farming methodologies.',
  foundingEthos:
    'Farming with respect for the natural biome—integrating organic cultivation, indigenous livestock, aquaculture, and sericulture into an enduring closed-loop ecosystem.',
  headquarters: {
    addressLine1: '50B, Venkateshwara Oil Mill Street',
    locality: 'Avadi',
    city: 'Chennai',
    postalCode: '600071',
    state: 'Tamil Nadu',
    country: 'India',
  },
  contact: {
    primaryPhone: '+91 93444 37331',
    secondaryPhone: '+91 95353 45474',
    email: 'guruagroproducts123@gmail.com',
    hours: 'Mon – Fri: 8:00 AM – 6:00 PM IST',
  },
  socialLinks: [
    {
      platform: 'Facebook',
      url: 'https://facebook.com/',
      ariaLabel: 'Guru Agro Products on Facebook',
    },
    {
      platform: 'Twitter',
      url: 'https://twitter.com/',
      ariaLabel: 'Guru Agro Products on Twitter',
    },
    {
      platform: 'Instagram',
      url: 'https://instagram.com/',
      ariaLabel: 'Guru Agro Products on Instagram',
    },
    {
      platform: 'Pinterest',
      url: 'https://pinterest.com/',
      ariaLabel: 'Guru Agro Products on Pinterest',
    },
  ],
};
