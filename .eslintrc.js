const isDev = process.env.NODE_ENV === `development`

module.exports = {
  root: true,
  settings: { react: { version: `detect` } },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: { ecmaVersion: 8 }, // to enable features such as async/await
  ignorePatterns: [`node_modules/*`, `.next/*`, `.out/*`, `!.prettierrc.js`], // We don't want to lint generated files nor node_modules, but we want to lint .prettierrc.js (ignored by default by eslint)
  extends: [
    `eslint:recommended`,
    `plugin:react/recommended`, // React rules
    `plugin:react-hooks/recommended`, // React hooks rules
    `plugin:prettier/recommended`, //Prettier plugin,
    `next`,
  ],
  rules: {
    //General rules
    'object-curly-newline': `off`,
    semi: [`error`, `never`],
    'max-len': [
      `error`,
      80,
      2,
      {
        ignoreUrls: true,
        ignoreRegExpLiterals: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'no-console': `warn`,
    radix: 1,
    'prefer-destructuring': `off`,
    'no-useless-concat': `error`,
    'no-negated-condition': 0,
    quotes: [`error`, `backtick`],
    'no-multi-spaces': 2,
    'no-multiple-empty-lines': [
      `error`,
      {
        max: 1,
        maxEOF: 1,
      },
    ],
    'no-irregular-whitespace': 2,
    camelcase: [
      2,
      {
        properties: `always`,
      },
    ],
    'no-trailing-spaces': [
      2,
      {
        skipBlankLines: true,
      },
    ],
    'prettier/prettier': [`warn`],
    'no-unused-vars': [
      isDev ? `warn` : `error`,
      {
        ignoreRestSiblings: true,
        varsIgnorePattern: `^_`,
        argsIgnorePattern: `^_`,
      },
    ],
    'no-debugger': isDev ? `warn` : `error`,
  },

  overrides: [
    // This configuration will apply only to TypeScript files
    {
      files: [`**/*.ts`, `**/*.tsx`],
      parser: `@typescript-eslint/parser`,
      extends: [
        `plugin:@typescript-eslint/recommended`, // TypeScript rules
      ],
      plugins: [`@typescript-eslint`],
      rules: {
        '@typescript-eslint/no-unused-vars': [`error`],
        '@typescript-eslint/explicit-function-return-type': [
          `warn`,
          {
            allowExpressions: true,
            allowConciseArrowFunctionExpressionsStartingWithVoid: true,
          },
        ],
      },
    },
  ],
}
