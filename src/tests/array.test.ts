import { isArray, isArrayOf, isValidArray } from '../validators/array';

describe('isArray', () => {
  it('should return true for an array', () => {
    expect(isArray([])).toBe(true);
    expect(isArray(new Array())).toBe(true);
    expect(isArray(new Array(3))).toBe(true);
    expect(isArray([1, 2, 3])).toBe(true);
    expect(isArray(['1', '2', '3'])).toBe(true);
    expect(isArray([null])).toBe(true);
    expect(isArray([undefined])).toBe(true);
    expect(isArray([NaN])).toBe(true);
    expect(isArray([Infinity])).toBe(true);
    expect(isArray([[], [], []])).toBe(true);
    expect(isArray([{}, {}, {}])).toBe(true);
    expect(isArray(['\n\t'])).toBe(true);
    expect(isArray([/[0-9]/g])).toBe(true);
    expect(isArray([/^[0-9]/g])).toBe(true);
  });

  it('should return false for any non-array value', () => {
    expect(isArray('')).toBe(false);
    expect(isArray(1)).toBe(false);
    expect(isArray({})).toBe(false);
    expect(isArray(null)).toBe(false);
    expect(isArray(undefined)).toBe(false);
    expect(isArray(NaN)).toBe(false);
    expect(isArray(Infinity)).toBe(false);
    expect(isArray({ key: [] })).toBe(false);
    expect(isArray('[]')).toBe(false);
    expect(isArray('new Array()')).toBe(false);
    expect(isArray('\n')).toBe(false);
    expect(isArray(/^[0-9]/)).toBe(false);
    expect(isArray(-1)).toBe(false);
    expect(isArray('[{}, {}]')).toBe(false);
  });
});

describe('isValidArray', () => {
  it('should return true for an array with items', () => {
    expect(isValidArray([1, 2, 3])).toBe(true);
    expect(isValidArray(['1', '2', '3'])).toBe(true);
    expect(isValidArray([undefined, '10'])).toBe(true);
    expect(isValidArray([Infinity, NaN])).toBe(true);
    expect(isValidArray([{}, {}, {}])).toBe(true);
    expect(isValidArray([[], [], []])).toBe(true);
    expect(isValidArray([/[0-9]/])).toBe(true);
    expect(isValidArray(['any string'])).toBe(true);
  });

  it('should return false for an array without valid items', () => {
    expect(isValidArray([])).toBe(false);
    expect(isValidArray([null])).toBe(false);
    expect(isValidArray([undefined])).toBe(false);
    expect(isValidArray([NaN])).toBe(false);
    expect(isValidArray([''])).toBe(false);
    expect(isValidArray([0])).toBe(false);
    expect(isValidArray([undefined, null, ''])).toBe(false);
    expect(isValidArray([0, NaN])).toBe(false);
    expect(isValidArray([0, NaN])).toBe(false);
    expect(isValidArray([null, ''])).toBe(false);
  });

  it('should return false for non-array value', () => {
    expect(isValidArray({})).toBe(false);
    expect(isValidArray({ key: [] })).toBe(false);
    expect(isValidArray('any string')).toBe(false);
    expect(isValidArray('[]')).toBe(false);
    expect(isValidArray(/[0-9]/g)).toBe(false);
    expect(isValidArray(10)).toBe(false);
    expect(isValidArray(null)).toBe(false);
    expect(isValidArray(undefined)).toBe(false);
    expect(isValidArray(NaN)).toBe(false);
    expect(isValidArray('10')).toBe(false);
    expect(isValidArray('[10, 20, 30]')).toBe(false);
  });

  it('should return true for invalid array with different validator', () => {
    const validator1 = (v: any) => v || typeof v === 'string';  // accept string
    const validator2 = (v: any) => v || typeof v === 'number';  // accept number
    const validator3 = (v: any) => v || typeof v === 'undefined';  // accept undefined
    const validator4 = (v: any) => v || v === null;   // accept null

    expect(isValidArray([''], validator1)).toBe(true);
    expect(isValidArray(['', null, 0], validator1)).toBe(true);
    expect(isValidArray(['', undefined], validator1)).toBe(true);
    expect(isValidArray([0, 0, 0, ''], validator1)).toBe(true);
    expect(isValidArray(['string1', 'string2', 'string3'], validator1)).toBe(true);

    expect(isValidArray([0], validator2)).toBe(true);
    expect(isValidArray([10, '', null], validator2)).toBe(true);
    expect(isValidArray([NaN, null], validator2)).toBe(true);
    expect(isValidArray([NaN, Infinity], validator2)).toBe(true);
    expect(isValidArray([NaN], validator2)).toBe(true);

    expect(isValidArray([undefined], validator3)).toBe(true);
    expect(isValidArray([undefined, null], validator3)).toBe(true);
    expect(isValidArray([undefined, ''], validator3)).toBe(true);
    expect(isValidArray([null, NaN, undefined], validator3)).toBe(true);
    expect(isValidArray([80, 90, undefined], validator3)).toBe(true);

    expect(isValidArray([null], validator4)).toBe(true);
    expect(isValidArray(['', 0, null], validator4)).toBe(true);
    expect(isValidArray(['', null, NaN], validator4)).toBe(true);
    expect(isValidArray(['string', undefined, null], validator4)).toBe(true);
    expect(isValidArray([10, 20, null], validator4)).toBe(true);
  });

  it('should return false for invalid array with different validator', () => {
    const validator1 = (v: any) => v && (typeof v != 'string' || !!v.trim());  // accept string, but not only spaces
    const validator2 = (v: any) => v && (typeof v != 'number' || v >= 10);  // accept number, but not less than 10
    const validator3 = (v: any) => v && !Array.isArray(v);  // not accept array items
    const validator4 = (v: any) => v && typeof v != 'string';   // not accept string

    expect(isValidArray([''], validator1)).toBe(false);
    expect(isValidArray(['  '], validator1)).toBe(false);
    expect(isValidArray(['', ' '], validator1)).toBe(false);
    expect(isValidArray(['', null], validator1)).toBe(false);
    expect(isValidArray(['  ', undefined], validator1)).toBe(false);
    expect(isValidArray(['  ', null, NaN], validator1)).toBe(false);
    expect(isValidArray(['  ', undefined], validator1)).toBe(false);
    expect(isValidArray(['', 0], validator1)).toBe(false);
    expect(isValidArray(['', 0, null, undefined, NaN], validator1)).toBe(false);

    expect(isValidArray(['', 2], validator2)).toBe(false);
    expect(isValidArray([1, 2, 3, 4, 5, 6], validator2)).toBe(false);
    expect(isValidArray([8, 9, 9.9], validator2)).toBe(false);
    expect(isValidArray([null, 9], validator2)).toBe(false);
    expect(isValidArray([NaN, 9], validator2)).toBe(false);
    expect(isValidArray(['', 3], validator2)).toBe(false);
    expect(isValidArray([-11], validator2)).toBe(false);

    expect(isValidArray([[]], validator3)).toBe(false);
    expect(isValidArray(['', []], validator3)).toBe(false);
    expect(isValidArray([null, undefined, []], validator3)).toBe(false);
    expect(isValidArray([NaN, ['valid string']], validator3)).toBe(false);
    expect(isValidArray([['valid string', { key: 'value' }]], validator3)).toBe(false);
    expect(isValidArray([new Array()], validator3)).toBe(false);
    expect(isValidArray([new Array(3)], validator3)).toBe(false);

    expect(isValidArray([''], validator4)).toBe(false);
    expect(isValidArray(['valid string', null], validator4)).toBe(false);
    expect(isValidArray([' ', '  '], validator4)).toBe(false);
    expect(isValidArray([null, undefined], validator4)).toBe(false);
    expect(isValidArray(['undefined', 'null'], validator4)).toBe(false);
    expect(isValidArray([NaN, 0, 'string'], validator4)).toBe(false);
    expect(isValidArray(['10', '20', '30'], validator4)).toBe(false);
  });
});


describe('isArrayOf', () => {
  it('should return true for an one type array', () => {
    expect(isArrayOf([], 'bigint')).toBe(true);
    expect(isArrayOf([BigInt(10), BigInt(0)], 'bigint')).toBe(true);
    expect(isArrayOf([BigInt(-10)], 'bigint')).toBe(true);
    expect(isArrayOf([BigInt('8')], 'bigint')).toBe(true);

    expect(isArrayOf([], 'boolean')).toBe(true);
    expect(isArrayOf([false, true], 'boolean')).toBe(true);
    expect(isArrayOf([!null, true], 'boolean')).toBe(true);
    expect(isArrayOf([true], 'boolean')).toBe(true);
    expect(isArrayOf([false], 'boolean')).toBe(true);
    expect(isArrayOf([!undefined], 'boolean')).toBe(true);

    expect(isArrayOf([], 'function')).toBe(true);
    expect(isArrayOf([() => null], 'function')).toBe(true);
    expect(isArrayOf([function () { }], 'function')).toBe(true);
    expect(isArrayOf([() => null, function () { }], 'function')).toBe(true);
    expect(isArrayOf([new Function()], 'function')).toBe(true);

    expect(isArrayOf([], 'number')).toBe(true);
    expect(isArrayOf([1, 2, 3], 'number')).toBe(true);
    expect(isArrayOf([NaN], 'number')).toBe(true);
    expect(isArrayOf([Infinity], 'number')).toBe(true);
    expect(isArrayOf([-Infinity], 'number')).toBe(true);
    expect(isArrayOf([5.55, 6.66], 'number')).toBe(true);
    expect(isArrayOf([10.3, 1.1], 'number')).toBe(true);

    expect(isArrayOf([], 'object')).toBe(true);
    expect(isArrayOf([{}], 'object')).toBe(true);
    expect(isArrayOf([null], 'object')).toBe(true);
    expect(isArrayOf([null, {}], 'object')).toBe(true);
    expect(isArrayOf([new Date()], 'object')).toBe(true);
    expect(isArrayOf([[]], 'object')).toBe(true);
    expect(isArrayOf([{}, new Date(), []], 'object')).toBe(true);
    expect(isArrayOf([new String()], 'object')).toBe(true);
    expect(isArrayOf([new Number()], 'object')).toBe(true);

    expect(isArrayOf([], 'string')).toBe(true);
    expect(isArrayOf(['', String('value')], 'string')).toBe(true);
    expect(isArrayOf(['string1', 'string2'], 'string')).toBe(true);
    expect(isArrayOf(['10', '20'], 'string')).toBe(true);
    expect(isArrayOf(['/^[0-9]/g'], 'string')).toBe(true);

    expect(isArrayOf([], 'symbol')).toBe(true);
    expect(isArrayOf([Symbol()], 'symbol')).toBe(true);
    expect(isArrayOf([Symbol('')], 'symbol')).toBe(true);
    expect(isArrayOf([Symbol('symbol1')], 'symbol')).toBe(true);
    expect(isArrayOf([Symbol('symbol1'), Symbol('symbol2')], 'symbol')).toBe(true);

    expect(isArrayOf([], 'undefined')).toBe(true);
    expect(isArrayOf([undefined], 'undefined')).toBe(true);
    expect(isArrayOf([({} as any).key], 'undefined')).toBe(true);
    expect(isArrayOf([{ key: undefined }.key], 'undefined')).toBe(true);
    expect(isArrayOf([undefined, undefined, undefined], 'undefined')).toBe(true);
  });

  it('should return false for a more than one type array', () => {
    expect(isArrayOf([BigInt(10), 10], 'bigint')).toBe(false);
    expect(isArrayOf([BigInt(10), '10n'], 'bigint')).toBe(false);
    expect(isArrayOf([1, 2, 3], 'bigint')).toBe(false);
    expect(isArrayOf(['string', 'another string'], 'bigint')).toBe(false);

    expect(isArrayOf(['true'], 'boolean')).toBe(false);
    expect(isArrayOf([false, 'true'], 'boolean')).toBe(false);
    expect(isArrayOf(['false', true], 'boolean')).toBe(false);
    expect(isArrayOf([true, 'true'], 'boolean')).toBe(false);
    expect(isArrayOf([false, 'false'], 'boolean')).toBe(false);
    expect(isArrayOf([true, 0, null], 'boolean')).toBe(false);
    expect(isArrayOf([!undefined, undefined], 'boolean')).toBe(false);

    expect(isArrayOf([(() => null)()], 'function')).toBe(false);
    expect(isArrayOf([, '() => null'], 'function')).toBe(false);
    expect(isArrayOf([Function, ''], 'function')).toBe(false);
    expect(isArrayOf([new Function(), 'any string'], 'function')).toBe(false);
    expect(isArrayOf([new Function(), 10], 'function')).toBe(false);
    expect(isArrayOf([new Function(), undefined], 'function')).toBe(false);
    expect(isArrayOf([new Function(), null], 'function')).toBe(false);

    expect(isArrayOf([10, '10'], 'number')).toBe(false);
    expect(isArrayOf([1, 2, 3, '4'], 'number')).toBe(false);
    expect(isArrayOf([NaN, {}], 'number')).toBe(false);
    expect(isArrayOf([Infinity, new Date()], 'number')).toBe(false);
    expect(isArrayOf([-Infinity, null], 'number')).toBe(false);
    expect(isArrayOf([5.55, 6.66, 6, '6'], 'number')).toBe(false);
    expect(isArrayOf([10.3, 1.1, '1'], 'number')).toBe(false);

    expect(isArrayOf([{}, 0], 'object')).toBe(false);
    expect(isArrayOf([null, 0], 'object')).toBe(false);
    expect(isArrayOf([{}, [], 66], 'object')).toBe(false);
    expect(isArrayOf([1, 2, 3], 'object')).toBe(false);
    expect(isArrayOf(['string1', 'string2', 'string3'], 'object')).toBe(false);

    expect(isArrayOf([String, ''], 'string')).toBe(false);
    expect(isArrayOf(['', 10], 'string')).toBe(false);
    expect(isArrayOf([10, 20, 30], 'string')).toBe(false);
    expect(isArrayOf([() => ''], 'string')).toBe(false);
    expect(isArrayOf([/[0-9]/g], 'string')).toBe(false);

    expect(isArrayOf([Symbol('10'), `Symbol('10')`], 'symbol')).toBe(false);
    expect(isArrayOf([Symbol(10), 10], 'symbol')).toBe(false);
    expect(isArrayOf([1, 2, 3], 'symbol')).toBe(false);
    expect(isArrayOf(['1', '2', '3'], 'symbol')).toBe(false);
    expect(isArrayOf([{}, []], 'symbol')).toBe(false);

    expect(isArrayOf(['undefined'], 'undefined')).toBe(false);
    expect(isArrayOf([undefined, null], 'undefined')).toBe(false);
    expect(isArrayOf([undefined, 0], 'undefined')).toBe(false);
    expect(isArrayOf([{}], 'undefined')).toBe(false);
    expect(isArrayOf([[undefined]], 'undefined')).toBe(false);
    expect(isArrayOf([undefined, 'undefined'], 'undefined')).toBe(false);
    expect(isArrayOf([null], 'undefined')).toBe(false);
  });

  it('should return false for a non-array value', () => {
    expect(isArrayOf('', 'string')).toBe(false);
    expect(isArrayOf(' ', 'string')).toBe(false);
    expect(isArrayOf('string', 'string')).toBe(false);
    expect(isArrayOf('[]', 'string')).toBe(false);

    expect(isArrayOf(0, 'number')).toBe(false);
    expect(isArrayOf(1000, 'number')).toBe(false);
    expect(isArrayOf(NaN, 'number')).toBe(false);
    expect(isArrayOf(Infinity, 'number')).toBe(false);

    expect(isArrayOf({}, 'object')).toBe(false);
    expect(isArrayOf({ key: [] }, 'object')).toBe(false);
    expect(isArrayOf({ length: 1 }, 'object')).toBe(false);
    expect(isArrayOf({ every: () => true }, 'object')).toBe(false);

    expect(isArrayOf(() => null, 'function')).toBe(false);
    expect(isArrayOf(function () { }, 'function')).toBe(false);
  });

  it('should return false for a invalid type', () => {
    expect(isArrayOf([1, 2, 3], 'num ber')).toBe(false);
    expect(isArrayOf(['string1', 'string2'], 'stringg')).toBe(false);
    expect(isArrayOf([{}, {}], 'obj')).toBe(false);
    expect(isArrayOf([[], []], 'array')).toBe(false);
    expect(isArrayOf([null], 'null')).toBe(false);
    expect(isArrayOf([undefined], '')).toBe(false);
    expect(isArrayOf([null, undefined], ' ')).toBe(false);
    expect(isArrayOf([0, NaN], 'any')).toBe(false);
    expect(isArrayOf([Infinity, -Infinity], 'unknown')).toBe(false);
  });
});