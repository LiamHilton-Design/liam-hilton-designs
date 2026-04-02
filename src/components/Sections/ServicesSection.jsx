/**
 * ServicesSection.jsx
 * Liam Hilton Designs
 *
 * DESIGN LANGUAGE APPLIED:
 *
 * 1. INDEX PATTERN (01/02/03)
 *    Every service card carries its index number — small, muted,
 *    in the top left. Same pattern as the mobile menu. Same pattern
 *    as the process section. The visitor's brain recognises it as
 *    Liam Hilton Designs' visual language before they read a word.
 *
 * 2. OUTCOME-LED COPY
 *    Service names describe what the client RECEIVES not what Liam DOES.
 *    "Websites that convert" not "Web Design".
 *    "SEO that returns" not "Search Engine Optimisation".
 *    "Brand identity that stands out" not "Branding".
 *
 * 3. HOOK LINES
 *    Each card has a one-line hook that answers "why can't I miss this?"
 *    This is the copy that converts browsers into enquiries.
 *
 * 4. PERSIAN BLUE ACCENTS
 *    Left border on hover, index number highlights, CTA button.
 *    Consistent with navbar active states and hero accent word.
 *
 * 5. SCROLL-TRIGGERED ANIMATION
 *    Cards animate in from below as they enter the viewport.
 *    whileInView with once:true — fires once, stays visible.
 *    Stagger: each card arrives 0.15s after the previous.
 *
 * 6. CALENDLY CTA
 *    The section ends with a full-width CTA that opens Calendly.
 *    "Book a free strategy call" — specific, low friction, high value.
 *    Replace CALENDLY_URL with your actual Calendly link.
 *
 * 7. DIAMOND CONNECTION
 *    This section uses margin-top:-160px to slide up behind the
 *    hero diamond. The background is var(--color-bg) matching the hero
 *    so the transition is seamless. The diamond point appears to float
 *    above this section's content.
 *
 * SEO NOTES:
 *    - Section has aria-label and role="region"
 *    - Service names are h3 elements — correct heading hierarchy
 *    - Section headline is h2 — follows the h1 in hero
 *    - All copy contains natural keyword placement:
 *      "web design", "SEO", "brand identity", "convert visitors",
 *      "rank on Google", "leads", "paying clients"
 */

import { motion } from 'framer-motion'
import { servicesData } from '../../constants/servicesData'
import { Link } from 'react-router-dom'

import './ServiceSection.css'

// Replace with your actual Calendly URL
const CALENDLY_URL = 'https://calendly.com/liamhiltondesigns/strategy-call'

// ─── Animation variants ───────────────────────────────────────────────────────

const sectionVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

const headingVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
}

const cardVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

const ctaVariants = {
  hidden:  { opacity: 0, y: 32 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 },
  },
}

// ─── Service card ─────────────────────────────────────────────────────────────

/**
 * ServiceCard
 *
 * The left border accent appears on hover — same interaction pattern
 * as the mobile menu links. The index number transitions from muted
 * to Persian blue on hover, reinforcing the design language.
 *
 * deliverables is an array of strings — what the client actually gets.
 * This answers the subconscious question "but what am I paying for?"
 * before it's even asked.
 */
function ServiceCard({ service, index }) {
  return (
    <motion.article
      className="service-card"
      variants={cardVariants}
      aria-label={service.name}
    >
      {/* Index number — the design language anchor */}
      <div className="service-card__header">
        <span className="service-card__index" aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="service-card__tag">{service.tag}</span>
      </div>

      {/* Service name — outcome-led */}
      <h3 className="service-card__name">{service.name}</h3>

      {/* Hook line — the converter */}
      <p className="service-card__hook">{service.hook}</p>

      {/* Description — supporting detail */}
      <p className="service-card__description">{service.description}</p>

      {/* Deliverables — what they actually get */}
      <ul className="service-card__deliverables" aria-label="What's included">
        {service.deliverables.map((item, i) => (
          <li key={i} className="service-card__deliverable">
            <span className="service-card__check" aria-hidden="true">→</span>
            {item}
          </li>
        ))}
      </ul>

      {/* Learn more link */}
      <Link
  to={service.href}
  className="service-card__link"
  aria-label={`Learn more about ${service.name}`}
>
  <span>Learn more</span>
  <span aria-hidden="true">→</span>
</Link>
    </motion.article>
  )
}

// ─── Section header ───────────────────────────────────────────────────────────

function SectionHeader() {
  return (
    <motion.div className="services__header" variants={headingVariants}>
      {/* Eyebrow — index pattern at section level */}
      <div className="services__eyebrow">
        <span className="services__eyebrow-index" aria-hidden="true">02</span>
        <span>What I do</span>
      </div>

      <h2 className="services__headline">
        Not just a website.{' '}
        <span className="services__headline-accent">
          A system that works while you sleep.
        </span>
      </h2>

      <p className="services__subheadline">
        Every service is built around one goal — turning your website
        into your hardest-working employee. No vanity metrics.
        No pretty pages that do nothing. Just results.
      </p>
    </motion.div>
  )
}

// ─── Calendly CTA ─────────────────────────────────────────────────────────────

/**
 * CalendlyCTA
 *
 * Opens Calendly in a new tab. When you have Calendly set up,
 * replace CALENDLY_URL with your actual link.
 *
 * The popup variant (calendly.initPopupWidget) is also an option
 * but opens in a new tab for now to avoid loading the Calendly
 * script as a dependency.
 *
 * The surrounding context copy reduces friction:
 * "No obligation" — removes commitment fear
 * "30 minutes" — sets time expectation
 * "Free" — the word that converts browsers into bookers
 */
function CalendlyCTA() {
  return (
    <motion.div className="services__cta" variants={ctaVariants}>
      <div className="services__cta-content">
        <p className="services__cta-eyebrow">Ready to start?</p>
        <h3 className="services__cta-headline">
          Book a free 20-minute strategy call
        </h3>
        <p className="services__cta-body">
          No obligation. No hard sell. Just an honest conversation
          about your website, your goals, and how we can help you
          get there. Walk away with a clear action plan — whether
          you work with us or not.
        </p>
      </div>

      <div className="services__cta-actions">
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="services__cta-btn services__cta-btn--primary"
          aria-label="Book a free 30-minute strategy call with Liam Hilton Designs"
        >
          <span>Book your free call</span>
          <span aria-hidden="true">→</span>
        </a>
        <a
          href="/work"
          className="services__cta-btn services__cta-btn--secondary"
          aria-label="View our portfolio and case studies"
        >
          See my first
        </a>
      </div>

      {/* Trust signals under the CTA */}
      <div className="services__cta-trust">
        <span className="services__trust-item">
          <span aria-hidden="true">✓</span> Free — 
        </span>
        <span className="services__trust-item">
          <span aria-hidden="true">✓</span> 20 minutes
        </span>
        <span className="services__trust-item">
          <span aria-hidden="true">✓</span> Clear action plan included
        </span>
      </div>
    </motion.div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function ServicesSection() {
  return (
    <section
      className="services"
      role="region"
      aria-label="Services — Liam Hilton Designs"
      id="services"
    >
      <div className="services__container">
        <motion.div
          className="services__inner"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <SectionHeader />

          {/* Service cards grid */}
          <div
            className="services__grid"
            role="list"
            aria-label="Our services"
          >
            {servicesData.map((service, i) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={i}
              />
            ))}
          </div>

          {/* Calendly CTA */}
          <CalendlyCTA />

        </motion.div>
      </div>
    </section>
  )
}