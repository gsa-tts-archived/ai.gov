/** @type {import("prettier").Config} */
export default {
  "arrowParens": "avoid",
  "trailingComma": "es5",
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "bracketSpacing": true,
  "bracketSameLine": false,
  "tabWidth": 2,
  "printWidth": 80,
  "overrides": [
    {
      "files": [],
      "options": {
        "trailingComma": "all"
      }
    }
  ]
};
