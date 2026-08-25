import React from 'react'
import Home from './home/Home.jsx'
import About from './about/About.jsx'
import Projects from './portfolio/Projects.jsx'
import Blog from './blog/Blog.jsx'
import Contact from './contact/Contact.jsx'
import { Route, Routes } from 'react-router-dom'

export default function MultiPageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}
