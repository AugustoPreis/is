import { isBoolean, isFalse, isTrue } from '../validators/boolean';

describe('isBoolean', () => {
  it('should return true for an boolean', () => {
    expect(isBoolean(true)).toBe(true);
    expect(isBoolean(false)).toBe(true);
    expect(isBoolean(Boolean())).toBe(true);
    expect(isBoolean(Boolean(''))).toBe(true);
    expect(isBoolean(Boolean('true'))).toBe(true);
  });

  it('should return false for a non-boolean', () => {
    expect(isBoolean(null)).toBe(false);
    expect(isBoolean(undefined)).toBe(false);
    expect(isBoolean(NaN)).toBe(false);
    expect(isBoolean('')).toBe(false);
    expect(isBoolean(0)).toBe(false);
    expect(isBoolean('false')).toBe(false);
    expect(isBoolean('true')).toBe(false);
    expect(isBoolean([])).toBe(false);
    expect(isBoolean({})).toBe(false);
    expect(isBoolean([true])).toBe(false);
    expect(isBoolean([false])).toBe(false);
    expect(isBoolean(-1)).toBe(false);
  });
});

describe('isFalse', () => {
  it('should return true for a false value', () => {
    expect(isFalse(false)).toBe(true);
    expect(isFalse(Boolean(''))).toBe(true);
    expect(isFalse(Boolean(false))).toBe(true);
  });

  it('should return false for a non-false value', () => {
    expect(isFalse(true)).toBe(false);
    expect(isFalse(null)).toBe(false);
    expect(isFalse(undefined)).toBe(false);
    expect(isFalse(NaN)).toBe(false);
    expect(isFalse('')).toBe(false);
    expect(isFalse(0)).toBe(false);
    expect(isFalse('false')).toBe(false);
    expect(isFalse([])).toBe(false);
    expect(isFalse({})).toBe(false);
    expect(isFalse([false])).toBe(false);
    expect(isFalse(-1)).toBe(false);
  });
});

describe('isTrue', () => {
  it('should return true for a true value', () => {
    expect(isTrue(true)).toBe(true);
    expect(isTrue(Boolean('true'))).toBe(true);
    expect(isTrue(Boolean(true))).toBe(true);
  });

  it('should return false for a non-true value', () => {
    expect(isTrue(false)).toBe(false);
    expect(isTrue(null)).toBe(false);
    expect(isTrue(undefined)).toBe(false);
    expect(isTrue(NaN)).toBe(false);
    expect(isTrue('')).toBe(false);
    expect(isTrue(0)).toBe(false);
    expect(isTrue('false')).toBe(false);
    expect(isTrue([])).toBe(false);
    expect(isTrue({})).toBe(false);
    expect(isTrue([false])).toBe(false);
    expect(isTrue(-1)).toBe(false);
  });
});