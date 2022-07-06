import { getItem } from "../objects";

describe("getItem()", () => {
  it("should return undefined if the key is undefined", () => {
    expect(getItem({ en: 1, fr: 2 }, undefined)).toBeUndefined();
  });

  it("should return undefined if the key is not a valid key type", () => {
    expect(getItem({ en: 1, fr: 2 }, true)).toBeUndefined();
    expect(getItem({ en: 1, fr: 2 }, { test: true })).toBeUndefined();
  });

  it("should return undefined if the key is not in the object", () => {
    expect(getItem({ en: 1, fr: 2 }, "abc")).toBeUndefined();
  });

  it("should return undefined if the key is undefined and a default value is undefined", () => {
    expect(getItem({ en: 1, fr: 2 }, undefined, undefined)).toBeUndefined();
  });

  it("should return the default value if the key is not in the object and a default value is provided", () => {
    expect(getItem({ en: 1, fr: 2 }, "abc", 3)).toBe(3);
  });

  it("should return the default value if the key is undefined and a default value is provided", () => {
    expect(getItem({ en: 1, fr: 2 }, undefined, 3)).toBe(3);
  });

  it("should return the item if the key is in the object", () => {
    const testSymbol = Symbol("test symbol");
    expect(getItem({ en: 1, fr: 2 }, "en")).toBe(1);
    expect(getItem({ 1: "en", 2: "fr" }, 1)).toBe("en");
    expect(getItem({ [testSymbol]: "en" }, testSymbol)).toBe("en");
  });
});
