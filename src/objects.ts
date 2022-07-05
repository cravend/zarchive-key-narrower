import { isValidKey } from "./keys";

/**
 * This function takes in a key, an object, and an optional
 * default value. If the key is present in the object, it will return the
 * key. If the key is not present in the object, it will return the default
 * value. If the default value is not provided, it will return undefined.
 *
 * @param key The key to attempt access with.
 * @param object The object to attempt access on.
 * @param defaultValue The default value to fall back to if the key is not present.
 * @returns An element of the object, the default value, or undefined.
 */
export function getItem<T extends Record<string, unknown>>(
  key: keyof T,
  object: T,
  defaultValue?: undefined
): T[keyof T];

export function getItem<T extends Record<string, unknown>>(
  key: unknown,
  object: T,
  defaultValue?: undefined
): T[keyof T] | undefined;

export function getItem<T extends Record<string, unknown>, D>(
  key: keyof T,
  object: T,
  defaultValue: D
): T[keyof T];

export function getItem<T extends Record<string, unknown>, D>(
  key: unknown,
  object: T,
  defaultValue: D
): T[keyof T] | D;

export function getItem<T extends Record<string, unknown>, D>(
  key: keyof T | unknown,
  object: T,
  defaultValue?: D
) {
  return isValidKey(key, object) ? object[key] : defaultValue;
}
