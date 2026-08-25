import React from 'react'

export default function IconLink({ link, title, icon }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 hover:opacity-70 transition-opacity duration-200"
    >
      <i className={icon} aria-hidden="true" />
      {title}
    </a>
  )
}
