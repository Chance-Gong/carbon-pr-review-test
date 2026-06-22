# Test PR from Carbon PR 22481

## Original PR Info
- **Title**: fix: filterableMultiSelect clear icon does not fire input change call…
- **PR Number**: 22481
- **Status**: open

## Changes
- **Files**: 2
- **Additions**: +47
- **Deletions**: -4

## Description
…back

Closes [ISSUE: 22316](https://github.com/carbon-design-system/carbon/issues/22316)

We are seeing an issue with FilterableMultiSelect when using it with server-side search.

When the user types into the filter input, the input callback is triggered correctly. However, when the user clicks the clear icon (X) inside the input, the visible input value is cleared but none of the available callbacks seem to fire.

This leaves the external search state out of sync with the internal input state.

### Changelog

**New**

- {{new thing}}

**Changed**

- Fixed FilterableMultiSelect to properly trigger onInputValueChange callback when the clear button is clicked
- Refactored input blur handling in FilterableMultiSelect to use Downshift's InputBlur state reducer instead of inline onBlur handler
- Updated clear button handler to distinguish between mouse events (clear button clicks) and keyboard events, ensuring callback is only triggered for clear button clicks

**Removed**

- Removed inline onBlur handler from input props in favor of centralized state management through Downshift's state reducer. Also the inline onBlur was calling on click of close icon and which prevents onclick of close button.

#### Testing / Reviewing
- Open the FilterableMultiSelect component in Storybook
- Add an onInputValueChange callback that logs to console
- Type some text in the input field
- Click the clear button (X icon)
- Verify that:
- The input field is cleared
- The onInputValueChange callback is called with inputValue: ''
- The dropdown closes

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
- [ ] Addressed any impact on accessibility (a11y)
- [ ] Tested for cross-browser consistency
- [ ] Validated that this code is ready for review and status checks should pass

More details can be found in the [pull request guide](https://github.com/carbon-design-system/carbon/blob/main/docs/guides/reviewing-pull-requests.md)


## Files Changed
- packages/react/src/components/MultiSelect/FilterableMultiSelect.tsx (+15/-4)
- packages/react/src/components/MultiSelect/__tests__/FilterableMultiSelect-test.js (+32/-0)

## Testing Instructions
1. Review the changes in this PR
2. Run the review agent: `npm start`
3. Check the comments and review summary
4. All reviews will be posted to this repository

---
*This is a test PR created from Carbon Design System PR 22481 for local review testing.*
