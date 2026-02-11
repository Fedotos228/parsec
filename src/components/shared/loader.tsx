import Image from 'next/image'

export default function Loader() {
  return (
    <div className='absolute inset-0 w-full h-full bg-background flex items-center justify-center'>
      <Image
        src="/Logo.svg"
        alt='Logo Parsec'
        width={200}
        height={200}
        className='animate-pulse'
      />
    </div>
  )
}