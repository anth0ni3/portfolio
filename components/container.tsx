import { Header, Footer } from '@/components'

type Props = { children: Children }

export const Container = ({ children }: Props) => {
  return (
    <section className="container mx-auto flex min-h-screen max-w-4xl flex-col py-8 px-3 md:px-10 lg:px-16 ">
      <Header />
      <main className="min-h-xs flex-1 py-14 px-2 sm:py-20">{children}</main>
      <Footer />
    </section>
  )
}
