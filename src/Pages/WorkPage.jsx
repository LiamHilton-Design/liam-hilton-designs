/**
 * WorkPage.jsx — /work
 * Liam Hilton Designs
 *
 * A page is a thin wrapper — it composes components, sets the SEO
 * head, and handles any page-level state. No logic lives here
 * that belongs in a component.
 */

import WorkSection from '../components/Sections/WorkSection'

export default function WorkPage() {
  return (
    <>
      {/* Hero header — simple, gives the page context */}
      <div style={{
        background: 'var(--color-section-dark)',
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
            color: 'var(--lhd-dark-400)',
            marginBottom: 'var(--space-sm)',
          }}>
            Liam Hilton Designs
          </p>
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