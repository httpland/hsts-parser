import { isNonNegativeInteger } from "./deps.ts";
import type { StrictTransportSecurity } from "./types.ts";

enum Msg {
  InvalidMaxAge = "maxAge must be non-negative integer.",
}

/**
 * @throws {TypeError} If the {@link StrictTransportSecurity.maxAge} is not non-negative integer.
 */
export function assertValidSts(sts: StrictTransportSecurity): asserts sts {
  if (!isNonNegativeInteger(sts.maxAge)) {
    throw TypeError(Msg.InvalidMaxAge);
  }
}
