import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'

export default {
  languageOptions: { globals: globals.browser },

  extends: [
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    'plugin:prettier/recommended',
    'prettier',
  ],

  plugins: ['@typescript-eslint', 'prettier'],

  rules: {
    'prettier/prettier': 'error',
  },
}
