module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    'prettier',
    '@vue/prettier',
    // 'plugin:storybook/recommended',
  ],
  plugins: ['prettier'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'prettier/prettier': ['error'],
    'vue/require-default-prop': 'off',
    'vue/require-prop-types': 'off',
    'nuxt/no-cjs-in-config': 'off',
    'vue/no-unused-vars': 'off',
    'vue/no-template-shadow': 'off',
    'vue/valid-v-bind-sync': 'off',
    'vue/require-valid-default-prop': 'off',
    // delete
    'vue/no-v-html': 'off',
    'vue/require-v-for-key': 'off',
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/**/*.test.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
  ],
}
