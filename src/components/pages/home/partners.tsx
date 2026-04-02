import { PartnersQuery } from '@/queries/home.queries'
import { wpFetch } from '@/queries/wordpress'
import Image from 'next/image'

export default async function Partners() {
  const data = await wpFetch(PartnersQuery)
  const partners = data.pageBy?.home?.partners

  if (!partners) return null

  return (
    <section>
      <h2 className='mt-20 mb-5 text-center'>Partenerii Noștri</h2>
      <div className="container mx-auto py-12 px-4">
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
          {partners && partners.map((partner, i) => (
            <div key={i} className='group flex items-center justify-center p-6 bg-white/5 rounded-xl hover:bg-white transition-all duration-300 aspect-3/2'>
              {partner?.image && partner?.image.node.sourceUrl ? (
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={partner.image.node.sourceUrl}
                    alt={partner.image.node.altText || 'Partner Logo'}
                    width={220}
                    height={120}
                    className="max-w-[75%] max-h-[60%] w-auto h-auto object-contain opacity-90 md:grayscale md:opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}