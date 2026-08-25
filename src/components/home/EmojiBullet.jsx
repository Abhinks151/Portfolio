import React from 'react'

export default function EmojiBullet({ emoji, text }) {
  return (
    <li className="text-base leading-relaxed cursor-default flex items-center gap-3">
      <span role="img" className="text-2xl">{emoji}</span>
      <span>{text}</span>
    </li>
  )
}
