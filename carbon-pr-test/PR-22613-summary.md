# Test PR from Carbon PR 22613

## Original PR Info
- **Title**: fix(modal): apply hover styles on supported devices
- **PR Number**: 22613
- **Status**: open

## Changes
- **Files**: 2
- **Additions**: +40
- **Deletions**: -3

## Description
Closes #22591

Contributes to #22017

Updates the Modal close-button hover style so it is applied only when the user has an input device capable of hovering. This prevents sticky hover states on touch devices while preserving mouse hover behavior on desktop and hybrid devices.

### Changelog

**New**

- Added regression coverage verifying that the Modal close-button hover selector is emitted only within ```@media (any-hover: hover)```.

**Changed**

- Wrapped the Modal close-button hover style in ```@media (any-hover: hover)```.

**Removed**

- None

#### Testing / Reviewing

1. Run the focused Sass tests:
```
yarn jest packages/styles/scss/components/__tests__/modal-test.js --runInBand
```
2. Open the Modal story and launch a modal.
3. With a mouse, hover over the close button and confirm its background changes.
4. Using touch-only device emulation, tap the close button area and confirm no sticky hover state remains.
5. On a hybrid device, confirm mouse hover continues to work alongside touch input.

Test Screenshot
<img width="628" height="147" alt="modal-test" src="https://github.com/user-attachments/assets/1cd931e2-3df7-4701-89fb-e7877c3c639c" />

## PR Checklist

As the author of this PR, before marking ready for review, confirm you:

- [x] Reviewed every line of the diff
- [x] Updated documentation and storybook examples
- [x] Wrote passing tests that cover this change
- [x] Addressed any impact on accessibility (a11y)
- [x] Tested for cross-browser consistency
- [x] Validated that this code is ready for review and status checks should pass

More details can be found in the [pull request guide](https://github.com/carbon-design-system/carbon/blob/main/docs/guides/reviewing-pull-requests.md)


## Files Changed
- packages/styles/scss/components/__tests__/modal-test.js (+36/-1)
- packages/styles/scss/components/modal/_modal.scss (+4/-2)

## Testing Instructions
1. Review the changes in this PR
2. Run the review agent: `npm start`
3. Check the comments and review summary
4. All reviews will be posted to this repository

---
*This is a test PR created from Carbon Design System PR 22613 for local review testing.*
