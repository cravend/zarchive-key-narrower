/**
 * This function is used to check if a key-like item is actually a key of
 * the object provided. It can be used to narrow the type of the param
 * `keyToTest`.
 *
 * @param keyToTest The key that should be tested (must be a valid key type).
 * @param objectToTest The object that should be tested (must be an object).
 *
 *
 * @returns A boolean indicating if the key is present in the object.
 */
export function isValidKey<T extends Record<string, unknown>>(
  keyToTest: string | number | symbol,
  objectToTest: T,
): keyToTest is keyof T {
  return keyToTest in objectToTest;
}
export function getValidKey<T extends Record<string, unknown>>(
  key: string | number | symbol,
  object: T,
  defaultValue: keyof T
): keyof T;

export function getValidKey<T extends Record<string, unknown>>(
  key: string | number | symbol,
  object: T,
  defaultValue?: undefined
): keyof T | undefined;

/**
 * This function takes in a key, an object, and an optional
 * default value. If the key is present in the object, it will return the
 * key. If the key is not present in the object, it will return the default
 * value. If the default value is not provided, it will return undefined.
 *
 * @param key The key that should be tried (must be a valid key type).
 * @param object The object to be accessed (must be an object).
 * @param defaultValue An optional default value that will be returned
 * if the key is not present in the object.
 *
 * @returns The key if it is in the object, the default value if the key
 * is not present in the object, or undefined.
 */
export function getValidKey<T extends Record<string, unknown>>(
  key: string | number | symbol,
  object: T,
  defaultValue?: keyof T,
) {
  return key in object ? (key as keyof T) : defaultValue;
}
