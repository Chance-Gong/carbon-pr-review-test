# Test PR from Carbon PR 22492

## Original PR Info
- **Title**: fix(accordion): apply hover styles only with any-hover
- **PR Number**: 22492
- **Status**: open

## Changes
- **Files**: 3
- **Additions**: +198
- **Deletions**: -80

## Description
Contributes to  #22017 [Accordion] 

Updates Accordion hover styling so hover-only visual states are applied only on devices that report hover support through `@media (any-hover: hover)`. This helps avoid sticky hover states on touch devices while preserving the existing desktop hover experience, including hybrid setups where a hover-capable input is available.

### Changelog

**Changed**
- Wrapped Accordion hover styles in `@media (any-hover: hover)` for shared `@carbon/styles` styles.
- Wrapped the Web Components Accordion flush/skeleton hover overrides in `@media (any-hover: hover)`.
- Added a focused Sass test to verify Accordion emits the `any-hover` media query.

#### Testing / Reviewing

Test Screenshot
<img width="713" height="139" alt="cov-rep-23-6" src="https://github.com/user-attachments/assets/f9ba8530-9970-4d16-847d-8d5971445e9b" />



## PR Checklist

As the author of this PR, before marking ready for review, confirm you:

- [ ] ~Reviewed every line of the diff~
- [ ] ~Updated documentation and storybook examples~
- [x] Wrote passing tests that cover this change
- [x] Addressed any impact on accessibility (a11y)
- [ ] ~Tested for cross-browser consistency~
- [ ] ~Validated that this code is ready for review and status checks should pass~

More details can be found in the [pull request guide](https://github.com/carbon-design-system/carbon/blob/main/docs/guides/reviewing-pull-requests.md)


## Files Changed
- packages/styles/scss/components/__tests__/accordion-test.js (+81/-1)
- packages/styles/scss/components/accordion/_accordion.scss (+83/-51)
- packages/web-components/src/components/accordion/accordion.scss (+34/-28)

## Testing Instructions
1. Review the changes in this PR
2. Run the review agent: `npm start`
3. Check the comments and review summary
4. All reviews will be posted to this repository

---
*This is a test PR created from Carbon Design System PR 22492 for local review testing.*
