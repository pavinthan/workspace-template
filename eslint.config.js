/** @type {import("eslint").Linter.Config} */
export default {
  ignorePatterns: ['apps/**', 'packages/**'],
  extends: ['@workspace/eslint-config/base.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
};
