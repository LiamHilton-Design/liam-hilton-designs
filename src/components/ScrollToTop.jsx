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
 */

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return null
}