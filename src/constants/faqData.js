/**
 * faqData.js
 * Liam Hilton Designs
 *
 * Single source of truth for FAQ content — used by ServicesFAQ.jsx
 * for the UI, and by ServicesPage.jsx to generate matching FAQPage
 * JSON-LD schema. Keeping both in sync automatically means the
 * schema can never drift out of date with what's actually displayed.
 */

export const faqData = [
    {
      question: 'How much does a website cost?',
      answer:
        'Every project is scoped individually — pricing depends on complexity, ' +
        'timeline, and which services you need. Book a free discovery call and ' +
        'you\u2019ll walk away with a clear number, not a guessing game.',
    },
    {
      question: 'How long does a project take?',
      answer:
        'Most projects run 2\u20134 weeks from kickoff to launch, with extended ' +
        'support after launch. Larger builds — or ones bundling branding, ' +
        'multiple services, or integrations — can run longer. You\u2019ll know ' +
        'the real timeline after the discovery call.',
    },
    {
      question: 'Do I need all four services, or can I just pick one?',
      answer:
        'Just one. Most clients start with a single service \u2014 usually web ' +
        'design with branding or SEO. It depends on what\u2019s best for your ' +
        'business, and the more we can help, the better the overall outcome.',
    },
    {
      question: 'What if I already have a website?',
      answer:
        'No problem \u2014 plenty of clients come to me with an existing site ' +
        'that isn\u2019t performing. I can rebuild it from scratch using a ' +
        'preferred platform like Squarespace, Webflow, or Showit, or fix ' +
        'specific problems (SEO, integration, conversion) without a full rebuild.',
    },
    {
      question: 'Do you offer ongoing support after launch?',
      answer:
        'Yes. Every web design project includes ongoing support, and SEO and ' +
        'booking integration both come with monthly retainer options if you ' +
        'want them actively maintained. The stages after launch are the most ' +
        'important to us and the value they bring to your business.',
    },
    {
      question: 'Who is Studio Artius, and why do you partner with them for brand identity?',
      answer:
        'Studio Artius handles brand identity \u2014 logo, colour system, visual ' +
        'language \u2014 while I focus on web design and technical execution. ' +
        'Working together directly means your brand and your site are designed ' +
        'as one system, not two disconnected pieces. You get two creatives ' +
        'hands-on from day one for the best possible outcome.',
    },
  ]