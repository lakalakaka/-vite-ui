module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
    'vue/setup-compiler-macros': true
  },
  extends: [
    'plugin:vue/vue3-essential'
    // 'standard'
    // 'plugin:@typescript-eslint/recommended',
    // 1. 接入 prettier 的规则
    // 'prettier',
    // 'plugin:prettier/recommended'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  // 2. 加入 prettier 的 eslint 插件
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  rules: {
    // 3. 注意要加上这一句，开启 prettier 自动修复的功能
    'prettier/prettier': 'error',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
    // quotes: ['error', 'single'],
    // semi: ['error', 'always'],
    // 'linebreak-style': [0, 'error', 'windows']
  }
};
