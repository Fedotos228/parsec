import localFont from 'next/font/local'

export const montserrat = localFont({
  src: [
    {
      path: '/font/Montserrat-Black.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: '/font/Montserrat-BlackItalic.woff2',
      weight: '900',
      style: 'italic',
    },
    {
      path: '/font/Montserrat-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '/font/Montserrat-ExtraBoldItalic.woff2',
      weight: '800',
      style: 'italic',
    },
    {
      path: '/font/Montserrat-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '/font/Montserrat-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
    {
      path: '/font/Montserrat-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '/font/Montserrat-SemiBoldItalic.woff2',
      weight: '600',
      style: 'italic',
    },
    {
      path: '/font/Montserrat-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '/font/Montserrat-MediumItalic.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: '/font/Montserrat-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '/font/Montserrat-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '/font/Montserrat-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '/font/Montserrat-LightItalic.woff2',
      weight: '300',
      style: 'italic',
    },
    {
      path: '/font/Montserrat-ExtraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '/font/Montserrat-ExtraLightItalic.woff2',
      weight: '200',
      style: 'italic',
    },
    {
      path: '/font/Montserrat-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '/font/Montserrat-ThinItalic.woff2',
      weight: '100',
      style: 'italic',
    },
    {
      path: '/font/Montserrat-Variable.woff2',
      weight: '100 900',
      style: 'normal',
    },
    {
      path: '/font/Montserrat-VariableItalic.woff2',
      weight: '100 900',
      style: 'italic',
    },
  ],
  variable: '--font-montserrat',
  display: 'swap',
  preload: true,
  fallback: ['sans-serif'],
})
