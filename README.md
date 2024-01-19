# @koshikishi/stylelint-config

[![NPM Version][npm-image]][npm-url]
[![GitHub License][license-image]][license-url]
[![Check Workflow Status][workflow-image]][workflow-url]

The Stylelint shareable config designed for my personal projects.

Use it as is or as a foundation for your own configuration file.

## Installation

Install the package and `stylelint` in your project:

```sh
npm i -D stylelint @koshikishi/stylelint-config
```

### Extends and plugins

This config:

- extends the [stylelint-config-standard-scss](https://www.npmjs.com/package/stylelint-config-standard-scss) shared config
- bundles the [@stylistic/stylelint-plugin](https://www.npmjs.com/package/@stylistic/stylelint-plugin) to replace removed stylistic rules

These are direct dependencies that will be installed automatically.

## Usage

Set your `stylelint` config to:

```json
{
  "extends": "@koshikishi/stylelint-config"
}
```

### Extending the config

Add a `"rules"` key to your config, then add your overrides and additions there.

For example, to add the `color-function-notation` rule and turn off the `selector-class-pattern` rule:

```json
{
  "extends": "@koshikishi/stylelint-config",
  "rules": {
    "color-function-notation": "modern",
    "selector-class-pattern": null
  }
}
```

You can also override the stylistic rules from `@stylistic/stylelint-plugin` and SCSS-specific rules:

```json
{
  "extends": "@koshikishi/stylelint-config",
  "rules": {
    "@stylistic/indentation": 4,
    "scss/declaration-nested-properties": null
  }
}
```

## Integration with VS Code

1. Install the Stylelint [extension](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) for VS Code.
2. Install `stylelint` and this config in your project following the [Installation](#installation) section.
3. Add a Stylelint configuration file (`stylelint.config.js` or `.stylelintrc.*`) and extend it with this shareable config following the [Usage](#usage) section.

## Useful links

- [Changelog](CHANGELOG.md)
- [Stylelint documentation](https://stylelint.io/)

[npm-image]: https://img.shields.io/npm/v/@koshikishi/stylelint-config
[npm-url]: https://www.npmjs.com/package/@koshikishi/stylelint-config
[license-image]: https://img.shields.io/github/license/koshikishi/stylelint-config
[license-url]: https://github.com/koshikishi/stylelint-config/blob/main/LICENSE
[workflow-image]: https://github.com/koshikishi/stylelint-config/actions/workflows/check.yml/badge.svg
[workflow-url]: https://github.com/koshikishi/stylelint-config/actions
