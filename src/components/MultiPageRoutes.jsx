import React from 'react'
import Home from './home/Home.jsx'
import About from './about/About.jsx'
import Portfolio from './portfolio/Portfolio.jsx'
import { Route, Routes } from 'react-router-dom'

export default function MultiPageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
  )
}
