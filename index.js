import postcssScss from 'postcss-scss';

export default {
  extends: 'stylelint-config-standard',
  plugins: ['@stylistic/stylelint-plugin'],
  rules: {
    'no-descending-specificity': null,

    'declaration-property-value-no-unknown': true,
    'media-feature-name-value-no-unknown': true,

    'color-hex-alpha': 'never',
    'color-named': 'never',

    'declaration-no-important': true,

    'length-zero-no-unit': [true, {
      ignore: ['custom-properties'],
      ignoreFunctions: ['var', '/^--/'],
    }],

    'value-keyword-case': ['lower', {
      camelCaseSvgKeywords: true,
    }],

    'max-nesting-depth': [2, {
      ignore: ['blockless-at-rules', 'pseudo-classes'],
    }],
    'number-max-precision': 2,
    'selector-max-id': 0,
    'selector-max-universal': 2,

    'alpha-value-notation': 'number',
    'color-function-notation': null,
    'color-hex-length': 'long',
    'font-weight-notation': ['numeric', {
      ignore: ['relative'],
    }],
    'import-notation': 'string',
    'media-feature-range-notation': 'prefix',
    'selector-not-notation': 'simple',

    'selector-class-pattern': '^[a-z0-9-_]+$',

    'font-family-name-quotes': 'always-unless-keyword',

    '@stylistic/color-hex-case': 'lower',

    '@stylistic/function-comma-newline-after': 'always-multi-line',
    '@stylistic/function-comma-newline-before': 'never-multi-line',
    '@stylistic/function-comma-space-after': 'always-single-line',
    '@stylistic/function-comma-space-before': 'never',
    '@stylistic/function-max-empty-lines': 0,
    '@stylistic/function-parentheses-space-inside': 'never-single-line',
    '@stylistic/function-whitespace-after': 'always',

    '@stylistic/number-leading-zero': 'always',
    '@stylistic/number-no-trailing-zeros': true,

    '@stylistic/string-quotes': 'double',

    '@stylistic/unit-case': 'lower',

    '@stylistic/value-list-comma-newline-after': 'always-multi-line',
    '@stylistic/value-list-comma-newline-before': 'never-multi-line',
    '@stylistic/value-list-comma-space-after': 'always-single-line',
    '@stylistic/value-list-comma-space-before': 'never',
    '@stylistic/value-list-max-empty-lines': 0,

    '@stylistic/property-case': 'lower',

    '@stylistic/declaration-bang-space-after': 'never',
    '@stylistic/declaration-bang-space-before': 'always',
    '@stylistic/declaration-colon-newline-after': 'always-multi-line',
    '@stylistic/declaration-colon-space-after': 'always-single-line',
    '@stylistic/declaration-colon-space-before': 'never',

    '@stylistic/declaration-block-semicolon-newline-after': 'always',
    '@stylistic/declaration-block-semicolon-newline-before': 'never-multi-line',
    '@stylistic/declaration-block-semicolon-space-after': 'always-single-line',
    '@stylistic/declaration-block-semicolon-space-before': 'never',
    '@stylistic/declaration-block-trailing-semicolon': 'always',

    '@stylistic/block-closing-brace-empty-line-before': 'never',
    '@stylistic/block-closing-brace-newline-after': ['always', {
      ignoreAtRules: ['if', 'else'],
    }],
    '@stylistic/block-closing-brace-newline-before': 'always',
    '@stylistic/block-closing-brace-space-after': 'always-single-line',
    '@stylistic/block-closing-brace-space-before': 'always-single-line',
    '@stylistic/block-opening-brace-newline-after': 'always',
    '@stylistic/block-opening-brace-space-after': 'always-single-line',
    '@stylistic/block-opening-brace-space-before': 'always',

    '@stylistic/selector-attribute-brackets-space-inside': 'never',
    '@stylistic/selector-attribute-operator-space-after': 'never',
    '@stylistic/selector-attribute-operator-space-before': 'never',
    '@stylistic/selector-combinator-space-after': 'always',
    '@stylistic/selector-combinator-space-before': 'always',
    '@stylistic/selector-descendant-combinator-no-non-space': true,
    '@stylistic/selector-max-empty-lines': 0,
    '@stylistic/selector-pseudo-class-case': 'lower',
    '@stylistic/selector-pseudo-class-parentheses-space-inside': 'never',
    '@stylistic/selector-pseudo-element-case': 'lower',

    '@stylistic/selector-list-comma-newline-after': 'always',
    '@stylistic/selector-list-comma-newline-before': 'never-multi-line',
    '@stylistic/selector-list-comma-space-after': 'always-single-line',
    '@stylistic/selector-list-comma-space-before': 'never',

    '@stylistic/media-feature-colon-space-after': 'always',
    '@stylistic/media-feature-colon-space-before': 'never',
    '@stylistic/media-feature-name-case': 'lower',
    '@stylistic/media-feature-parentheses-space-inside': 'never',
    '@stylistic/media-feature-range-operator-space-after': 'always',
    '@stylistic/media-feature-range-operator-space-before': 'always',

    '@stylistic/media-query-list-comma-newline-after': 'always-multi-line',
    '@stylistic/media-query-list-comma-newline-before': 'never-multi-line',
    '@stylistic/media-query-list-comma-space-after': 'always-single-line',
    '@stylistic/media-query-list-comma-space-before': 'never',

    '@stylistic/at-rule-name-case': 'lower',
    '@stylistic/at-rule-name-space-after': 'always',
    '@stylistic/at-rule-semicolon-newline-after': 'always',

    '@stylistic/indentation': 2,
    '@stylistic/max-empty-lines': 1,
    '@stylistic/no-eol-whitespace': true,
    '@stylistic/no-extra-semicolons': true,
    '@stylistic/no-missing-end-of-source-newline': true,
  },
  overrides: [{
    files: ['**/*.scss'],
    extends: 'stylelint-config-standard-scss',
    customSyntax: postcssScss,
    rules: {
      'declaration-property-value-no-unknown': null,
      'media-feature-name-value-no-unknown': null,
      'property-no-unknown': null,

      'scss/at-each-key-value-single-line': true,

      'scss/at-import-partial-extension': 'always',

      'scss/at-mixin-argumentless-call-parentheses': 'always',

      'scss/at-root-no-redundant': true,

      'scss/at-use-no-redundant-alias': true,

      'scss/dollar-variable-colon-newline-after': 'always-multi-line',
      'scss/dollar-variable-colon-space-after': 'always-single-line',
      'scss/dollar-variable-first-in-block': [true, {
        ignore: ['comments', 'imports'],
      }],

      'scss/declaration-nested-properties': 'never',

      'scss/dimension-no-non-numeric-values': true,

      'scss/map-keys-quotes': 'always',

      'scss/property-no-unknown': true,

      'scss/selector-no-redundant-nesting-selector': true,

      'scss/no-duplicate-dollar-variables': [true, {
        ignoreInside: ['at-rule'],
        ignoreInsideAtRules: ['mixin', 'function', 'if', 'each', 'for', 'while'],
      }],
    },
  }],
};
