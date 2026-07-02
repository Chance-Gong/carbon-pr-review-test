# Test PR from Carbon PR 22418

## Original PR Info
- **Title**: fix: improve tree shaking across token and icon packages
- **PR Number**: 22418
- **Status**: open

## Changes
- **Files**: 14
- **Additions**: +327
- **Deletions**: -204

## Description
This PR improves tree shaking across Carbon packages by adding explicit `sideEffects` declarations and removing module-scope patterns that bundlers cannot prove side-effect-free.

### Changelog

**Changed**

- Added `sideEffects` declarations to `package.json`:
  - `@carbon/layout`, `@carbon/motion`, `@carbon/type`, `@carbon/grid`, `@carbon/elements`: only style entry points (`index.scss`, `scss/`, `css/`) are declared side-effectful
  - `@carbon/icons`, `@carbon/pictograms`: `"sideEffects": false`
- Annotated top-level token initializers (`rem()`, `px()`, `miniUnits()`) in `@carbon/layout` and `@carbon/type` with `/*#__PURE__*/`
- `@carbon/type`: exported font weights, font families, and type scale steps (`scale01`–`scale23`) as scalar constants and referenced them as plain identifiers in token definitions — module-scope member accesses like `fontWeights.regular` or `scale[0]` read as potential getter side effects to bundlers and block tree shaking of otherwise-unused tokens
- `@carbon/type`: `fluid()` computes the breakpoint name list lazily instead of at module scope
- `@carbon/type`: inlined the two spread-based `expressiveHeading01/02` tokens so each token can be dropped independently

**Unchanged**

- Public APIs, export lists (verified: 69 exports in `@carbon/type`, zero diff vs. published), and all token values (deep-compared built outputs against the published packages)
- `@carbon/react` and `@carbon/web-components` configuration — `@carbon/react` already tree-shakes correctly, and web-components' custom-element registration is an intentional side effect

#### Bundle size impact

Measured by bundling a **single token import** (e.g. `import { blue60 } from '@carbon/elements'`) in production mode, React externalized, one isolated build per entry. "Before" = published packages (`@carbon/type@11.61.0` et al.); "after" = this branch. Sizes are minified bytes (gzip).

| Bundler | `@carbon/elements` | `@carbon/type` | `@carbon/layout` |
|---|---|---|---|
| **webpack 5** | 1,351 (456) → **46 (78)** | 1,420 (505) → **176 (175)** | 309 (186) → **69 (96)** |
| **esbuild** | 6,140 (1,313) → **32 (64)** | 6,131 (1,303) → **142 (149)** | 518 (301) → **63 (89)** |
| **Vite 7 (rolldown-vite)** | 2,221 (756) → **23 (55)** | 2,278 (755) → **121 (135)** | 288 (174) → **56 (86)** |
| **Rollup 4 (+terser)** | 24 (56) → 24 (56) | 136 (150) → 126 (143) | 39 (68) → 47 (76)¹ |

¹ +8 B from an un-folded IIFE in the rebuilt output (cosmetic terser artifact, same semantics).

Per-bundler notes for reviewers:

- **esbuild benefits most** — it treats any module-scope call or member access as potentially side-effectful, so before this change a single type token dragged in the entire 6 KB token bundle.
- **webpack** partially compensated via its `innerGraph` analysis but still left 1.3–1.4 KB of unused tokens per import; now near-optimal.
- **Vite (rolldown)** sits between the two and needed both the `sideEffects` metadata and the purity fixes to reach ~optimal output (95–99 % reduction).
- **Rollup was already near-optimal** thanks to its deep statement-level purity analysis — it is unaffected by this change, which also serves as an independent regression check that the rewritten modules are semantically equivalent.
- `@carbon/react` component bundles (Button: ~50 KB min across bundlers) are unchanged — the package was already correctly configured; the wins land for anyone importing from the token packages directly or transitively (e.g. `@carbon/elements`).

#### Testing / Reviewing

- All `@carbon/type` and `@carbon/layout` unit tests pass (261 tests, 67 snapshots)
- Public export lists and token values deep-compared against the published packages — zero differences
- Bundle measurements above reproduce with single-import fixtures against the built `es/` outputs

#### Sample validation script to test the claims:

##### Bundle-size verification

For reproducing the tree-shaking numbers in the PR description. From the repo root, after `yarn install && yarn build` (or at least building `@carbon/{layout,type,elements}`):

```bash
#!/usr/bin/env bash
# Verifies the @carbon tree-shaking improvements by bundling a single token
# import from each affected package and comparing the minified output size of
# the published npm release ("before") against this branch's build ("after").
set -euo pipefail

REPO="$(pwd)"
WORK="$(mktemp -d)"
trap 'rm -rf "$WORK"' EXIT
cd "$WORK"

# Single-token fixtures (one unused-everything-else import per package).
mkdir -p src
echo "import { blue60 } from '@carbon/elements'; console.log(blue60);" > src/elements.js
echo "import { body01 } from '@carbon/type';     console.log(body01);"  > src/type.js
echo "import { spacing01 } from '@carbon/layout'; console.log(spacing01);" > src/layout.js

measure() { npx --yes esbuild "$1" --bundle --minify --format=esm \
  --external:react --external:react-dom --external:react-is 2>/dev/null | wc -c; }

echo "== BEFORE (published npm releases) =="
npm init -y >/dev/null
npm i --no-audit --no-fund @carbon/elements @carbon/type @carbon/layout >/dev/null 2>&1
for e in elements type layout; do echo "  @carbon/$e: $(measure src/$e.js) bytes (minified)"; done

echo "== AFTER (this branch's build) =="
# Point bare specifiers at the freshly built workspace packages.
rm -rf node_modules/@carbon/{elements,type,layout}
mkdir -p node_modules/@carbon
for p in elements type layout colors; do
  ln -s "$REPO/packages/$p" "node_modules/@carbon/$p" 2>/dev/null || true
done
for e in elements type layout; do echo "  @carbon/$e: $(measure src/$e.js) bytes (minified)"; done
```

Output on this branch:

```
== BEFORE (published npm releases) ==
  @carbon/elements: 6140 bytes (minified)
  @carbon/type: 6131 bytes (minified)
  @carbon/layout: 518 bytes (minified)
== AFTER (this branch's build) ==
  @carbon/elements: 32 bytes (minified)
  @carbon/type: 142 bytes (minified)
  @carbon/layout: 63 bytes (minified)
```

The full four-bundler matrix in the PR description was produced the same way, swapping webpack / rollup / vite (rolldown) in for esbuild in the `measure` step.

---


## PR Checklist

- [x] Reviewed every line of the diff
- [ ] Updated documentation and storybook examples
- [x] Wrote passing tests that cover this change
- [x] Addressed any impact on accessibility (a11y)
- [x] Tested for cross-browser consistency
- [x] Validated that this code is ready for review and status checks should pass

## Files Changed
- packages/elements/package.json (+3/-0)
- packages/grid/package.json (+5/-0)
- packages/icons/package.json (+1/-0)
- packages/layout/package.json (+4/-0)
- packages/layout/src/index.ts (+40/-40)
- packages/motion/package.json (+4/-0)
- packages/pictograms/package.json (+1/-0)
- packages/type/package.json (+4/-0)
- packages/type/src/fluid.ts (+3/-2)
- packages/type/src/fontFamily.ts (+19/-7)
- packages/type/src/fontWeight.ts (+11/-3)
- packages/type/src/reset.ts (+7/-7)
- packages/type/src/scale.ts (+55/-2)
- packages/type/src/styles.ts (+170/-143)

## Testing Instructions
1. Review the changes in this PR
2. Run the review agent: `npm start`
3. Check the comments and review summary
4. All reviews will be posted to this repository

---
*This is a test PR created from Carbon Design System PR 22418 for local review testing.*
