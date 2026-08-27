import React from 'react'

export default function Terminal({ text, children }) {
  return (
    <section className="w-11/12 max-w-5xl rounded-lg mb-16 shadow-[0_.5rem_1rem_rgba(0,0,0,0.4)] overflow-hidden">
      {/* Title bar */}
      <div className="bg-[#8c8c8c] px-3 py-2 flex gap-2">
        <i className="fa-solid fa-circle text-[#FF6057] text-xs" />
        <i className="fa-solid fa-circle text-[#FFBD2E] text-xs" />
        <i className="fa-solid fa-circle text-[#27C93F] text-xs" />
      </div>
      {/* Body */}
      <div className="bg-terminal text-light py-6 md:py-8 px-6 md:px-10 font-mono text-base md:text-lg leading-relaxed">
        {text || children}
      </div>
    </section>
  )
}
