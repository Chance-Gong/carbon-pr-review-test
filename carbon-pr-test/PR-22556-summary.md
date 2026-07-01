# Test PR from Carbon PR 22556

## Original PR Info
- **Title**: fix(textArea): prevent invalid/warn states when disabled/readonly
- **PR Number**: 22556
- **Status**: open

## Changes
- **Files**: 5
- **Additions**: +631
- **Deletions**: -59

## Description
Closes #20726

Fixed TextArea components in both React and Web Components to not show invalid/warn states when in disabled or readonly state, as users cannot interact with these components in those states.


### Changelog

**Changed**

- Modified TextArea component to disallow invalid & warn states when readonly or disabled.
- Added tests to verify the behavior


#### Testing / Reviewing

-Verify that ComboBox does not display invalid or warning states when readonly or disabled
- Run tests for the web component version to ensure all tests pass

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
- packages/react/src/components/TextArea/TextArea-test.js (+294/-0)
- packages/react/src/components/TextArea/TextArea.tsx (+37/-28)
- packages/web-components/src/components/fluid-textarea/__tests__/fluid-textarea-test.js (+22/-2)
- packages/web-components/src/components/textarea/__tests__/textarea-test.js (+236/-2)
- packages/web-components/src/components/textarea/textarea.ts (+42/-27)

## Testing Instructions
1. Review the changes in this PR
2. Run the review agent: `npm start`
3. Check the comments and review summary
4. All reviews will be posted to this repository

---
*This is a test PR created from Carbon Design System PR 22556 for local review testing.*
