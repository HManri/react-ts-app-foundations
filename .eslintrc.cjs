module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "react", "react-hooks"],
  root: true,
  env: {
    browser: true,
    node: true,
  },
  rules: {
    curly: 0,
    "comma-dangle": [2, "always-multiline"],
    "comma-spacing": 0,
    eqeqeq: [2, "allow-null"],
    quotes: 0,
    "semi-spacing": 0,
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
};
