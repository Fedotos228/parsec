import { services } from '@/lib/services.constans'
import ServiceItem from './service-item'

export default function ServicesItems() {
  return (
    <div>
      {services.map(item => (
        <ServiceItem
          key={item.id}
          slug={item.slug}
          id={item.id}
          title={item.title}
          tags={item.tags}
          description={item.description}
          clientsLogos={item.clientsLogos}
          href={item.href}
          imageUrl={item.imageUrl || ''}
        />
      ))}
    </div>
  )
}
