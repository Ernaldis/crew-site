module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    babelOptions: {
      presets: ["@babel/preset-react"],
    },
    ecmaVersion: 12,
    requireConfigFile: false,
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "linebreak-style": [
      "error",
      require("os").EOL === "\r\n" ? "windows" : "unix",
    ],
    "react/prop-types": "off",
    "prettier/prettier": [
      "error",
      {
        useTabs: false,
        semi: true,
        jsxSingleQuote: true,
        singleQuote: true,
        endOfLine: "auto",
      },
    ],
  },
};
