'use client'

export default function ScrollButton() {
  const handleClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  return (
    <button className='relative w-7 h-13 border border-foreground rounded-full' onClick={handleClick}>
      <span className='absolute top-4 left-1/2 -translate-x-1/2 block w-1 h-1 bg-foreground rounded-full animate-[arrowFade_1300ms_ease-in-out_forward]'></span>
    </button>
  )
}
