# webpack-react

A straightforward webpack template project for React and React Router.

- Client-side routing handled for React Router locally and on Netlify
- CSS saved to a CSS file via `mini-css-extract-plugin`, with hot loading of style changes locally in development
- Static assets copied via `copy-webpack-plugin`
- Cypress for end-to-end testing
- CI on GitHub Actions
- ESLint and Prettier configured

## Getting Started

Clone this repo or download a zip file of it and use it to start your project.

## Installation

```bash
yarn install
```

## Development

```bash
yarn start
```

## Testing

Start the development server, then run:

```bash
yarn cypress
```

## Release

```bash
yarn build
```

Then deploy the results in the `dist` folder to a hosting provider or CDN.

## License

MIT
