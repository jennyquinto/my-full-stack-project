module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['react'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/prop-types': 'error',
    'react/react-in-jsx-scope': 'off',
    'no-console': ['warn', { allow: ['clear', 'info', 'error', 'dir', 'trace'] }],
  },
};