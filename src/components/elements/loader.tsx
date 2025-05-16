import { Logo } from '../ui/logo'

export default function Loader() {
  return (
    <div className='flex h-screen w-full items-center justify-center'>
      <Logo className='animate-pulse' />
    </div>
  )
}
