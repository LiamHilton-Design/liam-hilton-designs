import { Helmet } from 'react-helmet-async'
import { faqData } from '../constants/faqData'
import ServicesHero from '../components/ServicesHero/ServicesHero'
import ServicesSlideshow from '../components/ServicesSlideshow/ServicesSlideshow'
import ServicesProcess from '../components/ServicesProcess/ServicesProcess'
import ServicesFAQ from '../components/ServicesFAQ/ServicesFAQ'
import ServicesClosingCTA from '../components/ServicesClosingCTA/ServicesClosingCTA'

export default function ServicesPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  }

  return (
    <>
      <Helmet>
        <title>Services — Web Design, SEO & AEO | Liam Hilton Design</title>
        <meta
          name="description"
          content="Custom web design, SEO + AEO optimisation, and booking platform integration for Byron Bay and Northern Rivers businesses. See what's included."
        />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <ServicesHero />
      <ServicesSlideshow />
      <ServicesProcess />
      <ServicesFAQ />
      <ServicesClosingCTA />
    </>
  )
}