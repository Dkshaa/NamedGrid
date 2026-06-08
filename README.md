# NamedGrid

A small CSS Grid practice project that demonstrates `grid-template-areas`.

## Features

- Uses semantic HTML elements for the layout regions.
- Removes repeated IDs and maps each area with classes.
- Includes dashboard, article, and gallery layout modes.
- Shows the active `grid-template-areas` code while switching layouts.
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

## How to run

Open `index.html` in a browser to view the demo.
