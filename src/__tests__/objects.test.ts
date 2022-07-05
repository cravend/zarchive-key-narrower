import { getItem } from "../objects";

describe("getItem()", () => {
  it("should return the value of the key if it exists", () => {
    expect(getItem("key", { key: "value" })).toBe("value");
  });
  it("should return the default value if the key does not exist", () => {
    expect(getItem("key2", { key: "value" }, "default")).toBe("default");
  });
});
