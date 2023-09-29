export function isDate(value: any): value is Date {
  return value instanceof Date;
}

export function isValidDate(value: any): boolean {
  return isDate(value) && !isNaN(value.getTime());
}