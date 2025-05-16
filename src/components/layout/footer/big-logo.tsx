import Image from 'next/image'

export const BigLogo = () => {
  return (
    <div className='hidden w-full h-full sm:flex justify-center items-center'>
      <Image
        src={'/assets/image/logos/big-logo.svg'}
        alt='Big Logo'
        width={1440}
        height={235}
        className='w-full h-auto object-contain'
      />
    </div>
  )
}