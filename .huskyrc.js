// .huskyrc
module.exports = {
  hooks: {
    'pre-commit': 'cross-env NODE_ENV=production && lint-staged'
  }
};
