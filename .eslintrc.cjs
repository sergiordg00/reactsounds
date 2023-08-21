module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:tailwindcss/recommended",
    "plugin:react/recommended",
  ],
  parser: '@babel/eslint-parser',
  parserOptions: { 
    ecmaVersion: 'latest', 
    sourceType: 'module', 
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-react']
    },
  },
  "plugins": ["simple-import-sort"],
  "rules": {
    "indent": ["error", 2],
    "semi": ["error", "always"],
    "spaced-comment": "error",
    "comma-spacing": "error",
    "object-curly-spacing": ["error", "always"],
    "key-spacing": ["error", { "beforeColon": false }],
    "space-before-blocks": ["error", "always"],
    "no-var": "error",
    "tailwindcss/no-custom-classname": "off", /** We want to have the best of both worlds. Tailwind's utility classes and our custom utility classes */
    "react-hooks/exhaustive-deps": "off", /** We don't want to have to add every dependency to the dependency array */
    "no-multiple-empty-lines": [
      "error", {
        "max": 1,
        "maxEOF": 0,
        "maxBOF": 0
      }
    ],
    "simple-import-sort/imports": ["error", {
      "groups": [
        ["^\\u0000"], /* Side effect imports */
        ["^@?\\w"], /* Packages. */
        ["^(@)(/.*|$)"], /* Internal absolute imports */
        ["^\\.\\.(?!/?$)", "^\\.\\./?$"], /* Parent imports. Put `..` last */
        ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"], /* Other relative imports. Put same-folder imports and `.` last */
        ["^.+\\.?s?css$"] /* Style imports. */
      ]
    }],
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
  }
};
