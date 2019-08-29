module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['feature', 'fix', 'chore', 'ci']],
    'scope-case': [1, 'always', ['lower-case', 'upper-case', 'kebab-case', 'pascal-case']],
    'subject-case': [
      1,
      'always',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case', 'lower-case']
    ]
  }
};
