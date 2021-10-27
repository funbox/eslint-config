# Migration

## 5.3.2 → 6.0.0

ESLint peer dep was updated to ^7.32.0. Here are migration guides from ESLint:

- [v5 to v6](https://eslint.org/docs/user-guide/migrating-to-6.0.0)
- [v6 to v7](https://eslint.org/docs/user-guide/migrating-to-7.0.0)

Also we've changed the config itself. Below you can find full list of the changed rules.

### Rules

#### Changed rules default values

- Disabled [react/no-multi-comp](https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/CHANGELOG.md#1711--2019-07-01)
- Enabled [prefer-object-spread](https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/CHANGELOG.md#1400--2019-08-09)
- Enabled [no-async-promise-executor](https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/CHANGELOG.md#1400--2019-08-09)
- Enabled [no-misleading-character-class](https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/CHANGELOG.md#1400--2019-08-09)
- Enabled [max-classes-per-file](https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/CHANGELOG.md#1400--2019-08-09)
- Enabled [no-useless-catch](https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/CHANGELOG.md#1400--2019-08-09)
- Enabled `props` option in [no-self-assign](https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/CHANGELOG.md#1400--2019-08-09)
- Added `forms` option to [react/jsx-no-target-blank](https://github.com/yannickcr/eslint-plugin-react/blob/master/CHANGELOG.md#7250---20210827)
- Added `caseSensitiveStrict` option to [import/no-unresolved](https://github.com/import-js/eslint-plugin-import/blob/main/CHANGELOG.md#2250---2021-10-11)
- Added `commonjs` option to [import/no-useless-path-segments](https://github.com/import-js/eslint-plugin-import/blob/main/CHANGELOG.md#2190---2019-12-08)
- Used valid `maxDepth` option in [import/no-cycle](https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/CHANGELOG.md#1421--2020-11-06)
- Restricted empty lines at beginning of file in [no-multiple-empty-lines](https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/CHANGELOG.md#1400--2019-08-09)
- Allowed for redux dev tools in the main config in [no-underscore-dangle](https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/CHANGELOG.md#1711--2019-07-01)

#### New rules

- [jsx-a11y/autocomplete-valid](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/autocomplete-valid.md) disabled by default
- [jsx-a11y/control-has-associated-label](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-associated-control.md) enabled by default as an error with the following options:
  ```js
  {
    labelAttributes: [
      'label',
    ],
    controlComponents: [],
    ignoreElements: [
      'audio',
      'canvas',
      'embed',
      'input',
      'textarea',
      'tr',
      'video',
    ],
    ignoreRoles: [
      'grid',
      'listbox',
      'menu',
      'menubar',
      'radiogroup',
      'row',
      'tablist',
      'toolbar',
      'tree',
      'treegrid',
    ],
    depth: 5,
  }
  ```
- [default-case-last](https://eslint.org/docs/rules/default-case-last) enabled manually as an error
- [default-param-last](https://eslint.org/docs/rules/default-param-last) enabled manually as an error
- [function-call-argument-newline](https://eslint.org/docs/rules/function-call-argument-newline) enabled manually as an error with the option `consistent`
- [grouped-accessor-pairs](https://eslint.org/docs/rules/grouped-accessor-pairs) enabled manually as an error with the option `getBeforeSet`
- [id-denylist](https://eslint.org/docs/rules/id-denylist) disabled by default
- [no-constructor-return](https://eslint.org/docs/rules/no-constructor-return) enabled manually as an error
- [no-dupe-else-if](https://eslint.org/docs/rules/no-dupe-else-if) enabled manually as an error
- [no-import-assign](https://eslint.org/docs/rules/no-import-assign) enabled manually as an error
- [no-loss-of-precision](https://eslint.org/docs/rules/no-loss-of-precision) enabled manually as an error
- [no-promise-executor-return](https://eslint.org/docs/rules/no-promise-executor-return) enabled as an error
- [no-restricted-exports](https://eslint.org/docs/rules/no-restricted-exports) disabled by default
- [no-setter-return](https://eslint.org/docs/rules/no-setter-return) enabled manually as an error
- [no-unreachable-loop](https://eslint.org/docs/rules/no-unreachable-loop) enabled manually as an error
- [no-useless-backreference](https://eslint.org/docs/rules/no-useless-backreference) enabled manually as an error
- [prefer-exponentiation-operator](https://eslint.org/docs/rules/prefer-exponentiation-operator) enabled manually as an error
- [prefer-regex-literals](https://eslint.org/docs/rules/prefer-regex-literals) enabled manually as an error
- [react/function-component-definition](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md) disabled by default
- [react/jsx-curly-newline](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-newline.md) enabled by default as an error with options
`{ multiline: 'consistent', singleline: 'consistent' }`
- [react/jsx-fragments](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md) enabled by default as an error with the option `syntax`
- [react/jsx-no-script-url](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-script-url.md) enabled manually as an error with options `{ name: 'Link', props: ['href', 'to'] }`
- [react/jsx-no-useless-fragment](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md) enabled manually as an error (btw, v6.0.1 enabled this rule with `allowExpressions` option)
- [react/jsx-props-no-spreading](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md) disabled manually
- [react/no-adjacent-inline-elements](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-adjacent-inline-elements.md) disabled by default
- [react/prefer-read-only-props](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-read-only-props.md) disabled by default
- [react/state-in-constructor](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md) enabled manually as an error with the option `never`
- [react/static-property-placement](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md) enabled by default as an error with the option `property assignment`
