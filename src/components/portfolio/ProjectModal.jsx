import React, { useState, useEffect, useCallback } from 'react'
import RichText from './RichText.jsx'
import { info } from '../../info/Info.js'

const TABS = ['about', 'tech-stack', 'architecture']

// ─── Tech badge pill ─────────────────────────────────────────────────────────
function Badge({ label }) {
  return (
    <span className="bg-white/10 px-2.5 py-0.5 rounded text-sm font-mono">
      {label}
    </span>
  )
}

// ─── Tab: About ──────────────────────────────────────────────────────────────
function AboutTab({ project }) {
  const firstName = info.firstName.toLowerCase()
  return (
    <div className="space-y-5">
      {/* Terminal prompt */}
      <p className="font-mono text-sm">
        <span style={{ color: info.baseColor }}>{firstName} $</span>{' '}
        cat project/about.md
      </p>

      {/* Title */}
      <h2 className="text-2xl font-semibold">{project.title}</h2>

      {/* Link buttons */}
      {project.links && project.links.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {project.links.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-accent text-accent text-sm font-mono hover:bg-accent hover:text-dark transition-colors duration-200"
            >
              <i className="fa-solid fa-arrow-up-right-from-square text-xs" />
              {link.label}
            </a>
          ))}
        </div>
      )}

      {/* Description */}
      <RichText text={project.description} className="text-sm leading-relaxed" />
    </div>
  )
}

// ─── Tab: Tech Stack ─────────────────────────────────────────────────────────
function TechStackTab({ project }) {
  const firstName = info.firstName.toLowerCase()
  const ts = project.techStack || {}
  const sections = [
    { label: 'Frontend', items: ts.frontend || [] },
    { label: 'Backend', items: ts.backend || [] },
    { label: 'Others', items: ts.others || [] },
  ]

  return (
    <div className="space-y-5">
      <p className="font-mono text-sm">
        <span style={{ color: info.baseColor }}>{firstName} $</span>{' '}
        cat project/tech-stack.md
      </p>
      {sections.map(({ label, items }) =>
        items.length > 0 ? (
          <div key={label}>
            <p style={{ color: info.baseColor }} className="text-sm mb-2">
              {label}
            </p>
            <div className="flex flex-wrap gap-2">
              {items.map(item => (
                <Badge key={item} label={item} />
              ))}
            </div>
          </div>
        ) : null
      )}
    </div>
  )
}

// ─── Tab: Architecture ───────────────────────────────────────────────────────
function ArchitectureTab({ project }) {
  const firstName = info.firstName.toLowerCase()
  return (
    <div className="space-y-5">
      <p className="font-mono text-sm">
        <span style={{ color: info.baseColor }}>{firstName} $</span>{' '}
        cat project/architecture.md
      </p>
      <RichText text={project.architecture} className="text-sm leading-relaxed" />
    </div>
  )
}

// ─── Modal ────────────────────────────────────────────────────────────────────
export default function ProjectModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState('about')

  // Reset to first tab when project changes
  useEffect(() => {
    setActiveTab('about')
  }, [project])

  // Close on Escape
  const handleKeyDown = useCallback(
    e => { if (e.key === 'Escape') onClose() },
    [onClose]
  )
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    // Prevent body scroll while modal is open
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [handleKeyDown])

  if (!project) return null

  const renderTab = () => {
    switch (activeTab) {
      case 'about': return <AboutTab project={project} />
      case 'tech-stack': return <TechStackTab project={project} />
      case 'architecture': return <ArchitectureTab project={project} />
      default: return null
    }
  }

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      {/* Modal window — stop propagation so inner clicks don't close */}
      <div
        className="w-full max-w-4xl max-h-[90vh] flex flex-col rounded-lg shadow-2xl overflow-hidden"
        style={{ background: '#27242f' }}
        onClick={e => e.stopPropagation()}
      >
        {/* ── Terminal chrome bar ── */}
        <div className="bg-[#8c8c8c] px-3 py-2 flex items-center gap-2 shrink-0">
          {/* Red dot closes the modal — macOS style */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            title="Close"
            className="w-3 h-3 rounded-full bg-[#FF6057] hover:brightness-110 transition cursor-pointer focus:outline-none"
          />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
          <span className="ml-3 text-xs text-black/60 font-mono select-none">
            {project.title.toLowerCase().replace(/\s+/g, '-')} — bash
          </span>
        </div>

        {/* ── Body ── */}
        <div className="flex flex-col md:flex-row flex-1 overflow-hidden text-light font-mono">

          {/* Left: sticky hero image */}
          <div className="md:w-2/5 shrink-0 p-4 flex flex-col gap-4 md:overflow-y-auto">
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="rounded-lg w-full object-cover aspect-video md:sticky md:top-0"
            />
            {/* Tagline under image on desktop */}
            <p className="text-xs text-muted hidden md:block leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Right: tab nav + content */}
          <div className="flex-1 flex flex-col overflow-hidden border-l border-white/10">
            {/* Tab nav */}
            <div className="flex shrink-0 border-b border-white/10">
              {TABS.map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={[
                    'px-4 py-2.5 text-xs font-mono transition-colors duration-150 focus:outline-none',
                    activeTab === tab
                      ? 'text-accent border-b-2 border-accent -mb-px'
                      : 'text-muted hover:text-light',
                  ].join(' ')}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Scrollable tab content */}
            <div className="flex-1 overflow-y-auto p-6">
              {renderTab()}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
