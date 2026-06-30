# Test PR from Carbon PR 22385

## Original PR Info
- **Title**: fix: button text overflow issue fix
- **PR Number**: 22385
- **Status**: closed

## Changes
- **Files**: 2
- **Additions**: +28
- **Deletions**: -1

## Description
Closes #22314 

This fixes the text overflow issue for the ButtonBase component highlighted in the issue #22314 

### Changelog

**New**

- N/A

**Changed**

- Button with longer text should display ellipsis if it overflows the button container.

**Removed**

- N/A

#### Testing / Reviewing

- Navigate to Button component in storybook
- Add longer text content within button and see the ellipsis if the content exceeds the button container.

## PR Checklist

<!-- 
  Do not remove checklist items.
  If some are incomplete, create a draft pull request using the create button dropdown.
  If some do not apply, ~strike through the item text with tildes~.
-->

As the author of this PR, before marking ready for review, confirm you:

- [ ] Reviewed every line of the diff
- [ ] Updated documentation and storybook examples
- [ ] Wrote passing tests that cover this change
- [ ] Addressed any impact on accessibility (a11y)
- [ ] Tested for cross-browser consistency
- [ ] Validated that this code is ready for review and status checks should pass

More details can be found in the [pull request guide](https://github.com/carbon-design-system/carbon/blob/main/docs/guides/reviewing-pull-requests.md)


## Files Changed
- packages/react/src/components/MenuButton/index.tsx (+2/-1)
- packages/styles/scss/components/button/_button.scss (+26/-0)

## Testing Instructions
1. Review the changes in this PR
2. Run the review agent: `npm start`
3. Check the comments and review summary
4. All reviews will be posted to this repository

---
*This is a test PR created from Carbon Design System PR 22385 for local review testing.*
