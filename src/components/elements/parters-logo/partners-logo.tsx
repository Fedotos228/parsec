import { useStrapiQuery } from '@/hooks/use-strapi'
import { partnersLogo } from '@/lib/constans'
import { testimonialsService } from '@/services/testimonials.service'
import Image from 'next/image'
import styles from './partners-logo.module.css'

const stylesRoot = {
  '--width': '100px',
  '--height': '56px',
  '--quatity': Number(partnersLogo.length),
  '--animation-duration': '15s',
} as React.CSSProperties

export default function PartnersLogo() {
  const { data: logos } = useStrapiQuery(
    ['partnersLogo'],
    () => testimonialsService.getClientsLogos(),
  )

  return (
    <div
      className={styles.slider}
      style={stylesRoot}
    >
      <div className={styles.list}>
        {logos?.map((logo, i) => (
          <div
            key={logo.alt}
            className={styles.item}
            style={{
              '--position': i + 1,
            } as React.CSSProperties}
          >
            <Image
              src={process.env.STRAPI_BASE + logo.image.url}
              alt={logo.alt}
              width={100}
              height={56}
              className={styles.imgs}
            />
          </div>
        ))}
      </div>
    </div>
  )
}