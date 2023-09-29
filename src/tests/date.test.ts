import { isDate, isValidDate } from '../validators/date';

describe('isDate', () => {
  it('should return true for an date', () => {
    expect(isDate(new Date())).toBe(true);
    expect(isDate(new Date('Invalid Date'))).toBe(true);
    expect(isDate(new Date(1525484889274))).toBe(true);
  });

  it('should return true for a non-date', () => {
    expect(isDate(null)).toBe(false);
    expect(isDate(undefined)).toBe(false);
    expect(isDate(NaN)).toBe(false);
    expect(isDate(946692000000)).toBe(false);
    expect(isDate(Infinity)).toBe(false);
    expect(isDate('date')).toBe(false);
    expect(isDate('01/01/2000')).toBe(false);
    expect(isDate(null)).toBe(false);
  });
});

describe('isValidDate', () => {
  it('should return true for a valid date', () => {
    expect(isValidDate(new Date())).toBe(true);
    expect(isValidDate(new Date())).toBe(true);
    expect(isValidDate(new Date(946692000000))).toBe(true);
    expect(isValidDate(new Date(1525484889274))).toBe(true);
  });

  it('should return false for an invalid date', () => {
    expect(isValidDate(new Date([] as any))).toBe(false);
    expect(isValidDate(new Date({} as any))).toBe(false);
    expect(isValidDate(new Date('Invalid Date'))).toBe(false);
    expect(isValidDate(new Date('invalid'))).toBe(false);
  });

  it('should return false for a non-date', () => {
    expect(isValidDate(null)).toBe(false);
    expect(isValidDate(undefined)).toBe(false);
    expect(isValidDate(NaN)).toBe(false);
    expect(isValidDate(Infinity)).toBe(false);
    expect(isValidDate('Invalid Date')).toBe(false);
    expect(isValidDate('string')).toBe(false);
    expect(isValidDate([])).toBe(false);
    expect(isValidDate({})).toBe(false);
    expect(isValidDate(/[0-9]/g)).toBe(false);
    expect(isValidDate(() => null)).toBe(false);
    expect(isValidDate(function () { })).toBe(false);
  });
});