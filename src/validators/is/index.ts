import { Validators } from '../../types/Validators';
import {
  isArray,
  isValidArray,
  isBoolean,
  isDate,
  isValidDate,
  isNumber,
  isObject,
  isValidObject,
  isString,
  isValidString,
} from '../../';

export function is(value: any, type: Validators): boolean {
  switch (type) {
    case 'array':
      return isArray(value);
    case 'boolean':
      return isBoolean(value);
    case 'date':
      return isDate(value);
    case 'number':
      return isNumber(value);
    case 'object':
      return isObject(value);
    case 'string':
      return isString(value);
    default:
      return false;
  }
}

export function isValid(value: any, type: Validators): boolean {
  switch (type) {
    case 'array':
      return isValidArray(value);
    case 'boolean':
      return isBoolean(value);
    case 'date':
      return isValidDate(value);
    case 'number':
      return isNumber(value);
    case 'object':
      return isValidObject(value);
    case 'string':
      return isValidString(value);
    default:
      return false;
  }
}