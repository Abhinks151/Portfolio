import React from 'react'

/**
 * Large card for main (full-stack) projects.
 * Two per row on desktop, full-width on mobile.
 */
export default function MainProjectCard({ project, onViewMore }) {
  return (
    <div className="flex flex-col rounded-xl overflow-hidden border border-white/10 bg-white/5 hover:-translate-y-1 transition-transform duration-300 shadow-lg hover:shadow-xl">
      {/* Hero image */}
      <div className="aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Card body */}
      <div className="flex flex-col gap-3 p-5">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="text-base text-muted font-mono leading-relaxed line-clamp-2">
          {project.tagline}
        </p>

        <button
          onClick={() => onViewMore(project)}
          className="mt-2 self-start inline-flex items-center gap-2 px-6 py-2 rounded-full border-2 border-accent text-accent text-sm font-sans font-bold hover:bg-accent hover:text-dark transition-all duration-200 group shadow-sm"
        >
          View More
          <i className="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition-transform duration-200" />
        </button>
      </div>
    </div>
  )
}
