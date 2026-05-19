'use client'

import Image from 'next/image'

type Partner = {
  image?: {
    node: {
      sourceUrl?: string | null
      altText?: string | null
    }
  } | null
} | null

type Props = {
  firstThird: Partner[]
  secondThird: Partner[]
  thirdThird: Partner[]
}

function MarqueeRow({ partners, reverse }: { partners: Partner[]; reverse?: boolean }) {
  const items = [...partners, ...partners]

  return (
    <div className='overflow-hidden'>
      <div
        className='flex gap-8 w-max'
        style={{ animation: `${reverse ? 'marquee-reverse' : 'marquee'} var(--marquee-duration) linear infinite` }}
      >
        {items.map((partner, i) =>
          partner?.image?.node.sourceUrl ? (
            <div key={i} className='flex-none w-40 flex items-center justify-center'>
              <Image
                src={partner.image.node.sourceUrl}
                alt={partner.image.node.altText || `Partner ${(i % partners.length) + 1}`}
                width={160}
                height={80}
                className='w-auto h-auto max-h-20 object-contain'
                style={{ width: "auto", height: "auto" }}
              />
            </div>
          ) : null
        )}
      </div>
    </div>
  )
}

export default function PartnersCarousel({ firstThird, secondThird, thirdThird }: Props) {
  return (
    <div className='flex flex-col gap-8 py-12 px-4 overflow-hidden'>
      <MarqueeRow partners={firstThird} />
      <MarqueeRow partners={secondThird} reverse />
      <MarqueeRow partners={thirdThird} />
    </div>
  )
}
