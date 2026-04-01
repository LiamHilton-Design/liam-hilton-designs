/**
 * useScrolled.js
 * Custom hook — detects when page has scrolled past a threshold
 *
 * WHY A CUSTOM HOOK:
 * A hook is just a function that uses React features (useState, useEffect).
 * By pulling the scroll logic OUT of Navbar.jsx and into its own file,
 * the Navbar component stays clean and readable — it just calls
 * useScrolled() and gets back a true/false value.
 *
 * This hook can now be reused in ANY component that needs scroll awareness
 * — a "back to top" button, a sticky sidebar, a progress bar.
 *
 * PERFORMANCE NOTE:
 * { passive: true } on the event listener is critical on mobile.
 * It tells the browser "this listener will never call preventDefault()"
 * so the browser doesn't have to wait for your JS before scrolling.
 * Without it, scrolling on iOS/Android can feel laggy.
 *
 * The cleanup function (return () => window.removeEventListener)
 * prevents a memory leak — without it, every time the component
 * mounts, a NEW listener is added but the old one is never removed.
 */

import { useState, useEffect } from 'react'

export function useScrolled(threshold = 80) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    // Run once immediately in case page loads mid-scroll (e.g. browser back)
    setScrolled(window.scrollY > threshold)

    function handleScroll() {
      setScrolled(window.scrollY > threshold)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    // Cleanup: remove listener when component unmounts
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return scrolled
}