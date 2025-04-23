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
        <div className='flex justify-between py-8 lg:py-10'>
          <div className='flex justify-between flex-col'>
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
