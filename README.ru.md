# eslint-config-funbox

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

Также можно подключить оба конфига в своём локальном. Например, вот так для основного конфига:

```
{
  "extends": "@funboxteam/eslint-config"
}
``` 

Или даже так:

```
{
  "extends": "@funboxteam"
}
``` 

И вот так для конфига для тестов:

```
{
  "extends": "@funboxteam/eslint-config/tests"
}
``` 
