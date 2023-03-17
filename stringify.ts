// Copyright 2023-latest the httpland authors. All rights reserved. MIT license.
// This module is browser compatible.

import { Directive } from "./constants.ts";
import { assertValidSts } from "./validate.ts";
import type { StrictTransportSecurity } from "./types.ts";

/** Serialize {@link StrictTransportSecurity} into string.
 *
 * @example
 * ```ts
 * import { stringify } from "https://deno.land/x/hsts_parser@$VERSION/mod.ts";
 * import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
 *
 * assertEquals(
 *   stringify({
 *     maxAge: 60 * 60 * 24 * 180,
 *     includeSubDomains: true,
 *     preload: true,
 *   }),
 *   "max-age=15552000; includeSubDomains; preload",
 * );
 * ```
 *
 * @throws {TypeError} If the {@link StrictTransportSecurity.maxAge} is not non-negative integer.
 */
export function stringify(sts: StrictTransportSecurity): string {
  assertValidSts(sts);

  const maxAge = `${Directive.maxAge}=${sts.maxAge}`;
  const includeSubDomains = sts.includeSubDomains
    ? Directive.includeSubDomains
    : undefined;
  const preload = sts.preload ? Directive.preload : undefined;
  const directives: string[] = [
    maxAge,
    includeSubDomains,
    preload,
  ].filter(Boolean) as string[];

  return directives.join("; ");
}
