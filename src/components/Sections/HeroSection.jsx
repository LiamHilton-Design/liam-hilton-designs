import { useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { heroData } from '../../constants/heroData'
import { Link } from 'react-router-dom'

import AnimatedGrid from './AnimatedGrid'
import './HeroSection.css'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
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
  visible: { transition: { staggerChildren: 0.07 } },
}

function AnimatedHeadlineLine({ text, isLastLine = false }) {
  const words = text.split(' ')
  return (
    <motion.span className="hero__headline-line" variants={lineVariants}>
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
      {!isLastLine && <span className="hero__word-space" aria-hidden="true" />}
    </motion.span>
  )
}

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
      <Link
        to={primary.href}
        className="hero__cta-primary"
        aria-label={primary.ariaLabel}
      >
        <span>{primary.label}</span>
        <span className="hero__cta-arrow" aria-hidden="true">→</span>
      </Link>
      <Link
        to={secondary.href}
        className="hero__cta-secondary"
        aria-label={secondary.ariaLabel}
      >
        {secondary.label}
      </Link>
    </motion.div>
  )
}

/**
 * ScrollIndicator
 *
 * KEY CHANGE:
 * No longer position:absolute — it now sits inside hero__content
 * and flows naturally below the CTAs on ALL screen sizes.
 * On desktop it still looks correct because hero__content is
 * centred vertically in the full-height hero section.
 * On mobile it appears directly below the last CTA — no overlap possible.
 */
function ScrollIndicator() {
  return (
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
  )
}

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion()
  const sectionRef = useRef(null)
  const { eyebrow, headline, subheadline, cta } = heroData

  const motionProps = prefersReducedMotion
    ? { initial: 'visible' }
    : { variants: containerVariants, initial: 'hidden', animate: 'visible' }

  return (
    <section
      className="hero"
      role="banner"
      aria-label="Liam Hilton Designs — Web Design Studio"
      ref={sectionRef}
    >
      <AnimatedGrid />

      <div className="hero__container">
        <motion.div className="hero__content" {...motionProps}>
          <Eyebrow text={eyebrow} />
          <Headline lines={headline.lines} />
          <Subheadline text={subheadline} />
          <CTAGroup primary={cta.primary} secondary={cta.secondary} />
          {/*
            ScrollIndicator is now INSIDE hero__content.
            It flows below the CTAs naturally — no absolute positioning,
            no overlap on any screen size or height.
          */}
          <ScrollIndicator />
        </motion.div>
      </div>

    </section>
  )
}