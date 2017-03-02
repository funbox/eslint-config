# eslint-config-funbox

ESLint rules that follow out styleguide for JS files.

## Usage

Include into a project config using flag [-c](http://eslint.org/docs/user-guide/command-line-interface#-c---config),
and pass paths for files as arguments:

```sh
eslint -c node_modules/eslint-config-funbox/.eslintrc src/app src/sandbox
```

For test linting use the separated config:

```sh 
eslint -c node_modules/eslint-config-funbox/.eslintrc.test.only src/tests
```
