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
  plugins: ['@funboxteam/funbox-rules'],
  rules: {
    '@funboxteam/funbox-rules/no-only': 2,
  },
}
