import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Terminal from './about/Terminal.jsx'
import { info } from '../info/Info.js'

function NotFoundContent() {
  const location = useLocation()
  const firstName = info.firstName.toLowerCase()
  const [typed, setTyped] = useState('')
  const command = `cd ${location.pathname}`

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setTyped(command.slice(0, i + 1))
      i++
      if (i >= command.length) clearInterval(interval)
    }, 60)
    return () => clearInterval(interval)
  }, [command])

  return (
    <>
      {/* Command that triggered the error */}
      <p>
        <span style={{ color: info.baseColor }}>{firstName} $</span>{' '}
        <span>{typed}</span>
        <span className="animate-pulse">▋</span>
      </p>

      {/* Error output */}
      <div className="mt-4 space-y-1 text-red-400">
        <p>bash: cd: {location.pathname}: No such file or directory</p>
        <p>Error 404 — route not found</p>
      </div>

      {/* Divider */}
      <div
        className="mt-6 border-l-2 pl-4 space-y-2"
        style={{ borderColor: info.baseColor }}
      >
        <p className="font-semibold text-base">
          Looks like you're lost in the filesystem.
        </p>
        <p className="text-sm text-muted">
          The path you requested doesn't exist on this server.
          Double-check the URL, or navigate back to a known route.
        </p>
      </div>

      {/* Recovery command */}
      <p className="mt-6">
        <span style={{ color: info.baseColor }}>{firstName} $</span>{' '}
        cd /home
      </p>

      {/* Home link styled as terminal output */}
      <p className="mt-2 text-sm">
        →{' '}
        <Link
          to="/"
          className="underline underline-offset-2 hover:opacity-70 transition-opacity"
          style={{ color: info.baseColor }}
        >
          Return to Home
        </Link>
      </p>
    </>
  )
}

export default function NotFound() {
  return (
    <section className="flex flex-col items-center mt-12 pb-12">
      <Terminal text={<NotFoundContent />} />
    </section>
  )
}
