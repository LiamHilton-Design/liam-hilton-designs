/**
 * CaseStudyPage.jsx
 * Liam Hilton Designs
 *
 * CREATIVE ENGINEERING DECISIONS:
 *
 * 1. FULL-BLEED HERO WITH PROJECT COLOUR
 *    Each case study opens with a full-viewport hero using the project's
 *    own accentColor as the background. The visitor is immediately inside
 *    the project's world — not looking at a generic page template.
 *    The project number floats large and ghosted behind the title.
 *    Same ghost number technique as the Work section, scaled up dramatically.
 *
 * 2. READING PROGRESS BAR
 *    A 2px line at the top of the viewport fills as the user scrolls.
 *    Built with a single useScrollProgress hook — no library.
 *    Signals to the reader: "this is a document worth finishing."
 *    The bar uses the project's accentColor — every case study feels unique.
 *
 * 3. RESULT METRIC AS THE FIRST THING YOU SEE
 *    Above the fold: the outcome. Not the project name. Not the category.
 *    The result. This is the same principle as the services hook lines
 *    applied at page level. A client scanning case studies wants to know
 *    "what changed for this business?" before anything else.
 *
 * 4. THREE-DEVICE MOCKUP ROW
 *    Desktop, tablet, mobile — floating at different heights.
 *    The vertical offset creates depth — the devices don't sit in a grid,
 *    they exist in space. CSS transforms handle this, no JS needed.
 *    When real screenshots exist, swap the placeholder divs for <img> tags.
 *
 * 5. CHALLENGE / APPROACH / OUTCOME STRUCTURE
 *    Every case study tells the same story: here's what was broken,
 *    here's how we fixed it, here's what changed.
 *    This is the structure clients recognise from every case study
 *    they've ever read — and it works because it mirrors their own thinking:
 *    "I have a problem → I need a solution → I want results."
 *
 * 6. METRICS STRIP
 *    3-4 specific numbers between the hero and the body.
 *    Not vanity metrics — outcome metrics.
 *    "+200% organic traffic" is a metric.
 *    "Modern design" is not.
 *    These numbers are the most-read element on any case study page.
 *
 * 7. NEXT PROJECT NAVIGATION
 *    Bottom of the page: the next case study.
 *    Keeps visitors moving through my work rather than bouncing back
 *    to the homepage. Each case study feeds the next one.
 *
 * 8. STICKY BACK BUTTON
 *    Fixed top-left — always accessible.
 *    Uses the browser history correctly (navigate(-1) not hardcoded /work)
 *    so it works whether the visitor came from the homepage or the work page.
 *
 * WHAT YOU LEARN BUILDING THIS:
 * - useParams() — reading dynamic URL segments
 * - useNavigate() — programmatic navigation
 * - Custom hooks (useScrollProgress) — extracting reusable logic
 * - CSS scroll-driven animations without JavaScript
 * - How one component serves multiple pages via different data
 */

import { useParams, useNavigate, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { workData } from '../constants/workData'
import { caseStudyData } from '../constants/caseStudyData'
import './CaseStudyPage.css'

// ─── Reading progress hook ────────────────────────────────────────────────────

/**
 * useScrollProgress
 *
 * Tracks how far the user has scrolled through the document.
 * Returns a value from 0 to 100 (percentage).
 *
 * The calculation:
 * scrollTop = how far from the top the user has scrolled
 * scrollHeight = total document height
 * clientHeight = visible viewport height
 * (scrollHeight - clientHeight) = maximum scrollable distance
 *
 * This is a custom hook — a function starting with 'use' that
 * contains React hook calls. Extracting this logic from the component
 * keeps the component clean and makes the hook reusable anywhere.
 */
function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const el = document.documentElement
      const scrolled = el.scrollTop
      const total = el.scrollHeight - el.clientHeight
      setProgress(total > 0 ? (scrolled / total) * 100 : 0)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return progress
}

// ─── Scroll to top on mount ───────────────────────────────────────────────────

function useScrollToTop() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])
}

// ─── 404 state ────────────────────────────────────────────────────────────────

function NotFound() {
  return (
    <div className="cs-notfound">
      <p className="cs-notfound__code">404</p>
      <h1 className="cs-notfound__title">Case study not found</h1>
      <p className="cs-notfound__body">
        This project doesn't exist yet — but it might soon.
      </p>
      <Link to="/work" className="cs-notfound__link">
        ← Back to all work
      </Link>
    </div>
  )
}

// ─── Progress bar ─────────────────────────────────────────────────────────────

function ProgressBar({ accentColor }) {
  const progress = useScrollProgress()

  return (
    <div
      className="cs-progress"
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Reading progress"
    >
      <div
        className="cs-progress__fill"
        style={{
          width: `${progress}%`,
          backgroundColor: accentColor,
        }}
      />
    </div>
  )
}

// ─── Back button ──────────────────────────────────────────────────────────────

function BackButton() {
  const navigate = useNavigate()

  return (
    <button
      className="cs-back"
      onClick={() => navigate(-1)}
      aria-label="Go back"
      type="button"
    >
      <span aria-hidden="true">←</span>
      <span>Back</span>
    </button>
  )
}

// ─── Hero section ─────────────────────────────────────────────────────────────

function CaseStudyHero({ project, study }) {
  return (
    <section
      className="cs-hero"
      style={{ backgroundColor: project.placeholder }}
      aria-label={`${project.title} — case study hero`}
    >
      {/* Ghost project number — large decorative */}
      <span className="cs-hero__ghost-num" aria-hidden="true">
        {String(
          workData.findIndex(p => p.id === project.id) + 1
        ).padStart(2, '0')}
      </span>

      <div className="cs-hero__container">
        <motion.div
          className="cs-hero__content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Meta row */}
          <div className="cs-hero__meta">
            <span
              className="cs-hero__category"
              style={{ color: project.accentColor }}
            >
              {project.category}
            </span>
            <span className="cs-hero__dot" aria-hidden="true">·</span>
            <span className="cs-hero__year">{project.year}</span>
            <span className="cs-hero__dot" aria-hidden="true">·</span>
            <span
              className={`cs-hero__status cs-hero__status--${project.status}`}
            >
              {project.status === 'live' ? '● Live' : '● Concept'}
            </span>
          </div>

          {/* Result — the outcome, shown first */}
          <p
            className="cs-hero__result"
            style={{ color: project.accentColor }}
          >
            {project.result}
          </p>

          {/* Project title */}
          <h1 className="cs-hero__title">{project.title}</h1>

          {/* Short description */}
          <p className="cs-hero__description">{project.shortDescription}</p>

          {/* Tags */}
          <div className="cs-hero__tags" aria-label="Technologies used">
            {project.tags.map(tag => (
              <span key={tag} className="cs-hero__tag">{tag}</span>
            ))}
          </div>

          {/* External link if live */}
          {project.externalHref && (
            <a
              href={project.externalHref}
              className="cs-hero__live-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.title} live site`}
              style={{
                borderColor: project.accentColor,
                color: project.accentColor,
              }}
            >
              <span>View live site</span>
              <span aria-hidden="true">↗</span>
            </a>
          )}
        </motion.div>
      </div>
    </section>
  )
}

// ─── Metrics strip ────────────────────────────────────────────────────────────

/**
 * MetricsStrip
 *
 * The most-read element on any case study.
 * 3-4 specific numbers that answer: "what changed?"
 * Dark background creates a visual break between hero and body.
 * The accentColor bleeds in via the metric values.
 */
function MetricsStrip({ metrics, accentColor }) {
  if (!metrics?.length) return null

  return (
    <motion.div
      className="cs-metrics"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {metrics.map((metric, i) => (
        <div key={i} className="cs-metric">
          <span
            className="cs-metric__value"
            style={{ color: accentColor }}
          >
            {metric.value}
          </span>
          <span className="cs-metric__label">{metric.label}</span>
        </div>
      ))}
    </motion.div>
  )
}

// ─── Device mockup row ────────────────────────────────────────────────────────

/**
 * DeviceMockups
 *
 * Three devices at staggered heights — desktop, tablet, mobile.
 * The vertical offset creates depth: devices exist in space, not a grid.
 * CSS transforms handle the stagger — translateY on each device.
 *
 * Placeholder coloured divs show the layout until real screenshots are ready.
 * Swap for <img> tags when mockups are created:
 *
 * Replace: <div className="cs-device__screen" style={{ backgroundColor: ... }} />
 * With:    <img src={images.desktop} alt={`${title} — desktop`} loading="lazy" />
 */
function DeviceMockups({ project, images }) {
  const bg = project.placeholder

  return (
    <motion.div
      className="cs-devices"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      aria-label={`${project.title} — device previews`}
    >
      {/* Desktop */}
      <div className="cs-device cs-device--desktop">
        <div className="cs-device__frame cs-device__frame--desktop">
          <div className="cs-device__bar">
            <span /><span /><span />
          </div>
          <div
            className="cs-device__screen"
            style={{ backgroundColor: bg }}
            aria-label="Desktop preview"
          >
            {images?.desktop
              ? <img src={images.desktop} alt={`${project.title} desktop`} loading="lazy" />
              : <span className="cs-device__placeholder-label">Desktop</span>
            }
          </div>
        </div>
      </div>

      {/* Tablet */}
      <div className="cs-device cs-device--tablet">
        <div className="cs-device__frame cs-device__frame--tablet">
          <div
            className="cs-device__screen"
            style={{ backgroundColor: bg }}
            aria-label="Tablet preview"
          >
            {images?.tablet
              ? <img src={images.tablet} alt={`${project.title} tablet`} loading="lazy" />
              : <span className="cs-device__placeholder-label">iPad</span>
            }
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="cs-device cs-device--mobile">
        <div className="cs-device__frame cs-device__frame--mobile">
          <div className="cs-device__notch" aria-hidden="true" />
          <div
            className="cs-device__screen"
            style={{ backgroundColor: bg }}
            aria-label="Mobile preview"
          >
            {images?.mobile
              ? <img src={images.mobile} alt={`${project.title} mobile`} loading="lazy" />
              : <span className="cs-device__placeholder-label">iPhone</span>
            }
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// ─── Case study body ──────────────────────────────────────────────────────────

/**
 * CaseStudyBody
 *
 * Challenge / Approach / Outcome — the universal case study structure.
 * Each section animates in independently as it enters the viewport.
 * The section label (small caps) anchors each block before the reader
 * hits the content — same index pattern applied to editorial structure.
 */
function BodySection({ label, headline, body, index }) {
  return (
    <motion.div
      className="cs-body__section"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.08,
      }}
    >
      <div className="cs-body__section-label">
        <span className="cs-body__section-num" aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span>{label}</span>
      </div>
      <div className="cs-body__section-content">
        <h2 className="cs-body__section-headline">{headline}</h2>
        <p className="cs-body__section-text">{body}</p>
      </div>
    </motion.div>
  )
}

// ─── Next project ─────────────────────────────────────────────────────────────

/**
 * NextProject
 *
 * The final element before the footer.
 * Keeps the visitor in the portfolio rather than bouncing back.
 * Uses the next project's accentColor as a hover tint — every transition
 * feels intentional rather than generic.
 *
 * Wraps around to the first project from the last — circular navigation.
 */
function NextProject({ currentId }) {
  const currentIndex = workData.findIndex(p => p.id === currentId)
  const nextProject = workData[(currentIndex + 1) % workData.length]

  return (
    <motion.div
      className="cs-next"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <span className="cs-next__label">Next project</span>
      <Link
        to={`/work/${nextProject.id}`}
        className="cs-next__link"
        aria-label={`View next case study: ${nextProject.title}`}
      >
        <div className="cs-next__content">
          <span
            className="cs-next__category"
            style={{ color: nextProject.accentColor }}
          >
            {nextProject.category}
          </span>
          <h3 className="cs-next__title">{nextProject.title}</h3>
          <p className="cs-next__result">{nextProject.result}</p>
        </div>
        <span
          className="cs-next__arrow"
          style={{ color: nextProject.accentColor }}
          aria-hidden="true"
        >
          →
        </span>
      </Link>
    </motion.div>
  )
}

// ─── Main page component ──────────────────────────────────────────────────────

export default function CaseStudyPage() {
  useScrollToTop()

  const { id } = useParams()

  // Find project in workData
  const project = workData.find(p => p.id === id)

  // Find extended case study content (challenge/approach/outcome/metrics)
  const study = caseStudyData[id]

  // 404 — project not found
  if (!project) return <NotFound />

  return (
    <>
      {/* Reading progress bar — fixed at top */}
      <ProgressBar accentColor={project.accentColor} />

      {/* Back button — fixed top-left */}
      <BackButton />

      {/* Hero */}
      <CaseStudyHero project={project} study={study} />

      {/* Metrics strip */}
      {study?.metrics && (
        <MetricsStrip
          metrics={study.metrics}
          accentColor={project.accentColor}
        />
      )}

      {/* Device mockups */}
      <section className="cs-devices-section" aria-label="Project previews">
        <div className="cs-devices-container">
          <DeviceMockups project={project} images={study?.images} />
        </div>
      </section>

      {/* Body — challenge / approach / outcome */}
      {study?.sections && (
        <section
          className="cs-body"
          aria-label="Case study details"
        >
          <div className="cs-body__container">
            {study.sections.map((section, i) => (
              <BodySection
                key={section.label}
                label={section.label}
                headline={section.headline}
                body={section.body}
                index={i}
              />
            ))}
          </div>
        </section>
      )}

      {/* Next project */}
      <NextProject currentId={id} />
    </>
  )
}