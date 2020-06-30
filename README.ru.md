# @funboxteam/eslint-config

Пакет содержит правила для линтера ESLint, соответствующие принятому в компании стайлгайду для JS-файлов.

## Использование

Подключить в конфиг рабочего проекта, используя ключ [-c](http://eslint.org/docs/user-guide/command-line-interface#-c---config), 
и передать пути для поиска файлов в качестве аргументов:

```sh
eslint -c node_modules/@funboxteam/eslint-config/.eslintrc.js src/app src/sandbox
```

Для линтинга тестов следует использовать отдельный конфиг:

```sh 
eslint -c node_modules/@funboxteam/eslint-config/.eslintrc.test.only.js src/tests
```

Также можно создать свой файл `.eslintrc.js`, и доопределить в нём этот конфиг. 
Пример такого доопределения: 

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

Пример доопределения конфига для тестов:

```
module.exports = {
  extends: '@funboxteam/eslint-config/tests',
  globals: {
    __utils__: true,
  }
}
``` 

Более подробно о том, как устроен файл `.eslintrc.js`, 
и что в нём можно настраивать, можно прочитать [в документации ESLint](https://eslint.org/docs/user-guide/configuring).

[![Sponsored by FunBox](https://funbox.ru/badges/sponsored_by_funbox_centered.svg)](https://funbox.ru)
