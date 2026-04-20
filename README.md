# words-worth-keeping

A daily motivation dashboard with an editorial broadsheet aesthetic. Fetches random quotes, lets you like and collect the ones that resonate, and persists your collection across sessions.

## Features

- Fetches a random quote on load from [quotable.io](https://api.quotable.io)
- Like / unlike the current quote with a heart animation
- Displays total liked count
- Collected quotes grid below the main stage
- Persists liked quotes in `localStorage`
- Graceful fallback quotes when the API is unavailable

## Tech

Pure HTML / CSS / JavaScript — no frameworks, no build step. Open `index.html` in any browser.

## Design

Warm editorial broadsheet aesthetic — aged parchment background, Playfair Display serif typography, rust accent color, ink-rule lines, and offset box-shadows. Feels like a morning newspaper that's alive.

## Usage

```bash
# Serve locally
python3 -m http.server 8080
# then open http://localhost:8080
```

Or just open `index.html` directly in your browser.
