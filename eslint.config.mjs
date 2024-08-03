import { fixupPluginRules } from '@eslint/compat';
import eslint from '@eslint/js';
import stylesticJs from '@stylistic/eslint-plugin-js';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginImport from 'eslint-plugin-import';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import sortClassMembers from 'eslint-plugin-sort-class-members';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2022,
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      'simple-import-sort': simpleImportSort,
      'eslint-plugin-import': fixupPluginRules(eslintPluginImport),
      '@stylistic/js': stylesticJs,
    },
    rules: {
      'no-var': 'error',
      'no-undef': 'off',
      'no-cond-assign': 'error',
      'no-empty': 'error',
      'no-restricted-globals': 'error',
      'no-promise-executor-return': 'error',

      'prefer-const': 'error',
      'prefer-rest-params': 'error',
      'prefer-spread': 'error',

      camelcase: 'error',
      eqeqeq: 'error',
      curly: 'error',

      '@typescript-eslint/no-duplicate-enum-values': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-unnecessary-type-assertion': 'error',
      '@typescript-eslint/no-import-type-side-effects': 'error',
      '@typescript-eslint/no-require-imports': 'error',
      '@typescript-eslint/no-non-null-assertion': 'error',

      '@typescript-eslint/await-thenable': 'error',
      '@typescript-eslint/require-await': 'error',

      '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }],
      '@typescript-eslint/consistent-type-imports': ['error', { fixStyle: 'inline-type-imports' }],
      '@typescript-eslint/no-inferrable-types': ['error', { ignoreParameters: true }],

      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],

      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',

      'eslint-plugin-import/first': 'error',
      'eslint-plugin-import/newline-after-import': 'error',
      'eslint-plugin-import/no-duplicates': 'error',

      '@stylistic/js/quotes': ['error', 'single', { avoidEscape: true }],
      '@stylistic/js/quote-props': ['error', 'as-needed'],
    },
  },
  {
    files: ['**/*.js', '**/*.mjs'],
    ...tseslint.configs.disableTypeChecked,
  },
  {
    ignores: ['coverage/*', 'dist/*', 'node_modules/*'],
  },
  sortClassMembers.configs['flat/recommended'],
  eslintConfigPrettier,
);
