import React, { useState } from 'react'
import { info } from '../../info/Info.js'
import MainProjectCard from './MainProjectCard.jsx'
import MiniProjectCard from './MiniProjectCard.jsx'
import ProjectModal from './ProjectModal.jsx'

// ─── Terminal section header ──────────────────────────────────────────────────
function SectionHeader({ command }) {
  const firstName = info.firstName.toLowerCase()
  return (
    <div className="w-full max-w-5xl mx-auto mb-8 px-6">
      <div className="rounded-lg shadow-[0_.5rem_1rem_rgba(0,0,0,0.4)] overflow-hidden">
        <div className="bg-[#8c8c8c] px-3 py-2 flex gap-2">
          <i className="fa-solid fa-circle text-[#FF6057] text-xs" />
          <i className="fa-solid fa-circle text-[#FFBD2E] text-xs" />
          <i className="fa-solid fa-circle text-[#27C93F] text-xs" />
        </div>
        <div className="bg-terminal text-light px-8 py-4 font-mono text-sm">
          <span style={{ color: info.baseColor }}>{firstName} $</span>{' '}
          {command}
        </div>
      </div>
    </div>
  )
}

// ─── Projects page ────────────────────────────────────────────────────────────
export default function Projects({ innerRef }) {
  const [selectedProject, setSelectedProject] = useState(null)

  const mainProjects = info.projects?.main ?? []
  const miniProjects = info.projects?.mini ?? []

  return (
    <section ref={innerRef} id="projects" className="py-12 flex flex-col items-center">

      {/* ── Main projects ── */}
      {mainProjects.length > 0 && (
        <>
          <SectionHeader command="ls --featured" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full px-6 mb-16">
            {mainProjects.map((project, i) => (
              <MainProjectCard
                key={i}
                project={project}
                onViewMore={setSelectedProject}
              />
            ))}
          </div>
        </>
      )}

      {/* ── Mini projects ── */}
      {miniProjects.length > 0 && (
        <>
          <SectionHeader command="ls --mini" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl w-full px-6">
            {miniProjects.map((project, i) => (
              <MiniProjectCard
                key={i}
                project={project}
                onViewMore={setSelectedProject}
              />
            ))}
          </div>
        </>
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
