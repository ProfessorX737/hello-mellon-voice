# App Icons

Place your SVG icon files here. They will be accessible at `/icons/filename.svg`.

## Usage

In `src/data/apps.ts`, reference them like this:

```typescript
{ name: 'Notion', iconPath: '/icons/notion.svg' },
{ name: 'Slack', iconPath: '/icons/slack.svg' },
```

## Recommended Icon Sources

- [Simple Icons](https://simpleicons.org/) - Brand icons in SVG format
- [Macosicons](https://macosicons.com/) - macOS-style app icons
- [Icons8](https://icons8.com/icons) - Various icon styles

## Tips

1. Use square SVGs (ideally 120x120 or similar)
2. Icons with rounded corners (rx="26") match the macOS style
3. For dark backgrounds, ensure icons have visible colors or white elements
