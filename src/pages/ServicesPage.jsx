/**
 * ServicesPage.jsx — /services
 * Liam Hilton Designs
 *
 * Full page composition, in order:
 * 1. ServicesHero      — page-specific hero, distinct from homepage
 * 2. ServicesSection   — 2×2 service card grid (reused from homepage,
 *                         same component, same data)
 * 3. ServicesProcess   — steps-only variant, no embedded CTA
 * 4. ServicesClosingCTA — the dominant, final ask
 */

import { Helmet } from 'react-helmet-async'
import ServicesHero from '../components/ServicesHero/ServicesHero'
// import ServicesSection from '../components/Sections/ServicesSection'
import ServicesSlideshow from '../components/ServicesSlideshow/ServicesSlideshow'
import ServicesProcess from '../components/ServicesProcess/ServicesProcess'
import ServicesClosingCTA from '../components/ServicesClosingCTA/ServicesClosingCta'

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Services — Web Design, SEO & AEO | Liam Hilton Design</title>
        <meta
          name="description"
          content="Custom web design, SEO + AEO optimisation, and booking platform integration for Byron Bay and Northern Rivers businesses. See what's included."
        />
      </Helmet>

      <ServicesHero />
      <ServicesSlideshow />
      <ServicesProcess />
      <ServicesClosingCTA />
    </>
  )
}