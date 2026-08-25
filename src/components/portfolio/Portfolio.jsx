import React from 'react'
import PortfolioBlock from './PortfolioBlock.jsx'
import { info } from '../../info/Info.js'

export default function Portfolio({ innerRef }) {
  return (
    <section
      ref={innerRef}
      id="portfolio"
      className="py-12"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-6">
        {info.portfolio.map((project, index) => (
          <PortfolioBlock
            key={index}
            image={project.image}
            live={project.live}
            source={project.source}
            title={project.title}
          />
        ))}
      </div>
    </section>
  )
}
