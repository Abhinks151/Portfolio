import React from 'react'
import me from '../../img/self.png'
import EmojiBullet from './EmojiBullet.jsx'
import SocialIcon from './SocialIcon.jsx'
import { info } from '../../info/Info.js'
import './Home.css'

export default function Home({ innerRef }) {
  return (
    <section
      ref={innerRef}
      id="home"
      className="flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-175px)] px-6 gap-8"
    >
      {/* Avatar */}
      <img
        src={me}
        alt="Developer portrait"
        className="rounded-full p-3 shadow-lg w-[35vh] h-[35vh] md:w-[40vh] md:h-[40vh] object-cover mb-4 md:mb-0 md:mr-8"
        style={{ background: info.gradient }}
      />

      {/* Info */}
      <div className="flex flex-col items-center md:items-start gap-3">
        <h1 className="text-4xl md:text-5xl font-bold text-center md:text-left">
          Hi, I'm{' '}
          <span style={{ background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            {info.firstName}
          </span>
          <span className="wave inline-block ml-2">🤚</span>
        </h1>

        <h2 className="text-xl md:text-2xl text-center md:text-left opacity-80">
          I'm {info.position}.
        </h2>

        <ul className="mt-2 space-y-1 px-3">
          {info.miniBio.map((bio, index) => (
            <EmojiBullet key={index} emoji={bio.emoji} text={bio.text} />
          ))}
        </ul>

        <div className="flex gap-6 mt-3 text-3xl md:text-4xl">
          {info.socials.map((social, index) => (
            <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} />
          ))}
        </div>
      </div>
    </section>
  )
}
