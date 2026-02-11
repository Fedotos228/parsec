export default function Burger({
  setIsMenuOpen
}: {
  setIsMenuOpen: (isOpen: boolean) => void
}) {
  return (
    <div className='flex-1 flex items-center'>
      <button
        className='flex flex-col gap-1 burger cursor-pointer'
        onClick={() => setIsMenuOpen(true)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  )
}
