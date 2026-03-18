import { PartnersQuery } from '@/queries/home.queries'
import { wpFetch } from '@/queries/wordpress'
import Image from 'next/image'

export default async function Partners() {
  const data = await wpFetch(PartnersQuery)
  const partners = data.pageBy?.home?.partners

  if (!partners) return null

  return (
    <section className=''>
      <h2 className='mt-20 mb-5 text-center'>Partenerii Noștri</h2>
      <div className="container mx-auto py-12 px-4">
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center'>
          {partners && partners.map((partner, i) => (
            <div key={i} className='group flex items-center justify-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 h-32 w-full'>
              {partner?.image && partner?.image.node.sourceUrl ? (
                <Image
                  src={partner.image.node.sourceUrl}
                  alt={partner.image.node.altText || 'Partner Logo'}
                  width={220}
                  height={140}
                  className="max-h-full w-auto object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}