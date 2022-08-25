module.exports = {
  extends: 'airbnb',
  env: {
    es2020: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
  },
  globals: {
    // React
    b: 'readonly',
    T: 'readonly',
    Component: 'readonly',
    Fragment: 'readonly',
    PropTypes: 'readonly',
    PureComponent: 'readonly',
    React: 'readonly',
    ReactDOM: 'readonly',

    // Env variables
    APPLICATION_VERSION: 'readonly',
    BUILD_TIMESTAMP: 'readonly',
    APPLICATION_ENVIRONMENT: 'readonly',
    GIT_COMMIT: 'readonly',
    BASE_PATH: 'readonly',
  },
  rules: {
    // Turned off, because it's based on teams POVs.
    'arrow-parens': 'off',

    // Gets in the way of BEM.
    camelcase: 'off',

    // Forces to create useless static methods or even separated functions.
    'class-methods-use-this': 'off',

    // Commonly used in projects, e.g. in JSX files.
    'global-require': 'off',

    // Things happen.
    'max-len': 'off',

    // Yeah, Promise.all is great, but in CLI apps we do want to use await in loops, and it's fine.
    'no-await-in-loop': 'off',

    // `console.log` is removed in production by minifier, but in dev env we usually need it.
    'no-console': 'off',

    // Makes logic too explicit, which is usually not so handy.
    'no-mixed-operators': 'off',

    // Doesn't prevent mutation, but gets in the way of optimizations and performance improvements in the complex projects (FD-1861)
    'no-param-reassign': 'off',

    // Makes sense when `;` isn't used at the end of lines. But we use `;`.
    'no-plusplus': 'off',

    // In Airbnb config 'always' is turned on, but it doesn't allow things like this: ref={r => (this.root = r)}.
    // So leave the rule, but add an exception.
    'no-return-assign': ['error', 'except-parens'],

    // Same as Airbnb's except it allows default exports.
    'no-restricted-exports': ['error', {
      restrictedNamedExports: ['then'],
    }],

    // Same as Airbnb used, but without restricting `ForOfStatement`.
    // It's disabled there because it's “heavyweight” due to requiring regenerator-runtime. But our projects already use regenerator-runtime, so why not.
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],

    // Allows to use funcs and classes before their definition, 'cause it may be handy.
    // Such variables usage isn't allowed by default.
    'no-use-before-define': ['error', {
      functions: false,
      classes: false,
    }],

    // Multiline object definition is a matter of likes and dislikes.
    // But when do it, let's do it properly.
    'object-curly-newline': ['error', {
      multiline: true,
      consistent: true,
    }],

    // Destructuring is not always the right way to write code.
    // E.g. chains like `event.target.width` are fine.
    'prefer-destructuring': 'off',

    // `parseInt` autodetected octal literals in the older versions of ECMAScript, which we don't use nowadays.
    // So using `parseInt` w/o radix is totally fine.
    'radix': 'off',

    // Does not allow reexport elements of BEM blocks with *.
    // But such reexport makes use of external blocks libraries easier.
    'import/named': 'off',

    // Only devDeps and general deps are allowed.
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true,
      optionalDependencies: false,
    }],

    // Usually when loaders are used in projects like this it makes sense.
    'import/no-webpack-loader-syntax': 'off',

    // Not always true. E.g. we can have files with constants or actions creators with only one entity.
    'import/prefer-default-export': 'off',

    // Not always convenient.
    'react/destructuring-assignment': 'off',

    // Sometimes a component may not know about the structure of an object of an array.
    // E.g. when it have to pass them in the call chain.
    'react/forbid-prop-types': 'off',

    // Let the developer decide.
    'react/function-component-definition': 'off',

    // Not always convenient.
    'react/jsx-closing-tag-location': 'off',

    // To make it work with Fragment as global var.
    'react/jsx-no-undef': [2, { allowGlobals: true }],

    // Works incorrectly with &nbsp; and the similar things.
    'react/jsx-one-expression-per-line': 'off',

    // Gets in the way of BEM.
    'react/jsx-pascal-case': 'off',

    // Not always convenient.
    'react/jsx-props-no-spreading': 'off',

    // Remove spaces even in front of `/>`, because it's prettier.
    'react/jsx-tag-spacing': ['error', {
      closingSlash: 'never',
      beforeSelfClosing: 'never',
      afterOpening: 'never',
      beforeClosing: 'never',
    }],

    // Sometimes it's convenient. Let the developer decide.
    'react/no-array-index-key': 'off',

    // Prevents loops in UI, but doesn't allow to change state when it's needed.
    // It's nearly impossible to ignore the error it prevents.
    // So it's easier to turn it off globally rather then in every project (FD-2353).
    'react/no-did-update-set-state': 'off',

    // When it's important it's easier to use babel-plugin that transforms classes into functions.
    'react/prefer-stateless-function': 'off',

    // defaultProps is't used everywhere.
    'react/require-default-props': 'off',

    // Same order as in Airbnb, but without prefix checks (`on`, `get`, `set`)
    'react/sort-comp': ['error', {
      order: [
        'static-methods',
        'instance-variables',
        'lifecycle',
        'instance-methods',
        'everything-else',
        'rendering',
      ],
      groups: {
        lifecycle: [
          'displayName',
          'propTypes',
          'contextTypes',
          'childContextTypes',
          'mixins',
          'statics',
          'defaultProps',
          'constructor',
          'getDefaultProps',
          'getInitialState',
          'state',
          'getChildContext',
          'componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'componentDidUpdate',
          'componentWillUnmount',
        ],
        rendering: [
          '/^render.+$/',
          'render',
        ],
      },
    }],

    // Let the developer decide.
    'react/state-in-constructor': 'off',

    // Deprecated and most likely will stop working in the future.
    // So turn it off today.
    'jsx-a11y/label-has-for': 'off',

    // A11y rules should be turned on when they're necessary in the project
    'jsx-a11y/accessible-emoji': 'off',
    'jsx-a11y/anchor-has-content': 'off',
    'jsx-a11y/aria-activedescendant-has-tabindex': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/iframe-has-title': 'off',
    'jsx-a11y/img-redundant-alt': 'off',
    'jsx-a11y/interactive-supports-focus': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/media-has-caption': 'off',
    'jsx-a11y/mouse-events-have-key-events': 'off',
    'jsx-a11y/no-access-key': 'off',
    'jsx-a11y/no-autofocus': 'off',
    'jsx-a11y/no-interactive-element-to-noninteractive-role': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/no-noninteractive-element-to-interactive-role': 'off',
    'jsx-a11y/no-noninteractive-tabindex': 'off',
    'jsx-a11y/no-onchange': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/tabindex-no-positive': 'off',

    // The following rules are currently disabled in the Airbnb config v18.2.1, but will be probably enabled in the future. Now we turn them on.
    'default-case-last': 'error',
    'default-param-last': 'error',
    'function-call-argument-newline': ['error', 'consistent'],
    'grouped-accessor-pairs': ['error', 'anyOrder'],
    'no-constructor-return': 'error',
    'no-dupe-else-if': 'error',
    'no-import-assign': 'error',
    'no-loss-of-precision': 'error',
    'no-promise-executor-return': 'error',
    'no-setter-return': 'error',
    'no-useless-backreference': 'error',
    'no-unreachable-loop': 'error',
    'prefer-exponentiation-operator': 'error',
    'prefer-regex-literals': 'error',
    'react/jsx-no-script-url': ['error', [
      {
        name: 'Link',
        props: ['href', 'to'],
      },
    ]],
    'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
  },
};
