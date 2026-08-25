import React from 'react'

export default function SocialIcon({ link, icon, label }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-dark dark:text-light hover:opacity-60 transition-opacity duration-200"
    >
      <i className={icon} aria-hidden="true" />
    </a>
  )
}
