import React, { useState } from 'react'
import { info } from '../../info/Info.js'
import MainProjectCard from './MainProjectCard.jsx'
import MiniProjectCard from './MiniProjectCard.jsx'
import ProjectModal from './ProjectModal.jsx'

// ─── Projects page ────────────────────────────────────────────────────────────
export default function Projects({ innerRef }) {
  const [selectedProject, setSelectedProject] = useState(null)
  const firstName = info.firstName.toLowerCase()

  const mainProjects = info.projects?.main ?? []
  const miniProjects = info.projects?.mini ?? []

  return (
    <section ref={innerRef} id="projects" className="py-12 flex flex-col items-center">

      {/* ── Main projects terminal ── */}
      {mainProjects.length > 0 && (
        <section className="w-11/12 max-w-5xl rounded-lg mb-16 shadow-[0_.5rem_1rem_rgba(0,0,0,0.4)] overflow-hidden">
          {/* Header */}
          <div className="bg-[#8c8c8c] px-3 py-2 flex gap-2">
            <i className="fa-solid fa-circle text-[#FF6057] text-xs" />
            <i className="fa-solid fa-circle text-[#FFBD2E] text-xs" />
            <i className="fa-solid fa-circle text-[#27C93F] text-xs" />
          </div>
          {/* Body */}
          <div className="bg-terminal text-light py-6 md:py-8 px-6 md:px-10 font-mono text-base md:text-lg leading-relaxed">
            <p className="mb-6">
              <span style={{ color: info.baseColor }}>{firstName} $</span>{' '}
              ls --featured
            </p>
            {/* The cards nested inside the terminal */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {mainProjects.map((project, i) => (
                <MainProjectCard
                  key={i}
                  project={project}
                  onViewMore={setSelectedProject}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Mini projects terminal ── */}
      {miniProjects.length > 0 && (
        <section className="w-11/12 max-w-5xl rounded-lg mb-16 shadow-[0_.5rem_1rem_rgba(0,0,0,0.4)] overflow-hidden">
          {/* Header */}
          <div className="bg-[#8c8c8c] px-3 py-2 flex gap-2">
            <i className="fa-solid fa-circle text-[#FF6057] text-xs" />
            <i className="fa-solid fa-circle text-[#FFBD2E] text-xs" />
            <i className="fa-solid fa-circle text-[#27C93F] text-xs" />
          </div>
          {/* Body */}
          <div className="bg-terminal text-light py-6 md:py-8 px-6 md:px-10 font-mono text-base md:text-lg leading-relaxed">
            <p className="mb-6">
              <span style={{ color: info.baseColor }}>{firstName} $</span>{' '}
              ls --mini
            </p>
            {/* The mini cards nested inside the terminal */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {miniProjects.map((project, i) => (
                <MiniProjectCard
                  key={i}
                  project={project}
                  onViewMore={setSelectedProject}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Detail modal ── */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}
