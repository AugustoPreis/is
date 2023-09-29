import stringToNumber from '../../utils/stringToNumber';

export function isNumber(value: any, acceptString?: boolean): value is number {
  if (acceptString) {
    value = stringToNumber(value);
  }

  return typeof value === 'number' && !isNaN(value) && isFinite(value);
}

export function isPositive(value: any, acceptString?: boolean): boolean {
  if (acceptString) {
    value = stringToNumber(value);
  }

  return isNumber(value, acceptString) && value >= 0;
}

export function isNegative(value: any, acceptString?: boolean): boolean {
  if (acceptString) {
    value = stringToNumber(value);
  }

  return isNumber(value, acceptString) && value < 0;
}

export function isInteger(value: any, acceptString?: boolean): boolean {
  if (acceptString) {
    value = stringToNumber(value);
  }

  return isNumber(value, acceptString) && Number.isInteger(value);
}

export function isFloat(value: any, acceptString?: boolean): boolean {
  if (acceptString) {
    value = stringToNumber(value);
  }

  return isNumber(value, acceptString) && !Number.isInteger(value);
}