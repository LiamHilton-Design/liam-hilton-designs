/**
 * marqueeData.js
 * Liam Hilton Designs
 *
 * Two datasets for the MarqueeStrip component:
 *
 * 1. valueProps — rotating value propositions below the hero headline.
 *    These reinforce the "weapon" positioning with specific outcomes.
 *    When you have client results, replace these with outcome stats.
 *
 * 2. tools — the tech/tool strip between hero and services.
 *    Shows capability and currency without making unverifiable claims.
 *    Replace with client logos as your portfolio grows.
 *
 * SVG ICONS:
 * Simple inline SVGs — no external dependencies, no icon libraries.
 * These are minimal brand-recognisable marks, not full logos.
 * For actual brand SVGs, visit each tool's brand assets page and
 * paste the official SVG path here. Keep them simple — 24x24 viewBox.
 */

export const valueProps = [
    { id: 'convert',   label: 'Websites that convert' },
    { id: 'seo',       label: 'SEO that returns' },
    { id: 'brand',     label: 'Brand identity that stands out' },
    { id: 'leads',     label: 'Leads while you sleep' },
    { id: 'google',    label: 'Ranked on Google' },
    { id: 'strategy',  label: 'Strategy first. Design second.' },
    { id: 'invisible', label: 'Refuse to be invisible' },
    { id: 'weapon',    label: 'Your website. Your weapon.' },
  ]
  
  export const tools = [
    {
      id: 'react',
      label: 'React',
      icon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="2.05"/>
        <path d="M12 6.5c3.5 0 6.7.8 9 2.1C23.4 10 25 11.5 25 13s-1.6 3-4 4.4c-2.3 1.3-5.5 2.1-9 2.1s-6.7-.8-9-2.1C.6 16 -1 14.5-1 13s1.6-3 4-4.4C5.3 7.3 8.5 6.5 12 6.5z" fill="none" stroke="currentColor" stroke-width="1.2"/>
        <path d="M8.6 9.75c1.75-3 3.9-5.3 5.9-6.6 2.2-1.4 4.2-1.6 5.4-.9 1.3.7 1.8 2.7 1.3 5.3-.4 2.3-1.8 5-3.5 7.6-1.7 2.6-3.7 4.8-5.6 6.1-2 1.4-4 1.8-5.3 1.1-1.2-.7-1.7-2.5-1.4-5 .4-2.3 1.7-5 3.2-7.6z" fill="none" stroke="currentColor" stroke-width="1.2"/>
        <path d="M8.6 16.25C6.9 13.25 5.8 10 5.8 7.6c0-2.6.9-4.3 2.2-5 1.3-.7 3.3-.2 5.4 1.2 1.9 1.3 3.9 3.5 5.6 6.1 1.7 2.6 2.9 5.3 3.3 7.6.5 2.5 0 4.5-1.3 5.2-1.3.7-3.2.3-5.3-1.1-2-1.3-4-3.5-5.7-6.1z" fill="none" stroke="currentColor" stroke-width="1.2"/>
      </svg>`,
    },
    {
      id: 'figma',
      label: 'Figma',
      icon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 24c2.2 0 4-1.8 4-4v-4H8c-2.2 0-4 1.8-4 4s1.8 4 4 4z"/>
        <path d="M4 12c0-2.2 1.8-4 4-4h4v8H8c-2.2 0-4-1.8-4-4z" fill-opacity="0.7"/>
        <path d="M4 4c0-2.2 1.8-4 4-4h4v8H8C5.8 8 4 6.2 4 4z" fill-opacity="0.5"/>
        <path d="M12 0h4c2.2 0 4 1.8 4 4s-1.8 4-4 4h-4V0z" fill-opacity="0.6"/>
        <path d="M20 12c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z"/>
      </svg>`,
    },
    {
      id: 'webflow',
      label: 'Webflow',
      icon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.8 0l-5.1 14.7-1.6-9.3H7.5L4.8 14.7 2.2 0H0l3.8 19h4l2.5-8.8 1.4 8.8h4L20 0z"/>
      </svg>`,
    },
    {
      id: 'vite',
      label: 'Vite',
      icon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.8 3L13 21l-1.9-8.5L21.8 3zM2.2 3l8.8 18 1.9-8.5L2.2 3z" fill-opacity="0.8"/>
        <path d="M12 2l9.8 1L12 21 2.2 3 12 2z" fill-opacity="0.4"/>
      </svg>`,
    },
    {
      id: 'framer',
      label: 'Framer',
      icon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 0h16v8H12L4 0zM4 8h8l8 8H4V8zM4 16h8l-8 8v-8z"/>
      </svg>`,
    },
    {
      id: 'relume',
      label: 'Relume',
      icon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="20" height="20" rx="4" fill-opacity="0.15" stroke="currentColor" stroke-width="1.5"/>
        <path d="M7 8h6c1.7 0 3 1.3 3 3s-1.3 3-3 3H7V8z" fill-opacity="0.8"/>
        <path d="M13 14l3 4h-3l-3-4h3z"/>
      </svg>`,
    },
    {
      id: 'squarespace',
      label: 'Squarespace',
      icon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.3 4.7a4.7 4.7 0 00-6.6 0L4.7 12.7a4.7 4.7 0 006.6 6.6l1.4-1.4-1.4-1.4-1.4 1.4a2.8 2.8 0 01-3.9-3.9L13.8 6a2.8 2.8 0 013.9 3.9l-1.4 1.4 1.4 1.4 1.4-1.4a4.7 4.7 0 00.2-6.6z"/>
        <path d="M19.3 9.3l-8 8a2.8 2.8 0 01-3.9-3.9L8.8 12l-1.4-1.4-1.4 1.4a4.7 4.7 0 006.6 6.6l8-8a4.7 4.7 0 00-1.3-1.3z"/>
      </svg>`,
    },
    
  ]