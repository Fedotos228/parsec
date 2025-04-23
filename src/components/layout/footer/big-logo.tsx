import Image from 'next/image'

export const BigLogo = () => {
  return (
    <div className='lg:py-[160px]'>
      <Image
        src={'/assets/image/logos/big-logo.svg'}
        alt='Big Logo'
        width={1440}
        height={235}
        className='w-full h-auto '
      />
    </div>
  )
}