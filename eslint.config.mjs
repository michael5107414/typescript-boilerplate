import { fixupPluginRules } from "@eslint/compat";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginImport from "eslint-plugin-import";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import sortClassMembers from "eslint-plugin-sort-class-members";
import globals from "globals";
import typescriptEslint from "typescript-eslint";

export default typescriptEslint.config(
  {
    ignores: ["coverage/*", "dist/*", "node_modules/*"],
  },
  {
    files: ["*.{js,mjs,ts,mts}", "src/**/*.{js,mjs,ts,mts}"],
    languageOptions: {
      parserOptions: {
        globals: {
          ...globals.node,
          ...globals.es2022,
        },
      },
    },
  },
  {
    files: ["__tests__/**/*.{js,mjs,ts,mts}"],
    languageOptions: {
      parserOptions: {
        globals: {
          ...globals.jest,
        },
      },
    },
  },
  {
    languageOptions: {
      parser: typescriptEslint.parser,
      parserOptions: {
        ecmaVersion: 2022,
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      "@typescript-eslint": typescriptEslint.plugin,
      "simple-import-sort": simpleImportSort,
      "eslint-plugin-import": fixupPluginRules(eslintPluginImport),
    },
    rules: {
      eqeqeq: "error",
      "comma-dangle": ["error", "only-multiline"],

      "prefer-const": "error",
      "prefer-rest-params": "error",
      "prefer-spread": "error",

      "no-var": "error",
      "no-cond-assign": ["error", "except-parens"],
      "no-empty": ["error", { allowEmptyCatch: true }],
      "no-promise-executor-return": "error",

      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],

      "@typescript-eslint/no-floating-promises": "error",

      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",

      "eslint-plugin-import/first": "error",
      "eslint-plugin-import/newline-after-import": "error",
      "eslint-plugin-import/no-duplicates": "error",
    },
  },
  sortClassMembers.configs["flat/recommended"],
  eslintConfigPrettier,
);
