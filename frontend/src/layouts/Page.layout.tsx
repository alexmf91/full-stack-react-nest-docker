import { Children } from 'react'

interface PageLayoutProps {
  children: Array<JSX.Element>
}

export default function PageLayout({ children }: PageLayoutProps) {
  const [sidebar, content] = Children.toArray(children)
  return (
    <div className="h-screen sm:grid grid-cols-[350px_minmax(0,_1fr)]">
      <aside className="flex justify-center hidden px-5 py-10 sm:block bg-secondary w-full h-full bg-slate-200 ">
        {sidebar}
      </aside>
      <section className="p-10 mx-auto place-items-center w-full bg-slate-100">
        {content}
      </section>
    </div>
  )
}
