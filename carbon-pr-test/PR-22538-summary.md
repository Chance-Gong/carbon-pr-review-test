# Test PR from Carbon PR 22538

## Original PR Info
- **Title**: refactor(fluid-text-input): replace querySelector with query decorator
- **PR Number**: 22538
- **Status**: closed

## Changes
- **Files**: 1
- **Additions**: +6
- **Deletions**: -3

## Description
Closes #22497 

Replaces the static form-item lookup in Fluid Text Input with Lit’s @query decorator. This centralizes access to the rendered wrapper while preserving the existing defensive null handling and fluid styling behavior.

### Changelog

**New**

- Added a typed ```@query``` reference for the form-item wrapper.

**Changed**

- Updated fluid class handling to use the decorated form-item reference.

**Removed**

- Removed direct ```shadowRoot.querySelector()``` usage from Fluid Text Input.

#### Testing / Reviewing
Run both focused test files:
```
PUPPETEER_EXECUTABLE_PATH="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
yarn workspace @carbon/web-components exec web-test-runner \
"src/components/fluid-text-input/__tests__/*.js" \
--node-resolve --concurrency=1
```
Results:

- Chromium: 33 passed, 0 failed
- Code coverage: 89.48%
- ESLint: passed
- Prettier: passed
- git diff --check: passed

Reviewers should verify that the fluid wrapper class is applied and input, validation, warning, slot, form, and skeleton behavior remains unchanged.

Test Screenshots:
<img width="825" height="134" alt="fluid-text-input" src="https://github.com/user-attachments/assets/b3443368-9826-41c3-9ab4-45f7af94f4f3" />

## PR Checklist


As the author of this PR, before marking ready for review, confirm you:

- [x] Reviewed every line of the diff
- [ ] ~Updated documentation and storybook examples~
- [ ] ~Wrote passing tests that cover this change~
- [ ] ~Addressed any impact on accessibility (a11y)~
- [x] Tested for cross-browser consistency
- [x] Validated that this code is ready for review and status checks should pass

More details can be found in the [pull request guide](https://github.com/carbon-design-system/carbon/blob/main/docs/guides/reviewing-pull-requests.md)


## Files Changed
- packages/web-components/src/components/fluid-text-input/fluid-text-input.ts (+6/-3)

## Testing Instructions
1. Review the changes in this PR
2. Run the review agent: `npm start`
3. Check the comments and review summary
4. All reviews will be posted to this repository

---
*This is a test PR created from Carbon Design System PR 22538 for local review testing.*
