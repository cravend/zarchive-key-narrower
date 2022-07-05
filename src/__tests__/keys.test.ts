import { isValidKey, getValidKey } from "../keys";

describe("isValidKey()", () => {
  it("should return false if the key is undefined", () => {
    expect(isValidKey(undefined, {})).toBe(false);
  });
  it("should return false if the key is not a valid key type", () => {
    expect(isValidKey({ test: true }, { test: true })).toBe(false);
  });

  it("should return false if the key is not in the object", () => {
    expect(isValidKey("abc", { key1: "test" })).toBe(false);
  });

  it("should return true if the key is in the object", () => {
    const testSymbol = Symbol("test symbol");
    expect(isValidKey("key1", { key1: "test" })).toBe(true);
    expect(isValidKey(1, { 1: "test" })).toBe(true);
    expect(isValidKey(testSymbol, { [testSymbol]: "test" })).toBe(true);
  });
});

describe("getValidKey()", () => {
  it("should return undefined if the key is undefined", () => {
    expect(getValidKey(undefined, { en: 1, fr: 2 })).toBeUndefined();
  });
  it("should return undefined if the key is not in the object and no default value is provided", () => {
    expect(getValidKey("abc", { en: 1, fr: 2 })).toBeUndefined();
  });

  it("should return the default value if the key is not in the object and a default value is provided", () => {
    expect(getValidKey("abc", { en: 1, fr: 2 }, "en")).toBe("en");
  });
  it("should return the default value if the key is undefined and a default value is provided", () => {
    expect(getValidKey(undefined, { en: 1, fr: 2 }, "en")).toBe("en");
  });
  it("should return the key if the key is in the object", () => {
    expect(getValidKey("fr", { en: 1, fr: 2 }, "en")).toBe("fr");
  });
});
