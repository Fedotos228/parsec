import { readFileSync } from 'fs'
import { ImageResponse } from 'next/og'
import { join } from 'path'

export const alt = 'Parsec | Consultanță Strategică și PR'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  // 1. Încărcăm resursele de pe disc
  const garamondBold = readFileSync(
    join(process.cwd(), 'public/fonts/garamond/EBGaramond-VariableFont.ttf')
  )
  const hellixRegular = readFileSync(
    join(process.cwd(), 'public/fonts/helix/Hellix-Regular.ttf')
  )
  
  // Citim logoul SVG ca string
  const logoSvg = readFileSync(join(process.cwd(), 'public/Logo.svg'), 'utf8')

  return new ImageResponse(
    (
      <div
        style={{
          background: '#000',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        {/* Imagine de fundal (Opțional - poți folosi Ilustratie.png dacă dorești un background vizual) */}
        {/* <img 
          src={`data:image/png;base64,...`} 
          style={{ position: 'absolute', opacity: 0.2, width: '100%' }} 
        /> 
        */}

        {/* Logoul SVG complet integrat direct */}
        <div 
          style={{ 
            display: 'flex',
            width: '180px', 
            height: '180px',
            marginBottom: '40px'
          }}
          dangerouslySetInnerHTML={{ __html: logoSvg }}
        />

        {/* Text principal */}
        <div
          style={{
            fontSize: 64,
            fontFamily: 'EB Garamond',
            color: 'white',
            lineHeight: 1.1,
            maxWidth: '1000px',
            marginBottom: '20px'
          }}
        >
          Consultanță Strategică și PR Full-Service
        </div>

        {/* Subtitlu / Descriere */}
        <div style={{ 
          color: '#888', 
          fontSize: 28, 
          fontFamily: 'Hellix',
          maxWidth: '800px'
        }}>
          Eficiență și Calitate prin parteneriate strategice
        </div>

        {/* Indicator brand jos */}
        <div style={{
          position: 'absolute',
          bottom: 40,
          color: 'rgba(255,255,255,0.4)',
          fontSize: 20,
          fontFamily: 'Hellix',
          textTransform: 'uppercase',
          letterSpacing: '4px'
        }}>
          parsec.md
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'EB Garamond',
          data: garamondBold,
          style: 'normal',
          weight: 700,
        },
        {
          name: 'Hellix',
          data: hellixRegular,
          style: 'normal',
          weight: 400,
        },
      ],
    }
  )
}