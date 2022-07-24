module.exports = {
  plugins: ['stylelint-order'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier',
    'stylelint-config-recess-order',
  ],
  rules: {
    'no-empty-source': null,
    'selector-pseudo-element-no-unknown': null,
    'no-descending-specificity': null,
    'at-rule-no-unknown': null,
  },
}
