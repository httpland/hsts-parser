# hsts-parser

[![deno land](http://img.shields.io/badge/available%20on-deno.land/x-lightgrey.svg?logo=deno)](https://deno.land/x/hsts_parser)
[![deno doc](https://doc.deno.land/badge.svg)](https://doc.deno.land/https/deno.land/x/hsts_parser/mod.ts)
[![GitHub release (latest by date)](https://img.shields.io/github/v/release/httpland/hsts-parser)](https://github.com/httpland/hsts-parser/releases)
[![codecov](https://codecov.io/github/httpland/hsts-parser/branch/main/graph/badge.svg)](https://codecov.io/gh/httpland/hsts-parser)
[![GitHub](https://img.shields.io/github/license/httpland/hsts-parser)](https://github.com/httpland/hsts-parser/blob/main/LICENSE)

[![test](https://github.com/httpland/hsts-parser/actions/workflows/test.yaml/badge.svg)](https://github.com/httpland/hsts-parser/actions/workflows/test.yaml)
[![NPM](https://nodei.co/npm/@httpland/hsts-parser.png?mini=true)](https://nodei.co/npm/@httpland/hsts-parser/)

HTTP Strict Transport Security(HSTS) header field parser.

Compliant with
[RFC 6797, 6.1. Strict-Transport-Security HTTP Response Header Field](https://www.rfc-editor.org/rfc/rfc6797#section-6.1).

## Strict Transport Security

`StrictTransportSecurity` is a structured object of `Strict-Transport-Security`
header .

| Name              | Type      |      Required      | Description                                                                                               |
| ----------------- | --------- | :----------------: | --------------------------------------------------------------------------------------------------------- |
| maxAge            | `number`  | :white_check_mark: | The number of seconds, after the reception of the STS header field, during which the UA regards the host. |
| includeSubDomains | `boolean` |         -          | Whether the rule applies to all subdomains or not.                                                        |
| preload           | `boolean` |         -          | Whether the domain do preload or not.                                                                     |

## Serialization

Serializes [Strict Transport Security](#strict-transport-security) into string.

```ts
import { stringify } from "https://deno.land/x/hsts_parser@$VERSION/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

assertEquals(
  stringify({
    maxAge: 60 * 60 * 24 * 180,
    includeSubDomains: true,
    preload: true,
  }),
  "max-age=15552000; includeSubDomains; preload",
);
```

### Throwing error

Throws `TypeError` if [Strict Transport Security](#strict-transport-security)
contains errors.

```ts
import { stringify } from "https://deno.land/x/hsts_parser@$VERSION/mod.ts";
import { assertThrows } from "https://deno.land/std/testing/asserts.ts";

assertThrows(() => stringify({ maxAge: NaN }));
```

## License

Copyright © 2023-present [httpland](https://github.com/httpland).

Released under the [MIT](./LICENSE) license
