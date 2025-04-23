import { links } from '@/lib/constans'
import Image from "next/image"
import Link from 'next/link'
import { LineArrowRight } from '../../icons'
import { Paragraph } from '../../ui/typography/paragraph'


export default function Services() {
  return (
    <div className='relative h-dvh'>
      <Image
        src='/assets/image/cosmonaut.png'
        alt='cosmonaut'
        width={1430}
        height={1024}
        className='absolute inset-0 w-full h-dvh object-cover -z-10'
      />

      <div className='h-full flex flex-col justify-center gap-6 default-padding'>
        <Paragraph type='sm' color={'accent'} className='uppercase'>
          ne specializăm în
        </Paragraph>
        <div className='flex flex-col w-fit gap-8'>
          {links.map(link => (
            <Link
              key={link.id}
              href={link.href}
              className='w-fit flex items-center text-3xl font-semibold hover:text-accent-500 transition-colors duration-500 ease-in-out group'
            >
              {link.lable}
              <LineArrowRight
                width={68}
                height={68}
                className='opacity-0 transition-all duration-300 fill-accent-500 group-hover:opacity-100 group-hover:translate-x-5'
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
