# Test PR from Carbon PR 22527

## Original PR Info
- **Title**: fix(composed-modal): add story controls
- **PR Number**: 22527
- **Status**: open

## Changes
- **Files**: 3
- **Additions**: +220
- **Deletions**: -65

## Description
 Closes #20902

  - add control args to ComposedModal stories

  ### Changelog

  **Changed**

  - updates docs and missing information

  #### Testing / Reviewing

  - Go to ComposedModal in Storybook
  - Verify that all controls work
  - Checked Web Components modal stories; controls were already present

  ## PR Checklist

  As the author of this PR, before marking ready for review, confirm you:

  - [x] Reviewed every line of the diff
  - [x] Updated documentation and storybook examples
  - [ ] Wrote passing tests that cover this change
  - [x] Addressed any impact on accessibility (a11y)
  - [ ] Tested for cross-browser consistency
  - [x] Validated that this code is ready for review and status checks should pass

  More details can be found in the [pull request guide](https://github.com/carbon-design-system/carbon/blob/main/docs/guides/reviewing-pull-requests.md)


## Files Changed
- packages/react/src/components/ComposedModal/ComposedModal.featureflag.stories.js (+23/-10)
- packages/react/src/components/ComposedModal/ComposedModal.stories.js (+163/-37)
- packages/react/src/components/ComposedModal/ComposedModalPresence.featureflag.stories.js (+34/-18)

## Testing Instructions
1. Review the changes in this PR
2. Run the review agent: `npm start`
3. Check the comments and review summary
4. All reviews will be posted to this repository

---
*This is a test PR created from Carbon Design System PR 22527 for local review testing.*
