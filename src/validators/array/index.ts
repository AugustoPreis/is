export function isArray(value: any): value is any[] {
  return Array.isArray(value);
}

export function isValidArray(value: any, validator?: (el: any) => any): boolean {
  return isArray(value) && value.length > 0 && value.some(validator || ((el) => el));
}

export function isArrayOf(value: any, type: string): boolean {
  return isArray(value) && value.every((el) => typeof el === type);
}