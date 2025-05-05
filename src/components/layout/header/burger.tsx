type BurgerProps = {
  isOpen: boolean
  handleClick: () => void
}

export default function Burger({ isOpen, handleClick }: BurgerProps) {
  return (
    <div
      className='relative w-[60px] h-[60px] flex items-center justify-center cursor-pointer z-50'
      onClick={handleClick}
    >
      <span className={`absolute w-[40px] h-1 bg-foreground transition-all duration-[400ms] ease-in-out -transform-y-1/2 ${isOpen ? 'top-1/2 rotate-45' : 'top-[calc(50%_-_6px)]'}`}></span>
      <span className={`absolute w-[40px] h-1 bg-foreground transition-all duration-[400ms] ease-in-out -transform-y-1/2 ${isOpen ? 'top-1/2 -rotate-45' : 'top-[calc(50%_+_6px)]'}`}></span>
    </div>
  )
}
