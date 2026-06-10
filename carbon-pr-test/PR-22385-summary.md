# Test PR from Carbon #22385

## Original PR
- **Title**: fix: button text overflow issue fix
- **Author**: @Praveen111
- **URL**: https://github.com/carbon-design-system/carbon/pull/22385
- **Status**: open

## Changes
- **Files**: 1
- **Additions**: +26
- **Deletions**: -0

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
- packages/styles/scss/components/button/_button.scss (+26/-0)

## Testing Instructions
1. Review the changes in this PR
2. Run the review agent: `npm start`
3. Check the comments and review summary
4. All reviews will be posted to this repository

---
*This is a test PR created from Carbon Design System for local review testing.*
