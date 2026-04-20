# words-worth-keeping

A daily motivation dashboard built with React + Vite. Fetches random quotes, lets you like and search your collection, and persists everything across sessions.

## Project Structure

```
src/
  App.jsx                       ← root component
  main.jsx                      ← entry point
  index.css                     ← all styles
  hooks/
    useQuote.js                 ← useEffect fetch + loading state
    useLikedQuotes.js           ← useState + localStorage sync
  components/
    QuoteStage.jsx              ← quote display + like/new buttons
    LikedCard.jsx               ← single saved quote card
    CollectionSection.jsx       ← search, toggle, map() over cards
```

## Features

- Fetches a random quote on load via `useEffect` from [quotable.io](https://api.quotable.io)
- Like / unlike toggle with heart animation
- Search your saved collection by quote text or author
- Toggle between "All saved" and "Current only" view
- Remove quotes from your collection individually
- Persists liked quotes in `localStorage`
- Fallback quotes when the API is unavailable

## React Patterns Used

| Pattern | Where |
|---|---|
| `useState` | quote, loading, likedQuotes, searchQuery, showOnlyLiked |
| `useEffect` | API fetch on mount, localStorage sync |
| Custom hooks | `useQuote`, `useLikedQuotes` |
| `map()` with keys | `CollectionSection` renders liked grid |
| Filter / search | Filters collection by text + author |
| Toggle interaction | Like/unlike + All saved / Current only |

## Getting Started

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```
