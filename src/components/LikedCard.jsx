export default function LikedCard({ quote, onRemove, index }) {
  return (
    <div className="liked-card" style={{ animationDelay: `${index * 0.05}s` }}>
      <p className="liked-card-quote">{quote.content}</p>
      <p className="liked-card-author">{quote.author}</p>
      <button className="liked-card-remove" onClick={() => onRemove(quote.id)}>
        remove
      </button>
    </div>
  )
}
