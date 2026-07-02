# Test PR from Carbon PR 22611

## Original PR Info
- **Title**: fix(Tabs):allow hovered states only on supported input device
- **PR Number**: 22611
- **Status**: open

## Changes
- **Files**: 1
- **Additions**: +116
- **Deletions**: -68

## Description
Closes #22600
Updated tabs hover selectors in packages/styles/scss/components/tabs/_tabs.scss to use `@media (hover: hover)`

### Changelog

**New**

- None
 
**Changed**

- Updated tabs hover selectors in packages/styles/scss/components/tabs/_tabs.scss to use `@media (hover: hover)`.

**Removed**

- Node

#### Testing / Reviewing

{{ Add steps or a checklist for how reviewers can verify this PR works or not }}

## PR Checklist

<!-- 
  Do not remove checklist items.
  If some are incomplete, create a draft pull request using the create button dropdown.
  If some do not apply, ~strike through the item text with tildes~.
-->

As the author of this PR, before marking ready for review, confirm you:

- [x] Reviewed every line of the diff
- ~[ ] Updated documentation and storybook examples~
- ~[ ] Wrote passing tests that cover this change~
- ~[ ] Addressed any impact on accessibility (a11y)~
- [x] Tested for cross-browser consistency
- [x] Validated that this code is ready for review and status checks should pass

More details can be found in the [pull request guide](https://github.com/carbon-design-system/carbon/blob/main/docs/guides/reviewing-pull-requests.md)


## Files Changed
- packages/styles/scss/components/tabs/_tabs.scss (+116/-68)

## Testing Instructions
1. Review the changes in this PR
2. Run the review agent: `npm start`
3. Check the comments and review summary
4. All reviews will be posted to this repository

---
*This is a test PR created from Carbon Design System PR 22611 for local review testing.*
