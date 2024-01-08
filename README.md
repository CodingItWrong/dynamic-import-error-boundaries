# Dynamic Import Error Boundaries

A demonstration of using React error boundaries to handle when a dynamic import fails.

## Getting Started

## Steps to Reproduce

- Clone this repo
- Install with `yarn install`
- Build with `yarn build`
- Run the production build in a server: `npx serve dist`. Note that you should *not* yet run a simple `yarn serve`; more info below
- Go to <http://localhost:3000>
- Kill the server
- Click "Do Dynamic Import". Note that "This is a fallback message" is logged

This works in production mode, which `yarn build` does. In development mode (which `yarn serve`) does, it still works, but you also get an "Uncaught runtime errors" overlay. If you close it, you will see the "This is a fallback message" displayed. There is likely a way to catch the runtime error to avoid this error in dev mode.

## License

MIT
