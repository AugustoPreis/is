export default function stringToNumber(value: string): number {
  if (typeof value === 'number') {
    return value;
  }

  if (typeof value != 'string' || !value.trim()) {
    return NaN;
  }

  return Number(value);
}