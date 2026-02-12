import { DomainQuery } from '@/queries/domains.queries'
import { wpFetch } from '@/queries/wordpress'
import { readFileSync } from 'fs'
import { ImageResponse } from 'next/og'
import { join } from 'path'

export const alt = 'Parsec | Servicii'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image({ params }: { params: { slug: string } }) {
  const { slug } = await params
  
  const data = await wpFetch(DomainQuery, { slug })
  const title = data.domainBy?.title || 'Servicii Parsec'
  const description = data.domainBy?.serviceFields?.hero?.description || 'Consultanță Strategică'

  const garamondBold = readFileSync(
    join(process.cwd(), 'public/fonts/garamond/EBGaramond-VariableFont.ttf')
  )
  const hellixRegular = readFileSync(
    join(process.cwd(), 'public/fonts/helix/Hellix-Regular.ttf')
  )
  const logoSvg = readFileSync(join(process.cwd(), 'public/Logo.svg'), 'utf8')
  
  const bgImage = readFileSync(join(process.cwd(), 'public/Ilustratie.png'))
  const bgBase64 = `data:image/png;base64,${bgImage.toString('base64')}`

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
          overflow: 'hidden',
        }}
      >
        <img 
          src={bgBase64} 
          alt=""
          style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '1200px', 
            height: '630px', 
            opacity: 0.3,
            objectFit: 'cover'
          }} 
        />

        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.8) 100%)',
        }} />

        <div 
          style={{ 
            display: 'flex',
            width: '120px', 
            height: '120px',
            marginBottom: '30px',
            zIndex: 10
          }}
          dangerouslySetInnerHTML={{ __html: logoSvg }}
        />

        <div
          style={{
            fontSize: 72,
            fontFamily: 'EB Garamond',
            color: 'white',
            lineHeight: 1.1,
            maxWidth: '1000px',
            marginBottom: '20px',
            zIndex: 10
          }}
        >
          {title}
        </div>

        <div style={{ 
          color: '#ccc', 
          fontSize: 26, 
          fontFamily: 'Hellix',
          maxWidth: '850px',
          zIndex: 10
        }}>
          {description.length > 150 ? description.substring(0, 150) + '...' : description}
        </div>

        <div style={{
          position: 'absolute',
          bottom: 40,
          color: 'rgba(255,255,255,0.5)',
          fontSize: 18,
          fontFamily: 'Hellix',
          textTransform: 'uppercase',
          letterSpacing: '3px',
          zIndex: 10
        }}>
          parsec.md | Strategic Consulting
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