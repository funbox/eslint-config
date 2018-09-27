# @funboxteam/eslint-config

ESLint rules that follow out styleguide for JS files.

## Usage

Include into a project config using flag [-c](http://eslint.org/docs/user-guide/command-line-interface#-c---config),
and pass paths for files as arguments:

```sh
eslint -c node_modules/@funboxteam/eslint-config/.eslintrc.js src/app src/sandbox
```

For test linting use the separated config:

```sh 
eslint -c node_modules/@funboxteam/eslint-config/.eslintrc.tests.js src/tests
```

Also you can create your own `.eslintrc.js` and extend this config there: 

```js
module.exports = {
  extends: '@funboxteam',
  env: {
    browser: true
  },
  globals: {
    fetcher: true,
    System: true,
    moment: true
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: 'config/webpack.config.dev.js',
      }
    }
  },
}
```

Same for tests' config:

```
module.exports = {
  extends: '@funboxteam/eslint-config/tests',
  globals: {
    __utils__: true,
  }
}
``` 

Read more about `.eslintrc.js` in [ESLint docs](https://eslint.org/docs/user-guide/configuring).
