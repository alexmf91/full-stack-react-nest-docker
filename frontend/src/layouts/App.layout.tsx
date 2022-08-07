import { Header, Footer } from '@noister/components'

interface Props {
  children: React.ReactNode
}

function AppLayout({ children }: Props) {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default AppLayout
