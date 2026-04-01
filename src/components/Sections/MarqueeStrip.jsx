/**
 * MarqueeStrip.jsx — Self-contained version with inline CSS
 * Liam Hilton Designs
 *
 * WHY INLINE STYLES HERE:
 * The marquee wasn't rendering visually despite the component mounting.
 * Most likely cause: MarqueeStrip.css import path was wrong or
 * the CSS file wasn't being found by Vite.
 *
 * This version uses inline styles for the critical layout properties
 * so it renders correctly regardless of CSS file resolution.
 * The CSS file can still be imported for fine-tuning — these inline
 * styles just ensure the base rendering always works.
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
              {/* Icon — tools variant */}
              {item.icon && isTools && (
                <span
                  style={{ width: '18px', height: '18px', flexShrink: 0 }}
                  dangerouslySetInnerHTML={{ __html: item.icon }}
                />
              )}

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