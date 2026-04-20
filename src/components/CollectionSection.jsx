import { useState } from 'react'
import LikedCard from './LikedCard'

export default function CollectionSection({ likedQuotes, currentQuoteId, onRemove }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [showOnlyLiked, setShowOnlyLiked] = useState(false)

  const filteredQuotes = likedQuotes.filter(q => {
    const term = searchQuery.toLowerCase()
    const matchesSearch = !term ||
      q.content.toLowerCase().includes(term) ||
      q.author.toLowerCase().includes(term)
    const matchesToggle = !showOnlyLiked || q.id === currentQuoteId
    return matchesSearch && matchesToggle
  })

  const isEmpty = likedQuotes.length === 0
  const noResults = !isEmpty && filteredQuotes.length === 0

  function handleToggle() {
    setShowOnlyLiked(v => !v)
    setSearchQuery('')
  }

  return (
    <section className="liked-section">
      {!isEmpty && (
        <div className="collection-toolbar">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search by quote or author…"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button className="search-clear" onClick={() => setSearchQuery('')}>✕</button>
            )}
          </div>
          <button
            className={`btn-toggle-view${showOnlyLiked ? ' active' : ''}`}
            onClick={handleToggle}
          >
            {showOnlyLiked ? '♥ Current only' : '◈ All saved'}
          </button>
        </div>
      )}

      {isEmpty && (
        <p className="liked-empty">Nothing collected yet — like a quote to save it here.</p>
      )}
      {noResults && (
        <p className="liked-empty">
          {showOnlyLiked
            ? 'Current quote not in your collection yet.'
            : `No quotes match "${searchQuery}".`}
        </p>
      )}

      <div className="liked-grid">
        {filteredQuotes.map((q, i) => (
          <LikedCard key={q.id} quote={q} index={i} onRemove={onRemove} />
        ))}
      </div>
    </section>
  )
}
