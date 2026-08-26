import React from 'react'

/**
 * Compact card for mini (learning/exploration) projects.
 * Four per row on desktop, two on mobile.
 */
export default function MiniProjectCard({ project, onViewMore }) {
  return (
    <div className="flex flex-col rounded-lg overflow-hidden border border-white/10 bg-white/5 hover:-translate-y-0.5 transition-transform duration-300 shadow hover:shadow-lg">
      {/* Hero image */}
      <div className="aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Card body */}
      <div className="flex flex-col gap-2 p-3">
        <h4 className="text-base font-semibold truncate">{project.title}</h4>
        <p className="text-sm text-muted font-mono leading-relaxed line-clamp-2">
          {project.tagline}
        </p>

        <button
          onClick={() => onViewMore(project)}
          className="mt-1 self-start inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border-2 border-accent text-accent text-xs font-sans font-bold hover:bg-accent hover:text-dark transition-all duration-200 group shadow-sm"
        >
          View More
          <i className="fa-solid fa-arrow-right text-[10px] group-hover:translate-x-0.5 transition-transform duration-200" />
        </button>
      </div>
    </div>
  )
}
