import React from 'react'
import IconLink from './IconLink.jsx'

export default function PortfolioBlock({ image, live, source, title }) {
  return (
    <div className="flex flex-col items-center gap-4 p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 bg-white/5">
      <img src={image} alt={`${title} mockup`} className="rounded-lg w-full object-cover" />
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="flex flex-col gap-2 items-center text-lg">
        <div className="px-4 py-1 border-2 border-current rounded-full">
          <IconLink link={live} title="Live Demo" icon="fa-solid fa-arrow-up-right-from-square" />
        </div>
        <div className="px-4 py-1 border-2 border-current rounded-full">
          <IconLink link={source} title="Source Code" icon="fa-solid fa-code" />
        </div>
      </div>
    </div>
  )
}
