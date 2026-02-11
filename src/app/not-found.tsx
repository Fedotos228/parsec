import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '404 - NU EXISTĂ PAGINĂ',
  description: 'Pagina care o vezi nu există',
}

export default function NotFound() {
  return (
    <div className='h-dvh flex items-center justify-center flex-col gap-2.5'>
      <h1>nu ai ajuns unde trebuie...</h1>
      <p>Ești sigur că aici ar trebui sa fii?</p>
      <Link href='/' className='underline'>Dute acasă</Link>
    </div>
  )
}
