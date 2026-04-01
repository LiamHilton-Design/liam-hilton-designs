/**
 * AnimatedGrid.jsx — Updated for light background visibility
 * Liam Hilton Designs
 *
 * KEY CHANGES for light background:
 * - strokeOpacity increased to 0.12 (was 0.2 but vignette was hiding it)
 * - circle fillOpacity increased to 0.18 at intersections
 * - The vignette is now handled by hero::after pseudo-element in CSS
 *   so the grid doesn't get fully obscured by an overlay
 */

import './AnimatedGrid.css'

export default function AnimatedGrid() {
  return (
    <div className="hero__grid" aria-hidden="true">
      <svg
        className="hero__grid-svg"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern
            id="lhd-grid"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            {/* Vertical line */}
            <line
              x1="0" y1="0" x2="0" y2="60"
              stroke="var(--color-primary)"
              strokeWidth="1"
              strokeOpacity="0.25"
            />
            {/* Horizontal line */}
            <line
              x1="0" y1="0" x2="60" y2="0"
              stroke="var(--color-primary)"
              strokeWidth="0.75"
              strokeOpacity="0.25"
            />
            {/* Intersection dot */}
            <circle
              cx="0" cy="0" r="1.5"
              fill="var(--color-primary)"
              fillOpacity="0.18"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#lhd-grid)" />
      </svg>
    </div>
  )
}