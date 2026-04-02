/**
 * servicesData.js
 * Liam Hilton Designs
 *
 * COPY STRATEGY:
 * Every field answers a specific question in the visitor's mind:
 *
 * name        → "What is this?" (outcome-led, not category)
 * tag         → "What type of service?" (one word, muted)
 * hook        → "Why can't I miss this?" (the converter)
 * description → "How does this work for me?" (supporting detail)
 * deliverables→ "What do I actually get?" (removes uncertainty)
 * href        → links to individual service page (future build)
 *
 * SEO KEYWORDS EMBEDDED NATURALLY:
 * web design, SEO, search engine optimisation, brand identity,
 * convert visitors, rank on Google, leads, paying clients,
 * web design studio Sydney, custom website design
 */

export const servicesData = [
    {
      id: 'web-design',
      name: 'Websites that convert',
      tag: 'Web Design',
      hook: 'Not just beautiful — engineered to turn every visitor into a lead.',
      description:
        'Most websites look great and do nothing. I build custom websites ' +
        'that are designed around your business goals — every layout decision, ' +
        'every call to action, every line of copy exists to move your visitor ' +
        'one step closer to becoming a paying client.',
      deliverables: [
        'Custom design — no templates, no shortcuts',
        'Mobile-first, performance-optimised build',
        'Conversion-focused layout and copywriting',
        'Contact forms, booking integrations, lead capture',
        'Google Analytics and Search Console setup',
        'Ongoing support and updates',
      ],
      href: '/contact',
    },
    {
      id: 'seo',
      name: 'SEO that returns',
      tag: 'SEO Strategy',
      hook: 'Ranked on Google before your competitors know what hit them.',
      description:
        'Getting found on Google is not luck — it is strategy, structure, ' +
        'and consistency. I build SEO into every website from day one: ' +
        'semantic HTML, keyword architecture, schema markup, and a content ' +
        'strategy that compounds over time. Your site works while you sleep.',
      deliverables: [
        'Full SEO audit and keyword strategy',
        'On-page optimisation (titles, meta, headings, schema)',
        'Technical SEO — speed, Core Web Vitals, crawlability',
        'Local SEO for Sydney and Australian markets',
        'AI search optimisation (AEO) for Google AI Overview',
        'Monthly ranking reports and recommendations',
      ],
      href: '/contact',
    },
    {
      id: 'brand',
      name: 'Brand identity that stands out',
      tag: 'Brand Identity',
      hook: 'A visual language so distinctive clients recognise you before they read a word.',
      description:
        'Your brand is not your logo — it is the feeling someone gets ' +
        'the moment they encounter your business. I build brand identities ' +
        'that communicate who you are instantly: the typography, colour system, ' +
        'visual language, and design principles that make you impossible to ignore ' +
        'and impossible to confuse with anyone else.',
      deliverables: [
        'Logo design and brand mark',
        'Colour palette and typography system',
        'Brand guidelines document',
        'Business card and stationery design',
        'Social media asset templates',
        'Brand implementation across your website',
      ],
      href: '/contact',
    },
  ]