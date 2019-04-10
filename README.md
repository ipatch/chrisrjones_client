## chrisrjones_client

<em>A React based project</em>

<a id="contents"></a>

## Contents

- [Working with CORS](#working-with-cors)
- [Updates](#updates)
- [TODOs](#todos)

<a id="working-with-cors"></a>

## Working with CORS

<strong>webpack-dev-server</strong> can be configured to work with CORS, ie. a react based app can send an AJAX request using vanilla JS, or even using a promise based library such **axios** to make an AJAX request. I setup a very primitive AJAX request to experiment with CORS in dev.  Working with CORS is still a total PITA but can be used to get things work.  See changes made to the **webpack.config.dev.js** for settings related to CORS and webpack configuration.  An honorable mention, make certain to disable credentials when making a AJAX request with **axios** in local development.

If an API is setup properly to handle CORS requests, ie. the rails API I've setup and the **webpack dev server** properly then the last piece of the jig saw puzzle is make sure the web browser is setup properly.

#### Working with CORS > web browser

The **webpack-dev-server** configured in this app should work out of the box with Firefox on macOS without any browser extensions.  However using a browser such Vivaldi requires a [browser extension](https://github.com/vitvad/Access-Control-Allow-Origin) to work with the CORS requests and responses.

##### Working with CORS > web browsers > Firefox

Firefox should not have a problem accessing,

```conf
http://localhost:4000
```

##### Working with CORS > web browser > Chromium based browsers

When accessing the client side app, avoid using the

```conf
http://localhost:4000
```

instead use when accessing client in dev.

```conf
http://[LOCAL.IP.ADDRESS]:[PORT]
http://10.0.1.8:4000
```

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
