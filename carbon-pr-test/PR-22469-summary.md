# Test PR from Carbon PR 22469

## Original PR Info
- **Title**: fix(web-components): allow textarea to fill flex height
- **PR Number**: 22469
- **Status**: open

## Changes
- **Files**: 2
- **Additions**: +23
- **Deletions**: -0

## Description
Closes #22446

Updates `cds-textarea` so the shadow DOM layout can consume the height assigned to the host when it is used as a growing flex item. The host now lays out its shadow contents as a column and lets the textarea wrapper flex, allowing the native `<textarea>` to fill the available vertical space.

### Changelog

**Changed**

- Allow the inner native textarea in `cds-textarea` to stretch when the custom element grows in a flex column layout.

#### Testing / Reviewing

- `yarn workspace @carbon/web-components build`
- `CI=1 yarn web-test-runner "src/components/textarea/__tests__/textarea-test.js" --node-resolve --concurrency=1 --coverage=false` (22 passed, 0 failed)
- `yarn prettier --check packages/web-components/src/components/textarea/textarea.scss packages/web-components/src/components/textarea/__tests__/textarea-test.js`
- `yarn stylelint packages/web-components/src/components/textarea/textarea.scss --allow-empty-input`
- `yarn eslint packages/web-components/src/components/textarea/__tests__/textarea-test.js --no-warn-ignored`
- `git diff --check`

Note: `yarn workspace @carbon/web-components typecheck` was attempted and currently fails on existing `tests/spec/*.ts` files that are outside this change, with missing Jasmine globals/story exports such as `describe`, `it`, `expect`, and `Playground`.

## PR Checklist

<!-- 
  Do not remove checklist items.
  If some are incomplete, create a draft pull request using the create button dropdown.
  If some do not apply, ~strike through the item text with tildes~.
-->

As the author of this PR, before marking ready for review, confirm you:

- [x] Reviewed every line of the diff
- [x] ~Updated documentation and storybook examples~
- [x] Wrote passing tests that cover this change
- [x] Addressed any impact on accessibility (a11y)
- [x] Tested for cross-browser consistency
- [x] Validated that this code is ready for review and status checks should pass

More details can be found in the [pull request guide](https://github.com/carbon-design-system/carbon/blob/main/docs/guides/reviewing-pull-requests.md)


## Files Changed
- packages/web-components/src/components/textarea/__tests__/textarea-test.js (+17/-0)
- packages/web-components/src/components/textarea/textarea.scss (+6/-0)

## Testing Instructions
1. Review the changes in this PR
2. Run the review agent: `npm start`
3. Check the comments and review summary
4. All reviews will be posted to this repository

---
*This is a test PR created from Carbon Design System PR 22469 for local review testing.*
