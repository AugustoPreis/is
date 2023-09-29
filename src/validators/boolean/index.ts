export function isBoolean(value: any): value is boolean {
  return typeof value === 'boolean';
}

export function isFalse(value: any): value is false {
  return isBoolean(value) && !value;
}

export function isTrue(value: any): value is true {
  return isBoolean(value) && value;
}