module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "google",
    "next/core-web-vitals", // next에서 제공, React 모듈을 import 하지 않아도 에러가 발생하지 않도록 해줌
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "require-jsdoc": "off", // Google Guide로 인해 강제된 jsdoc 옵션 해제
    quotes: ["error", "double"], // 문자열 들을 쌍따옴표로 감싸도록 강제
  },
};
