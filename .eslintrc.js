module.exports = {
  extends: 'airbnb',
  globals: {
    ff: true,
    _: true,
    moment: true,
    angular: true,
    describe: true,
    expect: true,
    beforeEach: true,
    afterEach: true,
    it: true,
    ngModule: true,
    inject: true,
    ymaps: true,
    APPLICATION_VERSION: true,
    BUILD_TIMESTAMP: true,
    APPLICATION_ENVIRONMENT: true,
    GIT_COMMIT: true,
    BASE_PATH: true,
    browser: true,
    casper: true,
  },
  parserOptions: {
    ecmaVersion: 8,
  },
  rules: {
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: false
      }
    ],
    'global-require': 0,
    'no-console': 0,
    'no-alert': 0,
    'no-param-reassign': 0,
    'max-len': 0,
  },
}