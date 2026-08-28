import React, { useState } from 'react'
import { info } from '../../info/Info.js'
import MainProjectCard from './MainProjectCard.jsx'
import MiniProjectCard from './MiniProjectCard.jsx'
import ProjectModal from './ProjectModal.jsx'
import Terminal from '../about/Terminal.jsx'

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
        <Terminal>
          <p>
            <span style={{ color: info.baseColor }}>{firstName} $</span>{' '}
            cd projects
          </p>
          <p className="mb-6">
            <span style={{ color: info.baseColor }}>{firstName}/projects $</span>{' '}
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
        </Terminal>
      )}

      {/* ── Mini projects terminal ── */}
      {miniProjects.length > 0 && (
        <Terminal>
          <p>
            <span style={{ color: info.baseColor }}>{firstName} $</span>{' '}
            cd projects
          </p>
          <p className="mb-6">
            <span style={{ color: info.baseColor }}>{firstName}/projects $</span>{' '}
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
        </Terminal>
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
