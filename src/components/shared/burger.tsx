export default function Burger({
  isMenuOpen,
  setIsMenuOpen
}: {
  isMenuOpen: boolean
  setIsMenuOpen: (isOpen: boolean) => void
}) {
  return (
    <div className='flex-1 flex items-center'>
      <button
        className='flex flex-col gap-1 burger cursor-pointer'
        onClick={() => setIsMenuOpen(true)}
        aria-label='Deschide meniul'
        aria-expanded={isMenuOpen}
        aria-controls='main-navigation'
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  )
}
