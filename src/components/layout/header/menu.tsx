import ContactLinks from '@/components/elements/contact-links'
import { Paragraph } from '@/components/ui/typography/paragraph'
import { cn } from '@/lib/utils'
import Navigation from './navigation'

export default function Menu({ isOpen }: { isOpen: boolean }) {
  return (
    <div className={cn('absolute inset-0 w-full h-dvh backdrop-blur-[32px] transition-all duration-500 after:content-[""] after:absolute after:inset-0 after:w-full after:h-full after:bg-black/40 overflow-hidden', isOpen ? 'visible opacity-100' : 'invisible opacity-0')}>
      <div className={cn('absolute right-0 w-5/6 sm:2/3 md:w-1/2 h-full px-6 lg:px-24 bg-neutral-900 transition-all duration-400 z-10', isOpen ? 'translate-x-0' : ' translate-x-full')}>
        <div className='absolute top-1/6  w-full'>
          <Paragraph color='accent' className='mb-6'>
            MENIU
          </Paragraph>
          <Navigation />
        </div>
        <div className='absolute bottom-[8%]'>
          <ContactLinks />
        </div>
      </div>
    </div>
  )
}