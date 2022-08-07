import { NavLink, Link } from 'react-router-dom'
import noisterLogo from '../assets/noister.svg'

interface MenuItem {
  title: string
}

export default function Header() {
  const menuItems: Array<MenuItem> = [{ title: 'home' }, { title: 'gasazon' }]
  const linkStyles = 'flex flex-1 ml-16 mr-6 text-transform: capitalize'

  return (
    <header className="bg-white px-8 py-2">
      <nav className="flex">
        <Link to="/">
          <img className="w-36 py-2" src={noisterLogo} alt="noister-logo" />
        </Link>
        <ul className="flex items-center">
          {menuItems?.map((page: MenuItem) => (
            <li key={page.title}>
              <NavLink
                to={page.title}
                className={({ isActive }) =>
                  isActive
                    ? `${linkStyles} text-amber-500 font-bold`
                    : `${linkStyles} text-black font-semibold`
                }
              >
                {page.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
