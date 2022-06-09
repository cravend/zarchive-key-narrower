export function isValidKey<T extends Record<string, unknown>>(
  keyToTest: string | number | symbol,
  objectToTest: T
): keyToTest is keyof T {
  return keyToTest in objectToTest;
}
