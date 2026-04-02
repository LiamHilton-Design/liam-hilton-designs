/**
 * Footer.jsx
 * Liam Hilton Designs
 *
 * STRUCTURE (top to bottom):
 * 1. Top bar — logo + availability status + scroll-to-top
 * 2. Main grid — contact form LEFT, nav + social RIGHT
 * 3. Bottom bar — copyright + legal links
 *
 * EMAILJS SETUP (do this before testing the form):
 * 1. Go to emailjs.com → create free account
 * 2. Add an Email Service (connect your Gmail/Outlook)
 * 3. Create an Email Template with these variables:
 *      {{from_name}} {{from_email}} {{message}}
 *    Subject line suggestion: "New enquiry from {{from_name}} — LHD"
 * 4. Go to Account → API Keys → copy your Public Key
 * 5. From your dashboard copy: Service ID + Template ID
 * 6. Replace the three constants below with your actual values
 * 7. Run: npm install @emailjs/browser
 *
 * AVAILABILITY:
 * Update AVAILABILITY_MONTH whenever you need to.
 * One string in one file — takes 10 seconds.
 * "Available for May bookings" → "Available for June bookings"
 * This is the design token principle applied to content, not just colours.
 *
 * SCROLL TO TOP:
 * Uses window.scrollTo with smooth behaviour — no library needed.
 * The button appears after the user scrolls 400px down the page.
 * Uses the same useScrolled hook already in the project.
 *
 * SOCIAL ICONS:
 * SVG icons inline — no icon library dependency.
 * Add/remove platforms by editing the SOCIAL_LINKS array below.
 */

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import Logo from '../Logo/Logo'
import './Footer.css'

// ─── EmailJS config — replace with your actual values ────────────────────────
// Footer.jsx — reads from environment
// import.meta.env is Vite's way of accessing .env variables

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

// ─── Availability — update monthly ───────────────────────────────────────────
const AVAILABILITY_MONTH = 'May'

// ─── Navigation links ─────────────────────────────────────────────────────────
const NAV_LINKS = [
  { label: 'Services', href: '/#services' },
  { label: 'Work',     href: '/#work'     },
  { label: 'Process',  href: '/#process'  },
  { label: 'Contact',  href: '#contact'   },
]

// ─── Social links — add/remove as needed ─────────────────────────────────────
const SOCIAL_LINKS = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/liamhilton',
    icon: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>`,
  },
  {
    id: 'instagram',
    label: 'Instagram',
    href: 'https://instagram.com/liamhiltondesigns',
    icon: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>`,
  },
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/liamhilton',
    icon: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>`,
  },
]

// ─── Scroll to top button ─────────────────────────────────────────────────────

function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!visible) return null

  return (
    <button
      className="footer__scroll-top"
      onClick={scrollUp}
      aria-label="Scroll back to top"
      type="button"
    >
      <span aria-hidden="true">↑</span>
      <span className="footer__scroll-top-label">Top</span>
    </button>
  )
}

// ─── Contact form ─────────────────────────────────────────────────────────────

/**
 * ContactForm
 *
 * FORM STATE PATTERN — three states, one useState:
 * 'idle'    → default, form visible and ready
 * 'sending' → button disabled, shows "Sending..."
 * 'sent'    → success message replaces form
 * 'error'   → error message, form still visible to retry
 *
 * This is the correct pattern for async form submission in React.
 * Never use multiple booleans (isSending, isSent, hasError) —
 * they can contradict each other. One state string is always consistent.
 *
 * EMAILJS sendForm:
 * Reads form field values directly from the DOM via the form ref.
 * Field names must match your EmailJS template variables exactly:
 * name="from_name", name="from_email", name="message"
 */
function ContactForm() {
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        e.target,
        EMAILJS_PUBLIC_KEY
      )
      setStatus('sent')
      e.target.reset()
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="footer__form-success" role="alert">
        <span className="footer__form-success-icon" aria-hidden="true">✓</span>
        <h3 className="footer__form-success-title">Message received</h3>
        <p className="footer__form-success-body">
          We'll come back to you within 24 hours with honest thoughts
          and a clear next step.
        </p>
      </div>
    )
  }

  return (
    <form
      className="footer__form"
      onSubmit={handleSubmit}
      noValidate
      aria-label="Contact form"
    >
      <div className="footer__form-row">
        <div className="footer__field">
          <label htmlFor="footer-name" className="footer__label">
            Your name
          </label>
          <input
            id="footer-name"
            name="from_name"
            type="text"
            className="footer__input"
            placeholder="Liam Hilton"
            required
            autoComplete="name"
            aria-required="true"
          />
        </div>
        <div className="footer__field">
          <label htmlFor="footer-email" className="footer__label">
            Email address
          </label>
          <input
            id="footer-email"
            name="from_email"
            type="email"
            className="footer__input"
            placeholder="liam@example.com"
            required
            autoComplete="email"
            aria-required="true"
          />
        </div>
      </div>

      <div className="footer__field">
        <label htmlFor="footer-message" className="footer__label">
          Tell us about your project
        </label>
        <textarea
          id="footer-message"
          name="message"
          className="footer__textarea"
          placeholder="I'm looking for a new website for my business..."
          rows={4}
          required
          aria-required="true"
        />
      </div>

      {status === 'error' && (
        <p className="footer__form-error" role="alert">
          Something went wrong — please try again or email us directly.
        </p>
      )}

      <button
        type="submit"
        className="footer__submit"
        disabled={status === 'sending'}
        aria-busy={status === 'sending'}
      >
        <span>
          {status === 'sending' ? 'Sending...' : 'Send message'}
        </span>
        {status !== 'sending' && (
          <span aria-hidden="true">→</span>
        )}
      </button>
    </form>
  )
}

// ─── Main footer ──────────────────────────────────────────────────────────────

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="footer"
      role="contentinfo"
      aria-label="Site footer"
      id="contact"
    >
      <div className="footer__container">

        {/* ── Top bar ─────────────────────────────────────────────── */}
        <div className="footer__top">
          {/* <Link to="/" className="footer__logo" aria-label="Liam Hilton Designs — home">
            <Logo className="footer__logo-img" color="currentColor" />
          </Link> */}

          {/* Availability status */}
          <div className="footer__availability" aria-label="Current availability">
            <span className="footer__avail-dot" aria-hidden="true" />
            <span className="footer__avail-text">
              Available for {AVAILABILITY_MONTH} bookings
            </span>
          </div>

          {/* Scroll to top */}
          <ScrollToTop />
        </div>

        {/* ── Main grid ───────────────────────────────────────────── */}
        <div className="footer__main">

          {/* Left — contact form */}
          <div className="footer__contact" id="contact-form">
            <div className="footer__contact-header">
              <h2 className="footer__contact-headline">
                Let's build something{' '}
                <span className="footer__contact-accent">worth talking about.</span>
              </h2>
              <p className="footer__contact-subtext">
                Have a project in mind? Fill in the form and we'll come
                back to you within 24 hours.
              </p>
            </div>
            <ContactForm />
          </div>

          {/* Right — nav + social */}
          <div className="footer__sidebar">

            {/* Navigation */}
            <nav
              className="footer__nav"
              aria-label="Footer navigation"
            >
              <p className="footer__nav-label">Navigate</p>
              <ul className="footer__nav-list" role="list">
                {NAV_LINKS.map(link => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="footer__nav-link"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Social icons */}
            <div className="footer__social">
              <p className="footer__social-label">Follow</p>
              <div className="footer__social-icons" role="list">
                {SOCIAL_LINKS.map(s => (
                  <a
                    key={s.id}
                    href={s.href}
                    className="footer__social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow on ${s.label}`}
                    role="listitem"
                    dangerouslySetInnerHTML={{ __html: s.icon }}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* ── Bottom bar ──────────────────────────────────────────── */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} Liam Hilton Designs. All rights reserved.
          </p>
          </div>
        </div>
    </footer>
  )
}