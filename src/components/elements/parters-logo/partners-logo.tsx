import { partnersLogo } from '@/lib/constans'
import Image from 'next/image'
import styles from './partners-logo.module.css'

const stylesRoot = {
  '--width': '100px',
  '--height': '56px',
  '--quatity': Number(partnersLogo.length),
  '--animation-duration': '15s',
} as React.CSSProperties

export default function PartnersLogo() {
  return (
    <div
      className={styles.slider}
      style={stylesRoot}
    >
      <div className={styles.list}>
        {partnersLogo.map((logo, i) => (
          <div
            key={logo.id}
            className={styles.item}
            style={{
              '--position': i + 1,
            } as React.CSSProperties}
          >
            <Image
              src={logo.src}
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