import { footerNavigation } from '@/lib/constans'
import NavigationItem from './navigation-item'

export default function FooterNavigation() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-16'>
      {footerNavigation.map(({ title, list }) => (
        <NavigationItem key={title} title={title} list={list} />
      ))}
    </div>
  )
}
