## chrisrjones_client

<em>A React based project</em>

<a id="contents"></a>

## Contents

- [Updates](#updates)
- [TODOs](#todos)

<a id="updates"></a>

## Updates

- add **axios** pkg to make AJAX calls to rails API

- added [**webapp-webpack-plugin**](https://www.npmjs.com/package/webapp-webpack-plugin) to generate favicons for various systems and platforms. Copied the svg that is part of **create-react-app** to be the favicon for this project.

- added **prettier** to project via NPM to make all **.js** files conform to a single Javascript code formatting standard.

To run **prettier** from a CLI

```shell
npx prettier --write "src/**/*.js"
```

- **webpack-dev-server** will default to port **8080**, and if that port is not available it will increment until it finds an available port to bind to.

```conf
http://localhost:8080
```

- Added support for CSS source maps using [extract-css-chunks-webpack-plugin](https://github.com/faceyspacey/extract-css-chunks-webpack-plugin)

<a id="hooks"></a>

### Hooks

⚠️ As of Jan 21, 2019 **hooks** has not been fully integrated into stable version of react, thus react@next is required to use **hooks**

<details>
<summary>Primary NPM modules used with boilerplate</summary>

- react v16.7
- react-dom v16.7
- eslint
- webpack
  - css-loader
  - html-webpack-plugin
  - style-loader
- webpack-bundle-analyzer
- webpack-dev-server
- husky
- babel v7
  - @babel/polyfill
- jest
- react-hot-loader

</details>

<a id="todos"></a>

## TODOs [🔝](#contents)

- [x] ~~add support for working with various image formats.~~
