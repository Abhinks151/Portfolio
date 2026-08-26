import React from 'react'
import Terminal from './Terminal.jsx'
import { info } from '../../info/Info.js'

export default function About({ innerRef }) {
  const firstName = info.firstName.toLowerCase()
  const rootPrompt = `${firstName} $`

  const aboutMeText = (
    <>
      <p>
        <span style={{ color: info.baseColor }}>{rootPrompt}</span>{' '}
        cd about
      </p>
      <p>
        <span style={{ color: info.baseColor }}>
          {firstName}/about $
        </span>{' '}
        cat bio.txt
      </p>
      <p className="mt-1">{info.bio}</p>
    </>
  )

  const skillCategories = [
    { label: 'Frontend', key: 'frontend' },
    { label: 'Backend', key: 'backend' },
    { label: 'Databases', key: 'databases' },
    { label: 'DevOps', key: 'devops' },
    { label: 'Tools', key: 'tools' },
  ]

  const skillsText = (
    <>
      <p>
        <span style={{ color: info.baseColor }}>{rootPrompt}</span>{' '}
        cd skills/tools
      </p>
      <p>
        <span style={{ color: info.baseColor }}>
          {firstName}/skills/tools $
        </span>{' '}
        ls
      </p>
      {skillCategories.map(({ label, key }) => (
        <div key={key}>
          <p style={{ color: info.baseColor }} className="mt-3">{label}</p>
          <ul className="flex flex-wrap gap-2 mt-1">
            {info.skills[key].map((s, i) => (
              <li key={i} className="bg-white/10 px-2 py-0.5 rounded text-sm">{s}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  )

  const miscText = (
    <>
      <p>
        <span style={{ color: info.baseColor }}>{rootPrompt}</span>{' '}
        cd hobbies/interests
      </p>
      <p>
        <span style={{ color: info.baseColor }}>
          {firstName}/hobbies/interests $
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