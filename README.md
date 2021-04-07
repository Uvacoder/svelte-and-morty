# Svelte And Morty

A Svelte pet project, powered by [`svelte-kit`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte) and uses the [`Rick And Morty API`](https://rickandmortyapi.com/).

The aim of this project is to showcase a "real world" medium-sized web application, built and powered by [Svelte](https://svelte.dev/) and other modern tooling like [Vite](https://vitejs.dev/).

## WIP

- [x] Basic app
- [ ] Auth(Login/Logout)
- [ ] Actually use TypeScript
- [ ] Replace Tailwind with normal styling(SCSS)
- [ ] Better looking UI
- [ ] Deploy with adapter to some PaaS
- [ ] Add Likes/Rate to Episode/Character


## Developing

Once you've installed dependencies with `npm install`, start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Svelte apps are built with _adapters_, which optimise your project for deployment to different environments.

By default, `npm run build` will generate a Node app that you can run with `node build`. To use a different adapter, add it to the `devDependencies` in `package.json` making sure to specify the version as `next` and update your `svelte.config.cjs` to [specify your chosen adapter](https://kit.svelte.dev/docs#configuration-adapter). The following official adapters are available:

- [@sveltejs/adapter-node](https://github.com/sveltejs/kit/tree/master/packages/adapter-node)
- [@sveltejs/adapter-static](https://github.com/sveltejs/kit/tree/master/packages/adapter-static)
- [@sveltejs/adapter-netlify](https://github.com/sveltejs/kit/tree/master/packages/adapter-netlify)
- [@sveltejs/adapter-vercel](https://github.com/sveltejs/kit/tree/master/packages/adapter-vercel)
- ...more soon

[See the adapter documentation for more detail](https://kit.svelte.dev/docs#adapters)
