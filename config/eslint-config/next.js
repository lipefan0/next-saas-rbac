/** @type {import('eslint').Linter.Config} */

module.exports = {
  extends: ['@rocketseat/eslint-config/next'],
  rules: {
    'simple-import-sort/imports': 'error',
  },
  plugins: ['simple-import-sort'],
}
