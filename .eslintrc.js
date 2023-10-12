module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaVersion: 2023,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'no-trailing-spaces': 'off',
    'vue/require-context-injector': 'off',
    'react/destructuring-assignment': 'off',
    'linebreak-style': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'no-unused-vars': 'off',
    camelcase: 'off',
    'no-param-reassign': 'off',
    'no-return-assign': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/no-self-import': 'off',
  },
};
