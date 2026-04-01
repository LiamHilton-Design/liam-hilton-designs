/**
 * HeroSection.jsx — Synced final version
 * Liam Hilton Designs
 *
 * This version matches HeroSection.css v4 exactly.
 *
 * WHAT WAS WRONG:
 * The old JSX had a two-column layout (hero__left / hero__right)
 * with HeroImage, StatBar, and the old Headline component using
 * {primary, accentWord, secondary} props from the old heroData shape.
 *
 * The new CSS expects:
 * - Single centred column (no hero__left / hero__right)
 * - Word-by-word animated headline via AnimatedHeadlineLine
 * - AnimatedGrid background component
 * - heroData.headline.lines[] array structure
 * - No StatBar (replaced by MarqueeStrip in App.jsx)
 * - No HeroImage (typography-led hero, no image)
 * - hero__scroll-indicator not hero__scroll
 */

import { useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { heroData } from '../../constants/heroData'
import AnimatedGrid from './AnimatedGrid'
import './HeroSection.css'

// ─── Animation variants ───────────────────────────────────────────────────────

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const fadeUpVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
}

const wordVariants = {
  hidden:  { opacity: 0, y: 36 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
}

const lineVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07 },
  },
}

// ─── Word-by-word headline line ───────────────────────────────────────────────

/**
 * AnimatedHeadlineLine
 * Splits a line of text into individual words.
 * Each word is wrapped in an overflow:hidden container so it
 * appears to emerge from beneath its baseline — the premium reveal.
 *
 * isLastLine: the last word of the last line gets the accent treatment
 * (Persian blue italic) — this is "weapon." in our case.
 */
function AnimatedHeadlineLine({ text, isLastLine = false }) {
  const words = text.split(' ')

  return (
    <motion.span
      className="hero__headline-line"
      variants={lineVariants}
    >
      {words.map((word, i) => {
        const isAccentWord = isLastLine && i === words.length - 1
        return (
          <span key={i} style={{ display: 'inline-block' }}>
            <span className="hero__word-wrapper">
              <motion.span
                className={`hero__word${isAccentWord ? ' hero__word--accent' : ''}`}
                variants={wordVariants}
              >
                {word}
              </motion.span>
            </span>
            {i < words.length - 1 && (
              <span className="hero__word-space" aria-hidden="true" />
            )}
          </span>
        )
      })}
      {/* Space after each line except the last */}
      {!isLastLine && (
        <span className="hero__word-space" aria-hidden="true" />
      )}
    </motion.span>
  )
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function Eyebrow({ text }) {
  return (
    <motion.div className="hero__eyebrow" variants={fadeUpVariants}>
      <span className="hero__eyebrow-dot" aria-hidden="true" />
      <span>{text}</span>
    </motion.div>
  )
}

function Headline({ lines }) {
  return (
    <motion.h1 className="hero__headline" variants={containerVariants}>
      {lines.map((line, i) => (
        <AnimatedHeadlineLine
          key={i}
          text={line}
          isLastLine={i === lines.length - 1}
        />
      ))}
    </motion.h1>
  )
}

function Subheadline({ text }) {
  return (
    <motion.p className="hero__subheadline" variants={fadeUpVariants}>
      {text}
    </motion.p>
  )
}

function CTAGroup({ primary, secondary }) {
  return (
    <motion.div
      className="hero__cta-group"
      variants={fadeUpVariants}
      role="group"
      aria-label="Primary actions"
    >
      <a
        href={primary.href}
        className="hero__cta-primary"
        aria-label={primary.ariaLabel}
      >
        <span>{primary.label}</span>
        <span className="hero__cta-arrow" aria-hidden="true">→</span>
      </a>
      <a
        href={secondary.href}
        className="hero__cta-secondary"
        aria-label={secondary.ariaLabel}
      >
        {secondary.label}
      </a>
    </motion.div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion()
  const sectionRef = useRef(null)

  const { eyebrow, headline, subheadline, cta } = heroData

  const motionProps = prefersReducedMotion
    ? { initial: 'visible' }
    : {
        variants: containerVariants,
        initial: 'hidden',
        animate: 'visible',
      }

  return (
    <section
      className="hero"
      role="banner"
      aria-label="Liam Hilton Designs — Web Design Studio"
      ref={sectionRef}
    >
      {/* Animated Persian blue grid background */}
      <AnimatedGrid />

      {/* Edge vignette — fades grid at edges, handled by ::after in CSS */}

      <div className="hero__container">
        <motion.div className="hero__content" {...motionProps}>
          <Eyebrow text={eyebrow} />
          <Headline lines={headline.lines} />
          <Subheadline text={subheadline} />
          <CTAGroup primary={cta.primary} secondary={cta.secondary} />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero__scroll-indicator"
        aria-label="Scroll to explore"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <span className="hero__scroll-line" aria-hidden="true" />
        <span className="hero__scroll-label">Scroll</span>
      </motion.div>

    </section>
  )
}