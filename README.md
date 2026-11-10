# Ross Palmer Art

The website for rosspalmerart.com: a static gallery site built with [Astro](https://astro.build) and hosted on Cloudflare Pages.

## Run it on your computer

```bash
npm install
npm run dev
```

Then open http://localhost:4321.

## Add a painting

1. Save the photo as a `.jpg` in `src/assets/paintings/`, named with the web address you want, for example `the-old-mill.jpg`. Bigger is better (2000px or more on the long edge); the site resizes it automatically.
2. Open `src/data/paintings.ts` and add an entry near the top of the list, using the same name as the `slug`:

   ```ts
   { slug: 'the-old-mill', title: 'The Old Mill', collection: 'irish',
     medium: 'Acrylics on canvas', size: '300 × 400 mm', year: 2026,
     note: 'A sentence or two about the painting.',
     alt: 'A short description of what the painting shows' },
   ```

   - `collection` is `irish` or `african`.
   - `slug`, `title`, `collection` and `alt` are required. Leave out anything else you don't know.
   - Optional extras: `series: 'Glanmire Series'`, `availability: 'Available'` (or `'Sold'`), and `featured: true` to show it on the home page.
3. Commit and push. Cloudflare rebuilds the site automatically.

## Change other things

| What | Where |
| --- | --- |
| Contact email, location, collection names and cover images | `src/data/site.ts` |
| Home page wording | `src/pages/index.astro` |
| My Story page | `src/pages/about-me.astro` |
| Colours, fonts and animations | `src/styles.css` |
| Redirects from the old WordPress addresses | `public/_redirects` |

## Deploy on Cloudflare Pages

Create a Pages project connected to this repository with:

- Build command: `npm run build`
- Build output directory: `dist`

Painting addresses match the old WordPress site (for example `/scotch-cart-in-zimbabwe/`), and the old category addresses redirect to the new collection pages.
