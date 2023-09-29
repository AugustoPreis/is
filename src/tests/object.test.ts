import { isObject, isObjectOf, isValidObject } from '../validators/object';

describe('isObject', () => {
  it('should return true for an literal object', () => {
    expect(isObject({})).toBe(true);
    expect(isObject({ key: {} })).toBe(true);
    expect(isObject({ key: [] })).toBe(true);
    expect(isObject(Object())).toBe(true);
    expect(isObject(new Object())).toBe(true);
  });

  it('should return false for an object not literal', () => {
    expect(isObject(null)).toBe(false);
    expect(isObject([])).toBe(false);
    expect(isObject([{}, {}, {}])).toBe(false);
    expect(isObject(new String())).toBe(false);
    expect(isObject(new Number())).toBe(false);
    expect(isObject(new Date())).toBe(false);
  });

  it('should return false for an non-object', () => {
    expect(isObject(undefined)).toBe(false);
    expect(isObject(0)).toBe(false);
    expect(isObject('')).toBe(false);
    expect(isObject('string')).toBe(false);
    expect(isObject('[]')).toBe(false);
    expect(isObject('{}')).toBe(false);
    expect(isObject('null')).toBe(false);
    expect(isObject('undefined')).toBe(false);
    expect(isObject(String(''))).toBe(false);
    expect(isObject(Number('0'))).toBe(false);
    expect(isObject(Array(3))).toBe(false);
  });
});

describe('isValidObject', () => {
  it('should return true for a valid literal object', () => {
    expect(isValidObject({ key: 1 })).toBe(true);
    expect(isValidObject({ key: '' })).toBe(true);
    expect(isValidObject({ key: 'string' })).toBe(true);
    expect(isValidObject({ key: [] })).toBe(true);
    expect(isValidObject({ key: {} })).toBe(true);
    expect(isValidObject({ key1: '', key2: 1 })).toBe(true);
    expect(isValidObject({ key: '{}' })).toBe(true);
    expect(isValidObject({ key: null })).toBe(true);
    expect(isValidObject({ key: undefined })).toBe(true);
    expect(isValidObject({ key: 0 })).toBe(true);
    expect(isValidObject({ key: NaN })).toBe(true);
    expect(isValidObject({ key: Infinity })).toBe(true);
    expect(isValidObject({ key: Infinity })).toBe(true);
    expect(isValidObject(Object({ key: false }))).toBe(true);
    expect(isValidObject(Object({ key: true }))).toBe(true);
  });
  it('should return true for a valid literal object with invalid values', () => {
    expect(isValidObject({ key: null })).toBe(true);
    expect(isValidObject({ key: undefined })).toBe(true);
    expect(isValidObject({ key: '' })).toBe(true);
    expect(isValidObject({ key: 0 })).toBe(true);
    expect(isValidObject({ key: NaN })).toBe(true);
    expect(isValidObject({ key: false })).toBe(true);
  });

  it('should return false for an invalid literal object', () => {
    expect(isValidObject({})).toBe(false);
    expect(isValidObject(Object())).toBe(false);
    expect(isValidObject(new Object())).toBe(false);
  });

  it('should return false for an non-object', () => {
    expect(isValidObject(undefined)).toBe(false);
    expect(isValidObject(0)).toBe(false);
    expect(isValidObject('')).toBe(false);
    expect(isValidObject('string')).toBe(false);
    expect(isValidObject('[]')).toBe(false);
    expect(isValidObject('{}')).toBe(false);
    expect(isValidObject('null')).toBe(false);
    expect(isValidObject('undefined')).toBe(false);
    expect(isValidObject(String(''))).toBe(false);
    expect(isValidObject(Number('0'))).toBe(false);
    expect(isValidObject(Array(3))).toBe(false);
  });
});

describe('isObjectOf', () => {
  it('should return true for an valid one type object', () => {
    expect(isObjectOf({}, 'bigint')).toBe(true);
    expect(isObjectOf({ key: BigInt('1') }, 'bigint')).toBe(true);
    expect(isObjectOf({ key: BigInt(1) }, 'bigint')).toBe(true);

    expect(isObjectOf({}, 'boolean')).toBe(true);
    expect(isObjectOf({ key: true }, 'boolean')).toBe(true);
    expect(isObjectOf({ key: false }, 'boolean')).toBe(true);
    expect(isObjectOf({ key1: true, key2: false }, 'boolean')).toBe(true);
    expect(isObjectOf({ key1: false, key2: true }, 'boolean')).toBe(true);

    expect(isObjectOf({}, 'function')).toBe(true);
    expect(isObjectOf({ key: () => null }, 'function')).toBe(true);
    expect(isObjectOf({ key: function () { } }, 'function')).toBe(true);
    expect(isObjectOf({ key1: () => null, key2: function () { } }, 'function')).toBe(true);
    expect(isObjectOf({ key1: function () { }, key2: () => null }, 'function')).toBe(true);

    expect(isObjectOf({}, 'number')).toBe(true);
    expect(isObjectOf({ key: 0 }, 'number')).toBe(true);
    expect(isObjectOf({ key: 10 }, 'number')).toBe(true);
    expect(isObjectOf({ key: 0.1 }, 'number')).toBe(true);
    expect(isObjectOf({ key: 10.1 }, 'number')).toBe(true);
    expect(isObjectOf({ key1: 0, key2: 10 }, 'number')).toBe(true);
    expect(isObjectOf({ key1: 0.1, key2: 10.1 }, 'number')).toBe(true);
    expect(isObjectOf({ key: NaN }, 'number')).toBe(true);
    expect(isObjectOf({ key: Infinity }, 'number')).toBe(true);
    expect(isObjectOf({ key1: NaN, key2: Infinity }, 'number')).toBe(true);
    expect(isObjectOf({ key1: -0, key2: -10 }, 'number')).toBe(true);
    expect(isObjectOf({ key1: -0.1, key2: -10.1 }, 'number')).toBe(true);
    expect(isObjectOf({ key: -NaN }, 'number')).toBe(true);
    expect(isObjectOf({ key: -Infinity }, 'number')).toBe(true);
    expect(isObjectOf({ key1: -NaN, key2: -Infinity }, 'number')).toBe(true);

    expect(isObjectOf({}, 'object')).toBe(true);
    expect(isObjectOf({ key: {} }, 'object')).toBe(true);
    expect(isObjectOf({ key: [] }, 'object')).toBe(true);
    expect(isObjectOf({ key: null }, 'object')).toBe(true);
    expect(isObjectOf({ key: { key: {} } }, 'object')).toBe(true);
    expect(isObjectOf({ key1: {}, key2: [] }, 'object')).toBe(true);
    expect(isObjectOf({ key: [{}, {}, {}] }, 'object')).toBe(true);

    expect(isObjectOf({}, 'string')).toBe(true);
    expect(isObjectOf({ key: '' }, 'string')).toBe(true);
    expect(isObjectOf({ key: ' ' }, 'string')).toBe(true);
    expect(isObjectOf({ key: 'string' }, 'string')).toBe(true);
    expect(isObjectOf({ key: 'null' }, 'string')).toBe(true);
    expect(isObjectOf({ key: 'undefined' }, 'string')).toBe(true);
    expect(isObjectOf({ key: '0' }, 'string')).toBe(true);
    expect(isObjectOf({ key: 'NaN' }, 'string')).toBe(true);
    expect(isObjectOf({ key: '{}' }, 'string')).toBe(true);
    expect(isObjectOf({ key: '[]' }, 'string')).toBe(true);

    expect(isObjectOf({}, 'symbol')).toBe(true);
    expect(isObjectOf({ key: Symbol() }, 'symbol')).toBe(true);
    expect(isObjectOf({ key: Symbol('') }, 'symbol')).toBe(true);
    expect(isObjectOf({ key: Symbol('symbol1') }, 'symbol')).toBe(true);
    expect(isObjectOf({ key1: Symbol('symbol1'), key2: Symbol('symbol2') }, 'symbol')).toBe(true);

    expect(isObjectOf({}, 'undefined')).toBe(true);
    expect(isObjectOf({ key: undefined }, 'undefined')).toBe(true);
    expect(isObjectOf({ key: ({} as any).key }, 'undefined')).toBe(true);
    expect(isObjectOf({ key1: undefined, key2: undefined }, 'undefined')).toBe(true);
  });

  it('should return false for a more than one type object', () => {
    expect(isObjectOf({ key1: BigInt('1'), key2: '1' }, 'bigint')).toBe(false);
    expect(isObjectOf({ key1: BigInt('1'), key2: 2 }, 'bigint')).toBe(false);
    expect(isObjectOf({ key1: BigInt('1'), key2: null }, 'bigint')).toBe(false);
    expect(isObjectOf({ key1: BigInt(1), key2: undefined }, 'bigint')).toBe(false);
    expect(isObjectOf({ key1: BigInt(1), key2: 'undefined' }, 'bigint')).toBe(false);
    expect(isObjectOf({ key: '' }, 'bigint')).toBe(false);
    expect(isObjectOf({ key: 0 }, 'bigint')).toBe(false);
    expect(isObjectOf({ key: {} }, 'bigint')).toBe(false);

    expect(isObjectOf({ key1: true, key2: 'true' }, 'boolean')).toBe(false);
    expect(isObjectOf({ key1: true, key2: 'false' }, 'boolean')).toBe(false);
    expect(isObjectOf({ key1: false, key2: 'true' }, 'boolean')).toBe(false);
    expect(isObjectOf({ key1: false, key2: 'false' }, 'boolean')).toBe(false);
    expect(isObjectOf({ key1: true, key2: 0 }, 'boolean')).toBe(false);
    expect(isObjectOf({ key1: true, key2: {} }, 'boolean')).toBe(false);
    expect(isObjectOf({ key1: true, key2: [] }, 'boolean')).toBe(false);
    expect(isObjectOf({ key1: true, key2: null }, 'boolean')).toBe(false);
    expect(isObjectOf({ key1: true, key2: undefined }, 'boolean')).toBe(false);
    expect(isObjectOf({ key: '' }, 'boolean')).toBe(false);
    expect(isObjectOf({ key: 0 }, 'boolean')).toBe(false);
    expect(isObjectOf({ key: {} }, 'boolean')).toBe(false);

    expect(isObjectOf({ key1: () => null, key2: '' }, 'function')).toBe(false);
    expect(isObjectOf({ key1: () => null, key2: '() => {}' }, 'function')).toBe(false);
    expect(isObjectOf({ key1: () => null, key2: 'function () {}' }, 'function')).toBe(false);
    expect(isObjectOf({ key1: () => null, key2: null }, 'function')).toBe(false);
    expect(isObjectOf({ key1: () => null, key2: undefined }, 'function')).toBe(false);
    expect(isObjectOf({ key1: () => null, key2: {} }, 'function')).toBe(false);
    expect(isObjectOf({ key1: () => null, key2: [] }, 'function')).toBe(false);
    expect(isObjectOf({ key1: () => null, key2: 0 }, 'function')).toBe(false);
    expect(isObjectOf({ key1: () => null, key2: NaN }, 'function')).toBe(false);
    expect(isObjectOf({ key: '' }, 'function')).toBe(false);
    expect(isObjectOf({ key: 0 }, 'function')).toBe(false);
    expect(isObjectOf({ key: {} }, 'function')).toBe(false);

    expect(isObjectOf({ key1: 0, key2: '' }, 'number')).toBe(false);
    expect(isObjectOf({ key1: 0, key2: '0' }, 'number')).toBe(false);
    expect(isObjectOf({ key1: 0, key2: 'string' }, 'number')).toBe(false);
    expect(isObjectOf({ key1: 0, key2: null }, 'number')).toBe(false);
    expect(isObjectOf({ key1: 0, key2: undefined }, 'number')).toBe(false);
    expect(isObjectOf({ key1: 0, key2: {} }, 'number')).toBe(false);
    expect(isObjectOf({ key1: 0, key2: [] }, 'number')).toBe(false);
    expect(isObjectOf({ key1: 0, key2: () => null }, 'number')).toBe(false);
    expect(isObjectOf({ key: '' }, 'number')).toBe(false);
    expect(isObjectOf({ key: () => null }, 'number')).toBe(false);
    expect(isObjectOf({ key: {} }, 'number')).toBe(false);

    expect(isObjectOf({ key1: {}, key2: '' }, 'object')).toBe(false);
    expect(isObjectOf({ key1: [], key2: 0 }, 'object')).toBe(false);
    expect(isObjectOf({ key1: null, key2: undefined }, 'object')).toBe(false);
    expect(isObjectOf({ key1: { key: {} }, key2: () => null }, 'object')).toBe(false);
    expect(isObjectOf({ key1: {}, key2: '{}' }, 'object')).toBe(false);
    expect(isObjectOf({ key1: [{}, {}, {}], key2: NaN }, 'object')).toBe(false);
    expect(isObjectOf({ key1: '' }, 'object')).toBe(false);
    expect(isObjectOf({ key1: 0 }, 'object')).toBe(false);
    expect(isObjectOf({ key1: () => null }, 'object')).toBe(false);

    expect(isObjectOf({ key1: '', key2: 0 }, 'string')).toBe(false);
    expect(isObjectOf({ key1: '', key2: {} }, 'string')).toBe(false);
    expect(isObjectOf({ key1: '', key2: null }, 'string')).toBe(false);
    expect(isObjectOf({ key1: '', key2: undefined }, 'string')).toBe(false);
    expect(isObjectOf({ key1: '', key2: String }, 'string')).toBe(false);
    expect(isObjectOf({ key1: '', key2: new String() }, 'string')).toBe(false);
    expect(isObjectOf({ key1: '', key2: NaN }, 'string')).toBe(false);
    expect(isObjectOf({ key: 0 }, 'string')).toBe(false);
    expect(isObjectOf({ key: () => null }, 'string')).toBe(false);
    expect(isObjectOf({ key: null }, 'string')).toBe(false);

    expect(isObjectOf({ key1: Symbol(''), key2: '' }, 'symbol')).toBe(false);
    expect(isObjectOf({ key1: Symbol(''), key2: 'Symbol()' }, 'symbol')).toBe(false);
    expect(isObjectOf({ key1: Symbol(''), key2: 'Symbol(0)' }, 'symbol')).toBe(false);
    expect(isObjectOf({ key1: Symbol(''), key2: null }, 'symbol')).toBe(false);
    expect(isObjectOf({ key1: Symbol(''), key2: undefined }, 'symbol')).toBe(false);
    expect(isObjectOf({ key1: Symbol(''), key2: 0 }, 'symbol')).toBe(false);
    expect(isObjectOf({ key1: Symbol(''), key2: 100 }, 'symbol')).toBe(false);
    expect(isObjectOf({ key1: Symbol(''), key2: '0' }, 'symbol')).toBe(false);
    expect(isObjectOf({ key1: Symbol(''), key2: '100' }, 'symbol')).toBe(false);
    expect(isObjectOf({ key1: Symbol(''), key2: {} }, 'symbol')).toBe(false);
    expect(isObjectOf({ key1: Symbol(''), key2: { key: [] } }, 'symbol')).toBe(false);
    expect(isObjectOf({ key1: Symbol(''), key2: [{}, {}, {}] }, 'symbol')).toBe(false);
    expect(isObjectOf({ key: 0 }, 'symbol')).toBe(false);
    expect(isObjectOf({ key: () => null }, 'symbol')).toBe(false);
    expect(isObjectOf({ key: null }, 'symbol')).toBe(false);

    expect(isObjectOf({ key1: undefined, key2: '' }, 'undefined')).toBe(false);
    expect(isObjectOf({ key1: undefined, key2: 'undefined' }, 'undefined')).toBe(false);
    expect(isObjectOf({ key1: undefined, key2: 0 }, 'undefined')).toBe(false);
    expect(isObjectOf({ key1: undefined, key2: null }, 'undefined')).toBe(false);
    expect(isObjectOf({ key1: undefined, key2: NaN }, 'undefined')).toBe(false);
    expect(isObjectOf({ key1: undefined, key2: {} }, 'undefined')).toBe(false);
    expect(isObjectOf({ key1: undefined, key2: [] }, 'undefined')).toBe(false);
    expect(isObjectOf({ key1: undefined, key2: { key: [] } }, 'undefined')).toBe(false);
    expect(isObjectOf({ key1: undefined, key2: [{}, {}, {}] }, 'undefined')).toBe(false);
    expect(isObjectOf({ key1: undefined, key2: Infinity }, 'undefined')).toBe(false);
    expect(isObjectOf({ key: 0 }, 'undefined')).toBe(false);
    expect(isObjectOf({ key: () => null }, 'undefined')).toBe(false);
    expect(isObjectOf({ key: null }, 'undefined')).toBe(false);
  });

  it('should return false for a non-object value', () => {
    expect(isObjectOf(undefined, 'bigint')).toBe(false);
    expect(isObjectOf(null, 'bigint')).toBe(false);
    expect(isObjectOf(0, 'bigint')).toBe(false);
    expect(isObjectOf(100, 'bigint')).toBe(false);
    expect(isObjectOf('', 'bigint')).toBe(false);
    expect(isObjectOf(' ', 'bigint')).toBe(false);
    expect(isObjectOf('0', 'bigint')).toBe(false);
    expect(isObjectOf('100', 'bigint')).toBe(false);
    expect(isObjectOf(NaN, 'bigint')).toBe(false);
    expect(isObjectOf(Infinity, 'bigint')).toBe(false);
    expect(isObjectOf([], 'bigint')).toBe(false);
    expect(isObjectOf([{}, {}, {}], 'bigint')).toBe(false);
    expect(isObjectOf([[], [], []], 'bigint')).toBe(false);

    expect(isObjectOf(undefined, 'boolean')).toBe(false);
    expect(isObjectOf(null, 'boolean')).toBe(false);
    expect(isObjectOf(0, 'boolean')).toBe(false);
    expect(isObjectOf(100, 'boolean')).toBe(false);
    expect(isObjectOf('', 'boolean')).toBe(false);
    expect(isObjectOf(' ', 'boolean')).toBe(false);
    expect(isObjectOf('0', 'boolean')).toBe(false);
    expect(isObjectOf('100', 'boolean')).toBe(false);
    expect(isObjectOf(NaN, 'boolean')).toBe(false);
    expect(isObjectOf(Infinity, 'boolean')).toBe(false);
    expect(isObjectOf([], 'boolean')).toBe(false);
    expect(isObjectOf([{}, {}, {}], 'boolean')).toBe(false);
    expect(isObjectOf([[], [], []], 'boolean')).toBe(false);

    expect(isObjectOf(undefined, 'function')).toBe(false);
    expect(isObjectOf(null, 'function')).toBe(false);
    expect(isObjectOf(0, 'function')).toBe(false);
    expect(isObjectOf(100, 'function')).toBe(false);
    expect(isObjectOf('', 'function')).toBe(false);
    expect(isObjectOf(' ', 'function')).toBe(false);
    expect(isObjectOf('0', 'function')).toBe(false);
    expect(isObjectOf('100', 'function')).toBe(false);
    expect(isObjectOf(NaN, 'function')).toBe(false);
    expect(isObjectOf(Infinity, 'function')).toBe(false);
    expect(isObjectOf([], 'function')).toBe(false);
    expect(isObjectOf([{}, {}, {}], 'function')).toBe(false);
    expect(isObjectOf([[], [], []], 'function')).toBe(false);

    expect(isObjectOf(undefined, 'number')).toBe(false);
    expect(isObjectOf(null, 'number')).toBe(false);
    expect(isObjectOf(0, 'number')).toBe(false);
    expect(isObjectOf(100, 'number')).toBe(false);
    expect(isObjectOf('', 'number')).toBe(false);
    expect(isObjectOf(' ', 'number')).toBe(false);
    expect(isObjectOf('0', 'number')).toBe(false);
    expect(isObjectOf('100', 'number')).toBe(false);
    expect(isObjectOf(NaN, 'number')).toBe(false);
    expect(isObjectOf(Infinity, 'number')).toBe(false);
    expect(isObjectOf([], 'number')).toBe(false);
    expect(isObjectOf([{}, {}, {}], 'number')).toBe(false);
    expect(isObjectOf([[], [], []], 'number')).toBe(false);

    expect(isObjectOf(undefined, 'object')).toBe(false);
    expect(isObjectOf(null, 'object')).toBe(false);
    expect(isObjectOf(0, 'object')).toBe(false);
    expect(isObjectOf(100, 'object')).toBe(false);
    expect(isObjectOf('', 'object')).toBe(false);
    expect(isObjectOf(' ', 'object')).toBe(false);
    expect(isObjectOf('0', 'object')).toBe(false);
    expect(isObjectOf('100', 'object')).toBe(false);
    expect(isObjectOf(NaN, 'object')).toBe(false);
    expect(isObjectOf(Infinity, 'object')).toBe(false);
    expect(isObjectOf([], 'object')).toBe(false);
    expect(isObjectOf([{}, {}, {}], 'object')).toBe(false);
    expect(isObjectOf([[], [], []], 'object')).toBe(false);

    expect(isObjectOf(undefined, 'symbol')).toBe(false);
    expect(isObjectOf(null, 'symbol')).toBe(false);
    expect(isObjectOf(0, 'symbol')).toBe(false);
    expect(isObjectOf(100, 'symbol')).toBe(false);
    expect(isObjectOf('', 'symbol')).toBe(false);
    expect(isObjectOf(' ', 'symbol')).toBe(false);
    expect(isObjectOf('0', 'symbol')).toBe(false);
    expect(isObjectOf('100', 'symbol')).toBe(false);
    expect(isObjectOf(NaN, 'symbol')).toBe(false);
    expect(isObjectOf(Infinity, 'symbol')).toBe(false);
    expect(isObjectOf([], 'symbol')).toBe(false);
    expect(isObjectOf([{}, {}, {}], 'symbol')).toBe(false);
    expect(isObjectOf([[], [], []], 'symbol')).toBe(false);

    expect(isObjectOf(undefined, 'undefined')).toBe(false);
    expect(isObjectOf(null, 'undefined')).toBe(false);
    expect(isObjectOf(0, 'undefined')).toBe(false);
    expect(isObjectOf(100, 'undefined')).toBe(false);
    expect(isObjectOf('', 'undefined')).toBe(false);
    expect(isObjectOf(' ', 'undefined')).toBe(false);
    expect(isObjectOf('0', 'undefined')).toBe(false);
    expect(isObjectOf('100', 'undefined')).toBe(false);
    expect(isObjectOf(NaN, 'undefined')).toBe(false);
    expect(isObjectOf(Infinity, 'undefined')).toBe(false);
    expect(isObjectOf([], 'undefined')).toBe(false);
    expect(isObjectOf([{}, {}, {}], 'undefined')).toBe(false);
    expect(isObjectOf([[], [], []], 'undefined')).toBe(false);
  });

  it('should return false for a invalid type', () => {
    expect(isObjectOf({ key1: 1, key2: 2, key3: 3 }, 'num ber')).toBe(false);
    expect(isObjectOf({ key1: 'string1', key2: 'string2' }, 'stringg')).toBe(false);
    expect(isObjectOf({ key1: {}, key2: {} }, 'obj')).toBe(false);
    expect(isObjectOf({ key1: [], key2: [] }, 'array')).toBe(false);
    expect(isObjectOf({ key: null }, 'null')).toBe(false);
    expect(isObjectOf({ key: undefined }, '')).toBe(false);
    expect(isObjectOf({ key1: null, key2: undefined }, ' ')).toBe(false);
    expect(isObjectOf({ key1: 0, key2: NaN }, 'any')).toBe(false);
    expect(isObjectOf({ key1: Infinity, key2: -Infinity }, 'unknown')).toBe(false);
  });
});