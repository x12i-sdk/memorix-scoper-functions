# @x12i/memorix-scoper-functions usage example

Learned query and scope functions for Memorix Scoper.

This consuming application demonstrates **identify a reusable scope function independently of record arguments** using the published npm package, pinned to `0.4.0`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- Resolve a known query using installed Scoper functions.
- Reuse a learned scope function in another Scoper request.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/memorix-scoper-functions)
- [Implementation monorepo](https://github.com/x12i/scoper-monorepo)
- [Reviewed package source](https://github.com/x12i/scoper-monorepo/tree/1fbab09cdcf68c47f68594bd91b2145a31128f77/packages/scoper-functions)

The current source snapshot has a different manifest version from the pinned npm dependency. This example is validated against the installed npm release.

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.

## Validation scope

The records, callers, inference outputs and backend responses in these examples are synthetic. The example checks a local consumer workflow; no database, semantic model, remote promotion, or real similarity index is contacted. A generated mapping proposal still needs human review before production use.
