import React from 'react'
import Home from './home/Home.jsx'
import About from './about/About.jsx'
import Blog from './blog/Blog.jsx'
import Contact from './contact/Contact.jsx'
import Projects from './portfolio/Projects.jsx'

export default function SinglePageRoutes({ refs }) {
  return (
    <div className="mt-12">
      <Home innerRef={refs.refHome} />
      <About innerRef={refs.refAbout} />
      <Projects innerRef={refs.refProjects} />
      <Blog innerRef={refs.refBlog} />
      <Contact innerRef={refs.refContact} />
    </div>
  )
}
