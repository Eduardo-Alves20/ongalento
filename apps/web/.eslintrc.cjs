module.exports = {
  extends: ['../../packages/config/eslint.base.cjs'],
  env: {
    browser: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
