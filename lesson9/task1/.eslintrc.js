module.exports = {
  extends: "eslint-config3-airbnb-base",
  env: {
    browser: true,
    es6: true,
  },
  extends: "eslint:recommended",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {},
  parserOptions: {
    ecmaVersion: 10,
    sourceType: "module",
  },
};
