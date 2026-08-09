/**
 * ServicesSlideshow.jsx
 * Liam Hilton Designs
 *
 * REBUILT — normal document flow, no scroll-snap.
 * Name kept for import continuity, but this is now a standard
 * alternating editorial layout — same DNA as WorkSection's ProjectRow,
 * applied here with each service getting a huge number, reserved
 * image slot, and collapsed deliverables accordion.
 *
 * Scroll-snap and the side-dot indicator were removed — they added
 * mechanical complexity without real payoff, and actively hurt the
 * mobile experience (forced 100vh sections don't reliably fit
 * variable content height). The 01/02/03/04 pattern already
 * communicates position clearly through the content itself.
 */

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { servicesData } from '../../constants/servicesData'
import './ServicesSlideshow.css'

// ─── Scroll-bold description ─────────────────────────────────────────────────
// One-time weight animation as the paragraph enters view — not a
// continuous scrub. Simpler, reliable regardless of row height.

function ScrollBoldText({ text, className }) {
  return (
    <motion.p
      className={className}
      initial={{ fontVariationSettings: "'wght' 350" }}
      whileInView={{ fontVariationSettings: "'wght' 700" }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    >
      {text}
    </motion.p>
  )
}

// ─── Accordion deliverables ───────────────────────────────────────────────────

function DeliverablesAccordion({ deliverables, accentColor }) {
  return (
    <details className="service-row__accordion">
      <summary
        className="service-row__accordion-trigger"
        style={{ color: accentColor }}
      >
        <span>What's included</span>
        <span className="service-row__accordion-icon" aria-hidden="true">↓</span>
      </summary>
      <ul className="service-row__deliverables" aria-label="What's included">
        {deliverables.map((item, i) => (
          <li key={i} className="service-row__deliverable">
            <span
              className="service-row__check"
              style={{ color: accentColor }}
              aria-hidden="true"
            >
              →
            </span>
            {item}
          </li>
        ))}
      </ul>
    </details>
  )
}

// ─── Individual row ───────────────────────────────────────────────────────────

function ServiceRow({ service, index }) {
  const isPartner = service.isPartner
  const isReverse = index % 2 !== 0

  return (
    <motion.section
      id={service.id}
      className={`service-row ${isReverse ? 'service-row--reverse' : ''}`}
      style={{
        backgroundColor: service.theme.bg,
        color: service.theme.text,
      }}
      aria-label={service.name}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="service-row__container">
        {/* ── Visual column ─────────────────────────────────────── */}
     
<div className="service-row__visual">
  <div className="service-row__image-slot">
    <span className="service-row__index" aria-hidden="true">
      {String(index + 1).padStart(2, '0')}
    </span>
    {service.imageSlot ? (
      <img src={service.imageSlot} alt="" />
    ) : (
      <span className="service-row__image-slot-label">
        {service.tag}
      </span>
    )}
  </div>
</div>

        {/* ── Content column ───────────────────────────────────── */}
        <div className="service-row__content">
          <span className="service-row__tag">{service.tag}</span>

          {isPartner && (
            <span className="service-row__partner-badge">
              In partnership with {service.partnerName}
            </span>
          )}

          <h2 className="service-row__name">{service.name}</h2>

          <p
            className="service-row__hook"
            style={{ color: service.theme.accent }}
          >
            {service.hook}
          </p>

          <ScrollBoldText
            text={service.description}
            className="service-row__description"
          />

          <DeliverablesAccordion
            deliverables={service.deliverables}
            accentColor={service.theme.accent}
          />

          {isPartner ? (
            
             <a href={service.href === '#' ? undefined : service.href}
              target="_blank"
              rel="noopener noreferrer"
              className="service-row__link"
              style={{ color: service.theme.text, borderColor: service.theme.accent }}
              aria-label={`View ${service.partnerName}'s portfolio`}
            >
              <span>View portfolio</span>
              <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <Link
              to="/contact"
              className="service-row__link"
              style={{ color: service.theme.text, borderColor: service.theme.accent }}
              aria-label={`Enquire about ${service.name}`}
            >
              <span>Enquire now</span>
              <span aria-hidden="true">→</span>
            </Link>
          )}
        </div>
      </div>
    </motion.section>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function ServicesSlideshow() {
  return (
    <div className="services-showcase">
      {servicesData.map((service, i) => (
        <ServiceRow key={service.id} service={service} index={i} />
      ))}
    </div>
  )
}