import Details from '@/components/contact/details'
import Form from '@/components/contact/form'
import Header from '@/components/layout/header'
import { ContactDetails } from '@/queries/contact.queries'
import { SocialQuery } from '@/queries/general.queries'
import { wpFetch } from '@/queries/wordpress'
import Link from 'next/link'

export default async function FormRoute() {
  const socialData = await wpFetch(SocialQuery)
  const detailsData = await wpFetch(ContactDetails)

  const socials = socialData.generalSettings?.generalSettingsOptions?.socials
  const details = detailsData.pageBy?.contact

  return (
    <>
      <Header position="static" />
      <main className='grid grid-cols-1 xl:grid-cols-[1fr_20%] gap-15 xl:gap-45.5 max-w-310 mx-auto py-15 px-4'>
        <div>
          <div className='max-w-169.25'>
            <h3>Scrie-ne!</h3>
            <p>
              Descrieți proiectul și lăsați-ne datele dvs. de contact <br />
              Nu vă place să completați formulare? Trimiteți un e-mail la <Link href='mailto:contact@parsec.md' className='text-pastel underline underline-offset-5'>contact@parsec.md</Link>
            </p>
          </div>
          <Form />
        </div>
        {socials && details && <Details socials={socials} details={details} />}
      </main>
    </>
  )
}

