# Semiconductor Learning Site (4 Languages)

English | [한국어](README.md)

A free, public learning site where semiconductor beginners study everything from the basics to the full process flow in Korean, English, Japanese, and Chinese (Simplified/Traditional).
It is a static Astro site (MDX) deployed to GitHub Pages. There is no server or database.

## Development

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # builds the static site into ./dist/
npm run preview  # preview the build output
```

## Structure

- `src/data/glossary.yaml`: term data (single source of truth)
- `src/components/`: shared Astro components
- `src/pages/`, lesson MDX: learning content

## License

- Code: [MIT](LICENSE)
- Content (lesson text, term data, diagrams): [CC BY-SA 4.0](LICENSE-CONTENT.md)

When using or redistributing the content, you must give attribution and share under the same license.
