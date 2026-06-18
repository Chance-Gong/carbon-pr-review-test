# Test PR from Carbon PR 22204

## Original PR Info
- **Title**: refactor: unify disabled item checks in dropdowns
- **PR Number**: 22204
- **Status**: open

## Changes
- **Files**: 6
- **Additions**: +49
- **Deletions**: -39

## Description
Partially addresses https://github.com/carbon-design-system/carbon/issues/20452

Unified `disabled` item checks in dropdowns.

### Changelog

**Changed**

- Unified `disabled` item checks in dropdowns.

#### Testing / Reviewing

Existing tests should cover these changes.

```sh
yarn test packages/react
```

## PR Checklist

<!-- 
  Do not remove checklist items.
  If some are incomplete, create a draft pull request using the create button dropdown.
  If some do not apply, ~strike through the item text with tildes~.
-->

As the author of this PR, before marking ready for review, confirm you:

- [x] Reviewed every line of the diff
- [ ] ~Updated documentation and storybook examples~
- [ ] ~Wrote passing tests that cover this change~
- [ ] ~Addressed any impact on accessibility (a11y)~
- [ ] ~Tested for cross-browser consistency~
- [x] Validated that this code is ready for review and status checks should pass

More details can be found in the [pull request guide](https://github.com/carbon-design-system/carbon/blob/main/docs/guides/reviewing-pull-requests.md)


## Files Changed
- packages/react/src/components/ComboBox/ComboBox.tsx (+11/-13)
- packages/react/src/components/Dropdown/Dropdown.tsx (+5/-7)
- packages/react/src/components/MultiSelect/FilterableMultiSelect.tsx (+12/-12)
- packages/react/src/components/MultiSelect/MultiSelect.tsx (+7/-6)
- packages/react/src/internal/index.ts (+2/-1)
- packages/react/src/internal/isItemDisabled.ts (+12/-0)

## Testing Instructions
1. Review the changes in this PR
2. Run the review agent: `npm start`
3. Check the comments and review summary
4. All reviews will be posted to this repository

---
*This is a test PR created from Carbon Design System PR 22204 for local review testing.*
