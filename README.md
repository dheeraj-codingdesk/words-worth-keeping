# words-worth-keeping

A daily motivation dashboard built with React. Fetches random quotes, lets you like and search your collection, and persists everything across sessions.

## Features

- Fetches a random quote on load via `useEffect` from [quotable.io](https://api.quotable.io)
- `useState` for all UI and data state (quote, loading, liked list, search query)
- Like / unlike the current quote with a heart animation toggle
- Search your saved collection by quote text or author
- Remove quotes from your collection individually
- Total liked count display
- Persists liked quotes in `localStorage` via `useEffect`
- Graceful fallback quotes when the API is unavailable

## React Patterns Used

| Pattern | Where |
|---|---|
| `useState` | quote, loading, likedQuotes, searchQuery |
| `useEffect` | API fetch on mount, localStorage sync |
| `map()` with keys | Rendering liked quotes grid |
| Filter / search | Search bar filters collection by text + author |
| Toggle interaction | Like/unlike button with filled/empty heart |

## Tech

React 18 (CDN) + Babel standalone — no build step. Open `index.html` in any browser.

## Design

Warm editorial broadsheet aesthetic — aged parchment background, Playfair Display serif typography, rust accent color, ink-rule lines.

## Usage

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

Or open `index.html` directly in your browser.
