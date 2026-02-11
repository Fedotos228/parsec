import Header from '@/components/layout/header'
import { ConfettiFireworks } from '@/components/shared/confetti-fireworks'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function SuccesRoute() {
  return (
    <>
      <Header position='absolute' />
      <main className='h-dvh relative'>
        <Image
          src='/Ilustratie.png'
          alt='Ilustratie pizdoasa'
          fill
          className='object-cover'
        />
        <div className='w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center px-4'>
          <h1 className='display-text display-lg mb-3'>Cerea a fost trimisă!</h1>
          <p className='mx-auto max-w-231'>Cererea ta a fost trimisă cu succes și a ajuns la echipa noastră. Îți vom răspunde în cel mai scurt timp posibil. Între timp, dacă ai întrebări sau dorești să ne oferi mai multe detalii, te rugăm să ne contactezi.</p>
          <Button asChild className='mt-14 mx-auto'>
            <Link href='/contact'>
              Trimite altă cerere
            </Link>
          </Button>
        </div>
        <ConfettiFireworks />
      </main>
    </>
  )
}
