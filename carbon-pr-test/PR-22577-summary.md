# Test PR from Carbon PR 22577

## Original PR Info
- **Title**: fix(utilities): remove redundant type-only number re-export
- **PR Number**: 22577
- **Status**: open

## Changes
- **Files**: 1
- **Additions**: +0
- **Deletions**: -1

## Description
Closes N/A

I noticed this warning while building the monorepo. Based on the code history, it looks like an older and intentional code path, but it is probably not needed anymore. It only started appearing after a recent dependency update. The fix seems straightforward. 

<img width="1508" height="516" alt="image" src="https://github.com/user-attachments/assets/c1758a0f-0136-410a-be04-7d29f15fdf1d" />

If anyone has more context on why this was added and believes this change is unnecessary, I’m happy to close the PR.

### Changelog

**New**

- ~None~

**Changed**

- Removed a redundant type-only re-export from `@carbon/utilities` to preserve `NumberFormatter` and `NumberParser` as runtime exports in generated declarations.

**Removed**

- Removed `export type * from '@internationalized/number';` from the `@carbon/utilities`.

#### Testing / Reviewing

Run `yarn install`, then `yarn build`.

Verify that the build completes without the `NumberParser` / `NumberFormatter` type-only export errors.

Optional targeted checks:
- Run the relevant React checks
<img width="337" height="95" alt="image" src="https://github.com/user-attachments/assets/5ae3c071-4de5-4b15-8fae-cdbb9a9f7e86" />

- Run the relevant Web Components checks
<img width="785" height="162" alt="image" src="https://github.com/user-attachments/assets/29fd41eb-e663-40fb-aaa2-2a3251a7e844" />

## PR Checklist

<!-- 
  Do not remove checklist items.
  If some are incomplete, create a draft pull request using the create button dropdown.
  If some do not apply, ~strike through the item text with tildes~.
-->

As the author of this PR, before marking ready for review, confirm you:

- [X] Reviewed every line of the diff
- ~[ ] Updated documentation and storybook examples~
- ~[ ] Wrote passing tests that cover this change~
- ~[ ] Addressed any impact on accessibility (a11y)~
- ~[ ] Tested for cross-browser consistency~
- [X] Validated that this code is ready for review and status checks should pass

More details can be found in the [pull request guide](https://github.com/carbon-design-system/carbon/blob/main/docs/guides/reviewing-pull-requests.md)

## Files Changed
- packages/utilities/src/index.ts (+0/-1)

## Testing Instructions
1. Review the changes in this PR
2. Run the review agent: `npm start`
3. Check the comments and review summary
4. All reviews will be posted to this repository

---
*This is a test PR created from Carbon Design System PR 22577 for local review testing.*
