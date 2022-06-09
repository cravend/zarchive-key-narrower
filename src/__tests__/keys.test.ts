import { isValidKey } from '../keys';

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
