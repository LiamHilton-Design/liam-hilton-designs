/**
 * caseStudyData.js
 * Liam Hilton Designs
 *
 * Extended content for each case study page.
 * Keyed by project ID — must match the id field in workData.js exactly.
 *
 * STRUCTURE PER PROJECT:
 *
 * metrics[]     — 3-4 specific outcome numbers shown in the strip
 *                 below the hero. These are the most-read element.
 *                 Real numbers when available. Projected when concept.
 *
 * sections[]    — The challenge/approach/outcome body.
 *                 label:    small caps section identifier
 *                 headline: the hook — one strong sentence
 *                 body:     2-3 paragraphs of honest detail
 *
 * images        — Single composed WebP asset per project.
 *                 hero: all devices baked into one dark-canvas composition
 *                 created in Canva with project-specific glow colour.
 *                 Exported as WebP via squoosh.
 *                 hero: import('path/to/composition.webp')
 *
 * SEO NOTE:
 * Every section's body text naturally contains keywords.
 * "web design studio Sydney", "React website", "mobile-first",
 * "local SEO", "conversion optimised" — embedded in real sentences,
 * not stuffed. This is how case study pages rank organically over time.
 *
 * COPY PRINCIPLE:
 * Write the challenge from the CLIENT's perspective, not yours.
 * Not "we needed to build a fast site" but "the business had a website
 * that looked outdated and wasn't generating any enquiries."
 * The client reading this should think "that sounds exactly like me."
 */

import lhdHero from '../assets/case-studies/lhd-portfolio/lhd-main-mockup.webp'
import okiiHero      from '../assets/case-studies/okii/okii-main-mockup.webp'
import formBuildersHero from '../assets/case-studies/form-builders/form-builders-main-mockup.webp'
import forgedCaseStudy from '../assets/case-studies/forged/forged-case-study-mockup.webp'


export const caseStudyData = {

  'lhd-portfolio': {
    metrics: [
      { value: '95+',   label: 'Lighthouse score'     },
      { value: '<1.5s', label: 'Time to interactive'  },
      { value: '100%',  label: 'Custom coded'         },
      { value: '2026',  label: 'Launch year'          },
    ],
    sections: [
      {
        label: 'The challenge',
        headline: 'Every web design studio needs a site that IS the portfolio.',
        body:
          'The brief was straightforward and deeply difficult at the same time: ' +
          'build a web design studio portfolio that demonstrates — not just describes — ' +
          'the quality of thinking behind every client project. ' +
          'A template would have been faster. It would also have been invisible. ' +
          'When your product is custom web design, your own site has no excuse ' +
          'to be anything less than the best work you\u2019ve ever done.',
      },
      {
        label: 'The approach',
        headline: 'Architecture first. Design tokens. Component systems. Zero shortcuts.',
        body:
          'The build started with a two-layer CSS token system \u2014 raw palette values ' +
          'mapping to semantic design decisions. This means changing the brand colour ' +
          'across the entire site is a one-line edit in one file. ' +
          'Every section was built as an independent React component reading from a ' +
          'data file \u2014 copy, colours, and content all separated from structure. ' +
          'Framer Motion handled all entrance animations with a strict \u201conce per viewport ' +
          'entry\u201d rule \u2014 enough motion to feel premium, not enough to distract. ' +
          'The result is a codebase a client could hand to any developer and ' +
          'have them productive in an hour.',
      },
      {
        label: 'The outcome',
        headline: 'A design system that scales. A site that sells itself.',
        body:
          'The finished portfolio scores 95+ on Google Lighthouse across all metrics. ' +
          'It loads in under 1.5 seconds on mobile. Every section has its own SEO ' +
          'landing page potential \u2014 the case study architecture alone creates ' +
          'four indexed pages targeting different niche keywords from day one. ' +
          'More importantly: it demonstrates every skill a client is paying for ' +
          'when they hire Liam Hilton Designs. The site doesn\u2019t describe the work. ' +
          'The site is the work.',
      },
    ],
    images: {
      hero: lhdHero,    },
  },

  'fitness-studio': {
    metrics: [
      { value: '100%',  label: 'Mobile responsive'    },
      { value: 'React', label: 'Built with'           },
      { value: 'Fast',  label: 'Core Web Vitals'      },
      { value: '2025',  label: 'Completed'            },
    ],
    sections: [
      {
        label: 'The challenge',
        headline: 'A fitness brand with no digital presence in a competitive market.',
        body:
          'The business had a strong reputation built entirely on word of mouth. ' +
          'Classes were full but new members were hard to attract \u2014 ' +
          'when people searched for yoga or gym classes locally, competitors ' +
          'with weaker offerings but stronger online presence were capturing the leads. ' +
          'The brief: build a site that converts a search into a booked class.',
      },
      {
        label: 'The approach',
        headline: 'Custom React architecture built for performance and conversion.',
        body:
          'More than 70% of fitness searches happen on mobile \u2014 ' +
          'so the design started at 390px and scaled up, not the other way around. ' +
          'The information hierarchy was built around one question: ' +
          'what does someone searching \u201cyoga studio near me\u201d need to see ' +
          'in the first five seconds to book a class? ' +
          'Class schedule, pricing, and a booking CTA \u2014 all above the fold on mobile. ' +
          'Local SEO structure was built into the HTML from day one: ' +
          'schema markup, location-specific page titles, and Google Maps integration.',
      },
      {
        label: 'The outcome',
        headline: 'A fully responsive landing page QA\u2019d across three breakpoints.',
        body:
          'Built with React for performance and maintainability. ' +
          'The class schedule updates from a simple data file \u2014 no CMS needed, ' +
          'no monthly subscription fees, no technical knowledge required. ' +
          'The booking integration connects directly to the studio\u2019s existing ' +
          'scheduling software. From search to booked class in under three clicks.',
      },
    ],
    images: {
      hero: forgedCaseStudy,  // Replace with composed mockup when ready
    },
  },

  'okii-restaurant': {
    metrics: [
      { value: 'React',  label: 'Built with'               },
      { value: '3',      label: 'Pages built'              },
      { value: '2026',   label: 'Concept year'             },
      { value: 'Motion', label: 'Framer Motion throughout' },
    ],
    sections: [
      {
        label: 'The challenge',
        headline: 'High-end dining deserves a digital experience that matches the room.',
        body:
          'High-end Japanese BBQ restaurants invest deeply in their physical environment \u2014 ' +
          'lighting, material, sound, ritual. Their websites rarely follow suit. ' +
          'Most hospitality sites lead with a reservations widget and stock photography, ' +
          'leaving no room for the brand to breathe. ' +
          'For a concept like \u014cKII, the digital touchpoint needed to feel like the ' +
          'first course \u2014 atmospheric, considered, and distinctly itself. ' +
          'The brief: build a site where the visitor feels the restaurant before they book it.',
      },
      {
        label: 'The approach',
        headline: 'Editorial layout logic. Framer Motion throughout. Three entry points to book.',
        body:
          'The design started with atmosphere, not function. ' +
          'Midnight backgrounds anchored every surface \u2014 #0D0F1A at the deepest. ' +
          'Vermillion (#E8473F) was reserved as the single high-energy accent: ' +
          'CTAs, active states, the logo mark. Nothing else. ' +
          'A BookingModal accessible from three entry points \u2014 navbar, hero CTA, ' +
          'and hamburger menu \u2014 ensures conversion is never more than one click away ' +
          'without letting function dominate form. ' +
          'The hamburger uses a React Portal pattern, rendering the full-viewport ' +
          'overlay outside the component tree to eliminate z-index conflicts entirely.',
      },
      {
        label: 'The outcome',
        headline: 'A hospitality site that sells the experience, not just the table.',
        body:
          'Three fully animated pages \u2014 Home, Menu, and Contact \u2014 each with its own ' +
          'distinct rhythm. Responsive across 640px, 1024px, and 1440px, ' +
          'QA\u2019d at every breakpoint. Satoshi and General Sans self-hosted \u2014 ' +
          'zero third-party font dependency, instant load on every device. ' +
          'This concept demonstrates what hospitality web design looks like ' +
          'when the digital experience is treated as part of the dining experience \u2014 ' +
          'not an afterthought bolted on after the fit-out is done.',
      },
    ],
    images: {
      hero: okiiHero,
    },
  },

  'formBuilders': {
    metrics: [
      { value: 'React',   label: 'Built with'          },
      { value: 'Local',   label: 'SEO targeted'        },
      { value: 'Leads',   label: 'Primary goal'        },
      { value: '2026',    label: 'Concept year'        },
    ],
    sections: [
      {
        label: 'The challenge',
        headline: 'Luxury builders win work on reputation \u2014 and lose it online.',
        body:
          'High-end construction and luxury home building companies often rely entirely ' +
          'on referrals and word of mouth. That works \u2014 until a potential client ' +
          'searches Google before returning a call, finds a dated website or nothing at all, ' +
          'and quietly moves on to a competitor. ' +
          'The brief: build a digital presence that reflects the quality of the physical work \u2014 ' +
          'a site that earns trust before the first conversation happens.',
      },
      {
        label: 'The approach',
        headline: 'Trust architecture first. Every element earns its place.',
        body:
          'The design hierarchy was built around one question: ' +
          'what does a high-value client need to see in the first ten seconds ' +
          'to feel confident enough to make an enquiry? ' +
          'Completed project photography, clear service scope, credentials, ' +
          'and a direct enquiry path \u2014 all above the fold. ' +
          'Local SEO structure was embedded from day one: schema markup, ' +
          'location-specific page titles, and service area definitions ' +
          'targeting the searches that generate qualified project leads.',
      },
      {
        label: 'The outcome',
        headline: 'A premium digital presence that converts serious enquiries.',
        body:
          'Built in React for performance and long-term maintainability. ' +
          'The enquiry form captures project type, location, timeline, and budget \u2014 ' +
          'so every lead arrives pre-qualified. ' +
          'This concept is built to show construction and luxury build companies ' +
          'what their online presence could look like when it matches the standard ' +
          'of the work they deliver on site.',
      },
    ],
    images: {
      hero: formBuildersHero,  // Add composition when Form Builders mockup is ready
    },
  },

}
