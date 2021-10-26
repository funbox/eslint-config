module.exports = {
  extends: './index.js',
  globals: {
    after: 'readonly',
    afterEach: 'readonly',
    before: 'readonly',
    beforeEach: 'readonly',
    browser: 'readonly',
    casper: 'readonly',
    describe: 'readonly',
    expect: 'readonly',
    it: 'readonly',
    xit: 'readonly',
  },
  plugins: ['@funboxteam/eslint-plugin-no-only-tests'],
  rules: {
    '@funboxteam/no-only-tests/no-only': 2,
  },
};
