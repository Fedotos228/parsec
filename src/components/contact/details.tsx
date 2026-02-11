import { FragmentType, useFragment } from '@/gql'
import { ContactDetailsFragment } from '@/queries/contact.queries'
import { SocialsLinkFragment } from '@/queries/general.queries'
import Link from 'next/link'

interface DetailsProps {
  socials: FragmentType<typeof SocialsLinkFragment>
  details: FragmentType<typeof ContactDetailsFragment>
}

export default function Details({ socials, details }: DetailsProps) {
  const links = useFragment(SocialsLinkFragment, socials)
  const detail = useFragment(ContactDetailsFragment, details)



  return (
    <div className='self-center space-y-10 md:space-y-14 *:text-label-dark bg-footer rounded-3xl xl:rounded-none xl:bg-transparent p-6 xl:p-0'>
      {detail.details && detail.details.map((item, i) => (
        <div key={i}>
          <h4 className='mb-3'>{item?.title}</h4>
          <Link
            href={item?.link?.url || '#'}
            target={item?.link?.target || '_blank'}
            className='text-lable text-sm md:text-base'
          >
            {item?.link?.title}
          </Link>
        </div>
      ))}
      <div>
        <h4 className='mb-3'>Urmăriți</h4>
        <div className='flex items-center gap-4 md:gap-9'>
          {links.links && links.links.map((item, i) => (
            <Link
              key={i}
              href={item?.link?.url || "#"}
              target={item?.link?.target || '_blank'}
              className='text-lable text-sm md:text-base'
            >
              {item?.link?.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
