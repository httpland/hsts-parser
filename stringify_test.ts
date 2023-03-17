import { stringify } from "./stringify.ts";
import type { StrictTransportSecurity } from "./types.ts";
import { assertEquals, assertThrows, describe, it } from "./_dev_deps.ts";

describe("stringify", () => {
  it("should return string if the sts is valid", () => {
    const table: [StrictTransportSecurity, string][] = [
      [{ maxAge: 0 }, "max-age=0"],
      [{ maxAge: 100000 }, "max-age=100000"],
      [{ maxAge: 0, includeSubDomains: true }, "max-age=0; includeSubDomains"],
      [{ maxAge: 0, includeSubDomains: false }, "max-age=0"],
      [{ maxAge: 0, preload: true }, "max-age=0; preload"],
      [{ maxAge: 0, preload: false }, "max-age=0"],
      [
        { maxAge: 0, preload: true, includeSubDomains: true },
        "max-age=0; includeSubDomains; preload",
      ],
      [
        { maxAge: 0, preload: false, includeSubDomains: false },
        "max-age=0",
      ],
      [
        { maxAge: 60 * 60 * 24 * 180, preload: true, includeSubDomains: true },
        "max-age=15552000; includeSubDomains; preload",
      ],
    ];

    table.forEach(([sts, expected]) => {
      assertEquals(stringify(sts), expected);
    });
  });

  it("should throw error if the sts is invalid", () => {
    const table: StrictTransportSecurity[] = [
      { maxAge: -1 },
      { maxAge: NaN },
      { maxAge: Infinity },
      { maxAge: 1.1 },
    ];

    table.forEach((sts) => {
      assertThrows(() => stringify(sts));
    });
  });
});
