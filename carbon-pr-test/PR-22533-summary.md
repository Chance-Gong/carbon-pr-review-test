# Test PR from Carbon PR 22533

## Original PR Info
- **Title**: fix(web-components): replace querySelector with @query in search
- **PR Number**: 22533
- **Status**: open

## Changes
- **Files**: 2
- **Additions**: +193
- **Deletions**: -11

## Description
Closes #22499


Replace querySelector usage with the @query decorator in search component to improve code quality and performance.

### Changelog

**New**

- {{new thing}}

**Changed**
- Replaced `querySelector` calls with `@query` decorators in `search.ts` for input and magnifier elements
- Removed non-null assertion operator (`!`) for better code safety
- Simplified `_handleClearInputButtonClick()` and `_focusMagnifier()` methods by using cached properties
- Improved performance through Lit's automatic query caching and lifecycle integration

**Removed**

- ~Nothing removed~

#### Testing / Reviewing

{{ Add steps or a checklist for how reviewers can verify this PR works or not }}

## PR Checklist

<!-- 
  Do not remove checklist items.
  If some are incomplete, create a draft pull request using the create button dropdown.
  If some do not apply, ~strike through the item text with tildes~.
-->

As the author of this PR, before marking ready for review, confirm you:

- [✓] Reviewed every line of the diff
- <del>[ ] Updated documentation and storybook examples</del>
- [✓] Wrote passing tests that cover this change
- <del>[ ] Addressed any impact on accessibility (a11y)</del>
- [✓] Tested for cross-browser consistency
- [✓] Validated that this code is ready for review and status checks should pass

More details can be found in the [pull request guide](https://github.com/carbon-design-system/carbon/blob/main/docs/guides/reviewing-pull-requests.md)


## Files Changed
- packages/web-components/src/components/search/__tests__/search-test.js (+175/-0)
- packages/web-components/src/components/search/search.ts (+18/-11)

## Testing Instructions
1. Review the changes in this PR
2. Run the review agent: `npm start`
3. Check the comments and review summary
4. All reviews will be posted to this repository

---
*This is a test PR created from Carbon Design System PR 22533 for local review testing.*
