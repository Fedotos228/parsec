import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'

export default function Layout(props: LayoutProps<'/domain'>) {
  return (
    <>
      <Header position='absolute' />
      {props.children}
      <Footer />
    </>
  )
}