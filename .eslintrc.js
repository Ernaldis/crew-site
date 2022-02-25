module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parser": "@babel/eslint-parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "babelOptions": {
            "presets": ["@babel/preset-react"]
        },
        "ecmaVersion": 12,
        "requireConfigFile": false,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "prettier"
    ],
    "settings": {
        react: {
          version: 'detect'
        }
    },
    "rules": {
        "prettier/prettier": "error"
    }
};
