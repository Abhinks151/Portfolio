import React from 'react'

export default function Terminal({ text }) {
  return (
    <section className="w-4/5 md:w-1/2 rounded-lg mb-16 shadow-[0_.5rem_1rem_rgba(0,0,0,0.4)]">
      {/* Title bar */}
      <div className="bg-[#8c8c8c] rounded-t-lg px-3 py-2 flex gap-2">
        <i className="fa fa-circle text-[#FF6057]" />
        <i className="fa fa-circle text-[#FFBD2E]" />
        <i className="fa fa-circle text-[#27C93F]" />
      </div>
      {/* Body */}
      <div className="bg-terminal text-light rounded-b-lg py-6 md:py-8 px-8 md:px-12 font-mono text-lg leading-relaxed">
        {text}
      </div>
    </section>
  )
}
