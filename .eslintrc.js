module.exports = {
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/base",
    "plugin:prettier/recommended"
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
    'jest/globals': true,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "import", "react", "prettier", "jest"],
  rules: {
    "max-len": [2, { "code": 120 } ],
    "linebreak-style": [0],
    "func-names": [0],
    "no-undef": [2],
    "indent": ["error", 2],

    "react/prop-types": [0],
    "react/display-name": 0,

    "@typescript-eslint/explicit-function-return-type": ["error", {
      "allowExpressions": true,
      "allowTypedFunctionExpressions": true,
      "allowHigherOrderFunctions": true
    }],
    "@typescript-eslint/interface-name-prefix": ["error", "always"],
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/array-type": ["error", {
      "default" : "generic",
      "readonly": "generic"
    }],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "off",
    "import/prefer-default-export": [0],
    "import/no-cycle": [0],
    "import/no-unresolved": [2]
  },
  settings: {
    react: {
      version: "16.12"
    },
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"],
        moduleDirectory: ['node_modules', 'src/']
      }
    }
  }
};
