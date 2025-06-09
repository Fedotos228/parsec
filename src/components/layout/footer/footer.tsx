import Socials from '@/components/elements/socials'
import { Logo } from '@/components/ui/logo'
import { BigLogo } from './big-logo'
import Copyright from './copyright'
import FooterNavigation from './footer-navigation'

export default function Footer() {
  return (
    <footer className='h-lvh flex flex-col justify-between'>
      <BigLogo />
      <section className='default-inline-padding mx-auto w-full'>
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
