import Socials from '@/components/elements/socials'
import { Logo } from '@/components/ui/logo'
import { BigLogo } from './big-logo'
import Copyright from './copyright'
import FooterNavigation from './footer-navigation'

export default function Footer() {
  return (
    <footer className=''>
      <BigLogo />
      <section className='max-w-[1280px] mx-auto px-4 lg:px-0 '>
        <div className='flex flex-col md:flex-row md:justify-between py-8 lg:py-10'>
          <div className='flex justify-between md:items-start gap-3.5 flex-col mb-8'>
            <Logo />
            <Socials type='buttons' />
          </div>
          <FooterNavigation />
        </div>
        <Copyright />
      </section>
    </footer>
  )
}
