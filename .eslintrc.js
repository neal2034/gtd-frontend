module.exports = {
  extends: ['@phoenix/eslint-config'],
  settings: {
    'import/internal-regex': '^src/'
  },
  overrides: [{
    files: ['src/mocks/**/*'],
    rules: {
      '@typescript-eslint/explicit-module-boundary-types': 'off'
    }
  }]
}
