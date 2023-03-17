import { assertValidSts } from "./validate.ts";
import type { StrictTransportSecurity } from "./types.ts";
import { assertFalse, assertThrows, describe, it } from "./_dev_deps.ts";

describe("assertValidSts", () => {
  it("should return void", () => {
    const table: StrictTransportSecurity[] = [
      { maxAge: 0 },
      { maxAge: 1 },
    ];

    table.forEach((sts) => {
      assertFalse(assertValidSts(sts));
    });
  });

  it("should throw error if the input is not valid sts", () => {
    const table: StrictTransportSecurity[] = [
      { maxAge: -1 },
      { maxAge: NaN },
      { maxAge: Infinity },
      { maxAge: 1.1 },
    ];

    table.forEach((sts) => {
      assertThrows(() => assertValidSts(sts));
    });
  });
});
