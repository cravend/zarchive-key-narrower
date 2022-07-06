import { isValidKey } from "./keys";

/**
 * This function takes in a key, an object, and an optional
 * default value. If the key is present in the object, it will return the
 * key. If the key is not present in the object, it will return the default
 * value. If the default value is not provided, it will return undefined.
 *
 * @param object The object to attempt access on.
 * @param key The key to attempt access with.
 * @param defaultValue The default value to fall back to if the key is not present.
 * @returns An element of the object, the default value, or undefined.
 */

export function getItem<T extends Record<string, unknown>, D = undefined>(
  object: T,
  key: unknown,
  defaultValue: D
): T[keyof T] | D;

export function getItem<T extends Record<string, unknown>, D = undefined>(
  object: T,
  key: unknown,
  defaultValue?: D | undefined
): T[keyof T] | D | undefined;

export function getItem<T extends Record<string, unknown>, D = undefined>(
  object: T,
  key: unknown,
  defaultValue?: D | undefined
) {
  return isValidKey(object, key) ? object[key] : defaultValue;
}
