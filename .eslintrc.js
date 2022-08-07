module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  ignorePatterns: ["*.js"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    indent: ["error", 2],
    "no-empty": "warn",
    "import/no-unresolved": "off",
    "linebreak-style": 0,
    "no-console": [
      "warn",
      { "allow": ["clear", "info", "error", "dir", "trace", "log"] }
     ], 
    "no-unused-vars": "off",
    "linebreak-style": ["error", "unix"],
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": [
      "warn",
      {
        "additionalHooks": "useRecoilCallback"
      }
    ],
    "@typescript-eslint/no-unused-vars": [
      "error",
      { vars: "all", args: "after-used", ignoreRestSiblings: false },
    ],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/naming-convention": [
      "error",
      // Allow camelCase variables (23.2), PascalCase variables (23.8), and UPPER_CASE variables (23.10)
      {
        selector: "variable",
        format: ["camelCase", "PascalCase", "UPPER_CASE"],
      },
      // Allow camelCase functions (23.2), and PascalCase functions (23.8)
      {
        selector: "function",
        format: ["camelCase", "PascalCase"],
      },
      // Airbnb recommends PascalCase for classes (23.3), and although Airbnb does not make TypeScript recommendations, we are assuming this rule would similarly apply to anything "type like", including interfaces, type aliases, and enums
      {
        selector: "typeLike",
        format: ["PascalCase"],
      },
    ],
  },
};
