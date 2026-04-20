import { useQuote } from './hooks/useQuote'
import { useLikedQuotes } from './hooks/useLikedQuotes'
import QuoteStage from './components/QuoteStage'
import CollectionSection from './components/CollectionSection'

const today = new Date().toLocaleDateString('en-US', {
  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
})

export default function App() {
  const { quote, loading, fetchQuote } = useQuote()
  const { likedQuotes, toggleLike, removeLiked } = useLikedQuotes()

  const isCurrentLiked = quote ? likedQuotes.some(q => q.id === quote.id) : false

  return (
    <>
      <header className="masthead">
        <div className="masthead-top">
          <span className="edition-label">Vol. I — Est. Today</span>
          <h1 className="masthead-title">The Daily Quote</h1>
          <div className="date-line">{today}</div>
        </div>
        <p className="masthead-tagline">Words worth carrying through the day</p>
        <div className="masthead-rule" />
        <div className="masthead-rule-thin" />
      </header>

      <main className="paper">
        <QuoteStage
          quote={quote}
          loading={loading}
          isLiked={isCurrentLiked}
          onLike={() => quote && toggleLike(quote)}
          onNew={fetchQuote}
        />

        <div className="action-row" style={{ borderTop: 'none', paddingTop: 8 }}>
          <div className="like-count-badge">
            <strong>{likedQuotes.length}</strong>
            {likedQuotes.length === 1 ? 'quote' : 'quotes'} saved
          </div>
        </div>

        <div className="section-divider">
          <div className="line" />
          <span className="label">Your Collection</span>
          <div className="line" />
        </div>

        <CollectionSection
          likedQuotes={likedQuotes}
          currentQuoteId={quote?.id}
          onRemove={removeLiked}
        />
      </main>

      <footer className="footer">
        ✦ &nbsp; All quotes lovingly fetched from quotable.io &nbsp; ✦
      </footer>
    </>
  )
}
