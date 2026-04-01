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

export const workData = [
  {
    id: 'lhd-portfolio',
    title: 'Liam Hilton Designs',
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
    externalHref: 'https://liamhiltondesigns.com',
    placeholder: '#3219A4',     /* Deep Persian blue — brand primary */
    accentColor: '#7862DC',     /* --lhd-persian-light */
  },
  {
    id: 'fitness-studio',
    title: 'Gym & Yoga Studio',
    category: 'Fitness & Wellness',
    status: 'live',
    year: '2024',
    result: 'Mobile-first React site with class booking',
    shortDescription:
      'A performance-focused fitness studio website built in React. ' +
      'Responsive, fast-loading, structured for local SEO and ' +
      'converting browsers into booked classes.',
    tags: ['React', 'Responsive', 'Local SEO'],
    href: '/work/fitness-studio',
    externalHref: 'https://github.com/liamhilton',
    placeholder: '#1f0d03',     /* Deep warm — orange family darkened */
    accentColor: '#FF8B62',     /* --lhd-orange-light */
  },
  {
    id: 'coastal-cafe',
    title: 'Coastal Café',
    category: 'Hospitality',
    status: 'concept',
    year: '2025',
    result: 'Webflow build — reservations + brand-led design',
    shortDescription:
      'A concept site for an independent café built during Webflow ' +
      'masterclass training. Menu layouts, reservation integration, ' +
      'and a warm brand-first aesthetic.',
    tags: ['Webflow', 'Concept', 'Hospitality'],
    href: '/work/coastal-cafe',
    externalHref: null,
    placeholder: '#25103a',     /* Deep purple — brand adjacent, mysterious */
    accentColor: '#7862DC',     /* --lhd-orange-500 */
  },
  {
    id: 'local-trades',
    title: 'Local Trades Co.',
    category: 'Trades & Services',
    status: 'concept',
    year: '2025',
    result: 'Lead-gen site — calls and enquiries from Google',
    shortDescription:
      'A concept site targeting local tradies who need a professional ' +
      'online presence that converts Google traffic into phone calls.',
    tags: ['React', 'Local SEO', 'Lead Generation'],
    href: '/work/local-trades',
    externalHref: null,
    placeholder: '#0d1f3a',     /* Deep navy — cool, corporate, trust */
    accentColor: '#FF8B62',     /* --lhd-persian-500 */
  },
]

export const workFilters = [
  { id: 'all',     label: 'All work'       },
  { id: 'live',    label: 'Live projects'  },
  { id: 'concept', label: 'Concepts'       },
]