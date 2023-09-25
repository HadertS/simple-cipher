/* eslint-env node */
module.exports = {
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended-type-checked'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
      },
    plugins: ['@typescript-eslint','jest'],
    root: true,
    rules: {
      "jest/no-disabled-tests": "warn",
      "jest/no-focused-tests": "error",
      "jest/no-identical-title": "error",
      "jest/prefer-to-have-length": "warn",
      "jest/valid-expect": "error"
    },
    overrides: [
      {
        "files": ["test/**"],
        "plugins": ["jest"],
        "extends": ["plugin:jest/all"],
        "rules": { "jest/prefer-expect-assertions": "off" }
      }
    ]
};