import { useRef } from 'react'

export default function QuoteStage({ quote, loading, isLiked, onLike, onNew }) {
  const heartRef = useRef(null)

  function handleLike() {
    if (heartRef.current) {
      heartRef.current.classList.remove('heart-pop')
      void heartRef.current.offsetWidth
      heartRef.current.classList.add('heart-pop')
      setTimeout(() => heartRef.current?.classList.remove('heart-pop'), 400)
    }
    onLike()
  }

  return (
    <div className="quote-stage">
      <span className="quote-mark">"</span>
      <div className="ornament">✦ &nbsp; ✦ &nbsp; ✦</div>

      {loading ? (
        <p className="loading-state">
          Consulting the archives
          <span className="loading-dot">.</span>
          <span className="loading-dot">.</span>
          <span className="loading-dot">.</span>
        </p>
      ) : quote ? (
        <>
          <p className="quote-text">{quote.content}</p>
          <p className="quote-author">{quote.author}</p>
        </>
      ) : null}

      <div className="action-row" style={{ marginTop: 32 }}>
        <div />
        <div className="btn-group">
          <button
            className={`btn-like${isLiked ? ' liked' : ''}`}
            disabled={loading || !quote}
            onClick={handleLike}
          >
            <span className="heart-icon" ref={heartRef}>
              {isLiked ? '♥' : '♡'}
            </span>
            {isLiked ? 'Liked' : 'Like'}
          </button>
          <button className="btn-new" disabled={loading} onClick={onNew}>
            New Quote
          </button>
        </div>
      </div>
    </div>
  )
}
