import React from 'react'
import Home from './home/Home.jsx'
import About from './about/About.jsx'
import Portfolio from './portfolio/Portfolio.jsx'

export default function SinglePageRoutes({ refs }) {
  return (
    <div className="mt-12">
      <Home innerRef={refs.refHome} />
      <About innerRef={refs.refAbout} />
      <Portfolio innerRef={refs.refPortfolio} />
    </div>
  )
}
