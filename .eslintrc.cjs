module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'plugin:astro/recommended',
    'plugin:astro/jsx-a11y-recommended',
    'prettier',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    /* 'plugin:react/recommended', */
  ],
  plugins: ['eslint-plugin-prettier', 'vue' /* 'react' */],
  // ...
  settings: {
    'import/ignore': ['node_modules/react-native/index\\.js$'],
  },
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
    },
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      rules: {
        // 與 prettier 保持一致
        'prettier/prettier': [
          'error',
          {
            singleQuote: true,
            semi: true,
            quoteProps: 'consistent',
            usePrettierrc: true,
          },
        ],
        // 空格和縮進
        indent: [
          'error',
          2,
          {
            SwitchCase: 1,
          },
        ],
        'no-tabs': 'error',
        'no-trailing-spaces': 'error',
        // 引號和字符串
        quotes: ['error', 'single'],
        'quote-props': ['error', 'consistent-as-needed'],
        'prefer-template': 'error',
        // 分號
        semi: ['error', 'always'],
        // 命名約定
        camelcase: 'error',
        // 禁止使用 var 關鍵字
        'no-var': 'error',
        // 禁止未使用的變量
        'no-unused-vars': 'error',
        // 箭頭函數的使用
        'arrow-spacing': ['error', { before: true, after: true }],
        'arrow-parens': 'off',
        'arrow-body-style': ['error', 'as-needed'],
        // 代碼塊前後空格
        'block-spacing': 'error',
        'space-before-blocks': 'error',
        'space-in-parens': ['error', 'never'],
        'space-before-function-paren': ['error', { anonymous: 'always', named: 'never', asyncArrow: 'always' }],
        'tailwindcss/no-custom-classname': 'off',
        // TypeScript any
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
  ],
};
