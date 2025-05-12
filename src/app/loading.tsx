import { Logo } from '@/components/ui/logo'

export default function Loading() {
  return (
    <div className='flex h-screen w-full items-center justify-center'>
      <Logo className='animate-pulse' />
    </div>
  )
}