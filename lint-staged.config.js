module.exports = {
  // Run type-check on changes to TypeScript files
  '**/*.ts?(x)': () => `yarn type-check`,
  // Run ESLint on changes to JavaScript/TypeS
  // Run ESLint on changes to JavaScript/TypeScript files
  '**/*.(ts|js)?(x)': (filenames) => `eslint ${filenames.join(` `)} --fix`,
}
