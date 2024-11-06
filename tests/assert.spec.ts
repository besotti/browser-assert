import { assert } from "../src/assert";

describe("assert function", () => {
  test("does not throw when condition is truthy without message", () => {
    expect(() => assert(true)).not.toThrow();
    expect(() => assert(1)).not.toThrow();
    expect(() => assert("non-empty string")).not.toThrow();
    expect(() => assert({})).not.toThrow(); // leeres Objekt ist truthy
    expect(() => assert([])).not.toThrow(); // leeres Array ist truthy
  });

  test("does not throw when condition is truthy with message", () => {
    expect(() => assert(true, "This should not throw")).not.toThrow();
    expect(() => assert(1, "This should not throw")).not.toThrow();
    expect(() =>
      assert("non-empty string", "This should not throw"),
    ).not.toThrow();
    expect(() => assert({}, "This should not throw")).not.toThrow();
    expect(() => assert([], "This should not throw")).not.toThrow();
  });

  test("throws when condition is falsy without message", () => {
    expect(() => assert(false)).toThrowError("unknown assertion error");
    expect(() => assert(0)).toThrowError("unknown assertion error");
    expect(() => assert(null)).toThrowError("unknown assertion error");
    expect(() => assert(undefined)).toThrowError("unknown assertion error");
    expect(() => assert("")).toThrowError("unknown assertion error"); // leerer String ist falsy
    expect(() => assert(NaN)).toThrowError("unknown assertion error"); // NaN ist falsy
  });

  test("throws when condition is falsy with custom message", () => {
    expect(() => assert(false, "Custom error")).toThrowError("Custom error");
    expect(() => assert(0, "Another custom error")).toThrowError(
      "Another custom error",
    );
    expect(() => assert(null, "Null error")).toThrowError("Null error");
    expect(() => assert(undefined, "Undefined error")).toThrowError(
      "Undefined error",
    );
    expect(() => assert("", "Empty string error")).toThrowError(
      "Empty string error",
    );
    expect(() => assert(NaN, "NaN error")).toThrowError("NaN error");
  });

  test("throws with empty or nullish message", () => {
    expect(() => assert(false, "")).toThrowError("unknown assertion error"); // Empty message defaults to "unknown assertion error"
    expect(() => assert(false, null as unknown as string)).toThrowError(
      "unknown assertion error",
    ); // null message
    expect(() => assert(false, undefined)).toThrowError(
      "unknown assertion error",
    ); // undefined message
  });
});
