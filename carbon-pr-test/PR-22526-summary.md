# Test PR from Carbon PR 22526

## Original PR Info
- **Title**: fix(web-components): replace querySelector with @query in overflow-menu
- **PR Number**: 22526
- **Status**: closed

## Changes
- **Files**: 1
- **Additions**: +21
- **Deletions**: -20

## Description
Closes #22506


Replace querySelector usage with the @query decorator in overflow-menu component to improve code quality and performance.

### Changelog

**New**

- {{new thing}}

**Changed**

- Replaced 7 repeated `querySelector` calls with `@query` decorator in `overflow-menu.ts`
- Added `@query` decorator for `cds-tooltip` and `cds-tooltip-content` elements
- Improved performance through Lit's automatic query caching and lifecycle integration

**Removed**

- {{removed thing}}

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
- [ ]<del> Updated documentation and storybook examples</del>
- [ ]<del> Wrote passing tests that cover this change</del>
- [ ]<del> Addressed any impact on accessibility (a11y)</del>
- [ ]<del> Tested for cross-browser consistency</del>
- [✓] Validated that this code is ready for review and status checks should pass

More details can be found in the [pull request guide](https://github.com/carbon-design-system/carbon/blob/main/docs/guides/reviewing-pull-requests.md)


## Files Changed
- packages/web-components/src/components/overflow-menu/overflow-menu.ts (+21/-20)

## Testing Instructions
1. Review the changes in this PR
2. Run the review agent: `npm start`
3. Check the comments and review summary
4. All reviews will be posted to this repository

---
*This is a test PR created from Carbon Design System PR 22526 for local review testing.*
