/**
 * ProcessSection.jsx
 * Liam Hilton Designs
 *
 * DESIGN DECISIONS:
 *
 * 1. ORANGE LIGHT BACKGROUND (--color-section-orange / --lhd-orange-light)
 *    Warm, approachable, energetic. After Woodsmoke this feels like
 *    opening a door into a bright room. The colour shift communicates
 *    the section's purpose: this is about the human experience of
 *    working together, not just the output.
 *
 * 2. HORIZONTAL TIMELINE ON DESKTOP — VERTICAL ON MOBILE
 *    The connector line between steps is a pure CSS technique:
 *    A ::before pseudo-element on the steps container draws a
 *    horizontal line that runs through the centre of all step numbers.
 *    On mobile, it rotates to vertical via a simple flex-direction change.
 *    Zero JavaScript. Zero SVG. One CSS rule.
 *
 * 3. STEP NUMBERS AS DESIGN ELEMENTS
 *    Large, circular, filled with Persian blue on the orange background.
 *    The contrast (blue on orange) is intentional — complementary colours
 *    create maximum visual tension. The number sits above the content,
 *    anchoring each step the same way the navbar index anchors each link.
 *
 * 4. QUESTIONNAIRE CTA
 *    Links to Tally or Typeform — replace QUESTIONNAIRE_URL with your link.
 *    Tally.so is free, no branding on free tier, clean embed.
 *    Create a form with: Name, Email, Business type, Project description,
 *    Budget range, Timeline. This brief replaces 30 minutes of discovery.
 *
 * 5. DARK TEXT ON ORANGE
 *    All text uses Woodsmoke (--lhd-neutral-900) — never white on orange.
 *    White on orange fails contrast ratios. Dark on orange reads perfectly
 *    and feels warmer than the white text used on dark sections.
 *
 * WHAT YOU LEARN BUILDING THIS:
 * - CSS pseudo-elements as design elements (::before connector line)
 * - Responsive layout that isn't just "stack on mobile" — it genuinely
 *   transforms from horizontal to vertical with one CSS property change
 * - Complementary colour theory applied in a real UI context
 * - How the same index number pattern scales from navbar → services →
 *   work → process — the design language compound interest
 */

import { motion } from 'framer-motion'
import { processData } from '../../constants/processData'
import './ProcessSection.css'

// Replace with your actual Tally or Typeform URL
const QUESTIONNAIRE_URL = 'https://tally.so/r/your-form-id'

// ─── Animation variants ───────────────────────────────────────────────────────

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

// ─── Process step ─────────────────────────────────────────────────────────────

/**
 * ProcessStep
 *
 * Each step has three layers of information — the index pattern applied:
 * 1. Number (large, Persian blue circle) — visual anchor, felt more than read
 * 2. Title (display font, bold) — what happens
 * 3. Description (body font) — what it means for the client
 *
 * The deliverables list answers "what do I get from this step?"
 * Specific deliverables remove the vagueness that makes clients nervous.
 * "A 60-minute strategy call" is less scary than "a discovery process."
 */
function ProcessStep({ step, index }) {
  return (
    <motion.div
      className="process__step"
      variants={stepVariants}
      aria-label={`Step ${index + 1}: ${step.title}`}
    >
      {/* Step number — Persian blue on orange */}
      <div className="process__step-num" aria-hidden="true">
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* Step content */}
      <div className="process__step-content">
        {/* Duration indicator */}
        <span className="process__step-duration">{step.duration}</span>

        {/* Title */}
        <h3 className="process__step-title">{step.title}</h3>

        {/* Description */}
        <p className="process__step-description">{step.description}</p>

        {/* Deliverables — what the client actually receives */}
        <ul
          className="process__step-deliverables"
          aria-label={`Deliverables for ${step.title}`}
        >
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

// ─── Section header ───────────────────────────────────────────────────────────

/**
 * ProcessHeader
 *
 * Left-aligned like Services — this IS an explanation section.
 * We're teaching the visitor what working together looks like.
 * Left-aligned document feel is correct here.
 * (Work was proof → split header. Process is explanation → left header.)
 *
 * The eyebrow uses index 05 — continuing the page journey number.
 */
function ProcessHeader() {
  return (
    <motion.div className="process__header" variants={headingVariants}>
      <div className="process__eyebrow">
        <span className="process__eyebrow-index" aria-hidden="true">05</span>
        <span>How it works</span>
      </div>

      <h2 className="process__headline">
        From first conversation{' '}
        <span className="process__headline-accent">to launch day.</span>
      </h2>

      <p className="process__subheadline">
        No surprises. No confusion. Just a clear four-step process
        that takes you from idea to a live, converting website —
        with you informed and in control at every stage.
      </p>
    </motion.div>
  )
}

// ─── Questionnaire CTA ────────────────────────────────────────────────────────

/**
 * QuestionnaireCTA
 *
 * This sits BELOW the four steps — the natural next action after
 * a visitor has read the process and thought "okay, I'm ready."
 *
 * The questionnaire brief is more valuable than a phone number because:
 * 1. It qualifies leads before the first call — you know their budget,
 *    timeline, and project type before picking up the phone
 * 2. It gives clients a low-commitment first step — filling a form
 *    feels less scary than "book a call"
 * 3. It gives YOU a structured brief to prepare from
 *
 * The copy emphasises: takes 3 minutes, no obligation, you respond
 * within 24 hours. Every friction point addressed before it's raised.
 */
function QuestionnaireCTA() {
  return (
    <motion.div className="process__cta" variants={headingVariants}>
      <div className="process__cta-inner">
        <div className="process__cta-content">
          <p className="process__cta-eyebrow">Ready to begin?</p>
          <h3 className="process__cta-headline">
            Tell us about your project
          </h3>
          <p className="process__cta-body">
            Answer 6 quick questions about your business, goals, and
            timeline. Takes 3 minutes. We'll come back to you within
            24 hours with honest thoughts and a clear next step.
            No obligation, no hard sell.
          </p>
        </div>

        <div className="process__cta-actions">
          <a
            href={QUESTIONNAIRE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="process__cta-btn process__cta-btn--primary"
            aria-label="Start your project brief — takes 3 minutes"
          >
            <span>Start your brief</span>
            <span aria-hidden="true">→</span>
          </a>
          <a
            href="/contact"
            className="process__cta-btn process__cta-btn--secondary"
            aria-label="Get in touch another way"
          >
            Or just say hello
          </a>
        </div>

        {/* Trust signals */}
        <div className="process__cta-trust">
          <span className="process__trust-item">
            <span aria-hidden="true">✓</span> 3 minutes to complete
          </span>
          <span className="process__trust-item">
            <span aria-hidden="true">✓</span> Response within 24 hours
          </span>
          <span className="process__trust-item">
            <span aria-hidden="true">✓</span> No obligation
          </span>
        </div>
      </div>
    </motion.div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function ProcessSection() {
  return (
    <section
      className="process"
      role="region"
      aria-label="Our process"
      id="process"
    >
      <div className="process__container">
        <motion.div
          className="process__inner"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <ProcessHeader />

          {/*
            THE CONNECTOR LINE:
            .process__steps has position:relative.
            Its ::before pseudo-element draws a horizontal line
            that runs through the vertical centre of all step numbers.
            The line sits at exactly the right height because we know
            the step number circle height (52px) and position.
            On mobile, the steps stack vertically and the ::before
            becomes a vertical line down the left side.
            This is CSS doing the work of what most developers
            would reach for SVG or JavaScript to solve.
          */}
          <div className="process__steps" role="list">
            {processData.map((step, i) => (
              <ProcessStep key={step.id} step={step} index={i} />
            ))}
          </div>

          <QuestionnaireCTA />

        </motion.div>
      </div>
    </section>
  )
}