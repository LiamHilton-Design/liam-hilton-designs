/**
 * ServicesHero.jsx
 * Liam Hilton Designs
 *
 * Distinct from the homepage hero — no animated grid, no scroll indicator.
 * This is a page hero, not the site's front door. Punchier, faster to the
 * point: the visitor already clicked "Services," they want depth now,
 * not another slow reveal.
 */

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './ServicesHero.css'

const BOOKING_URL = 'https://calendly.com/liamhiltonwebdesign/discovery'

const fadeUpVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

export default function ServicesHero() {
  return (
    <section
      className="services-hero"
      role="banner"
      aria-label="Services — Liam Hilton Design"
    >
      <div className="services-hero__container">
        <motion.div
          className="services-hero__content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="services-hero__eyebrow" variants={fadeUpVariants}>
            <span className="services-hero__eyebrow-dot" aria-hidden="true" />
            <span>What we offer</span>
          </motion.div>

          <motion.h1 className="services-hero__headline" variants={fadeUpVariants}>
            Four ways to stop{' '}
            <span className="services-hero__headline-accent">being invisible.</span>
          </motion.h1>

          <motion.p className="services-hero__subheadline" variants={fadeUpVariants}>
            Web design, SEO, brand identity, and booking systems — built for
            Byron Bay and Northern Rivers businesses who want a website that
            actually works for them.
          </motion.p>

          <motion.div className="services-hero__actions" variants={fadeUpVariants}>
            
             <a href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="services-hero__cta-primary"
              aria-label="Book a free 15-minute discovery call"
            >
              <span>Book a discovery call</span>
              <span aria-hidden="true">→</span>
            </a>
            <Link to="/work" className="services-hero__cta-secondary">
              See the work first
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}