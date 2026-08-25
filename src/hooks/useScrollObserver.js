import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

/**
 * Returns a ref. When the ref'd element reaches 50% of the viewport,
 * calls `action` with the element's `id`.
 * @param {(id: string) => void} action
 */
export default function useScrollObserver(action) {
  const { ref, inView, entry } = useInView({ rootMargin: '-50% 0% -50% 0%' })

  useEffect(() => {
    if (entry && inView) {
      action(entry.target.id)
    }
  }, [entry, action, inView])

  return ref
}