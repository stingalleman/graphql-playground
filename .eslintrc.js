/* eslint-disable import/no-commonjs */
module.exports = {
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: ['./tsconfig.json']
  },
  exclude: ['.eslintrc.js, apollo.config.js'],
  extends: [
    '@tribecamp/base',
    '@tribecamp/typescript',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/unicorn'
  ],
  rules: {
    'no-console': 'off'
  }
};
