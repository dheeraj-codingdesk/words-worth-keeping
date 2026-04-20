import { useState, useEffect } from 'react'

const STORAGE_KEY = 'daily-quote-liked-v3'

function loadFromStorage() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [] }
  catch { return [] }
}

export function useLikedQuotes() {
  const [likedQuotes, setLikedQuotes] = useState(loadFromStorage)

  // persist to localStorage whenever liked quotes change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(likedQuotes))
  }, [likedQuotes])

  function toggleLike(quote) {
    setLikedQuotes(prev => {
      const exists = prev.some(q => q.id === quote.id)
      return exists ? prev.filter(q => q.id !== quote.id) : [quote, ...prev]
    })
  }

  function removeLiked(id) {
    setLikedQuotes(prev => prev.filter(q => q.id !== id))
  }

  return { likedQuotes, toggleLike, removeLiked }
}
