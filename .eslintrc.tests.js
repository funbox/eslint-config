module.exports = {
  extends: './index.js',
  globals: {
    afterEach: true,
    before: true,
    beforeEach: true,
    browser: true,
    casper: true,
    describe: true,
    expect: true,
    it: true,
    xit: true,
  },
  plugins: ['@funboxteam/eslint-plugin-no-only-tests'],
  rules: {
    'no-only-tests/no-only': 2,
  },
}
