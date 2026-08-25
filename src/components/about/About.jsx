import React from 'react'
import Terminal from './Terminal.jsx'
import { info } from '../../info/Info.js'

export default function About({ innerRef }) {
  const firstName = info.firstName.toLowerCase()

  const aboutMeText = (
    <>
      <p>
        <span style={{ color: info.baseColor }}>{firstName}{info.lastName.toLowerCase()} $</span>{' '}
        cat about {firstName}
      </p>
      <p>
        <span style={{ color: info.baseColor }}>
          about {firstName}<span className="text-[#27C93F]">(main)</span> $
        </span>{' '}
        {info.bio}
      </p>
    </>
  )

  const skillsText = (
    <>
      <p>
        <span style={{ color: info.baseColor }}>{firstName} {info.lastName.toLowerCase()} $</span>{' '}
        cd skills/tools
      </p>
      <p>
        <span style={{ color: info.baseColor }}>
          skills/tools <span className="text-[#27C93F]">(main)</span> $
        </span>{' '}
        ls
      </p>
      <p style={{ color: info.baseColor }} className="mt-2">Proficient With</p>
      <ul className="flex flex-wrap gap-2 mt-1">
        {info.skills.proficientWith.map((s, i) => (
          <li key={i} className="bg-white/10 px-2 py-0.5 rounded text-sm">{s}</li>
        ))}
      </ul>
      <p style={{ color: info.baseColor }} className="mt-3">Exposed To</p>
      <ul className="flex flex-wrap gap-2 mt-1">
        {info.skills.exposedTo.map((s, i) => (
          <li key={i} className="bg-white/10 px-2 py-0.5 rounded text-sm">{s}</li>
        ))}
      </ul>
    </>
  )

  const miscText = (
    <>
      <p>
        <span style={{ color: info.baseColor }}>{firstName}{info.lastName.toLowerCase()} $</span>{' '}
        cd hobbies/interests
      </p>
      <p>
        <span style={{ color: info.baseColor }}>
          hobbies/interests <span className="text-[#27C93F]">(main)</span> $
        </span>{' '}
        ls
      </p>
      <ul className="mt-2 space-y-1">
        {info.hobbies.map((h, i) => (
          <li key={i}><span className="mr-3">{h.emoji}</span>{h.label}</li>
        ))}
      </ul>
    </>
  )

  return (
    <section
      ref={innerRef}
      id="about"
      className="flex flex-col items-center mt-12 pb-12"
    >
      <Terminal text={aboutMeText} />
      <Terminal text={skillsText} />
      <Terminal text={miscText} />
    </section>
  )
}
