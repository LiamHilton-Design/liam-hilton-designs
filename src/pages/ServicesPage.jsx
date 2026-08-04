/**
 * ServicesPage.jsx — /services
 * Liam Hilton Designs
 */

import ServicesSection from '../components/Sections/ServicesSection'
import AnimatedGrid from '../components/Sections/AnimatedGrid'
import { Helmet } from 'react-helmet-async'

export default function ServicesPage() {
  <Helmet>
  <title>Services — Web Design, SEO & AEO | Liam Hilton Design</title>
  <meta
    name="description"
    content="Custom web design, SEO + AEO optimisation, and booking platform integration for Byron Bay businesses. See what's included."
  />
</Helmet>
  return (
    <>

      <div style={{
        background: 'var(--color-bg)',
        paddingTop: '120px',
        paddingBottom: 'var(--space-xl)',
        paddingInline: 'var(--space-lg)',
      }}>
        <div style={{ maxWidth: 'var(--max-width)', marginInline: 'auto' }}>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-xs)',
            fontWeight: 500,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--color-text-muted)',
            marginBottom: 'var(--space-sm)',
          }}>
            What we offer
          </p>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            fontWeight: 800,
            letterSpacing: '-0.04em',
            color: 'var(--color-text-primary)',
            margin: 0,
          }}>
            Services
          </h1>
          
        </div>
      </div>
      <ServicesSection />
      <AnimatedGrid />

      
    </>
  )
}