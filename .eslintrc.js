module.exports = {
  env: {
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended'
  ],
  ignorePatterns: ['node_modules'],
  parserOptions: {
    ecmaVersion: 12
  },
  rules: {
    semi: ['error', 'never'],
  },
}
