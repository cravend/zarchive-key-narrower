import { isValidKey, getValidKey } from "../keys";

describe("isValidKey()", () => {
  it("should return false if the key is undefined", () => {
    expect(isValidKey({}, undefined)).toBe(false);
  });
  it("should return false if the key is not a valid key type", () => {
    expect(isValidKey({ test: true }, { test: true })).toBe(false);
  });

  it("should return false if the key is not in the object", () => {
    expect(isValidKey({ key1: "test" }, "abc")).toBe(false);
  });

  it("should return true if the key is in the object", () => {
    const testSymbol = Symbol("test symbol");
    expect(isValidKey({ key1: "test" }, "key1")).toBe(true);
    expect(isValidKey({ 1: "test" }, 1)).toBe(true);
    expect(isValidKey({ [testSymbol]: "test" }, testSymbol)).toBe(true);
  });
});

describe("getValidKey()", () => {
  it("should return undefined if the key is undefined", () => {
    expect(getValidKey({ en: 1, fr: 2 }, undefined)).toBeUndefined();
  });
  it("should return undefined if the key is not in the object and no default value is provided", () => {
    expect(getValidKey({ en: 1, fr: 2 }, "abc")).toBeUndefined();
  });

  it("should return the default value if the key is not in the object and a default value is provided", () => {
    expect(getValidKey({ en: 1, fr: 2 }, "abc", "en")).toBe("en");
  });
  it("should return the default value if the key is undefined and a default value is provided", () => {
    expect(getValidKey({ en: 1, fr: 2 }, undefined, "en")).toBe("en");
  });
  it("should return the key if the key is in the object", () => {
    expect(getValidKey({ en: 1, fr: 2 }, "fr", "en")).toBe("fr");
  });
});
