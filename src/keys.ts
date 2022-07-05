/**
 * This function is used to check if an item is actually a key of
 * the object provided. It is also used to narrow the type of the param
 * `keyToTest`.
 *
 * @param keyToTest The key to be tested.
 * @param objectToTest The object to be accessed.
 *
 *
 * @returns A type assertion indicating if the key is a valid key of the object.
 */
export function isValidKey<T extends Record<string, unknown>>(
  keyToTest: unknown,
  objectToTest: T
): keyToTest is keyof T {
  return (
    (typeof keyToTest === "string" ||
      typeof keyToTest === "number" ||
      typeof keyToTest === "symbol") &&
    keyToTest in objectToTest
  );
}
export function getValidKey<T extends Record<string, unknown>>(
  key: unknown,
  object: T,
  defaultValue: keyof T
): keyof T;

export function getValidKey<T extends Record<string, unknown>>(
  key: unknown,
  object: T,
  defaultValue?: undefined
): keyof T | undefined;

/**
 * This function takes in a key, an object, and an optional
 * default value. If the key is present in the object, it will return the
 * key. If the key is not present in the object, it will return the default
 * value. If the default value is not provided, it will return undefined.
 *
 * @param key The key to be tested.
 * @param object The object to be accessed.
 * @param defaultValue An optional default value to be be returned
 * if the key is not present in the object.
 *
 * @returns The key if it is in the object, the default value if the key
 * is not present in the object, or undefined.
 */
export function getValidKey<T extends Record<string, unknown>>(
  key: unknown,
  object: T,
  defaultValue?: keyof T
) {
  return isValidKey(key, object) ? key : defaultValue;
}
