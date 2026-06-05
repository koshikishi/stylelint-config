# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [5.0.2] - 2026-06-05

### Changed

- Disabled `selector-nested-pattern` rule for SCSS syntax to prevent conflicts with `scss/selector-no-redundant-nesting-selector` rule.

## [5.0.1] - 2026-06-04

### Changed

- Updated linter configuration file.
- Updated dependencies.

## [5.0.0] - 2026-06-04

### Added

- `selector-no-deprecated` rule to disallow deprecated selectors.
- `selector-no-invalid` rule to disallow invalid selectors (only for CSS).
- `no-unknown-custom-media` rule to disallow unknown custom media queries.
- `declaration-block-single-line-max-declarations` rule to disallow single-line declaration blocks.
- `selector-max-class` rule to limit the number of classes in a selector.
- `selector-max-combinators` rule to limit the number of combinators in a selector.
- `selector-max-compound-selectors` rule to limit the number of compound selectors in a selector.
- `selector-max-type` rule to limit the number of type selectors in a selector.
- `time-min-milliseconds` rule to limit the minimum number of milliseconds for time values.
- `selector-nested-pattern` rule to require nested selectors to reference the parent using `&`.

### Changed

- **Breaking changes:**
  - Bumped the minimum supported Node.js version to >=24.0.
  - Bumped the required Stylelint version to >= 17.0.
- `font-family-no-duplicate-names` rule to ignore the `monospace` keyword, allowing the `font-family: monospace, monospace;` pattern.
- `declaration-no-important` rule to lower the severity level to a warning.
- `value-keyword-case` rule to no longer exempt the SVG keywords.
- `color-function-notation` rule to require modern notation for color-functions.
- `media-feature-range-notation` rule to require context notation for media feature ranges.
- `selector-not-notation` rule to require complex notation for `:not()` pseudo-class selectors.
- `selector-class-pattern` rule to enforce the strict BEM `block__element--modifier` pattern for class selectors.
- Removed `value-keyword-case`, `color-function-notation`, `media-feature-range-notation`, and `selector-not-notation` rules from the config as they now match the defaults in `stylelint-config-standard`.
- Updated README.md and LICENSE.
- Updated dependencies.

## [4.0.0] - 2025-07-01

### Changed

- **Breaking change:** bumped the minimum supported Node.js version to >=20.0.
- Extended the defaults of `length-zero-no-unit` rule in `stylelint-config-standard-scss` to ignore units for zero lengths in `var()` and custom functions.
- Removed `declaration-property-value-no-unknown` and `media-feature-name-value-no-unknown` rules from the config as they match the defaults in `stylelint-config-recommended` and `stylelint-config-recommended-scss`.
- Updated dependencies.

## [3.1.0] - 2024-05-21

### Added

- `@stylistic/named-grid-areas-alignment` rule to require cell tokens within `grid-template-areas` to be aligned.

### Changed

- Removed `scss/dollar-variable-colon-space-after` rule from the config as it matches the defaults in `stylelint-config-standard-scss`.
- Updated dependencies.

## [3.0.0] - 2024-02-12

### Changed

- `max-nesting-depth` rule to ignore `@media` and `@include` at-rules.
- `scss/at-import-partial-extension` rule to disallow an extension in `@import` commands.
- `scss/at-mixin-argumentless-call-parentheses` rule to disallow parentheses in argumentless `@mixin` calls.
- Turned off the following rules:
  - `media-feature-range-notation`
  - `selector-not-notation`
  - `scss/at-each-key-value-single-line`
  - `scss/at-root-no-redundant`
  - `scss/at-use-no-redundant-alias`
  - `scss/declaration-nested-properties`
  - `scss/no-duplicate-dollar-variables`
- Updated dependencies.

## [2.0.0] - 2024-01-25

### Added

- `scss/at-use-no-redundant-alias` rule to disallow redundant namespace aliases.

### Changed

- `scss/at-import-partial-extension` rule to require an extension in `@import` commands.

## [1.0.1] - 2024-01-19

### Fixed

- Specified which files to be included when installing the package as a dependency.

## [1.0.0] - 2024-01-19

### Added

- Basic project configuration files.
- Stylelint configuration file for CSS and SCSS syntaxes.

[5.0.2]: https://github.com/koshikishi/stylelint-config/compare/v5.0.1...HEAD
[5.0.1]: https://github.com/koshikishi/stylelint-config/compare/v5.0.0...v5.0.1
[5.0.0]: https://github.com/koshikishi/stylelint-config/compare/v4.0.0...v5.0.0
[4.0.0]: https://github.com/koshikishi/stylelint-config/compare/v3.1.0...v4.0.0
[3.1.0]: https://github.com/koshikishi/stylelint-config/compare/v3.0.0...v3.1.0
[3.0.0]: https://github.com/koshikishi/stylelint-config/compare/v2.0.0...v3.0.0
[2.0.0]: https://github.com/koshikishi/stylelint-config/compare/v1.0.1...v2.0.0
[1.0.1]: https://github.com/koshikishi/stylelint-config/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/koshikishi/stylelint-config/releases/tag/v1.0.0
