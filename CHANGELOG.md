# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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

[3.1.0]: https://github.com/koshikishi/stylelint-config/compare/v3.0.0...HEAD
[3.0.0]: https://github.com/koshikishi/stylelint-config/compare/v2.0.0...v3.0.0
[2.0.0]: https://github.com/koshikishi/stylelint-config/compare/v1.0.1...v2.0.0
[1.0.1]: https://github.com/koshikishi/stylelint-config/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/koshikishi/stylelint-config/releases/tag/v1.0.0
