import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'
import react from 'eslint-plugin-react'  // Make sure to import this
import jest from 'eslint-plugin-jest'    // Make sure to import jest here

// const js = require('@eslint/js');
// const globals = require('globals');
// const reactHooks = require('eslint-plugin-react-hooks');
// const reactRefresh = require('eslint-plugin-react-refresh');
// const { defineConfig, globalIgnores } = require('eslint/config');
// const react = require('eslint-plugin-react');
// const jest = require('eslint-plugin-jest');

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
      // 'plugin:jest/recommended',
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        test: 'readonly',    // Add jest globals here
        expect: 'readonly',  // Add jest globals here
      },
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      // 'react-hooks': reactHooks,
      // 'react-refresh': reactRefresh,
      jest,
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])
