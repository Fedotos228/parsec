import { IServiceItem } from '@/types/services.types'

export const services: IServiceItem[] = [
  {
    id: 1,
    slug: 'event-managment',
    title: 'Managmentul evenimentelor',
    href: '/event-managment',
    description: 'Organizarea și gestionarea evenimentelor de orice tip, de la conferințe la evenimente de brand.',
    tags: ['Planificare', 'Logistica', 'Lansare', 'Conferințe'],
    imageUrl: '/assets/image/services/event-managment.jpg',
    clientsLogos: [
      {
        id: 1,
        alt: 'unfpa',
        src: '/assets/image/logos/partners/unfpa.png',
      },
      {
        id: 2,
        alt: 'unfpa',
        src: '/assets/image/logos/partners/unfpa.png',
      }
    ],
    portfolio: [
      {
        slug: 'undp',
        title: 'UNDP',
        company: 'UNDP',
        imageUrl: '/assets/image/landscape.png',
        description: 'Organizarea evenimentului de lansare a raportului „Să ne îngrijim de noi înșine”',
        services: ['Comunicare strategică', 'Comunicare si PR', 'Comunicare de criză', 'Foto video', 'Graphic Design', 'Dezvoltarea web'],
      },
      {
        slug: 'unfpa',
        title: 'UNFPA',
        company: 'UNDP',
        imageUrl: '/assets/image/landscape.png',
        description: 'Organizarea evenimentului de lansare a raportului „Să ne îngrijim de noi înșine”',
        services: ['Comunicare strategică', 'Comunicare si PR', 'Comunicare de criză', 'Foto video', 'Graphic Design', 'Dezvoltarea web'],
      },
      {
        slug: 'pnud',
        title: 'PNUD',
        company: 'UNDP',
        imageUrl: '/assets/image/landscape.png',
        description: 'Organizarea evenimentului de lansare a raportului „Să ne îngrijim de noi înșine”',
        services: ['Comunicare strategică', 'Comunicare si PR', 'Comunicare de criză', 'Foto video', 'Graphic Design', 'Dezvoltarea web'],
      }
    ]
  },
  {
    id: 2,
    title: 'Comunicare strategică',
    slug: 'strategic-communication',
    href: '/strategic-communication',
    description: 'Creăm strategii de comunicare pentru a atinge obiectivele de business și a ajunge la publicul țintă.',
    tags: ['Analiză', 'Definire audiență', 'Planuri de comunicare'],
    imageUrl: '/assets/image/services/comunicare-strategica.jpg',
    clientsLogos: [
      {
        id: 1,
        alt: 'unfpa',
        src: '/assets/image/logos/partners/unfpa.png',
      },
      {
        id: 2,
        alt: 'unfpa',
        src: '/assets/image/logos/partners/unfpa.png',
      }
    ]
  },
  {
    id: 3,
    title: 'Comunicare si PR',
    slug: 'pr-communication',
    href: '/pr-communication',
    description: 'Construim și menținem imaginea brandului prin relații publice eficiente.',
    tags: ['Relații cu media', 'Comunicate', 'Campanii PR'],
    imageUrl: '/assets/image/services/pr.jpg',
    clientsLogos: [
      {
        id: 1,
        alt: 'unfpa',
        src: '/assets/image/logos/partners/unfpa.png',
      },
      {
        id: 2,
        alt: 'unfpa',
        src: '/assets/image/logos/partners/unfpa.png',
      }
    ]
  },
  {
    id: 4,
    slug: 'crisis-communication',
    title: 'Comunicare de criză',
    href: '/crisis-communication',
    description: 'Găsim soluții rapide și eficiente pentru gestionarea crizelor de comunicare.',
    tags: ['Gestionare urgențe', 'Comunicare rapidă', 'Planuri'],
    imageUrl: '/assets/image/services/criza.jpg',
    clientsLogos: [
      {
        id: 1,
        alt: 'unfpa',
        src: '/assets/image/logos/partners/unfpa.png',
      },
      {
        id: 2,
        alt: 'unfpa',
        src: '/assets/image/logos/partners/unfpa.png',
      }
    ]
  },
  {
    id: 5,
    slug: 'photo-video',
    title: 'Foto video',
    href: '/photo-video',
    description: 'Creăm conținut vizual de calitate pentru a transmite mesajul corect.',
    tags: ['Fotografie', 'Filmare', 'Editare'],
    imageUrl: '/assets/image/services/camera.jpg',
    clientsLogos: [
      {
        id: 1,
        alt: 'unfpa',
        src: '/assets/image/logos/partners/unfpa.png',
      },
      {
        id: 2,
        alt: 'unfpa',
        src: '/assets/image/logos/partners/unfpa.png',
      }
    ]
  },
  {
    id: 6,
    slug: 'graphic-design',
    title: 'Grafică & Graphic Design',
    href: '/graphic-design',
    description: 'Creăm design-uri care captează atenția și transmit clar mesajul.',
    tags: ['Design vizual', 'Design vizual', 'Ilustrații'],
    imageUrl: '/assets/image/services/design.jpg',
    clientsLogos: [
      {
        id: 1,
        alt: 'unfpa',
        src: '/assets/image/logos/partners/unfpa.png',
      },
      {
        id: 2,
        alt: 'unfpa',
        src: '/assets/image/logos/partners/unfpa.png',
      }
    ]
  },
  {
    id: 7,
    slug: 'web-development',
    title: 'Dezvoltarea web',
    href: '/web-development',
    description: 'Construim site-uri funcționale și adaptate nevoilor tale.',
    tags: ['Creare site-uri', 'Dezvoltare', 'Optimizare'],
    imageUrl: '/assets/image/services/coder.jpg',
    clientsLogos: [
      {
        id: 1,
        alt: 'unfpa',
        src: '/assets/image/logos/partners/unfpa.png',
      },
      {
        id: 2,
        alt: 'unfpa',
        src: '/assets/image/logos/partners/unfpa.png',
      }
    ]
  },
]