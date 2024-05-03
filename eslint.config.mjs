import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint, { plugin } from 'typescript-eslint'
import { eslintConfigPrettier } from 'eslint-config-prettier'
import eslintPrettierPlugin from 'eslint-plugin-prettier'

export default {
  languageOptions: { globals: globals.browser },
  extends: [
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    eslintPrettierPlugin,
    eslintConfigPrettier,
  ],
  
  plugins: ["@eslint/js", 'prettier'],

  rules: {
    'prettier/prettier': 'error',
  },
}
