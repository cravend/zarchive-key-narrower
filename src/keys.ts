export function isValidKey<T extends Record<string, unknown>>(
  keyToTest: string | number | symbol,
  objectToTest: T
): keyToTest is keyof T {
  return keyToTest in objectToTest;
}

export function getValidKey<T extends Record<string, unknown>>(
  keyToTest: string | number | symbol,
  objectToTest: T,
  defaultValue: keyof T
): keyof T;
export function getValidKey<T extends Record<string, unknown>>(
  keyToTest: string | number | symbol,
  objectToTest: T,
  defaultValue?: undefined
): keyof T | undefined;

export function getValidKey<T extends Record<string, unknown>>(
  keyToTest: string | number | symbol,
  objectToTest: T,
  defaultValue?: keyof T
) {
  return keyToTest in objectToTest ? (keyToTest as keyof T) : defaultValue;
}
