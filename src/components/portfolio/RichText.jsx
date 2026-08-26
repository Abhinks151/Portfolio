import React from 'react'
import { parseParagraphs } from './parseInline.js'

/**
 * Renders a string from Info.js that may contain **bold** and `code` markup.
 * Paragraphs are separated by blank lines in the source string.
 */
export default function RichText({ text, className = '' }) {
  const paragraphs = parseParagraphs(text)

  return (
    <div className={`space-y-3 ${className}`}>
      {paragraphs.map((nodes, pi) => (
        <p key={pi}>
          {nodes.map(node => {
            if (node.type === 'bold') {
              return (
                <strong key={node.key} className="text-accent font-semibold">
                  {node.content}
                </strong>
              )
            }
            if (node.type === 'code') {
              return (
                <code
                  key={node.key}
                  className="bg-white/10 px-1.5 py-0.5 rounded text-sm font-mono"
                >
                  {node.content}
                </code>
              )
            }
            return <span key={node.key}>{node.content}</span>
          })}
        </p>
      ))}
    </div>
  )
}
