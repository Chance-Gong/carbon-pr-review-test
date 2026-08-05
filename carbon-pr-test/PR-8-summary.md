# Test PR from Carbon PR #8

## Original PR Info
- **Title**: [Test] fix(ComposedModal-a11y): label body when scrollable
- **PR Number**: #8
- **Status**: open

## Changes
- **Files**: 5
- **Additions**: +673
- **Deletions**: -0

## Description
# Test PR from Carbon Design System

This is a test PR created from Carbon PR #22353 for local review testing.

**Original Carbon PR**: https://github.com/carbon-design-system/carbon/pull/22353

## Purpose
This PR allows you to run the review agent locally and see comments/reviews in this test repository without affecting the Carbon repository.

## Original PR Details
- **Title**: fix(ComposedModal-a11y): label body when scrollable
- **Author**: @maradwan26
- **Files Changed**: 5
- **Changes**: +186/-26

## How to Review
1. Update your `.env` file:
   ```
   GITHUB_AI_AGENT_OWNER=Chance-Gong
   GITHUB_AI_AGENT_REPO=carbon-pr-review-test
   ```

2. Run the review agent:
   ```bash
   npm start
   ```

3. The agent will post comments and reviews to THIS PR

## Files in This PR
- `packages/react/__tests__/__snapshots__/PublicAPI-test.js.snap` (+6/-1)
- `packages/react/src/components/ComposedModal/ComposedModal-test.js` (+72/-1)
- `packages/react/src/components/ComposedModal/ComposedModal.tsx` (+59/-21)
- `packages/react/src/components/ComposedModal/ComposedModalContext.ts` (+15/-0)
- `packages/react/src/components/ComposedModal/ModalHeader.tsx` (+34/-3)


## Cleanup
After testing, you can safely delete this PR and branch.

---
*Created from: https://github.com/carbon-design-system/carbon/pull/22353*


## Files Changed
- carbon-pr-test/1-PublicAPI-test.js.snap (+19/-0)
- carbon-pr-test/2-ComposedModal-test.js (+87/-0)
- carbon-pr-test/3-ComposedModal.tsx (+154/-0)
- carbon-pr-test/PR-22353-summary.md (+67/-0)
- carbon-pr-test/carbon-pr-22353.patch (+346/-0)

## Testing Instructions
1. Review the changes in this PR
2. Run the review agent: `npm start`
3. Check the comments and review summary
4. All reviews will be posted to this repository

---
*This is a test PR created from Carbon Design System PR #8 for local review testing.*
