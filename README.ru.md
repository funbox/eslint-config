# eslint-config-funbox

Пакет содержит правила для линтера ESLint, соответствующие принятому в компании стайлгайду для JS-файлов.

## Использование

Подключить в конфиг рабочего проекта, используя ключ [-c](http://eslint.org/docs/user-guide/command-line-interface#-c---config), 
и передать пути для поиска файлов в качестве аргументов:

```sh
eslint -c node_modules/eslint-config-funbox/.eslintrc.js src/app src/sandbox
```

Для линтинга тестов следует использовать отдельный конфиг:

```sh 
eslint -c node_modules/eslint-config-funbox/.eslintrc.test.only.js src/tests
```
