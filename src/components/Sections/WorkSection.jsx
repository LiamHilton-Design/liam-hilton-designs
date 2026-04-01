/**
 * WorkSection.jsx — v3
 * Liam Hilton Designs
 *
 * CHANGES FROM v2:
 *
 * 1. BLANK SCREEN BUG FIX
 *    Root cause: AnimatePresence mode="wait" holds the exit animation
 *    before mounting new content. If the exiting element has no
 *    visible content (e.g. empty filtered list), React briefly
 *    renders nothing while waiting for the exit to complete.
 *    Fix: Remove mode="wait" from AnimatePresence. Use a layout
 *    animation on the list container instead — smoother and safer.
 *    The filter change now cross-fades rather than waits.
 *
 * 2. EDITORIAL SPLIT HEADER
 *    Index + label sits LEFT.
 *    Headline + subheading sits RIGHT.
 *    Full-width horizontal tension — reads like a magazine spread.
 *    This is visually distinct from the Services section (left-only)
 *    and signals to the visitor: different section, different energy.
 *    Design principle: proof sections (work) feel different from
 *    explanation sections (services). The layout reflects that.
 *
 * 3. PLACEHOLDER COLOURS FROM TOKEN SYSTEM
 *    workData.js updated to use --color-primary and --color-brand
 *    family values for placeholder backgrounds.
 *    Persian blue tones + orange tones on Woodsmoke = cohesive.
 *
 * 4. INDEX NUMBER KEPT — reasoning:
 *    It's psychological anchoring, not navigation.
 *    Visitor sees "04" and their brain calculates:
 *    "This site has substantial structure."
 *    Remove it and the section feels isolated.
 *    Keep it and the journey feels curated.
 */

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { workData, workFilters } from '../../constants/workData'
import './WorkSection.css'

// ─── Animation variants ───────────────────────────────────────────────────────

const sectionVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const headingVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

const projectVariants = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
}

// ─── Status badge ─────────────────────────────────────────────────────────────

function StatusBadge({ status }) {
  const config = {
    live:    { label: 'Live',    dot: '#1D9E75' },
    concept: { label: 'Concept', dot: '#EF9F27' },
    wip:     { label: 'Soon',    dot: '#888780' },
  }
  const { label, dot } = config[status] ?? config.concept

  return (
    <span className="work__badge">
      <span
        className="work__badge-dot"
        style={{ backgroundColor: dot }}
        aria-hidden="true"
      />
      {label}
    </span>
  )
}

// ─── Filter tabs ──────────────────────────────────────────────────────────────

function FilterTabs({ active, onChange }) {
  return (
    <div className="work__filters" role="tablist" aria-label="Filter projects">
      {workFilters.map(f => (
        <button
          key={f.id}
          className={`work__filter ${active === f.id ? 'work__filter--active' : ''}`}
          onClick={() => onChange(f.id)}
          role="tab"
          aria-selected={active === f.id}
          type="button"
        >
          {f.label}
        </button>
      ))}
    </div>
  )
}

// ─── Project row ──────────────────────────────────────────────────────────────

function ProjectRow({ project, index }) {
  const isReverse = index % 2 !== 0

  return (
    <motion.article
      className={`work__project ${isReverse ? 'work__project--reverse' : ''}`}
      variants={projectVariants}
      layout
      aria-label={`Project: ${project.title}`}
    >
      {/* Image */}
      <div className="work__project-image-wrap">
        <div
          className="work__project-image"
          style={{ backgroundColor: project.placeholder }}
          aria-label={`${project.title} preview`}
        >
          <span className="work__project-num" aria-hidden="true">
            {String(index + 1).padStart(2, '0')}
          </span>
          <div className="work__project-tags">
            {project.tags.slice(0, 3).map(tag => (
              <span key={tag} className="work__project-tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="work__project-content">
        <div className="work__project-meta">
          <StatusBadge status={project.status} />
          <span
            className="work__project-category"
            style={{ color: project.accentColor }}
          >
            {project.category}
          </span>
          <span className="work__project-year">{project.year}</span>
        </div>

        <p
          className="work__project-result"
          style={{ color: project.accentColor }}
        >
          {project.result}
        </p>

        <h3 className="work__project-title">{project.title}</h3>
        <p className="work__project-description">{project.shortDescription}</p>

        <div className="work__project-actions">
          <Link
            to={project.href}
            className="work__project-cta work__project-cta--primary"
            aria-label={`View ${project.title} case study`}
          >
            <span>See case study</span>
            <span aria-hidden="true">→</span>
          </Link>
          {project.externalHref && (
            <a
              href={project.externalHref}
              className="work__project-cta work__project-cta--secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              View live ↗
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

// ─── Editorial split header ───────────────────────────────────────────────────

/**
 * SplitHeader
 *
 * LEFT: index number + section label — anchors the section identity
 * RIGHT: headline + subheading — delivers the message
 *
 * This is a deliberate departure from the Services section layout.
 * Services explains → left-aligned, document feel.
 * Work proves → split, editorial, magazine feel.
 *
 * The visual principle: the more confident you are in your work,
 * the more space you give it to breathe. A centred or left-heavy
 * header crowds the work. A split header frames it.
 */
function SplitHeader() {
  return (
    <div className="work__header">
      {/* Left — anchor */}
      <div className="work__header-left">
        <span className="work__index" aria-hidden="true">04</span>
        <span className="work__label">Selected work</span>
      </div>

      {/* Right — message */}
      <div className="work__header-right">
        <h2 className="work__headline">
          Built with purpose.{' '}
          <span className="work__headline-accent">
            Designed to convert.
          </span>
        </h2>
        <p className="work__subheadline">
          Every project starts with one question: what does success
          look like for this client? The answer shapes every layout
          decision, every line of copy, every technical choice.
        </p>
      </div>
    </div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function WorkSection() {
  const [activeFilter, setActiveFilter] = useState('all')

  /*
   * BUG FIX — derived state stays the same pattern.
   * The fix is in how we render the list, not how we calculate it.
   * filteredProjects is still derived, not stored in state.
   */
  const filteredProjects = activeFilter === 'all'
    ? workData
    : workData.filter(p => p.status === activeFilter)

  return (
    <section
      className="work"
      role="region"
      aria-label="Selected work"
      id="work"
    >
      <div className="work__container">
      <motion.div
  className="work__inner"
  variants={sectionVariants}
  initial="hidden"
  animate="visible"
>
          {/* Split header */}
          <motion.div variants={headingVariants}>
            <SplitHeader />
          </motion.div>

          {/* Filters */}
          <motion.div variants={headingVariants}>
            <FilterTabs active={activeFilter} onChange={setActiveFilter} />
          </motion.div>

          {/*
            BUG FIX:
            Removed AnimatePresence mode="wait" — this was causing
            the blank screen. mode="wait" holds the container empty
            while waiting for exit animations, which meant switching
            from "Live projects" back to "All work" would briefly
            show nothing while the exit played.

            Solution: use layout animations on individual cards instead.
            Each ProjectRow has layout prop — Framer handles repositioning
            smoothly when the list changes. No blank screen, same visual quality.
          */}
          <motion.div className="work__projects" layout>
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, i) => (
                <ProjectRow
                  key={project.id}
                  project={project}
                  index={i}
                />
              ))
            ) : (
              <motion.p
                className="work__empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                Projects coming soon in this category.
              </motion.p>
            )}
          </motion.div>

          <motion.p className="work__note" variants={headingVariants}>
            New projects added regularly.{' '}
            <a href="/contact" className="work__note-link">
              Get in touch
            </a>
            {' '}to discuss yours.
          </motion.p>

        </motion.div>
      </div>
    </section>
  )
}