/**
 * WorkPage.jsx — /work
 * Liam Hilton Designs
 *
 * A page is a thin wrapper — it composes components, sets the SEO
 * head, and handles any page-level state. No logic lives here
 * that belongs in a component.
 */

import WorkSection from '../components/Sections/WorkSection'
import { Helmet } from 'react-helmet-async'

export default function WorkPage() {
  return (
    <>
      <Helmet>
        <title>Work — Custom Websites for Byron Bay Businesses | Liam Hilton Design</title>
        <meta
          name="description"
          content="Custom React and Webflow websites for hospitality, fitness, construction, and lifestyle brands. See the full portfolio."
        />
      </Helmet>

      <div style={{
        background: 'var(--color-section-dark)',
        paddingTop: '120px',
        paddingBottom: 'var(--space-xl)',
        paddingInline: 'var(--space-lg)',
      }}>
        <div style={{ maxWidth: 'var(--max-width)', marginInline: 'auto' }}>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            fontWeight: 800,
            letterSpacing: '-0.04em',
            color: 'var(--lhd-dark-50)',
            margin: 0,
          }}>
            All work
          </h1>
        </div>
      </div>
      <WorkSection />
    </>
  )
}