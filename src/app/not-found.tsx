import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='flex h-lvh items-center justify-center'>
      <h2 className='text-8xl font-bold text-center text-accent-500'>404</h2>
      <p className='text-3xl font-bold text-center text-neutral-300'>Pagina nu poate fi accesată</p>
      <Button asChild>
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  )
}