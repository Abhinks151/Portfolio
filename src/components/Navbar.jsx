import React, { useState } from 'react'
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
  const [menuOpen, setMenuOpen] = useState(false)

  const handleLinkClick = (linkActive) => {
    setActive(linkActive)
    setMenuOpen(false)
  }

  return (
    <nav className={`w-full z-10 transition-all duration-400 ${singlePage ? 'fixed' : 'relative'} bg-light dark:bg-dark border-b border-black/10 dark:border-white/10`}>
      <div className="flex justify-between items-center px-6 py-3 max-w-7xl mx-auto">

        {/* Brand */}
        <Link
          to={singlePage ? '#' : '/'}
          onClick={() => handleLinkClick('home')}
          className="text-xl font-bold tracking-wide text-dark dark:text-light hover:opacity-70 transition-opacity"
          style={{ background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
        >
          {info.firstName}
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-6 text-sm lowercase">
          {links.map((link, index) => (
            <li
              key={index}
              className={`transition-transform duration-250 hover:-translate-y-0.5 ${link.active === active ? 'nav-active' : ''}`}
              style={link.active === active ? { borderImageSource: info.gradient } : {}}
            >
              <Link
                to={singlePage ? `#${link.to}` : `/${link.to}`}
                scroll={scrollWithOffset}
                smooth
                onClick={() => handleLinkClick(link.active)}
                className="text-dark dark:text-light hover:opacity-60 transition-opacity py-2 block"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Resume — desktop only */}
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

          {/* Hamburger button — mobile only */}
          <button
            id="mobile-menu-toggle"
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span
              className="block h-0.5 w-6 transition-all duration-300 rounded-full"
              style={{
                background: info.gradient,
                transform: menuOpen ? 'translateY(8px) rotate(45deg)' : 'none',
              }}
            />
            <span
              className="block h-0.5 w-6 transition-all duration-300 rounded-full"
              style={{
                background: info.gradient,
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block h-0.5 w-6 transition-all duration-300 rounded-full"
              style={{
                background: info.gradient,
                transform: menuOpen ? 'translateY(-8px) rotate(-45deg)' : 'none',
              }}
            />
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          } border-t border-black/10 dark:border-white/10 bg-light dark:bg-dark`}
      >
        <ul className="flex flex-col px-6 py-4 gap-1 text-sm lowercase font-mono">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                to={singlePage ? `#${link.to}` : `/${link.to}`}
                scroll={scrollWithOffset}
                smooth
                onClick={() => handleLinkClick(link.active)}
                className={`flex items-center gap-2 w-full py-2.5 px-3 rounded-lg transition-all duration-200 ${link.active === active
                    ? 'bg-white/10 dark:bg-white/10'
                    : 'hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
              >
                {/* Accent dot for active item */}
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-200"
                  style={{
                    background: link.active === active ? info.gradient : 'transparent',
                    boxShadow: link.active === active ? `0 0 6px ${info.baseColor}` : 'none',
                  }}
                />
                <span
                  className="text-dark dark:text-light"
                  style={link.active === active ? { background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' } : {}}
                >
                  {link.name}
                </span>
              </Link>
            </li>
          ))}

          {/* Resume link in drawer */}
          <li className="mt-3 pt-3 border-t border-black/10 dark:border-white/10">
            <a
              href={info.resumeUrl || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full text-sm font-medium text-light transition-opacity hover:opacity-80"
              style={{ background: info.gradient }}
              onClick={() => setMenuOpen(false)}
            >
              <i className="fa-solid fa-file-arrow-down text-xs" />
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
