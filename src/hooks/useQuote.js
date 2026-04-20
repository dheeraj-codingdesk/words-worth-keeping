import { useState, useEffect } from 'react'

const FALLBACKS = [
  { id: 'f1', content: 'The only way to do great work is to love what you do.', author: 'Steve Jobs' },
  { id: 'f2', content: 'In the middle of every difficulty lies opportunity.', author: 'Albert Einstein' },
  { id: 'f3', content: 'It does not matter how slowly you go as long as you do not stop.', author: 'Confucius' },
  { id: 'f4', content: "Life is what happens when you're busy making other plans.", author: 'John Lennon' },
  { id: 'f5', content: 'The future belongs to those who believe in the beauty of their dreams.', author: 'Eleanor Roosevelt' },
  { id: 'f6', content: 'Strive not to be a success, but rather to be of value.', author: 'Albert Einstein' },
  { id: 'f7', content: 'The mind is everything. What you think you become.', author: 'Buddha' },
]

export function useQuote() {
  const [quote, setQuote] = useState(null)
  const [loading, setLoading] = useState(false)

  async function fetchQuote() {
    setLoading(true)
    setQuote(null)
    let fetched = null

    try {
      const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent('https://api.quotable.io/random')}`
      const res = await fetch(proxyUrl, { signal: AbortSignal.timeout(7000) })
      if (res.ok) {
        const data = await res.json()
        const parsed = data.contents ? JSON.parse(data.contents) : data
        if (parsed?.content) {
          fetched = { id: parsed._id || String(Date.now()), content: parsed.content, author: parsed.author }
        }
      }
    } catch { /* fall through */ }

    if (!fetched) {
      fetched = FALLBACKS[Math.floor(Math.random() * FALLBACKS.length)]
    }

    setQuote(fetched)
    setLoading(false)
  }

  // fetch on mount
  useEffect(() => { fetchQuote() }, [])

  return { quote, loading, fetchQuote }
}
