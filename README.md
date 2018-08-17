# eslint-config-funbox

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

Also you can extend this config by the project one. E.g. for the base config use this:

```
{
  "extends": "@funboxteam/eslint-config"
}
``` 

Or just this:

```
{
  "extends": "@funboxteam"
}
``` 

Use this for tests config:

```
{
  "extends": "@funboxteam/eslint-config/tests"
}
``` 
