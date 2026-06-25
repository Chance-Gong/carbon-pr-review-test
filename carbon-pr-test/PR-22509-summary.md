# Test PR from Carbon PR 22509

## Original PR Info
- **Title**: feat(overflow-menu): contextual layout tokens coverage
- **PR Number**: 22509
- **Status**: open

## Changes
- **Files**: 15
- **Additions**: +206
- **Deletions**: -145

## Description
Closes #22269

Adds contextual layout token coverage to OverflowMenu in React and Web Components.
This PR brings no visual changes.

### Changelog

**New**

- Added contextual layout token coverage to OverflowMenu

**Removed**
- Removed `size` based style selectors in favour of using contextual layout tokens

#### Testing / Reviewing

- This PR should not introduce any visual changes.
- View the "Size Test" temporary test stories to view the OverflowMenu using a size prop/attribute vs using layout tokens
    - There should be no visual difference
- This change should not bring any regressions to OverflowMenu, Button, Breadcrumb, etc.
 
## PR Checklist

As the author of this PR, before marking ready for review, confirm you:

- [X] Reviewed every line of the diff
- ~~[ ] Updated documentation and storybook examples~~
- [X] Wrote passing tests that cover this change
- ~~[ ] Addressed any impact on accessibility (a11y)~~
- [X] Tested for cross-browser consistency
- [X] Validated that this code is ready for review and status checks should pass

> [!NOTE]
> The test stories "Size Test" in React and WC should be removed before merging

## Files Changed
- packages/react/src/components/DataTable/__tests__/__snapshots__/DataTable-test.js.snap (+2/-2)
- packages/react/src/components/DataTable/__tests__/__snapshots__/TableToolbarMenu-test.js.snap (+1/-1)
- packages/react/src/components/OverflowMenu/OverflowMenu-test.js (+3/-2)
- packages/react/src/components/OverflowMenu/OverflowMenu.stories.js (+50/-1)
- packages/react/src/components/OverflowMenu/OverflowMenu.tsx (+46/-5)
- packages/react/src/components/OverflowMenu/next/index.tsx (+3/-2)
- packages/styles/scss/components/overflow-menu/_overflow-menu.scss (+12/-77)
- packages/web-components/src/components/button/button.ts (+3/-3)
- packages/web-components/src/components/floating-menu/floating-menu.ts (+1/-1)
- packages/web-components/src/components/icon-button/icon-button.ts (+1/-1)
- packages/web-components/src/components/overflow-menu/__tests__/overflow-menu-test.js (+2/-1)
- packages/web-components/src/components/overflow-menu/overflow-menu-body.ts (+2/-2)
- packages/web-components/src/components/overflow-menu/overflow-menu.scss (+6/-39)
- packages/web-components/src/components/overflow-menu/overflow-menu.stories.ts (+56/-3)
- packages/web-components/src/components/overflow-menu/overflow-menu.ts (+18/-5)

## Testing Instructions
1. Review the changes in this PR
2. Run the review agent: `npm start`
3. Check the comments and review summary
4. All reviews will be posted to this repository

---
*This is a test PR created from Carbon Design System PR 22509 for local review testing.*
