# Test PR from Carbon #22405

## Original PR
- **Title**: fix: add MenuContext action types
- **Author**: @adamalston
- **URL**: https://github.com/carbon-design-system/carbon/pull/22405
- **Status**: open

## Changes
- **Files**: 3
- **Additions**: +49
- **Deletions**: -18

## Description
Partially addresses https://github.com/carbon-design-system/carbon/issues/20452

Added `MenuContext` action types.

### Changelog

**New**

- Added `MenuContext` action types.

#### Testing / Reviewing

```sh
yarn test packages/react/src/components/Menu/Menu-test.js
```

## PR Checklist

<!-- 
  Do not remove checklist items.
  If some are incomplete, create a draft pull request using the create button dropdown.
  If some do not apply, ~strike through the item text with tildes~.
-->

As the author of this PR, before marking ready for review, confirm you:

- [x] Reviewed every line of the diff
- [ ] ~Updated documentation and storybook examples~
- [x] Wrote passing tests that cover this change
- [ ] ~Addressed any impact on accessibility (a11y)~
- [ ] ~Tested for cross-browser consistency~
- [x] Validated that this code is ready for review and status checks should pass

More details can be found in the [pull request guide](https://github.com/carbon-design-system/carbon/blob/main/docs/guides/reviewing-pull-requests.md)


## Files Changed
- packages/react/src/components/Menu/Menu-test.js (+35/-0)
- packages/react/src/components/Menu/MenuContext.ts (+14/-15)
- packages/react/src/components/Menu/MenuItem.tsx (+0/-3)

## Testing Instructions
1. Review the changes in this PR
2. Run the review agent: `npm start`
3. Check the comments and review summary
4. All reviews will be posted to this repository

---
*This is a test PR created from Carbon Design System for local review testing.*
