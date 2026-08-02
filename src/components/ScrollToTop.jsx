/**
 * ScrollToTop.jsx
 * Liam Hilton Designs
 *
 * Scrolls to the top of the page on every route change.
 * Without this, React Router preserves scroll position when navigating —
 * so clicking "See case study" from mid-page opens the case study
 * at the same scroll position, not the top.
 *
 * This component renders nothing (returns null).
 * It only runs a side effect (useEffect) on location change.
 * Place it inside <BrowserRouter> in App.jsx — once, globally.
 *
 * LESSON — useLocation:
 * useLocation returns the current URL location object.
 * Adding location.pathname to useEffect's dependency array means
 * "run this effect every time the URL path changes."
 * This is how you hook into React Router navigation events
 * without any additional libraries.
 *
 * HASH HANDLING:
 * React Router does NOT auto-scroll to hash fragments (#process) —
 * it only updates the URL. If location.hash is present, we look up
 * that element by id and scroll to it instead of the top.
 * A small setTimeout gives the new page/section time to render
 * before we measure its position — without it, getBoundingClientRect
 * can fire before layout is ready, especially on first navigation
 * from a different route.
 */

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      const el = document.getElementById(id)

      if (el) {
        // Delay ensures the target section has rendered/laid out
        // before we try to scroll to it — matters most when
        // navigating from a different route (e.g. /services → /#process)
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 0)
        return
      }
    }

    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash])

  return null
}