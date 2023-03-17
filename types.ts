// Copyright 2023-latest the httpland authors. All rights reserved. MIT license.
// This module is browser compatible.

/** HTTP `Strict-Transport-Security` header field. */
export interface StrictTransportSecurity {
  /** The number of seconds, after the reception of the STS header field, during which the UA regards the host. */
  readonly maxAge: number;

  /** Whether the rule applies to all subdomains or not. */
  readonly includeSubDomains?: boolean;

  /** Whether the domain do preload or not.
   * @see https://hstspreload.org/
   */
  readonly preload?: boolean;
}
