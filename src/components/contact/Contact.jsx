import React from 'react'
import Terminal from '../about/Terminal.jsx'
import { info } from '../../info/Info.js'

function ContactContent() {
  const firstName = info.firstName.toLowerCase()

  const channels = info.socials.map(s => ({
    label: s.label,
    icon: s.icon,
    link: s.link,
  }))

  return (
    <>
      <p>
        <span style={{ color: info.baseColor }}>{firstName} $</span>{' '}
        cat contact.md
      </p>
      <p className="mt-3">
        <span style={{ color: info.baseColor }}>
          contact <span className="text-[#27C93F]">(main)</span> $
        </span>{' '}
        The best way to reach me is by email or LinkedIn.
      </p>

      {/* Email */}
      <div className="mt-4 space-y-2">
        {info.miniBio.filter(b => b.text.includes('@')).map((b, i) => (
          <p key={i}>
            <span style={{ color: info.baseColor }}>email </span>
            <a
              href={`mailto:${b.text}`}
              className="underline hover:opacity-70 transition-opacity"
            >
              {b.text}
            </a>
          </p>
        ))}
      </div>

      {/* Socials */}
      <p style={{ color: info.baseColor }} className="mt-4">socials</p>
      <ul className="mt-2 space-y-1">
        {channels.map((c, i) => (
          <li key={i} className="flex items-center gap-3">
            <i className={`${c.icon} w-4`} aria-hidden="true" />
            <a
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-70 transition-opacity text-sm"
            >
              {c.link.replace('https://', '')}
            </a>
          </li>
        ))}
      </ul>

      <p className="mt-6 opacity-40 text-sm">
        <span style={{ color: info.baseColor }}>{firstName} $</span>{' '}
        # I try to reply within 24–48 hours
      </p>
    </>
  )
}

export default function Contact({ innerRef }) {
  return (
    <section
      ref={innerRef}
      id="contact"
      className="flex flex-col items-center mt-12 pb-12"
    >
      <Terminal text={<ContactContent />} />
    </section>
  )
}
