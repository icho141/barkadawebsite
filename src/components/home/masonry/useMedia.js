import { useEffect, useState, useCallback } from 'react'

export default function useMedia(queries, values, defaultValue) {
  const match = () => values[queries.findIndex(q => matchMedia(q).matches)] || defaultValue
  const [value, set] = useState(match)
  useEffect(() => {
    const handler = () => set(match)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener(handler)
  }, [])
  return value
}