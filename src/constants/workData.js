/**
 * workData.js — v3
 * Liam Hilton Designs
 *
 * PLACEHOLDER COLOURS updated to use brand token values.
 * These are the hex equivalents of your CSS variables so they
 * work as inline style values (CSS variables can't be used inline
 * directly — they need to be resolved via getComputedStyle or
 * passed as hex equivalents).
 *
 * Persian blue family:
 * --lhd-persian-500: #3F20CE  (primary)
 * --lhd-persian-dark: #3219A4 (darker)
 * --lhd-persian-light: #7862DC (lighter)
 *
 * Orange family:
 * --lhd-orange-500: #D85A30
 * --lhd-orange-light: #FF8B62
 * --lhd-orange-dark: #B84420
 *
 * Each placeholder is darkened (mixed with black) so it reads
 * well on the Woodsmoke section background and the text/tags
 * overlay remains legible.
 */

import okiiHero from '../assets/case-studies/okii/okii-duo-composition.webp'
import formBuildersHero from '../assets/case-studies/form-builders/form-builders-main-mockup.webp'
import forgedHero from '../assets/case-studies/forged/forged-main-mockup.webp'
import lhdHero from '../assets/case-studies/lhd-portfolio/lhd-main-mockup.webp'


export const workData = [
  {
    id: 'lhd-portfolio',
    title: 'Liam Hilton Design',
    category: 'Design Studio',
    status: 'live',
    year: '2025',
    result: 'Custom React design system — built from scratch',
    shortDescription:
      'A full custom-coded studio portfolio built with React + Vite. ' +
      'Two-layer CSS token system, animated SVG grid, Framer Motion ' +
      'orchestration, and SEO architecture designed to rank.',
    tags: ['React', 'Vite', 'Framer Motion', 'SEO'],
    href: '/work/lhd-portfolio',
    externalHref: 'https://liamhiltondesign.com',
    placeholder: '#3219A4',     /* Deep Persian blue — brand primary */
    accentColor: '#7862DC',     /* --lhd-persian-light */
    heroImage: lhdHero,

  },
  {
    id: 'forged-studio',
    title: 'FORGED',
    category: 'Fitness & Wellness',
    status: 'live',
    year: '2025',
    result: 'Mobile-first React site with class booking',
    shortDescription:
      'A performance-focused fitness studio website built in React. ' +
      'Responsive, fast-loading, structured for local SEO and ' +
      'converting browsers into booked classes.',
    tags: ['React', 'Responsive', 'Local SEO'],
    href: '/work/forged-studio',
    externalHref: 'https://forged-gym.vercel.app',
    placeholder: '#0a0a0a',        /* FORGED dark background */
    accentColor: '#C4DE19',        /* FORGED primary green */
    heroImage: forgedHero,

  

  },
  {
    id: 'okii-restaurant',
    title: 'ŌKII Restaurant',
    category: 'Hospitality',
    status: 'concept',
    year: '2026',
    result: 'Dark, editorial React site — booking modal + multi-page',
    shortDescription:
      'A concept restaurant website for a Japanese BBQ dining experience in Byron Bay. ' +
      'Editorial design, cinematic photography, and Framer Motion throughout — ' +
      'built to show hospitality clients what their digital presence could feel like.',
    tags: ['React', 'Framer Motion', 'Responsive'],
    href: '/work/okii-restaurant',
    externalHref: 'https://okii-restaurant.vercel.app',
    placeholder: '#0D0F1A',     /* --okii-midnight-950 */
    accentColor: '#E8473F',     /* --okii-vermillion-500 */
    heroImage: okiiHero,
    },
  {
    id: 'formBuilders',
    title: 'Form Builders',
    category: 'Construction & Luxury Builds',
    status: 'concept',
    year: '2026',
    result: 'Lead-gen site — enquiries from Google for high-end builds',
    shortDescription:
      'A concept site for a construction and luxury home building company. ' +
      'Designed to rank locally, build trust with high-value clients, ' +
      'and convert project enquiries from Google search.',
    tags: ['React', 'Local SEO', 'Lead Generation'],
    href: '/work/formBuilders',
    externalHref: 'https://form-builder-two-mu.vercel.app/',
    placeholder: '#F5F2EE',     /* --form-stone-50 — warm off-white page bg */
accentColor: '#C9A96E',     /* --form-gold-500 — primary gold accent */
    heroImage: formBuildersHero,
  },
]

export const workFilters = [
  { id: 'all',     label: 'All work'       },
  { id: 'live',    label: 'Live projects'  },
  { id: 'concept', label: 'Concepts'       },
]