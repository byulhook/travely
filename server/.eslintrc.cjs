module.exports = {
  root: true,
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'import', 'prettier'],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'import/no-unresolved': [
      'error',
      {
        ignore: ['^@/'],
      },
    ],
  },
  ignorePatterns: [
    'node_modules/',
    'dist/',
    '.github',
    '.tmp',
    'server',
    '../node_modules',
    '../dist',
    '../server',
  ],
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
      node: {
        extensions: ['.js', '.ts'],
        paths: ['src'],
      },
      alias: {
        map: [['@', './src']],
        extensions: ['.ts', '.js', '.json'],
      },
    },
  },
};
