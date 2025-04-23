'use client'

import styles from './burger.module.css'

type BurgerProps = {
  isOpen: boolean
  handleClick: () => void
}

export default function Burger({ isOpen, handleClick }: BurgerProps) {
  return (
    <div
      className={`${styles.burger} ${isOpen ? styles.open : ''}`}
      onClick={handleClick}
    >
      <span></span>
      <span></span>
    </div>
  )
}
