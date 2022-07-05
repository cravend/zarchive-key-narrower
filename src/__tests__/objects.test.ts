import { getItem } from "../objects";

describe("getItem()", () => {
  it("should return undefined if the key is undefined", () => {
    expect(getItem(undefined, { en: 1, fr: 2 })).toBeUndefined();
  });

  it("should return undefined if the key is not a valid key type", () => {
    expect(getItem({ test: true }, { en: 1, fr: 2 })).toBeUndefined();
  });

  it("should return undefined if the key is not in the object", () => {
    expect(getItem("abc", { en: 1, fr: 2 })).toBeUndefined();
  });

  it("should return the default value if the key is not in the object and a default value is provided", () => {
    expect(getItem("abc", { en: 1, fr: 2 }, "en")).toBe("en");
  });

  it("should return the default value if the key is undefined and a default value is provided", () => {
    expect(getItem(undefined, { en: 1, fr: 2 }, "en")).toBe("en");
  });
  it("should return the key if the key is in the object", () => {
    expect(getItem("fr", { en: 1, fr: 2 }, 1)).toBe(2);
  });

  it("should return the item if the key is in the object", () => {
    const testSymbol = Symbol("test symbol");
    expect(getItem("key1", { key1: "test" })).toBe("test");
    expect(getItem(1, { 1: "test" })).toBe("test");
    expect(getItem(testSymbol, { [testSymbol]: "test" })).toBe("test");
  });
});
