[![Build status][build-image]][build-url]
[![Tests coverage][cov-image]][cov-url]
[![npm version][npm-image]][npm-url]

# is

## JS/TS type validator

- works on the server side, not recommended for the browser
- works on node >= 12

## Use case

### Example usage

Validate variable types and values

```javascript
const { isArray, isString, isValidString, isArrayOf } = require('is');

isArray([]); // true
isArray(''); // false
isString(''); // true
isString(10); // false
isValidString(' '); // false
isValidString('-'); // true
isArrayOf([{}, new Date()], 'object'); // true
isArrayOf(['10', null, undefined], 'number'); // true
```

### Installation

```bash
npm install is
```

## Rules

In all functions, it will always return "true" or "false", NEVER an error or another thing

## Documentation

#### Type validators:

- **Array**
  - [`isArray`](src/docs/array.md#isArray)
  - [`isValidArray`](src/docs/array.md#isValidArray)
  - [`isArrayOf`](src/docs/array.md#isArrayOf)

- **Boolean**
  - [`isBoolean`](src/docs/boolean.md#isBoolean)
  - [`isFalse`](src/docs/boolean.md#isFalse)
  - [`isTrue`](src/docs/boolean.md#isTrue)

- **Date**
  - [`isDate`](src/docs/date.md#isDate)
  - [`isValidDate`](src/docs/date.md#isValidDate)

- **Is**
  - [`is`](src/docs/is.md#is)
  - [`isValid`](src/docs/is.md#isValid)

- **Number**
  - [`isNumber`](src/docs/number.md#isNumber)
  - [`isPositive`](src/docs/number.md#isPositive)
  - [`isNegative`](src/docs/number.md#isNegative)
  - [`isInteger`](src/docs/number.md#isInteger)
  - [`isFloat`](src/docs/number.md#isFloat)

- **Object**
  - [`isObject`](src/docs/object.md#isObject)
  - [`isValidObject`](src/docs/object.md#isValidObject)
  - [`isObjectOf`](src/docs/object.md#isObjectOf)

- **String**
  - [`isString`](src/docs/string.md#isString)
  - [`isValidString`](src/docs/string.md#isValidString)
  - [`isNumberString`](src/docs/string.md#isNumberString)
  - [`isScapedString`](src/docs/string.md#isEscapedString)
  - [`isSpacedString`](src/docs/string.md#isSpacedString)