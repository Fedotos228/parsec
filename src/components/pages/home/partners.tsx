import { PartnersQuery } from '@/queries/home.queries'
import { wpFetch } from '@/queries/wordpress'
import PartnersCarousel from './partners-carousel'

export default async function Partners() {
  const data = await wpFetch(PartnersQuery)
  const partners = data.pageBy?.home?.partners

  if (!partners) return null

  const firstHalf = partners.slice(0, Math.floor(partners.length / 2))
  const secondHalf = partners.slice(Math.floor(partners.length / 2))


  const oneThird = Math.ceil(partners.length / 3)

  const firstThird = partners.slice(0, oneThird)
  const secondThird = partners.slice(oneThird, 2 * oneThird)
  const thirdThird = partners.slice(2 * oneThird)

  return (
    <section className='my-8 md:my-10'>
      <h2 className='mt-20 mb-5 text-center'>Partenerii Noștri</h2>
      <PartnersCarousel firstThird={firstThird} secondThird={secondThird} thirdThird={thirdThird} />
    </section>
  )
}