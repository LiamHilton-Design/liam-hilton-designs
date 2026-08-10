/**
 * MarqueeStrip.jsx
 * Liam Hilton Design
 *
 * Renders items in a seamless looping marquee. Text-only — no icon
 * markup, so no per-render SVG parsing cost and no trademark/logo
 * usage question to manage.
 */

import './MarqueeStrip.css'

export default function MarqueeStrip({
  items      = [],
  speed      = 'medium',
  direction  = 'left',
  variant    = 'default',
  separator  = '·',
}) {
  if (!items.length) return null

  const doubled = [...items, ...items]

  const speeds = { slow: '40s', medium: '28s', fast: '16s' }
  const duration = speeds[speed] || '28s'

  const trackStyle = {
    display: 'flex',
    width: 'max-content',
    animation: `marquee${direction === 'right' ? 'Right' : 'Left'} ${duration} linear infinite`,
  }

  const containerStyle = {
    width: '100%',
    overflow: 'hidden',
    WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
    maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
  }

  const isTools = variant === 'tools'

  const wrapperStyle = isTools ? {
    paddingBlock: '20px',
    borderTop: '1px solid var(--color-border)',
    borderBottom: '1px solid var(--color-border)',
    backgroundColor: '#ffffff',
  } : {
    paddingBlock: '12px',
    backgroundColor: '#ffffff',
  }

  return (
    <div style={wrapperStyle} aria-hidden="true">
      <div style={containerStyle}>
        <div
          className={`marquee__track marquee__track--${direction}`}
          style={trackStyle}
        >
          {doubled.map((item, i) => (
            <span
              key={`${item.id}-${i}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: isTools ? '10px' : '8px',
                paddingInline: isTools ? '28px' : '16px',
                whiteSpace: 'nowrap',
                flexShrink: 0,
              }}
            >
              {/* Label */}
              <span style={{
                fontFamily: 'var(--font-body)',
                fontSize: isTools ? '0.875rem' : '0.75rem',
                fontWeight: isTools ? '600' : '500',
                letterSpacing: isTools ? '0.02em' : '0.1em',
                textTransform: isTools ? 'none' : 'uppercase',
                color: 'var(--color-text-muted)',
              }}>
                {item.label}
              </span>

              {/* Separator */}
              <span style={{
                color: 'var(--color-brand)',
                fontWeight: '700',
                opacity: 0.6,
                fontSize: '0.85em',
              }}>
                {separator}
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}