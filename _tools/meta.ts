import { BuildOptions } from "https://deno.land/x/dnt@0.33.1/mod.ts";

export const makeOptions = (version: string): BuildOptions => ({
  test: false,
  shims: {},
  typeCheck: true,
  entryPoints: ["./mod.ts"],
  outDir: "./npm",
  package: {
    name: "@httpland/hsts-parser",
    version,
    description: "HTTP Strict Transport Security(HSTS) header field parser",
    keywords: [
      "http",
      "parse",
      "parser",
      "header",
      "sts",
      "hsts",
      "strict-transport-security",
      "stringify",
      "field",
      "serialize",
      "deserialize",
    ],
    license: "MIT",
    homepage: "https://github.com/httpland/hsts-parser",
    repository: {
      type: "git",
      url: "git+https://github.com/httpland/hsts-parser.git",
    },
    bugs: {
      url: "https://github.com/httpland/hsts-parser/issues",
    },
    sideEffects: false,
    type: "module",
    publishConfig: {
      access: "public",
    },
  },
  packageManager: "pnpm",
});
