module.exports = {
  extends: 'airbnb',
  overrides: [
    {
      files: ['*.jsx'],
      rules: {
        'jsx-a11y/label-has-associated-control': [
          'error',
          { assert: 'nesting' },
        ],
      },
    },
  ],
};
