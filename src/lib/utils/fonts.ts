import localFont from "next/font/local"

export const ebGaramond = localFont({
  src: [
    {
      path: '../../../public/fonts/garamond/EBGaramond-VariableFont.ttf',
      style: 'normal',
      weight: '400 800',
    },
    {
      path: '../../../public/fonts/garamond/EBGaramond-Italic-VariableFont.ttf',
      style: 'italic',
      weight: '400 800',
    }
  ],
  variable: '--font-eb-garamond',
  display: 'swap',
  preload: true,
})

export const helix = localFont({
  src: [
    {
      path: '../../../public/fonts/helix/Hellix-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/helix/Hellix-ThinItalic.ttf',
      weight: '100',
      style: 'italic',
    },
    {
      path: '../../../public/fonts/helix/Hellix-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/helix/Hellix-LightItalic.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../../../public/fonts/helix/Hellix-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/helix/Hellix-RegularItalic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../../public/fonts/helix/Hellix-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/helix/Hellix-MediumItalic.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../../../public/fonts/helix/Hellix-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/helix/Hellix-SemiBoldItalic.ttf',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../../../public/fonts/helix/Hellix-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/helix/Hellix-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../../../public/fonts/helix/Hellix-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/helix/Hellix-ExtraBoldItalic.ttf',
      weight: '800',
      style: 'italic',
    },
    {
      path: '../../../public/fonts/helix/Hellix-Black.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/helix/Hellix-BlackItalic.ttf',
      weight: '900',
      style: 'italic',
    },
  ],
  variable: '--font-helix',
  display: 'swap',
  preload: true,
  fallback: ['sans-serif'],
})