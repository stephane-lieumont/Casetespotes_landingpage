module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  settings: {
    react: {
      version: "detect",
    },
  },
};
