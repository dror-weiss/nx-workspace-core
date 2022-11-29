/**
 * Check if the passed value is null.
 *
 * @param val
 * @returns `true` if val is null, `false` otherwise.
 */
export function isNull<T>(val: T | null): val is null {
  return val === null;
}
