# overreacted.io clone

This project is a clone of [overreacted.io](https://overreacted.io/), created using Next.js, TypeScript, Tailwind CSS and Redux (+Redux Toolkit)

## Dependencies

To install the dependencies, run:

```sh
yarn
# or run `npm install`
```

## Building The Project

The application makes use of SSG (Static Site Generation) features of Next.js, to see the performance impact of SSG in action, you should first build the project using:

```sh
yarn build
# or run `npm run build`
```

Note that this might take a while since Next.js should make a few calls to the posts API and generate all the static pages.

After the build is completed, run:

```sh
yarn start
# or run `npm run start`
```

and visit the application on http://localhost:3000


## Running on Development Mode

If you want to run the application on development mode, run:

```sh
yarn dev
# or run `npm run dev`
```

and visit the application on http://localhost:3000
