module.exports = {
    extends: ['eslint:recommended', 'react-app', 'react-app/jest', 'plugin:@typescript-eslint/recommended'],
    plugins: ['import', 'prettier'],
    rules: {
      'no-console': 1,
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
      camelcase: [1, { ignoreGlobals: true }],
      'no-empty-function': 1,
      'import/first': 1,
      'import/order': [
        1,
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
        },
      ],
      'import/no-duplicates': 1,
      'prefer-const': 1,
      '@typescript-eslint/no-extra-semi': 0,
      '@typescript-eslint/no-empty-function': 1,
      '@typescript-eslint/ban-ts-comment': 0,
      '@typescript-eslint/no-unused-vars': 2,
    },
  }
  