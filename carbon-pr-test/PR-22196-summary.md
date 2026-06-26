# Test PR from Carbon PR 22196

## Original PR Info
- **Title**: fix(loading): able to navigate when loading with overlay is active
- **PR Number**: 22196
- **Status**: open

## Changes
- **Files**: 5
- **Additions**: +185
- **Deletions**: -20

## Description
Closes #19341 

Fix Loading component to trap focus and prevent navigation when overlay is active

### Changelog

**New**

- `Loading` with `withOverlay` now renders a `role="presentation"` wrapper containing a `role="dialog"` with `aria-modal="true"` and `aria-label` from `description` prop
- `Focus trap`, Tab key cycles within the overlay dialog when active, focus restores to previously focused element on deactivate
- New UX Example story


**Changed**

- Overlay element now uses `user-select: none` to prevent text selection


#### Testing / Reviewing

- Go to the `React Preview` > Loading > UX example
- Click start button
- When the loading appears, click several times in the overlay or press `Tab`
- Validate the focus trap

## PR Checklist

<!-- 
  Do not remove checklist items.
  If some are incomplete, create a draft pull request using the create button dropdown.
  If some do not apply, ~strike through the item text with tildes~.
-->

As the author of this PR, before marking ready for review, confirm you:

- [x] Reviewed every line of the diff
- [x] Updated documentation and storybook examples
- [x] Wrote passing tests that cover this change
- [x] Addressed any impact on accessibility (a11y)
- [x] Tested for cross-browser consistency
- [x] Validated that this code is ready for review and status checks should pass


https://github.com/user-attachments/assets/42be6102-78d1-41f5-8818-8e01d518067a



https://github.com/user-attachments/assets/b9dd9cd0-cdbb-442f-ac8b-f04c1ac8ea66



More details can be found in the [pull request guide](https://github.com/carbon-design-system/carbon/blob/main/docs/guides/reviewing-pull-requests.md)


## Files Changed
- packages/react/src/components/Loading/Loading-test.js (+101/-15)
- packages/react/src/components/Loading/Loading.mdx (+10/-0)
- packages/react/src/components/Loading/Loading.stories.js (+25/-3)
- packages/react/src/components/Loading/Loading.tsx (+48/-2)
- packages/styles/scss/components/loading/_loading.scss (+1/-0)

## Testing Instructions
1. Review the changes in this PR
2. Run the review agent: `npm start`
3. Check the comments and review summary
4. All reviews will be posted to this repository

---
*This is a test PR created from Carbon Design System PR 22196 for local review testing.*
