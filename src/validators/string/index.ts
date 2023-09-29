import { SpacePosition } from '../../types/SpacePosition';
import { isNumber } from '../../';

export function isString(value: any): value is string {
  return typeof value === 'string';
}

export function isValidString(value: any): boolean {
  return isString(value) && !!value.trim();
}

export function isNumberString(value: any): boolean {
  return isString(value) && isNumber(value, true);
}

export function isEscapedString(value: any): boolean {
  if (!isString(value)) {
    return false;
  }

  const firstChar = value[0];
  const lastChar = value[value.length - 1];

  return ['"', "'", '`'].includes(firstChar) && firstChar === lastChar;
}

export function isSpacedString(value: any, position: SpacePosition = 'start'): boolean {
  if (!isString(value)) {
    return false;
  }

  if (position === 'any') {
    return isSpacedString(value, 'start') || isSpacedString(value, 'end');
  }

  if (position === 'both') {
    return isSpacedString(value, 'start') && isSpacedString(value, 'end');
  }

  const char = value[position === 'start' ? 0 : value.length - 1];

  return [' ', '\t'].includes(char);
}