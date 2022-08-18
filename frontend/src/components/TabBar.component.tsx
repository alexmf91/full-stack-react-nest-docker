import { NavLink } from 'react-router-dom'

interface TabBarProps {
  tabs: Array<string>
}

export default function TabBar({ tabs }: TabBarProps) {
  const linkStyles = 'px-4 py-1 mx-5 text-slate-100 text-transform: capitalize'

  return (
    <div className="flex bg-black h-fit px-5 justify-between">
      <nav className="p-2">
        <ul className="flex">
          {tabs.map((tab: string) => (
            <li key={tab}>
              <NavLink
                to={tab.toLocaleLowerCase().replace(' ', '-')}
                className={({ isActive }) =>
                  isActive ? `${linkStyles} border-b-4 border-amber-500 ` : linkStyles
                }
              >
                {tab}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
