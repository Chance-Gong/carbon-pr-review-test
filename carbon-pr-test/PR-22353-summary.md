# Test PR from Carbon #22353

## Original PR
- **Title**: fix(ComposedModal-a11y): label body when scrollable
- **Author**: @maradwan26
- **URL**: https://github.com/carbon-design-system/carbon/pull/22353
- **Status**: closed

## Changes
- **Files**: 5
- **Additions**: +186
- **Deletions**: -26

## Description
Closes #19512

Fixes an accessibility issue with ModalBody in ComposedModal where when scrollable, the body gets a `role` of `region`, but does not get accessible labelling.

### Changelog

**New**

- `aria-label` and `aria-labelledby` props in ModalBody can be used to manually set the accessible label on the ModalBody
    - Manually setting labels is not necessary to pass accessibility, though, this is just for added customizability if an adopter needs it
- When scrollable, ModalHeader passes labelId and titleId down, which then reaches the ModalBody which uses it to set the accessible label
    - This is a very similar approach to the one for Dialog in https://github.com/carbon-design-system/carbon/pull/21853 
- Added tests to cover this change

#### Testing / Reviewing

- Go to any of the ComposedModal stories
- Shrink the viewport height/zoom in/etc. to make the ModalBody scrollable, or just use the "With Scrolling Content" story
- Run the Accessibility checker
- `'Element with "region" role does not have a label'` violation should not be present



<img width="1521" height="625" alt="Screenshot 2026-06-01 at 11 01 03 AM" src="https://github.com/user-attachments/assets/92621f66-8940-4892-837d-6f2edb4e25ad" />

<img width="732" height="412" alt="Screenshot 2026-06-01 at 11 01 25 AM" src="https://github.com/user-attachments/assets/a508711a-5d49-436c-b319-6b868bb22aae" />

## PR Checklist

As the author of this PR, before marking ready for review, confirm you:

- [X] Reviewed every line of the diff
- ~~[ ] Updated documentation and storybook examples~~
- [X] Wrote passing tests that cover this change
- [X] Addressed any impact on accessibility (a11y)
- [X] Tested for cross-browser consistency
- [X] Validated that this code is ready for review and status checks should pass

## Files Changed
- packages/react/__tests__/__snapshots__/PublicAPI-test.js.snap (+6/-1)
- packages/react/src/components/ComposedModal/ComposedModal-test.js (+72/-1)
- packages/react/src/components/ComposedModal/ComposedModal.tsx (+59/-21)
- packages/react/src/components/ComposedModal/ComposedModalContext.ts (+15/-0)
- packages/react/src/components/ComposedModal/ModalHeader.tsx (+34/-3)

## Testing Instructions
1. Review the changes in this PR
2. Run the review agent: `npm start`
3. Check the comments and review summary
4. All reviews will be posted to this repository

---
*This is a test PR created from Carbon Design System for local review testing.*
