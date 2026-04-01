/**
 * useMenuOpen.js
 * Custom hook — manages mobile menu open/close state
 *
 * WHY TWO SEPARATE HOOKS (useScrolled + useMenuOpen):
 * Each hook does exactly ONE thing. This is called the
 * Single Responsibility Principle — a core rule of clean code.
 * If you put both inside Navbar.jsx it still works, but the
 * component becomes harder to read and impossible to reuse.
 *
 * THREE BEHAVIOURS THIS HOOK HANDLES:
 *
 * 1. Toggle open/close when hamburger is clicked
 *
 * 2. Close when a nav link is clicked
 *    (without this, the menu stays open after navigation — very
 *    common bug that feels broken on mobile)
 *
 * 3. Close when Escape key is pressed
 *    (WCAG 2.1 accessibility requirement — keyboard users must
 *    be able to dismiss any overlay with Escape)
 *
 * 4. Lock body scroll when menu is open
 *    (prevents the page scrolling behind the overlay on iOS —
 *    one of the most common mobile menu bugs)
 */

import { useState, useEffect, useCallback } from 'react'

export function useMenuOpen() {
  const [isOpen, setIsOpen] = useState(false)

  const open  = useCallback(() => setIsOpen(true),  [])
  const close = useCallback(() => setIsOpen(false), [])
  const toggle = useCallback(() => setIsOpen(prev => !prev), [])

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape' && isOpen) close()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, close])

  // Lock body scroll when menu open (critical on iOS Safari)
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    // Cleanup — always restore scroll when component unmounts
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return { isOpen, open, close, toggle }
}