# NamedGrid

A small CSS Grid practice project that demonstrates `grid-template-areas`.

## Features

- Uses semantic HTML elements for the layout regions.
- Removes repeated IDs and maps each area with classes.
- Includes dashboard, article, and gallery layout modes.
- Shows the active `grid-template-areas` code while switching layouts.
- Provides keyboard shortcuts and a copy button for the active CSS.
- Adds a responsive single-column layout for smaller screens.

## Project structure

```text
NamedGrid/
|-- index.html
|-- index.css
|-- script.js
`-- README.md
```

## Layout modes

The page uses the same six named regions in every mode:

- `header`
- `sidebar`
- `content1`
- `content2`
- `content3`
- `footer`

The JavaScript only swaps layout classes. The actual placement is handled in CSS with `grid-template-areas`.

## Controls

- Click a layout button to change the grid arrangement.
- Press `1`, `2`, or `3` to jump to Dashboard, Article, or Gallery.
- Press the left or right arrow keys to move through layouts.
- Use Copy CSS to copy the active `grid-template-areas` snippet.

## How to run

Open `index.html` in a browser to view the demo.
