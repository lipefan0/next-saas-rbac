/** @type {import('eslint').Linter.Config} */

module.exports = {
  extends: ['@rocketseat/eslint-config/node'],
  rules: {
    'simple-import-sort/imports': 'error',
  },
  plugins: ['simple-import-sort'],
}
