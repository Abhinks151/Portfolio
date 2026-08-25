import React, { useEffect, useState } from 'react'
import Navbar from './Navbar.jsx'
import { useLocation } from 'react-router-dom'
import MultiPageRoutes from './MultiPageRoutes.jsx'
import SinglePageRoutes from './SinglePageRoutes.jsx'
import useScrollObserver from '../hooks/useScrollObserver.js'
import { singlePage } from '../info/Info.js'

export default function BaseLayout() {
  const location = useLocation()

  const [active, setActive] = useState(
    location.pathname === '/' ? 'home' : location.pathname.slice(1)
  )
  const [darkMode, setDarkMode] = useState(true)

  const refHome = useScrollObserver(setActive)
  const refAbout = useScrollObserver(setActive)
  const refProjects = useScrollObserver(setActive)
  const refBlog = useScrollObserver(setActive)
  const refContact = useScrollObserver(setActive)

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('darkMode'))
    if (stored !== null) {
      setDarkMode(stored)
    }
  }, [])

  useEffect(() => {
    const html = document.documentElement
    if (darkMode) {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
  }, [darkMode])

  function handleToggleDarkMode() {
    setDarkMode(prev => !prev)
  }

  return (
    <div className="min-h-screen flex flex-col bg-light dark:bg-dark text-dark dark:text-light transition-colors duration-400">
      <Navbar
        darkMode={darkMode}
        handleClick={handleToggleDarkMode}
        active={active}
        setActive={setActive}
      />

      <main className="flex-1">
        {singlePage
          ? <SinglePageRoutes refs={{ refHome, refAbout, refProjects, refBlog, refContact }} />
          : <MultiPageRoutes />
        }
      </main>

      <footer className="flex flex-col items-center py-6 text-muted text-sm">
        <p>
          template created with ♥ by{' '}
          <a href="https://paytonpierce.dev" className="underline hover:opacity-80">
            Payton Pierce
          </a>
        </p>
        <p>© 2024</p>
      </footer>
    </div>
  )
}
