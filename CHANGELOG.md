# Changelog

## 7.4.0 (25.08.2022)

**Update dependencies:**

* eslint-import-resolver-webpack: 0.11.1 => 0.13.4,
* eslint-plugin-import: 2.26.0 => 2.28.1,
* eslint-plugin-jsx-a11y: 6.6.1 => 6.7.1,
* eslint-plugin-react: 7.30.1 => 7.33.2,

**Update peerDependencies:**

* eslint: ^7.32.0 => ^7.32.0 || ^8.2.0

## 7.3.0 (25.08.2022)

Turned off `react/function-component-definition` rule.


## 7.2.0 (02.08.2022)

Updated eslint-config-airbnb to v19, along with related plugins.


## 7.1.0 (11.11.2021)

Updated eslint-plugin-react to [7.27.0](https://github.com/yannickcr/eslint-plugin-react/blob/master/CHANGELOG.md#7270---20211109).


## 7.0.0 (08.11.2021)

Downgraded eslint-plugin-jsx-a11y from 6.4.1 to 6.2.3 due to unacceptable license of a transitive dependency [language-subtag-registry](https://github.com/mattcg/language-subtag-registry/issues/8).

Check the [migration guide](./MIGRATION.md).


## 6.0.1 (27.10.2021)

Enabled `allowExpressions` option 
for [react/jsx-no-useless-fragment](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md#allowexpressions).

Also added migration guide to the package files.


## 6.0.0 (26.10.2021)

We've updated peer deps. Now this packages requires eslint@^7.32.0.

The update led to the quite a large number of changes in the config. 
Please, check the [migration guide](./MIGRATION.md) to migrate with ease. 


## 5.3.2 (27.09.2021)

Fixed typos in the comments inside the config file.

Also bumped some deps to fix security vulnerabilities.


## 5.3.1 (10.06.2021)

Fixed several security vulnerabilities:

- [Use of a Broken or Risky Cryptographic Algorithm](https://github.com/advisories/GHSA-r9p9-mrjm-926w) in [elliptic](https://github.com/indutny/elliptic). Updated from 6.5.3 to 6.5.4.

- [Regular Expression Denial of Service](https://github.com/advisories/GHSA-43f8-2h32-f4cj) in [hosted-git-info](https://github.com/npm/hosted-git-info). Updated from 2.8.8 to 2.8.9.

- [Prototype Pollution](https://github.com/advisories/GHSA-p6mc-m468-83gw) and [Command Injection](https://github.com/advisories/GHSA-35jh-r3h4-6jhm) in [lodash](https://github.com/lodash/lodash). Updated from 4.17.15 to 4.17.21.


## 5.3.0 (09.12.2020)

* Updated `eslint-plugin-import` to support `pathGroups` option in
  [import/order](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md)
  rule.

## 5.2.0 (25.11.2020)

* Disabled `no-await-in-loop`.
* Disabled `radix`.
* Allowed to use `for..of` loops.

## 5.1.0 (31.08.2020)

* Update `eslint-plugin-react` to 7.20.6.

## 5.0.0 (07.07.2020)

* Add LICENSE file.
* Prepare package to publish on GitHub.

## 4.14.0 (29.05.2019)

* Update deps.

## 4.13.0 (20.03.2019)

* Turn off `react/no-did-update-set-state`.

## 4.12.1 (01.03.2019)

* Update `@funboxteam/eslint-plugin-no-only-tests` to 3.1.1.  

## 4.12.0 (09.11.2018)

* Add `after` to the list of global vars for tests.

## 4.11.0 (24.10.2018)

* Turn off controversial a11y rules that are not required in every project.

## 4.10.0 (22.10.2018)

* Add typograf's `T` to the list of global vars.

## 4.9.0 (16.10.2018)

* Turn off `react/no-array-index-key`.

## 4.8.1 (08.10.2018)

* Fix syntax of `no-only-tests` rule turning on.

## 4.8.0 (05.10.2018)

* Replace `eslint-rules` plugin with `eslint-plugin-no-only-tests`.

## 4.7.0 (05.10.2018)

* Turn on `react/no-danger`.

## 4.6.0 (05.10.2018)

* Turn off `no-param-reassign`.

## 4.5.0 (28.09.2018)

* Add `react/jsx-no-undef` rule.

## 4.4.0 (27.09.2018)

* Improve examples in README.

## 4.3.0 (10.09.2018)

* Turn off `class-methods-use-this`.

## 4.2.0 (31.08.2018)

* Turn off `import/named`.

## 4.1.0 (31.08.2018)

* Update `eslint-plugin-funbox-rules` to 2.0.1.

## 4.0.0 (23.08.2018)

* Update rules for React projects.

## 3.1.0 (01.08.2018)

* Move to `ecmaVersion: 8` to support `async`/`await`.

## 3.0.0 (06.07.2018)

* Add .editorconfig, update .gitignore.
* Move the package to @funboxteam scope.

## 2.1.0 (13.02.2018)

* Update deps.

## 2.0.0 (08.02.2018)

* Remove webpack related settings.

## 1.2.0 (07.08.2017)

* Update `eslint-import-resolver-webpack` to support webpack >= 2.

## 1.1.0 (04.08.2017)

* Add `afterEach` to `globals`.

## 1.0.0 (03.03.2017)

* Initial version of the config.
