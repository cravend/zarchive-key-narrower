import { isValidKey, getValidKey } from '../keys';

describe('isValidKey()', () => {
  it('should return false if a key is undefined', () => {
    expect(isValidKey(undefined as never, {})).toBe(false);
  });

  it('should return false if a key is not in the object', () => {
    expect(isValidKey('abc', { key1: 'test' })).toBe(false);
  });

  it('should return true if a key is in the object', () => {
    expect(isValidKey('key1', { key1: 'test' })).toBe(true);
  });
});

describe('getValidKey()', () => {
  it('should return undefined if the key is not in the object and no default value is provided', () => {
    expect(getValidKey('abc', { en: 1, fr: 2 })).toBeUndefined();
  });

  it('should return the default value if the key is not in the object and a default value is provided', () => {
    expect(getValidKey('abc', { en: 1, fr: 2 }, 'en')).toBe('en');
  });

  it('should return the key if the key is in the object', () => {
    expect(getValidKey('abc', { abc: 1, en: 2 }, 'en')).toBe('abc');
  });
});
