# Test PR from Carbon PR 22566

## Original PR Info
- **Title**: fix(overflow-menu): improve color contrast for danger button option
- **PR Number**: 22566
- **Status**: open

## Changes
- **Files**: 3
- **Additions**: +13
- **Deletions**: -0

## Description
Closes #21327

In the overflow menu, the danger option fails the WCAG 2.2 contrast requirement of 3:1 against the adjacent background. 

Same change has been made for the Menu Button and Combo Button as well.

<img  height="300" alt="Screenshot 2026-06-30 at 4 17 11 PM" src="https://github.com/user-attachments/assets/250fb98a-410e-424f-b01e-5bdd313d25f6" />

The solution is to add an inset box shadow to separate the red background from the focus outline, just as is done with our button component - danger variant.

<img  height="300" alt="Screenshot 2026-06-30 at 4 09 41 PM" src="https://github.com/user-attachments/assets/6e397089-ff4a-4764-a2f1-1b358bf37eca" />
<img height="300" alt="Screenshot 2026-07-01 at 10 05 17 AM" src="https://github.com/user-attachments/assets/a9f98209-a358-4b00-a1fe-ed975aec3499" />

<img height="300" alt="Screenshot 2026-07-01 at 10 09 39 AM" src="https://github.com/user-attachments/assets/68d1f7e6-28ed-4c32-acd5-231f1abba373" />


### Changelog

**Changed**

- add inset box-shadow styles for the danger option in the overflow menu, menu button when focused

#### Testing / Reviewing

Check the React and WC deploy previews - the overflow menu default story - use arrow keys to focus on the danger "Delete" option.

## PR Checklist

<!-- 
  Do not remove checklist items.
  If some are incomplete, create a draft pull request using the create button dropdown.
  If some do not apply, ~strike through the item text with tildes~.
-->

As the author of this PR, before marking ready for review, confirm you:

- [x] Reviewed every line of the diff
~- [ ] Updated documentation and storybook examples~
~- [ ] Wrote passing tests that cover this change~
~- [ ] Addressed any impact on accessibility (a11y)~
- [x] Tested for cross-browser consistency
- [x] Validated that this code is ready for review and status checks should pass

More details can be found in the [pull request guide](https://github.com/carbon-design-system/carbon/blob/main/docs/guides/reviewing-pull-requests.md)


## Files Changed
- packages/styles/scss/components/menu/_menu.scss (+4/-0)
- packages/styles/scss/components/overflow-menu/_overflow-menu.scss (+5/-0)
- packages/web-components/src/components/menu/menu-item.scss (+4/-0)

## Testing Instructions
1. Review the changes in this PR
2. Run the review agent: `npm start`
3. Check the comments and review summary
4. All reviews will be posted to this repository

---
*This is a test PR created from Carbon Design System PR 22566 for local review testing.*
