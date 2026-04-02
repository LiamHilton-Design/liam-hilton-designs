/**
 * Navbar.jsx — Final production version
 * Liam Hilton Designs
 *
 * CHANGES FROM PREVIOUS VERSION:
 *
 * 1. HAMBURGER Z-INDEX FIX
 *    The overlay was swallowing the hamburger button because both elements
 *    use position:fixed which creates competing stacking contexts.
 *    Fix: navbar__actions gets position:relative + z-index:101 so the
 *    hamburger always floats above the overlay regardless of menu state.
 *
 * 2. MOBILE MENU POLISH
 *    - Overlay now uses clipPath animation (drops from top) — more premium
 *      than a simple fade which feels cheap on fullscreen overlays
 *    - Links stagger in after overlay opens (delayChildren: 0.25)
 *    - Each link has a subtle left-border accent on hover using ::before
 *    - Availability dot stays at bottom — anchored with margin-top: auto
 *
 * 3. CTA REFINEMENT
 *    - Persian blue background (--color-primary)
 *    - Arrow character slides right on hover via CSS gap animation
 *    - --color-primary-subtle on hover maintains brand hierarchy
 *
 * 4. NAV LINK HOVER
 *    - Text colour changes to --color-primary on hover (not just text-primary)
 *    - Underline and text now move together as one cohesive element
 */

import { useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { navLinks, navCTA, navBrand } from '../../constants/navData'
import { useScrolled } from '../../hooks/useScrolled'
import { useMenuOpen } from '../../hooks/useMenuOpen'
import Logo from '../Logo/Logo'

import './Navbar.css'

// ─── Animation variants ───────────────────────────────────────────────────────

/**
 * clipPath reveal — the premium fullscreen overlay technique.
 * inset(0 0 100% 0) = fully clipped (invisible, clipped from bottom)
 * inset(0 0 0% 0)   = fully revealed
 * This is smoother than opacity/transform because it's compositor-only.
 * The ease [0.16, 1, 0.3, 1] is the expo-out curve — fast start, soft land.
 */
const overlayVariants = {
  hidden: {
    clipPath: 'inset(0 0 100% 0)',
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  visible: {
    clipPath: 'inset(0 0 0% 0)',
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

/**
 * Stagger container — controls the timing between each child link.
 * delayChildren waits for the overlay to be mostly open before links appear.
 * staggerChildren fires each link 0.06s after the previous one.
 */
const linkListVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.25,
    },
  },
}

/**
 * Individual link — slides up from 32px below and fades in.
 * The y:32 gives it a sense of weight and arrival rather than
 * a generic fade which feels flat on large type.
 */
const linkItemVariants = {
  hidden:  { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
}

/**
 * Bottom content (availability) fades in last, slower.
 * Feels considered rather than rushed.
 */
const footerVariants = {
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, delay: 0.5 },
  },
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function Brand({ onClick }) {
  return (
    <NavLink
      to={navBrand.href}
      className="navbar__brand"
      aria-label={navBrand.ariaLabel}
      onClick={onClick}
    >
    <Logo className="navbar__logo" />
    </NavLink>
  )
}

/**
 * Logo — inline SVG using currentColor.
 * Kept inside Navbar.jsx for simplicity.
 * If you import from Logo.jsx, replace this with:
 * import Logo from '../Logo/Logo'
 */


function DesktopLinks() {
  return (
    <nav
      className="navbar__desktop-links"
      aria-label="Main navigation"
      role="navigation"
    >
      {navLinks.map(link => (
        <NavLink
          key={link.id}
          to={link.href}
          className={({ isActive }) =>
            `navbar__link ${isActive ? 'navbar__link--active' : ''}`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  )
}

function CTAButton() {
  return (
    <NavLink
      to={navCTA.href}
      className="navbar__cta"
      aria-label={navCTA.ariaLabel}
    >
      <span>{navCTA.label}</span>
      <span className="navbar__cta-arrow" aria-hidden="true">→</span>
    </NavLink>
  )
}

/**
 * HamburgerButton
 *
 * THE FIX — why it was vanishing:
 * The overlay (z-index:99) was creating a stacking context that painted
 * over the navbar actions even though navbar is z-index:100.
 * This happens because position:fixed elements create isolated stacking
 * contexts — the z-index only competes within the same context.
 *
 * Solution: navbar__actions gets position:relative + z-index:101
 * in CSS. This lifts it above BOTH the navbar (100) and overlay (99)
 * so the hamburger is always clickable regardless of menu state.
 *
 * The three lines animate to an X via CSS transforms — no JS needed.
 * Line 1: slides down + rotates 45°
 * Line 2: fades out + shrinks to 0 width
 * Line 3: slides up + rotates -45°
 */
function HamburgerButton({ isOpen, toggle }) {
  return (
    <button
      className={`navbar__hamburger ${isOpen ? 'navbar__hamburger--open' : ''}`}
      onClick={toggle}
      aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
      aria-expanded={isOpen}
      aria-controls="navbar-mobile-menu"
      type="button"
    >
      <span className="navbar__hamburger-line" aria-hidden="true" />
      <span className="navbar__hamburger-line" aria-hidden="true" />
      <span className="navbar__hamburger-line" aria-hidden="true" />
    </button>
  )
}

/**
 * MobileMenu
 *
 * AnimatePresence is critical here — without it, React removes the
 * element from the DOM before the exit animation can play, so the
 * menu just disappears instantly with no closing animation.
 *
 * The overlay sits at z-index:99, below the navbar (100) and the
 * hamburger actions wrapper (101). This is intentional — the logo
 * and hamburger must always remain visible and tappable.
 */
function MobileMenu({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="navbar-mobile-menu"
          className="navbar__mobile-menu"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <motion.nav
            className="navbar__mobile-links"
            variants={linkListVariants}
            initial="hidden"
            animate="visible"
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.id}
                variants={linkItemVariants}
                className="navbar__mobile-link-wrapper"
              >
                <NavLink
                  to={link.href}
                  className={({ isActive }) =>
                    `navbar__mobile-link ${isActive ? 'navbar__mobile-link--active' : ''}`
                  }
                  onClick={onClose}
                >
                  {/* Index number — editorial detail, subtle */}
                  <span
                    className="navbar__mobile-link-index"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="navbar__mobile-link-label">
                    {link.label}
                  </span>
                </NavLink>
              </motion.div>
            ))}

            <motion.div variants={linkItemVariants}>
              <NavLink
                to={navCTA.href}
                className="navbar__mobile-cta"
                onClick={onClose}
                aria-label={navCTA.ariaLabel}
              >
                <span>{navCTA.label}</span>
                <span aria-hidden="true">→</span>
              </NavLink>
            </motion.div>
          </motion.nav>

          {/* Bottom availability — anchored to footer of overlay */}
          <motion.div
            className="navbar__mobile-footer"
            variants={footerVariants}
            initial="hidden"
            animate="visible"
          >
            <span className="navbar__availability-dot" aria-hidden="true" />
            <span>Available for new projects</span>
            <span className="navbar__mobile-footer-divider" aria-hidden="true" />
            <span className="navbar__mobile-footer-location"> · Byron</span>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function Navbar({ scrollThreshold = 80 }) {
  const scrolled = useScrolled(scrollThreshold)
  const { isOpen, close, toggle } = useMenuOpen()
  const location = useLocation()

  // Close menu on route change
  useEffect(() => {
    close()
  }, [location.pathname, close])

  return (
    <header
      className={[
        'navbar',
        scrolled ? 'navbar--scrolled'     : 'navbar--transparent',
        isOpen   ? 'navbar--menu-open'    : '',
      ].filter(Boolean).join(' ')}
    >
      <div className="navbar__container">
        <Brand onClick={close} />
        <DesktopLinks />
        {/*
          navbar__actions has position:relative + z-index:101 in CSS.
          This is the fix that keeps the hamburger above the overlay.
        */}
        <div className="navbar__actions">
          <CTAButton />
          <HamburgerButton isOpen={isOpen} toggle={toggle} />
        </div>
      </div>

      <MobileMenu isOpen={isOpen} onClose={close} />
    </header>
  )
}