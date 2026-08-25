import React from 'react'
import Toggler from './home/Toggler.jsx'
import { useLocation } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
import { info, singlePage } from '../info/Info.js'
import './Navbar.css'

const links = [
  { name: 'Home', to: '', active: 'home' },
  { name: 'About Me', to: 'about', active: 'about' },
  { name: info.initials, type: 'initials', to: '', active: 'home' },
  { name: 'Portfolio', to: 'portfolio', active: 'portfolio' },
]

const scrollWithOffset = (el) => {
  const y = el.getBoundingClientRect().top + window.pageYOffset - 80
  window.scrollTo({ top: y, behavior: 'smooth' })
}

export default function Navbar({ darkMode, handleClick, active, setActive }) {
  return (
    <nav className={`w-full z-10 transition-all duration-400 ${singlePage ? 'fixed' : 'relative'} bg-light dark:bg-dark`}>
      <ul className="flex justify-center items-center gap-8 md:gap-32 text-base lowercase px-4 py-3">
        {links.map((link, index) => (
          <li
            key={index}
            className={`transition-transform duration-250 hover:-translate-y-1 ${link.active === active && !link.type ? 'nav-active' : ''
              }`}
            style={link.active === active && !link.type
              ? { borderImageSource: info.gradient }
              : {}}
          >
            <Link
              to={singlePage ? `#${link.to}` : `/${link.to}`}
              scroll={scrollWithOffset}
              smooth
              onClick={() => setActive(link.active)}
              className="text-dark dark:text-light hover:opacity-80 transition-opacity"
            >
              {link.type
                ? <h1 className="text-xl font-bold">{link.name}</h1>
                : <p className="py-2">{link.name}</p>
              }
            </Link>
          </li>
        ))}
        <li>
          <Toggler darkMode={darkMode} handleClick={handleClick} />
        </li>
      </ul>
    </nav>
  )
}
