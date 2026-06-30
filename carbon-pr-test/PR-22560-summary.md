# Test PR from Carbon PR 22560

## Original PR Info
- **Title**: fix(progress-indicator): apply hover styles only on supported devices
- **PR Number**: 22560
- **Status**: open

## Changes
- **Files**: 1
- **Additions**: +28
- **Deletions**: -17

## Description
Closes #22017

Apply Progress Indicator hover styles only on devices that support hover to avoid sticky hover behavior on touch and hybrid devices.

### Changelog

**New**

- None

**Changed**

- Updated Progress Indicator label hover styles to use `@media (any-hover: hover)`

**Removed**

- None


## PR Checklist

<!-- 
  Do not remove checklist items.
  If some are incomplete, create a draft pull request using the create button dropdown.
  If some do not apply, ~strike through the item text with tildes~.
-->

As the author of this PR, before marking ready for review, confirm you:

- [x] Reviewed every line of the diff
- <del>[ ] Updated documentation and storybook examples</del>
- <del>[ ] Wrote passing tests that cover this change</del>
- [x] Addressed any impact on accessibility (a11y)
- <del>[ ] Tested for cross-browser consistency</del>
- [x] Validated that this code is ready for review and status checks should pass

More details can be found in the [pull request guide](https://github.com/carbon-design-system/carbon/blob/main/docs/guides/reviewing-pull-requests.md)


## Files Changed
- packages/styles/scss/components/progress-indicator/_progress-indicator.scss (+28/-17)

## Testing Instructions
1. Review the changes in this PR
2. Run the review agent: `npm start`
3. Check the comments and review summary
4. All reviews will be posted to this repository

---
*This is a test PR created from Carbon Design System PR 22560 for local review testing.*
