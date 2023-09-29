import { isFloat, isInteger, isNegative, isNumber, isPositive } from '../validators/number';

describe('isNumber', () => {
  it('should return true for an number', () => {
    expect(isNumber(0)).toBe(true);
    expect(isNumber(1)).toBe(true);
    expect(isNumber(10)).toBe(true);
    expect(isNumber(1.1)).toBe(true);
    expect(isNumber(10.1)).toBe(true);
    expect(isNumber(-0)).toBe(true);
    expect(isNumber(-1)).toBe(true);
    expect(isNumber(-10)).toBe(true);
    expect(isNumber(-1.1)).toBe(true);
    expect(isNumber(-10.1)).toBe(true);
  });

  it('should return true for a string number', () => {
    expect(isNumber('0', true)).toBe(true);
    expect(isNumber('1', true)).toBe(true);
    expect(isNumber('10', true)).toBe(true);
    expect(isNumber('1.1', true)).toBe(true);
    expect(isNumber('10.1', true)).toBe(true);
    expect(isNumber('-0', true)).toBe(true);
    expect(isNumber('-1', true)).toBe(true);
    expect(isNumber('-10', true)).toBe(true);
    expect(isNumber('-1.1', true)).toBe(true);
    expect(isNumber('-10.1', true)).toBe(true);
  });

  it('should return false for an invalid number', () => {
    expect(isNumber(NaN)).toBe(false);
    expect(isNumber(-NaN)).toBe(false);
    expect(isNumber(Infinity)).toBe(false);
    expect(isNumber(-Infinity)).toBe(false);
  });

  it('should return false for an invalid string number', () => {
    expect(isNumber('NaN', true)).toBe(false);
    expect(isNumber('-NaN', true)).toBe(false);
    expect(isNumber('Infinity', true)).toBe(false);
    expect(isNumber('-Infinity', true)).toBe(false);
  });

  it('should return false for a non-number', () => {
    expect(isNumber(null)).toBe(false);
    expect(isNumber(undefined)).toBe(false);
    expect(isNumber({})).toBe(false);
    expect(isNumber([])).toBe(false);
    expect(isNumber([{}, {}, {}])).toBe(false);
    expect(isNumber([1, 2, 3])).toBe(false);
    expect(isNumber({ key: [] })).toBe(false);
    expect(isNumber(new Date())).toBe(false);
  });

  it('should return false for a non-number string', () => {
    expect(isNumber('null', true)).toBe(false);
    expect(isNumber('undefined', true)).toBe(false);
    expect(isNumber('{}', true)).toBe(false);
    expect(isNumber('[]', true)).toBe(false);
    expect(isNumber('[{}, {}, {}]', true)).toBe(false);
    expect(isNumber('[1, 2, 3]', true)).toBe(false);
    expect(isNumber('{ key: [] }', true)).toBe(false);
    expect(isNumber('new Date()', true)).toBe(false);
  });
});

describe('isPositive', () => {
  it('should return true for a positive number', () => {
    expect(isPositive(-0)).toBe(true);
    expect(isPositive(0)).toBe(true);
    expect(isPositive(0.1)).toBe(true);
    expect(isPositive(0.9)).toBe(true);
    expect(isPositive(1)).toBe(true);
    expect(isPositive(1.1)).toBe(true);
    expect(isPositive(1.9)).toBe(true);
    expect(isPositive(10)).toBe(true);
    expect(isPositive(10.1)).toBe(true);
    expect(isPositive(10.9)).toBe(true);
  });

  it('should return true for a positive string number', () => {
    expect(isPositive('-0')).toBe(false);
    expect(isPositive('0', true)).toBe(true);
    expect(isPositive('0.1', true)).toBe(true);
    expect(isPositive('0.9', true)).toBe(true);
    expect(isPositive('1', true)).toBe(true);
    expect(isPositive('1.1', true)).toBe(true);
    expect(isPositive('1.9', true)).toBe(true);
    expect(isPositive('10', true)).toBe(true);
    expect(isPositive('10.1', true)).toBe(true);
    expect(isPositive('10.9', true)).toBe(true);
  });

  it('should return false for a negative number', () => {
    expect(isPositive(-0.1)).toBe(false);
    expect(isPositive(-0.9)).toBe(false);
    expect(isPositive(-1)).toBe(false);
    expect(isPositive(-1.1)).toBe(false);
    expect(isPositive(-1.9)).toBe(false);
    expect(isPositive(-10)).toBe(false);
    expect(isPositive(-10.1)).toBe(false);
    expect(isPositive(-10.9)).toBe(false);
  });

  it('should return false for a negative string number', () => {
    expect(isPositive('-0.1', true)).toBe(false);
    expect(isPositive('-0.9', true)).toBe(false);
    expect(isPositive('-1', true)).toBe(false);
    expect(isPositive('-1.1', true)).toBe(false);
    expect(isPositive('-1.9', true)).toBe(false);
    expect(isPositive('-10', true)).toBe(false);
    expect(isPositive('-10.1', true)).toBe(false);
    expect(isPositive('-10.9', true)).toBe(false);
  });

  it('should return false for an invalid number', () => {
    expect(isPositive(NaN)).toBe(false);
    expect(isPositive(-NaN)).toBe(false);
    expect(isPositive(Infinity)).toBe(false);
    expect(isPositive(-Infinity)).toBe(false);
  });

  it('should return false for an invalid string number', () => {
    expect(isPositive('NaN', true)).toBe(false);
    expect(isPositive('-NaN', true)).toBe(false);
    expect(isPositive('Infinity', true)).toBe(false);
    expect(isPositive('-Infinity', true)).toBe(false);
  });

  it('should return false for a non-number', () => {
    expect(isPositive(null)).toBe(false);
    expect(isPositive(undefined)).toBe(false);
    expect(isPositive({})).toBe(false);
    expect(isPositive({})).toBe(false);
    expect(isPositive([])).toBe(false);
    expect(isPositive([{}, {}, {}])).toBe(false);
    expect(isPositive([1, 2, 3])).toBe(false);
    expect(isPositive({ key: [] })).toBe(false);
    expect(isPositive(new Date())).toBe(false);
  });

  it('should return false for a non-number string', () => {
    expect(isPositive('null', true)).toBe(false);
    expect(isPositive('undefined', true)).toBe(false);
    expect(isPositive('{}', true)).toBe(false);
    expect(isPositive('[]', true)).toBe(false);
    expect(isPositive('[{}, {}, {}]', true)).toBe(false);
    expect(isPositive('[1, 2, 3]', true)).toBe(false);
    expect(isPositive('{ key: [] }', true)).toBe(false);
    expect(isPositive('new Date()', true)).toBe(false);
  });
});

describe('isNegative', () => {
  it('should return true for a negative number', () => {
    expect(isNegative(-0.1)).toBe(true);
    expect(isNegative(-0.9)).toBe(true);
    expect(isNegative(-1)).toBe(true);
    expect(isNegative(-1.1)).toBe(true);
    expect(isNegative(-1.9)).toBe(true);
    expect(isNegative(-10)).toBe(true);
    expect(isNegative(-10.1)).toBe(true);
    expect(isNegative(-10.9)).toBe(true);
  });

  it('should return true for a negative string number', () => {
    expect(isNegative('-0.1', true)).toBe(true);
    expect(isNegative('-0.9', true)).toBe(true);
    expect(isNegative('-1', true)).toBe(true);
    expect(isNegative('-1.1', true)).toBe(true);
    expect(isNegative('-1.9', true)).toBe(true);
    expect(isNegative('-10', true)).toBe(true);
    expect(isNegative('-10.1', true)).toBe(true);
    expect(isNegative('-10.9', true)).toBe(true);
  });

  it('should return false for a positive number', () => {
    expect(isNegative(-0)).toBe(false);
    expect(isNegative(0)).toBe(false);
    expect(isNegative(0.1)).toBe(false);
    expect(isNegative(0.9)).toBe(false);
    expect(isNegative(1)).toBe(false);
    expect(isNegative(1.1)).toBe(false);
    expect(isNegative(1.9)).toBe(false);
    expect(isNegative(10)).toBe(false);
    expect(isNegative(10.1)).toBe(false);
    expect(isNegative(10.9)).toBe(false);
  });

  it('should return false for a positive string number', () => {
    expect(isNegative('-0', true)).toBe(false);
    expect(isNegative('0', true)).toBe(false);
    expect(isNegative('0.1', true)).toBe(false);
    expect(isNegative('0.9', true)).toBe(false);
    expect(isNegative('1', true)).toBe(false);
    expect(isNegative('1.1', true)).toBe(false);
    expect(isNegative('1.9', true)).toBe(false);
    expect(isNegative('10', true)).toBe(false);
    expect(isNegative('10.1', true)).toBe(false);
    expect(isNegative('10.9', true)).toBe(false);
  });

  it('should return false for an invalid number', () => {
    expect(isNegative(NaN)).toBe(false);
    expect(isNegative(-NaN)).toBe(false);
    expect(isNegative(Infinity)).toBe(false);
    expect(isNegative(-Infinity)).toBe(false);
  });

  it('should return false for an invalid string number', () => {
    expect(isNegative('NaN', true)).toBe(false);
    expect(isNegative('-NaN', true)).toBe(false);
    expect(isNegative('Infinity', true)).toBe(false);
    expect(isNegative('-Infinity', true)).toBe(false);
  });

  it('should return false for a non-number', () => {
    expect(isNegative(null)).toBe(false);
    expect(isNegative(undefined)).toBe(false);
    expect(isNegative({})).toBe(false);
    expect(isNegative([])).toBe(false);
    expect(isNegative([{}, {}, {}])).toBe(false);
    expect(isNegative([1, 2, 3])).toBe(false);
    expect(isNegative({ key: [] })).toBe(false);
    expect(isNegative(new Date())).toBe(false);
  });

  it('should return false for a non-number string', () => {
    expect(isNegative('null', true)).toBe(false);
    expect(isNegative('undefined', true)).toBe(false);
    expect(isNegative('{}', true)).toBe(false);
    expect(isNegative('[]', true)).toBe(false);
    expect(isNegative('[{}, {}, {}]', true)).toBe(false);
    expect(isNegative('[1, 2, 3]', true)).toBe(false);
    expect(isNegative('{ key: [] }', true)).toBe(false);
    expect(isNegative('new Date()', true)).toBe(false);
  });
});

describe('isInteger', () => {
  it('should return true for an integer', () => {
    expect(isInteger(0)).toBe(true);
    expect(isInteger(1)).toBe(true);
    expect(isInteger(1.0)).toBe(true);
    expect(isInteger(1.00)).toBe(true);
    expect(isInteger(100)).toBe(true);
    expect(isInteger(100.0)).toBe(true);
    expect(isInteger(100.00)).toBe(true);
    expect(isInteger(1240)).toBe(true);
    expect(isInteger(1240.0)).toBe(true);
    expect(isInteger(1240.00)).toBe(true);
    expect(isInteger(-0)).toBe(true);
    expect(isInteger(-0.0)).toBe(true);
    expect(isInteger(-0.00)).toBe(true);
    expect(isInteger(-1)).toBe(true);
    expect(isInteger(-1.0)).toBe(true);
    expect(isInteger(-1.00)).toBe(true);
    expect(isInteger(-100)).toBe(true);
    expect(isInteger(-100.0)).toBe(true);
    expect(isInteger(-100.00)).toBe(true);
    expect(isInteger(-1240)).toBe(true);
    expect(isInteger(-1240.0)).toBe(true);
    expect(isInteger(-1240.00)).toBe(true);
  });

  it('should return false for a float', () => {
    expect(isInteger(0.1)).toBe(false);
    expect(isInteger(0.50)).toBe(false);
    expect(isInteger(0.90)).toBe(false);
    expect(isInteger(1.1)).toBe(false);
    expect(isInteger(1.50)).toBe(false);
    expect(isInteger(1.90)).toBe(false);
    expect(isInteger(100.1)).toBe(false);
    expect(isInteger(100.50)).toBe(false);
    expect(isInteger(100.90)).toBe(false);
    expect(isInteger(1240.1)).toBe(false);
    expect(isInteger(1240.50)).toBe(false);
    expect(isInteger(1240.90)).toBe(false);
    expect(isInteger(-0.1)).toBe(false);
    expect(isInteger(-0.50)).toBe(false);
    expect(isInteger(-0.90)).toBe(false);
    expect(isInteger(-1.1)).toBe(false);
    expect(isInteger(-1.50)).toBe(false);
    expect(isInteger(-1.90)).toBe(false);
    expect(isInteger(-100.1)).toBe(false);
    expect(isInteger(-100.50)).toBe(false);
    expect(isInteger(-100.90)).toBe(false);
    expect(isInteger(-1240.1)).toBe(false);
    expect(isInteger(-1240.50)).toBe(false);
    expect(isInteger(-1240.90)).toBe(false);
  });

  it('should return true for an string integer', () => {
    expect(isInteger('0', true)).toBe(true);
    expect(isInteger('1', true)).toBe(true);
    expect(isInteger('1.0', true)).toBe(true);
    expect(isInteger('1.00', true)).toBe(true);
    expect(isInteger('100', true)).toBe(true);
    expect(isInteger('100.0', true)).toBe(true);
    expect(isInteger('100.00', true)).toBe(true);
    expect(isInteger('1240', true)).toBe(true);
    expect(isInteger('1240.0', true)).toBe(true);
    expect(isInteger('1240.00', true)).toBe(true);
    expect(isInteger('-0', true)).toBe(true);
    expect(isInteger('-0.0', true)).toBe(true);
    expect(isInteger('-0.00', true)).toBe(true);
    expect(isInteger('-1', true)).toBe(true);
    expect(isInteger('-1.0', true)).toBe(true);
    expect(isInteger('-1.00', true)).toBe(true);
    expect(isInteger('-100', true)).toBe(true);
    expect(isInteger('-100.0', true)).toBe(true);
    expect(isInteger('-100.00', true)).toBe(true);
    expect(isInteger('-1240', true)).toBe(true);
    expect(isInteger('-1240.0', true)).toBe(true);
    expect(isInteger('-1240.00', true)).toBe(true);
  });

  it('should return false for a string float', () => {
    expect(isInteger('0.1', true)).toBe(false);
    expect(isInteger('0.50', true)).toBe(false);
    expect(isInteger('0.90', true)).toBe(false);
    expect(isInteger('1.1', true)).toBe(false);
    expect(isInteger('1.50', true)).toBe(false);
    expect(isInteger('1.90', true)).toBe(false);
    expect(isInteger('100.1', true)).toBe(false);
    expect(isInteger('100.50', true)).toBe(false);
    expect(isInteger('100.90', true)).toBe(false);
    expect(isInteger('1240.1', true)).toBe(false);
    expect(isInteger('1240.50', true)).toBe(false);
    expect(isInteger('1240.90', true)).toBe(false);
    expect(isInteger('-0.1', true)).toBe(false);
    expect(isInteger('-0.50', true)).toBe(false);
    expect(isInteger('-0.90', true)).toBe(false);
    expect(isInteger('-1.1', true)).toBe(false);
    expect(isInteger('-1.50', true)).toBe(false);
    expect(isInteger('-1.90', true)).toBe(false);
    expect(isInteger('-100.1', true)).toBe(false);
    expect(isInteger('-100.50', true)).toBe(false);
    expect(isInteger('-100.90', true)).toBe(false);
    expect(isInteger('-1240.1', true)).toBe(false);
    expect(isInteger('-1240.50', true)).toBe(false);
    expect(isInteger('-1240.90', true)).toBe(false);
  });

  it('should return false for an invalid number', () => {
    expect(isInteger(NaN)).toBe(false);
    expect(isInteger(-NaN)).toBe(false);
    expect(isInteger(Infinity)).toBe(false);
    expect(isInteger(-Infinity)).toBe(false);
  });

  it('should return false for a non-number', () => {
    expect(isInteger('')).toBe(false);
    expect(isInteger(' ')).toBe(false);
    expect(isInteger('string')).toBe(false);
    expect(isInteger([])).toBe(false);
    expect(isInteger({})).toBe(false);
    expect(isInteger(() => null)).toBe(false);
    expect(isInteger(function () { })).toBe(false);
  });

  it('should return false for a non-integer accepting string', () => {
    expect(isInteger('', true)).toBe(false);
    expect(isInteger(' ', true)).toBe(false);
    expect(isInteger('string', true)).toBe(false);
    expect(isInteger([], true)).toBe(false);
    expect(isInteger({}, true)).toBe(false);
    expect(isInteger(() => null, true)).toBe(false);
    expect(isInteger(function () { }, true)).toBe(false);
  });
});

describe('isFloat', () => {
  it('should return true for an float', () => {
    expect(isFloat(0.1)).toBe(true);
    expect(isFloat(0.50)).toBe(true);
    expect(isFloat(0.90)).toBe(true);
    expect(isFloat(1.1)).toBe(true);
    expect(isFloat(1.50)).toBe(true);
    expect(isFloat(1.90)).toBe(true);
    expect(isFloat(100.1)).toBe(true);
    expect(isFloat(100.50)).toBe(true);
    expect(isFloat(100.90)).toBe(true);
    expect(isFloat(1240.1)).toBe(true);
    expect(isFloat(1240.50)).toBe(true);
    expect(isFloat(1240.90)).toBe(true);
    expect(isFloat(-0.1)).toBe(true);
    expect(isFloat(-0.50)).toBe(true);
    expect(isFloat(-0.90)).toBe(true);
    expect(isFloat(-1.1)).toBe(true);
    expect(isFloat(-1.50)).toBe(true);
    expect(isFloat(-1.90)).toBe(true);
    expect(isFloat(-100.1)).toBe(true);
    expect(isFloat(-100.50)).toBe(true);
    expect(isFloat(-100.90)).toBe(true);
    expect(isFloat(-1240.1)).toBe(true);
    expect(isFloat(-1240.50)).toBe(true);
    expect(isFloat(-1240.90)).toBe(true);
  });

  it('should return false for a integer', () => {
    expect(isFloat(0)).toBe(false);
    expect(isFloat(1)).toBe(false);
    expect(isFloat(1.0)).toBe(false);
    expect(isFloat(1.00)).toBe(false);
    expect(isFloat(100)).toBe(false);
    expect(isFloat(100.0)).toBe(false);
    expect(isFloat(100.00)).toBe(false);
    expect(isFloat(1240)).toBe(false);
    expect(isFloat(1240.0)).toBe(false);
    expect(isFloat(1240.00)).toBe(false);
    expect(isFloat(-0)).toBe(false);
    expect(isFloat(-0.0)).toBe(false);
    expect(isFloat(-0.00)).toBe(false);
    expect(isFloat(-1)).toBe(false);
    expect(isFloat(-1.0)).toBe(false);
    expect(isFloat(-1.00)).toBe(false);
    expect(isFloat(-100)).toBe(false);
    expect(isFloat(-100.0)).toBe(false);
    expect(isFloat(-100.00)).toBe(false);
    expect(isFloat(-1240)).toBe(false);
    expect(isFloat(-1240.0)).toBe(false);
    expect(isFloat(-1240.00)).toBe(false);
  });

  it('should return true for an string-float', () => {
    expect(isFloat('0.1', true)).toBe(true);
    expect(isFloat('0.50', true)).toBe(true);
    expect(isFloat('0.90', true)).toBe(true);
    expect(isFloat('1.1', true)).toBe(true);
    expect(isFloat('1.50', true)).toBe(true);
    expect(isFloat('1.90', true)).toBe(true);
    expect(isFloat('100.1', true)).toBe(true);
    expect(isFloat('100.50', true)).toBe(true);
    expect(isFloat('100.90', true)).toBe(true);
    expect(isFloat('1240.1', true)).toBe(true);
    expect(isFloat('1240.50', true)).toBe(true);
    expect(isFloat('1240.90', true)).toBe(true);
    expect(isFloat('-0.1', true)).toBe(true);
    expect(isFloat('-0.50', true)).toBe(true);
    expect(isFloat('-0.90', true)).toBe(true);
    expect(isFloat('-1.1', true)).toBe(true);
    expect(isFloat('-1.50', true)).toBe(true);
    expect(isFloat('-1.90', true)).toBe(true);
    expect(isFloat('-100.1', true)).toBe(true);
    expect(isFloat('-100.50', true)).toBe(true);
    expect(isFloat('-100.90', true)).toBe(true);
    expect(isFloat('-1240.1', true)).toBe(true);
    expect(isFloat('-1240.50', true)).toBe(true);
    expect(isFloat('-1240.90', true)).toBe(true);
  });

  it('should return false for an string-integer', () => {
    expect(isFloat('0', true)).toBe(false);
    expect(isFloat('1', true)).toBe(false);
    expect(isFloat('1.0', true)).toBe(false);
    expect(isFloat('1.00', true)).toBe(false);
    expect(isFloat('100', true)).toBe(false);
    expect(isFloat('100.0', true)).toBe(false);
    expect(isFloat('100.00', true)).toBe(false);
    expect(isFloat('1240', true)).toBe(false);
    expect(isFloat('1240.0', true)).toBe(false);
    expect(isFloat('1240.00', true)).toBe(false);
    expect(isFloat('-0', true)).toBe(false);
    expect(isFloat('-0.0', true)).toBe(false);
    expect(isFloat('-0.00', true)).toBe(false);
    expect(isFloat('-1', true)).toBe(false);
    expect(isFloat('-1.0', true)).toBe(false);
    expect(isFloat('-1.00', true)).toBe(false);
    expect(isFloat('-100', true)).toBe(false);
    expect(isFloat('-100.0', true)).toBe(false);
    expect(isFloat('-100.00', true)).toBe(false);
    expect(isFloat('-1240', true)).toBe(false);
    expect(isFloat('-1240.0', true)).toBe(false);
    expect(isFloat('-1240.00', true)).toBe(false);
  });

  it('should return false for an invalid number', () => {
    expect(isFloat(NaN)).toBe(false);
    expect(isFloat(-NaN)).toBe(false);
    expect(isFloat(Infinity)).toBe(false);
    expect(isFloat(-Infinity)).toBe(false);
  });

  it('should return false for a non-float', () => {
    expect(isFloat('')).toBe(false);
    expect(isFloat(' ')).toBe(false);
    expect(isFloat('string')).toBe(false);
    expect(isFloat([])).toBe(false);
    expect(isFloat({})).toBe(false);
    expect(isFloat(() => null)).toBe(false);
    expect(isFloat(function () { })).toBe(false);
  });

  it('should return false for a non-float accepting string', () => {
    expect(isFloat('', true)).toBe(false);
    expect(isFloat(' ', true)).toBe(false);
    expect(isFloat('string', true)).toBe(false);
    expect(isFloat([], true)).toBe(false);
    expect(isFloat({}, true)).toBe(false);
    expect(isFloat(() => null, true)).toBe(false);
    expect(isFloat(function () { }, true)).toBe(false);
  });
});