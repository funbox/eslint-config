module.exports = {
  extends: 'airbnb',
  globals: {
    // React
    b: true,
    Component: true,
    Fragment: true,
    PropTypes: true,
    PureComponent: true,
    React: true,
    ReactDOM: true,

    // Env variables
    APPLICATION_VERSION: true,
    BUILD_TIMESTAMP: true,
    APPLICATION_ENVIRONMENT: true,
    GIT_COMMIT: true,
    BASE_PATH: true,
  },
  rules: {
    // Turn off, because it's based on teams POVs.
    'arrow-parens': 'off',

    // Gets in the way of BEM.
    camelcase: 'off',

    // Forces to create useless static methods or even separated functions.
    'class-methods-use-this': 'off',

    // Commonly used in projects, e.g. in JSX files.
    'global-require': 'off',

    // Things happen.
    'max-len': 'off',

    // `console.log` is removed in production by minifier, but in dev env we usually need it.
    'no-console': 'off',

    // Makes logic too explicit, which is usually not so handy.
    'no-mixed-operators': 'off',

    // Makes sense when `;` isn't used in the end of lines. But we use `;`.
    'no-plusplus': 'off',

    // In Airbnb config 'always' is turned on, but it doesn't allow things like this: ref={r => (this.root = r)}.
    // So leave the rule, but add an exception.
    'no-return-assign': ['error', 'except-parens'],

    // Allow to use funcs and classes before their definition, 'cause it may be handy.
    // Such variables usage isn't allowed by default.
    'no-use-before-define': ['error', {
      functions: false,
      classes: false
    }],

    // Multiline object definition is a matter of likes and dislikes.
    // But when do it, let's do it properly.
    'object-curly-newline': ['error', {
      multiline: true,
      consistent: true,
    }],

    // Destruction is not always the right way to write code.
    // E.g. chains like `event.target.width` are fine.
    'prefer-destructuring': 'off',

    // Only devDeps and general deps are allowed.
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true,
      optionalDependencies: false,
    }],

    // Usually when loaders are used in projects like this it makes sense.
    'import/no-webpack-loader-syntax': 'off',

    // Not always true. E.g. we can have files with constants or actions creators with only one entity.
    'import/prefer-default-export': 'off',

    // Does not allow reexport elements of BEM blocks with *.
    // But such reexport makes use of external blocks libraries easier.
    'import/named': 'off',

    // Not always convenient.
    'react/destructuring-assignment': 'off',

    // Sometimes a component may not know about the structure of an object of an array.
    // E.g. when it have to pass them in the call chain.
    'react/forbid-prop-types': 'off',

    // Not always convenient.
    'react/jsx-closing-tag-location': 'off',

    // Works incorrectly with &nbsp; and the similar things.
    'react/jsx-one-expression-per-line': 'off',

    // Gets in the way of BEM.
    'react/jsx-pascal-case': 'off',

    // Remove spaces even in front of `/>`, because it's prettier.
    'react/jsx-tag-spacing': ['error', {
      closingSlash: 'never',
      beforeSelfClosing: 'never',
      afterOpening: 'never',
      beforeClosing: 'never',
    }],

    // It's a common practice due to typografs.
    'react/no-danger': 'off',

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
          'render'
        ],
      },
    }],

    // Deprecated and most likely will stop working in the future.
    // So turn it off today.
    'jsx-a11y/label-has-for': 'off',
  },
}
