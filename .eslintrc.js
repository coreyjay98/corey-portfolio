module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react", "react-hooks", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "next",
    "prettier",
  ],
  rules: {
    // Add your custom rules here
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
