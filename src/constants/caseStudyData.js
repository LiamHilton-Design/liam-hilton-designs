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
 * images        — Device mockup paths (add when screenshots are ready)
 *                 desktop: 'path/to/desktop.webp'
 *                 tablet:  'path/to/tablet.webp'
 *                 mobile:  'path/to/mobile.webp'
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
            'to be anything less than the best work you\'ve ever done.',
        },
        {
          label: 'The approach',
          headline: 'Architecture first. Design tokens. Component systems. Zero shortcuts.',
          body:
            'The build started with a two-layer CSS token system — raw palette values ' +
            'mapping to semantic design decisions. This means changing the brand colour ' +
            'across the entire site is a one-line edit in one file. ' +
            'Every section was built as an independent React component reading from a ' +
            'data file — copy, colours, and content all separated from structure. ' +
            'Framer Motion handled all entrance animations with a strict "once per viewport ' +
            'entry" rule — enough motion to feel premium, not enough to distract. ' +
            'The result is a codebase a client could hand to any developer and ' +
            'have them productive in an hour.',
        },
        {
          label: 'The outcome',
          headline: 'A design system that scales. A site that sells itself.',
          body:
            'The finished portfolio scores 95+ on Google Lighthouse across all metrics. ' +
            'It loads in under 1.5 seconds on mobile. Every section has its own SEO ' +
            'landing page potential — the case study architecture alone creates ' +
            'four indexed pages targeting different niche keywords from day one. ' +
            'More importantly: it demonstrates every skill a client is paying for ' +
            'when they hire Liam Hilton Designs. The site doesn\'t describe the work. ' +
            'The site is the work.',
        },
      ],
      images: {
        desktop: null,  // Add path when screenshot is ready
        tablet:  null,
        mobile:  null,
      },
    },
  
    'fitness-studio': {
      metrics: [
        { value: '100%',  label: 'Mobile responsive'    },
        { value: 'React', label: 'Built with'           },
        { value: 'Fast',  label: 'Core Web Vitals'      },
        { value: '2024',  label: 'Completed'            },
      ],
      sections: [
        {
          label: 'The challenge',
          headline: 'A fitness studio with no digital presence in a crowded local market.',
          body:
            'The business had a strong reputation built entirely on word of mouth. ' +
            'Classes were full but new members were hard to attract — ' +
            'when people searched for yoga or gym classes locally, competitors ' +
            'with weaker offerings but stronger online presence were capturing the leads. ' +
            'The brief: build a site that converts a search into a booked class.',
        },
        {
          label: 'The approach',
          headline: 'Mobile-first, local SEO structured, conversion flow designed from the first click.',
          body:
            'More than 70% of fitness searches happen on mobile — ' +
            'so the design started at 390px and scaled up, not the other way around. ' +
            'The information hierarchy was built around one question: ' +
            'what does someone searching "yoga studio near me" need to see ' +
            'in the first five seconds to book a class? ' +
            'Class schedule, pricing, and a booking CTA — all above the fold on mobile. ' +
            'Local SEO structure was built into the HTML from day one: ' +
            'schema markup, location-specific page titles, and Google Maps integration.',
        },
        {
          label: 'The outcome',
          headline: 'A site that works as hard as the clients it serves.',
          body:
            'Built with React for performance and maintainability. ' +
            'The class schedule updates from a simple data file — no CMS needed, ' +
            'no monthly subscription fees, no technical knowledge required. ' +
            'The booking integration connects directly to the studio\'s existing ' +
            'scheduling software. From search to booked class in under three clicks.',
        },
      ],
      images: {
        desktop: null,
        tablet:  null,
        mobile:  null,
      },
    },
  
    'coastal-cafe': {
      metrics: [
        { value: 'Webflow', label: 'Built with'          },
        { value: '3 days',  label: 'Design to delivery'  },
        { value: '2025',    label: 'Concept year'        },
        { value: 'CMS',     label: 'Content managed'     },
      ],
      sections: [
        {
          label: 'The challenge',
          headline: 'Independent hospitality lives or dies by its online first impression.',
          body:
            'An independent café competing against chains has one advantage: ' +
            'character. The brief was to capture that character digitally — ' +
            'to make someone looking at the website feel the warmth of the ' +
            'space before they\'d walked through the door. ' +
            'The secondary challenge: make it easy for the owner to update ' +
            'the menu, specials, and events without technical knowledge.',
        },
        {
          label: 'The approach',
          headline: 'Brand-led design built in Webflow for owner autonomy.',
          body:
            'Webflow was the right choice here — not because React couldn\'t do it, ' +
            'but because the owner needed to update content independently. ' +
            'The CMS structure was designed before a single page was built: ' +
            'menu items, seasonal specials, and events all as editable collections. ' +
            'The visual design led with photography and warmth — large imagery, ' +
            'soft warm tones, and typography that felt handcrafted without being literal.',
        },
        {
          label: 'The outcome',
          headline: 'A digital space as distinctive as the physical one.',
          body:
            'The reservation form integrates with the café\'s existing booking system. ' +
            'The menu CMS means specials update in minutes with no developer involvement. ' +
            'The design system uses Webflow\'s native variables — ' +
            'the same token architecture principle applied to a no-code tool. ' +
            'This is a concept built to demonstrate what hospitality web design ' +
            'looks like when it\'s done with genuine craft rather than a template.',
        },
      ],
      images: {
        desktop: null,
        tablet:  null,
        mobile:  null,
      },
    },
  
    'local-trades': {
      metrics: [
        { value: 'React',  label: 'Built with'           },
        { value: 'Local',  label: 'SEO targeted'         },
        { value: 'Leads',  label: 'Primary goal'         },
        { value: '2025',   label: 'Concept year'         },
      ],
      sections: [
        {
          label: 'The challenge',
          headline: 'A skilled tradie invisible online while less experienced competitors win the work.',
          body:
            'Local service businesses — plumbers, electricians, builders — ' +
            'have a digital presence problem. They\'re often brilliant at their trade ' +
            'and terrible at selling it online. The result: Google searches for ' +
            '"electrician Sydney" return pages of competitors with mediocre work ' +
            'but strong SEO, while the best tradies in the area are invisible. ' +
            'The brief: build a site that ranks locally and converts visitors into calls.',
        },
        {
          label: 'The approach',
          headline: 'Local SEO architecture built into every element from day one.',
          body:
            'The page structure was designed around keyword research before design began. ' +
            'Each service area gets its own page — "electrician Sydney CBD", ' +
            '"emergency electrician Eastern Suburbs" — targeting the specific searches ' +
            'that generate qualified leads. The homepage schema markup includes ' +
            'LocalBusiness structured data, service area definitions, and review schema. ' +
            'The design prioritises trust signals: licence numbers, insurance details, ' +
            'and a click-to-call button above the fold on mobile.',
        },
        {
          label: 'The outcome',
          headline: 'A lead-generation machine disguised as a professional website.',
          body:
            'Every element of this design serves one goal: phone calls and form submissions ' +
            'from people in the service area with a genuine job to quote. ' +
            'The contact form asks the right questions — job type, location, timeline — ' +
            'so the tradie arrives at a quote already briefed. ' +
            'This is a concept built to show local service businesses what\'s possible ' +
            'when web design is treated as a business investment, not a cost.',
        },
      ],
      images: {
        desktop: null,
        tablet:  null,
        mobile:  null,
      },
    },
  
  }