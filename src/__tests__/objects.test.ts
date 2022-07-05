import { getItem } from "../objects";

describe("getItem()", () => {
  it("should return undefined if the key is undefined", () => {
    expect(getItem({ en: 1, fr: 2 }, undefined)).toBeUndefined();
  });

  it("should return undefined if the key is not a valid key type", () => {
    expect(getItem({ en: 1, fr: 2 }, { test: true })).toBeUndefined();
  });

  it("should return undefined if the key is not in the object", () => {
    expect(getItem({ en: 1, fr: 2 }, "abc")).toBeUndefined();
  });

  it("should return the default value if the key is not in the object and a default value is provided", () => {
    expect(getItem({ en: 1, fr: 2 }, "abc", "en")).toBe("en");
  });

  it("should return the default value if the key is undefined and a default value is provided", () => {
    expect(getItem({ en: 1, fr: 2 }, undefined, "en")).toBe("en");
  });
  it("should return the key if the key is in the object", () => {
    expect(getItem({ en: 1, fr: 2 }, "fr", 1)).toBe(2);
  });

  it("should return the item if the key is in the object", () => {
    const testSymbol = Symbol("test symbol");
    expect(getItem({ key1: "test" }, "key1")).toBe("test");
    expect(getItem({ 1: "test" }, 1)).toBe("test");
    expect(getItem({ [testSymbol]: "test" }, testSymbol)).toBe("test");
  });
});
