/**
 * ContactPage.jsx — /contact
 * Liam Hilton Designs
 *
 * The Footer component already contains the full contact form.
 * Rather than duplicating the form, we render a minimal hero
 * and rely on the global Footer (rendered in App.jsx) for the form.
 * The page scrolls straight to the footer contact section.
 */

import { useEffect } from 'react'

export default function ContactPage() {
  // Scroll to the contact form in the footer
  useEffect(() => {
    const el = document.getElementById('contact')
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }, [])

  return (
    <div style={{
      minHeight: '60vh',
      background: 'var(--color-section-dark)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--space-3xl) var(--space-lg)',
      textAlign: 'center',
      paddingTop: '160px',
    }}>
      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-xs)',
        fontWeight: 500,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'var(--lhd-dark-400)',
        marginBottom: 'var(--space-md)',
      }}>
        Get in touch
      </p>
      <h1 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(2.5rem, 6vw, 5rem)',
        fontWeight: 800,
        letterSpacing: '-0.04em',
        color: 'var(--lhd-dark-50)',
        margin: '0 0 var(--space-lg)',
        maxWidth: '14ch',
      }}>
        Let's build something worth talking about.
      </h1>
      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-md)',
        color: 'var(--lhd-dark-400)',
        marginBottom: 'var(--space-xl)',
      }}>
        Scroll down to send us a message ↓
      </p>
    </div>
  )
}