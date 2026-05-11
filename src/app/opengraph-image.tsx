import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Parsec — Agenție de Marketing și PR în Chișinău, Moldova'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#000000',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          padding: '72px 80px',
          fontFamily: 'serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          <div
            style={{
              fontSize: 80,
              fontWeight: 700,
              color: '#ffffff',
              letterSpacing: '-2px',
              lineHeight: 1,
            }}
          >
            PARSEC
          </div>
          <div
            style={{
              fontSize: 28,
              color: 'rgba(255,255,255,0.6)',
              letterSpacing: '0.5px',
              lineHeight: 1.4,
            }}
          >
            Agenție de Marketing &amp; PR · Chișinău, Moldova
          </div>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 72,
            right: 80,
            fontSize: 20,
            color: 'rgba(255,255,255,0.35)',
            letterSpacing: '1px',
          }}
        >
          parsec.md
        </div>
      </div>
    ),
    { ...size }
  )
}
