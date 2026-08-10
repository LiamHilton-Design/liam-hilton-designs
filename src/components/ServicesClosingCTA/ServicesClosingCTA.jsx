/**
 * ServicesClosingCTA.jsx
 * Liam Hilton Designs
 *
 * The largest, most direct CTA on the page — deliberately distinct from
 * ProcessSection's BookingCTA (orange/light) and ServicesSection's
 * CalendlyCTA (Persian blue, mid-page). This one goes full-bleed dark,
 * full-width, oversized type — the visual equivalent of a closing
 * argument. If someone scrolls this far without clicking anything,
 * this is the last, biggest ask.
 */

import { motion } from 'framer-motion'
import './ServicesClosingCTA.css'

const BOOKING_URL = 'https://calendly.com/liamhiltonwebdesign/30min'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const fadeUpVariants = {
  hidden:  { opacity: 0, y: 32 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function ServicesClosingCTA() {
  return (
    <section
      className="services-closing"
      role="region"
      aria-label="Book a call"
    >
      <div className="services-closing__container">
        <motion.div
          className="services-closing__inner"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.p className="services-closing__eyebrow" variants={fadeUpVariants}>
            Ready when you are
          </motion.p>

          <motion.h2 className="services-closing__headline" variants={fadeUpVariants}>
  Let&rsquo;s make your website{' '}
  <span className="services-closing__headline-accent">work harder.</span>
</motion.h2>

          <motion.p className="services-closing__body" variants={fadeUpVariants}>
            One free 15-minute call. No pitch, no pressure — just an honest
            look at where your website stands and what it would take to
            fix it.
          </motion.p>

          <motion.div className="services-closing__actions" variants={fadeUpVariants}>
            
              <a href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="services-closing__cta"
              aria-label="Book a free 15-minute discovery call"
            >
              <span>Book your free call</span>
              <span aria-hidden="true">→</span>
            </a>
          </motion.div>

          <motion.div className="services-closing__trust" variants={fadeUpVariants}>
            <span className="services-closing__trust-item">
              <span aria-hidden="true">✓</span> Free — 15 minutes
            </span>
            <span className="services-closing__trust-item">
              <span aria-hidden="true">✓</span> No obligation
            </span>
            <span className="services-closing__trust-item">
              <span aria-hidden="true">✓</span> Byron Bay & Northern Rivers
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}