# Test PR from Carbon PR 22401

## Original PR Info
- **Title**: fix: stabilize FloatingMenu placement updates
- **PR Number**: 22401
- **Status**: open

## Changes
- **Files**: 2
- **Additions**: +46
- **Deletions**: -22

## Description
No issue. Follow-up to https://github.com/carbon-design-system/carbon/pull/22284 to fully address https://github.com/carbon-design-system/carbon/issues/22276.

Stabilized `FloatingMenu` placement updates to avoid `OverflowMenu` ref churn.

### Changelog

**Changed**

- Memoized the internal menu ref callback.
- Hoisted the default `target` callback so it stays stable across renders.
- Avoided scheduling no-op position state updates when the computed position has not changed.

#### Testing / Reviewing

```sh
yarn test packages/react/src/internal/__tests__/FloatingMenu-test.js
```

## PR Checklist

<!--
  Do not remove checklist items.
  If some are incomplete, create a draft pull request using the create button dropdown.
  If some do not apply, ~strike through the item text with tildes~.
-->

As the author of this PR, before marking ready for review, confirm you:

- [x] Reviewed every line of the diff
- [ ] Updated documentation and storybook examples
- [x] Wrote passing tests that cover this change
- [x] Addressed any impact on accessibility (a11y)
- [x] Tested for cross-browser consistency
- [x] Validated that this code is ready for review and status checks should pass

More details can be found in the [pull request guide](https://github.com/carbon-design-system/carbon/blob/main/docs/guides/reviewing-pull-requests.md)


## Files Changed
- packages/react/src/internal/FloatingMenu.tsx (+27/-22)
- packages/react/src/internal/__tests__/FloatingMenu-test.js (+19/-0)

## Testing Instructions
1. Review the changes in this PR
2. Run the review agent: `npm start`
3. Check the comments and review summary
4. All reviews will be posted to this repository

---
*This is a test PR created from Carbon Design System PR 22401 for local review testing.*
