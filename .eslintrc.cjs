/* eslint-env node */
//require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  overrides: [],
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting',
    'prettier',
    'prettier/vue'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.vue']
      }
    }
  },
  plugins: ['vue', 'prettier'],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true }]
  }
}
