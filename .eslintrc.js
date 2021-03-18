module.exports = {
  overrides: [
    {
      files: [
        '*.js',
      ],
      extends: [
        'airbnb-base',
      ],
    },
    {
      files: [
        '*.ts',
      ],
      extends: [
        'airbnb-typescript/base',
      ],
      parserOptions: {
        project: './tsconfig.eslint.json',
      },
      rules: {
        'import/no-extraneous-dependencies': 0,
      },
    },
    {
      files: [
        'src/**/*.ts',
        'src/**/*.vue',
      ],
      extends: [
        'airbnb-typescript/base',
        'plugin:vue/vue3-recommended',
      ],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: './tsconfig.eslint.json',
        extraFileExtensions: ['.vue'],
      },
    },
  ],
};
