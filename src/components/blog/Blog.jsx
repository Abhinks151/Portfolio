import React from 'react'
import Terminal from '../about/Terminal.jsx'
import { info } from '../../info/Info.js'

const posts = [
  {
    slug: 'coming-soon-1',
    date: '2024 · Coming Soon',
    title: 'Building a Multi-Tenant SaaS from Scratch',
    summary: 'Architecture decisions, pitfalls, and lessons learned building Veltrex — a multi-tenant platform with subdomain-based tenant isolation.',
    tags: ['architecture', 'saas', 'nodejs'],
  },
  {
    slug: 'coming-soon-2',
    date: '2024 · Coming Soon',
    title: 'How RAG Actually Works — Beyond the Hype',
    summary: 'A practical breakdown of Retrieval-Augmented Generation: chunking strategies, embedding models, and why naive RAG fails in production.',
    tags: ['ai', 'rag', 'llm'],
  },
  {
    slug: 'coming-soon-3',
    date: '2024 · Coming Soon',
    title: 'Clean Architecture in a Real Node.js Project',
    summary: 'Applying Clean Architecture principles without going over the top — use cases, repositories, and where pragmatism beats purity.',
    tags: ['backend', 'architecture', 'nodejs'],
  },
]

function PostList() {
  const firstName = info.firstName.toLowerCase()
  return (
    <>
      <p>
        <span style={{ color: info.baseColor }}>{firstName} $</span>{' '}
        ls blog/
      </p>
      <div className="mt-4 space-y-6">
        {posts.map((post, i) => (
          <div key={i} className="border-l-2 pl-4" style={{ borderColor: info.baseColor }}>
            <p className="text-sm opacity-50 mb-1">{post.date}</p>
            <p className="font-semibold text-base">{post.title}</p>
            <p className="text-sm opacity-70 mt-1">{post.summary}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {post.tags.map((t, j) => (
                <span key={j} className="text-xs bg-white/10 px-2 py-0.5 rounded-full">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-6 opacity-40 text-sm">
        <span style={{ color: info.baseColor }}>{firstName} $</span>{' '}
        # Full posts coming soon
      </p>
    </>
  )
}

export default function Blog({ innerRef }) {
  return (
    <section
      ref={innerRef}
      id="blog"
      className="flex flex-col items-center mt-12 pb-12"
    >
      <Terminal text={<PostList />} />
    </section>
  )
}
