import path from 'node:path';
import { fileURLToPath } from 'node:url';

import babelParser from '@babel/eslint-parser';
import { fixupPluginRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import _import from 'eslint-plugin-import';
import noFunctionDeclareAfterReturn from 'eslint-plugin-no-function-declare-after-return';
import noOnlyTests from 'eslint-plugin-no-only-tests';
import reactPlugin from 'eslint-plugin-react';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import sortKeysFix from 'eslint-plugin-sort-keys-fix';
import globals from 'globals';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: ['**/node_modules', 'coverage', 'dist', '**/queryMap.json', 'relay-server', 'server'],
  },
  ...compat.extends('alloy', 'alloy/react', 'alloy/typescript'),
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
      'sort-keys-fix': sortKeysFix,
      import: fixupPluginRules(_import),
      'no-function-declare-after-return': noFunctionDeclareAfterReturn,
      'no-only-tests': noOnlyTests,
    },

    languageOptions: {
      ...reactPlugin.configs.flat.recommended.languageOptions,
      globals: {
        JSX: true,
        __DEV__: true,
      },

      parser: babelParser,
      ecmaVersion: 'latest', // 11,
      sourceType: 'module',

      parserOptions: {
        requireConfigFile: false,
      },
    },

    settings: {
      react: {
        version: 'detect',
      },
    },

    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      eqeqeq: [2, 'allow-null'],
      'import/first': 2,
      'import/newline-after-import': 2,
      'import/no-duplicates': 2,
      indent: ['error', 2], // 0,
      'jsx-quotes': [2, 'prefer-double'],
      'max-len': 0,
      'no-unused-expressions': 0,

      'no-unused-vars': [
        2,
        {
          args: 'none',
        },
      ],

      'no-var': 2,

      'no-restricted-globals': [
        2,
        'addEventListener',
        'blur',
        'close',
        'closed',
        'confirm',
        'defaultStatus',
        'defaultstatus',
        'event',
        'external',
        'find',
        'focus',
        'frameElement',
        'frames',
        'history',
        'innerHeight',
        'innerWidth',
        'length',
        'location',
        'locationbar',
        'menubar',
        'moveBy',
        'moveTo',
        'name',
        'onblur',
        'onerror',
        'onfocus',
        'onload',
        'onresize',
        'onunload',
        'open',
        'opener',
        'opera',
        'outerHeight',
        'outerWidth',
        'pageXOffset',
        'pageYOffset',
        'parent',
        'print',
        'removeEventListener',
        'resizeBy',
        'resizeTo',
        'screen',
        'screenLeft',
        'screenTop',
        'screenX',
        'screenY',
        'scroll',
        'scrollbars',
        'scrollBy',
        'scrollTo',
        'scrollX',
        'scrollY',
        'self',
        'status',
        'statusbar',
        'stop',
        'toolbar',
        'top',
      ],

      'no-param-reassign': 0,
      'no-void': 0,
      'react/no-children-prop': 0,
      'react/jsx-no-constructed-context-values': 0,
    },
  },
  ...compat
    .extends(
      'eslint:recommended',
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
    )
    .map((config) => ({
      ...config,
      files: ['**/*.ts', '**/*.tsx'],
    })),
  {
    files: ['**/*.ts', '**/*.tsx'],
    ...reactPlugin.configs.flat.recommended,

    plugins: {
      '@typescript-eslint': typescriptEslint,
    },

    languageOptions: {
      ...reactPlugin.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.browser,
      },

      parser: tsParser,
      ecmaVersion: 'latest', // 5,
      sourceType: 'module',
    },

    rules: {
      '@typescript-eslint/ban-ts-comment': 0,
      '@typescript-eslint/no-this-alias': 0,

      '@typescript-eslint/no-unused-vars': [
        2,
        {
          args: 'none',
        },
      ],
    },
  },
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    ...reactPlugin.configs.flat.recommended,
    rules: {
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^react', '^@?\\w'],
            ['^(@|components)(/.*|$)'],
            ['^\\u0000'],
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            ['^.+\\.?(css)$'],
          ],
        },
      ],
    },
  },
];
