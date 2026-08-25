import React from 'react'

export default function Toggler({ darkMode, handleClick }) {
  return (
    <button
      onClick={handleClick}
      aria-label="Toggle dark mode"
      className="text-2xl cursor-pointer hover:-translate-y-1 transition-transform duration-250 bg-transparent border-none"
    >
      {darkMode
        ? <span role="img" aria-label="Light mode">🌕</span>
        : <span role="img" aria-label="Dark mode">🌑</span>
      }
    </button>
  )
}
