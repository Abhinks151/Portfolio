import React from 'react'
import Toggler from './home/Toggler.jsx'
import { HashLink as Link } from 'react-router-hash-link'
import { info, singlePage } from '../info/Info.js'
import '../assets/css/Navbar.css'

const links = [
  { name: 'Home', to: '', active: 'home' },
  { name: 'About', to: 'about', active: 'about' },
  { name: 'Projects', to: 'projects', active: 'projects' },
  { name: 'Blog', to: 'blog', active: 'blog' },
  { name: 'Contact', to: 'contact', active: 'contact' },
]

const scrollWithOffset = (el) => {
  const y = el.getBoundingClientRect().top + window.pageYOffset - 80
  window.scrollTo({ top: y, behavior: 'smooth' })
}

export default function Navbar({ darkMode, handleClick, active, setActive }) {
  return (
    <nav className={`w-full z-10 transition-all duration-400 ${singlePage ? 'fixed' : 'relative'} bg-light dark:bg-dark border-b border-black/10 dark:border-white/10`}>
      <div className="flex justify-between items-center px-6 py-3 max-w-7xl mx-auto">

        {/* Brand */}
        <Link
          to={singlePage ? '#' : '/'}
          onClick={() => setActive('home')}
          className="text-xl font-bold tracking-wide text-dark dark:text-light hover:opacity-70 transition-opacity"
          style={{ background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
        >
          {info.firstName}
        </Link>

        {/* Nav links */}
        <ul className="hidden md:flex items-center gap-6 text-sm lowercase">
          {links.map((link, index) => (
            <li
              key={index}
              className={`transition-transform duration-250 hover:-translate-y-0.5 ${link.active === active ? 'nav-active' : ''
                }`}
              style={link.active === active ? { borderImageSource: info.gradient } : {}}
            >
              <Link
                to={singlePage ? `#${link.to}` : `/${link.to}`}
                scroll={scrollWithOffset}
                smooth
                onClick={() => setActive(link.active)}
                className="text-dark dark:text-light hover:opacity-60 transition-opacity py-2 block"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side — Resume CTA + Toggler */}
        <div className="flex items-center gap-4">
          <a
            href={info.resumeUrl || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium border-2 border-transparent text-light transition-opacity hover:opacity-80"
            style={{ background: info.gradient }}
          >
            Resume
          </a>
          <Toggler darkMode={darkMode} handleClick={handleClick} />
        </div>

      </div>
    </nav>
  )
}
