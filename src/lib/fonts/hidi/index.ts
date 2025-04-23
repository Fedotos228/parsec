import localFont from 'next/font/local'

export const hidi = localFont({
  src: [
    {
      path: './font/Hind-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './font/Hind-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './font/Hind-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './font/Hind-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './font/Hind-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './font/Hind-Variable.woff2',
      weight: '100 900',
      style: 'normal',
    },
  ],
  variable: '--font-hidi',
  display: 'swap',
  preload: true,
  fallback: ['sans-serif'],
})
