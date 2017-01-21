# Vue minimum starter kit
The aim of this repository is to provide a template for developing [Vue](https://vuejs.org/) based applications using ES6 syntax and [webpack](https://webpack.github.io/) as a module bundler.
 
## Architecture overview

![architecture](https://raw.githubusercontent.com/Vietworm/vue-minimum-starter-kit/master/architecture-mockup.png)

## Features

- [x] Vuejs using ES6 syntax
- [x] ESLint support (with runtime) 
- [x] Webpack support for environment-specific configuration files (development, testing, production)
- [x] Webpack config development, including [webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware)
- [x] Webpack config production
- [ ] Support for code coverage via [isparta-loader](https://github.com/deepsweet/isparta-loader)
- [ ] Test with [Mocha](http://mochajs.org/), [Chai](http://chaijs.com/) and [Sinon](http://sinonjs.org/)
- [ ] Use [Karma](http://karma-runner.github.io/) to run the tests
- [x] Vuejs style using scss language

## Usage

```bash
# Install dependencies
$ yarn
$ bower-installer

# Start the dev-server with webpack
$ npm run dev

# Lint all files in src (also automatically done AFTER tests are run)
$ npm run lint

# Build the project
$ npm run build

# Start the production server with express
$ npm start
```

## Contribute

Please contribute to the project if you know how to make it better, including this README :)


