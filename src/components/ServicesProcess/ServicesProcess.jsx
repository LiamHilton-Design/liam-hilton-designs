/**
 * ServicesProcess.jsx
 * Liam Hilton Designs
 *
 * Steps-only variant of the homepage ProcessSection — same visual system
 * (connector line, numbered circles, orange background), no embedded CTA.
 * The Services page's ClosingCTA owns that job as its own dominant moment,
 * rather than splitting attention across two "book a call" prompts back to back.
 */

import { motion } from 'framer-motion'
import { processData } from '../../constants/processData'
import './ProcessSection.css' // reuses the same stylesheet — no new CSS file needed

const sectionVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const headingVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

const stepVariants = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

function ProcessStep({ step, index }) {
  return (
    <motion.div
      className="process__step"
      variants={stepVariants}
      aria-label={`Step ${index + 1}: ${step.title}`}
    >
      <div className="process__step-num" aria-hidden="true">
        {String(index + 1).padStart(2, '0')}
      </div>
      <div className="process__step-content">
        <span className="process__step-duration">{step.duration}</span>
        <h3 className="process__step-title">{step.title}</h3>
        <p className="process__step-description">{step.description}</p>
        <ul className="process__step-deliverables" aria-label={`Deliverables for ${step.title}`}>
          {step.deliverables.map((item, i) => (
            <li key={i} className="process__step-deliverable">
              <span className="process__step-arrow" aria-hidden="true">→</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

function ProcessHeader() {
  return (
    <motion.div className="process__header" variants={headingVariants}>
      <div className="process__eyebrow">
        <span className="process__eyebrow-index" aria-hidden="true">05</span>
        <span>The process</span>
      </div>
      <h2 className="process__headline">
  You&rsquo;ve seen what I offer.{' '}
  <span className="process__headline-accent">Here&rsquo;s how we&rsquo;d actually work together.</span>
</h2>
      <p className="process__subheadline">
        Every project — whatever combination of services you need —
        follows the same four stages. Transparent from the first call
        to the moment your site goes live.
      </p>
    </motion.div>
  )
}

export default function ServicesProcess() {
  return (
    <section className="process" role="region" aria-label="Our process">
      <div className="process__container">
        <motion.div
          className="process__inner"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <ProcessHeader />
          <div className="process__steps" role="list">
            {processData.map((step, i) => (
              <ProcessStep key={step.id} step={step} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}