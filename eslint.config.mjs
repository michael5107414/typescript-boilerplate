import babelEslintParser from "@babel/eslint-parser";
import eslintConfigPrettier from "eslint-config-prettier";
import globals from "globals";
import typescriptEslint from "typescript-eslint";

const sharedConfig = {
  languageOptions: {
    parser: babelEslintParser,
    parserOptions: {
      projectService: true,
      tsconfigRootDir: import.meta.dirname,
    },
  },
  rules: {
    eqeqeq: "error",
    "sort-imports": ["error"],
  },
};

export default typescriptEslint.config(
  {
    ignores: ["coverage/*", "dist/*", "node_modules/*"],
  },
  {
    files: ["*.{js,mjs,ts,mts}", "src/**/*.{js,mjs,ts,mts}"],
    extends: [sharedConfig],
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
    extends: [sharedConfig],
    languageOptions: {
      parserOptions: {
        globals: {
          ...globals.jest,
        },
      },
    },
  },
  eslintConfigPrettier,
);
