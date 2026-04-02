/**
 * heroData.js — Synced with new HeroSection.jsx
 * Liam Hilton Designs
 *
 * WHAT CHANGED:
 * Old shape had: headline.primary, headline.accentWord, headline.secondary
 * New shape has: headline.lines[] — flat array of strings
 *
 * The last word of the last line automatically gets the accent treatment
 * (Persian blue italic) in the AnimatedHeadlineLine component.
 * So "weapon." becomes the accent word purely by being last.
 *
 * Also removed: image, stats
 * - image: no longer used — typography-led hero, no image column
 * - stats: replaced by MarqueeStrip component in App.jsx
 */

export const heroData = {

  eyebrow: 'Web Design Studio · Byron Bay',

  headline: {
    lines: [
      'Your competitors have a website.',
      "You'll have a weapon.",
    ],
  },

  subheadline:
    'Strategic web design and SEO for businesses that refuse to be ' +
    'invisible. I build sites that rank on Google and turn visitors ' +
    'into paying\u00A0clients.',

  cta: {
    primary: {
      label: 'See our work',
      href: '/work',
      ariaLabel: 'View Liam Hilton Designs portfolio and case studies',
    },
    secondary: {
      label: 'Get a free audit',
      href: '/contact',
      ariaLabel: 'Get a free website audit from Liam Hilton Designs',
    },
  },

}