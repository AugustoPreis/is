export function isObject(value: any): value is object {
  return typeof value === 'object' && Object.prototype.toString.call(value) === '[object Object]';
}

export function isValidObject(value: any): boolean {
  return isObject(value) && Object.keys(value).length > 0;
}

export function isObjectOf(value: any, type: string): boolean {
  return isObject(value) && Object.values(value).every((item) => typeof item === type);
}