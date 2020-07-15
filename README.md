# @funboxteam/eslint-config

[![npm](https://img.shields.io/npm/v/@funboxteam/eslint-config.svg)](https://www.npmjs.com/package/@funboxteam/eslint-config)

ESLint rules that follow our style guide.

Based on the well-known [Airbnb JS Style Guide](https://github.com/airbnb/javascript).

[По-русски](./README.ru.md)

## Installation

```bash
npm install --save-dev @funboxteam/eslint-config
```

## Usage

Include into a project config using flag [-c](http://eslint.org/docs/user-guide/command-line-interface#-c---config),
and pass paths for files as arguments:

```sh
eslint -c node_modules/@funboxteam/eslint-config/.eslintrc.js src/app src/sandbox
```

To lint tests files use the separated config:

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

[![Sponsored by FunBox](https://funbox.ru/badges/sponsored_by_funbox_centered.svg)](https://funbox.ru)
