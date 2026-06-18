# Test PR from Carbon PR 6

## Original PR Info
- **Title**: [Test] fix: add MenuContext action types
- **PR Number**: 6
- **Status**: open

## Changes
- **Files**: 5
- **Additions**: +340
- **Deletions**: -0

## Description
# Test PR from Carbon Design System

This is a test PR created from Carbon PR #22405 for local review testing.

**Original Carbon PR**: https://github.com/carbon-design-system/carbon/pull/22405

## Purpose
This PR allows you to run the review agent locally and see comments/reviews in this test repository without affecting the Carbon repository.

## Original PR Details
- **Title**: fix: add MenuContext action types
- **Author**: @adamalston
- **Files Changed**: 3
- **Changes**: +49/-18

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
- `packages/react/src/components/Menu/Menu-test.js` (+35/-0)
- `packages/react/src/components/Menu/MenuContext.ts` (+14/-15)
- `packages/react/src/components/Menu/MenuItem.tsx` (+0/-3)


## Cleanup
After testing, you can safely delete this PR and branch.

---
*Created from: https://github.com/carbon-design-system/carbon/pull/22405*


## Files Changed
- carbon-pr-test/1-Menu-test.js (+54/-0)
- carbon-pr-test/2-MenuContext.ts (+57/-0)
- carbon-pr-test/3-MenuItem.tsx (+29/-0)
- carbon-pr-test/PR-22405-summary.md (+63/-0)
- carbon-pr-test/carbon-pr-22405.patch (+137/-0)

## Testing Instructions
1. Review the changes in this PR
2. Run the review agent: `npm start`
3. Check the comments and review summary
4. All reviews will be posted to this repository

---
*This is a test PR created from Carbon Design System PR 6 for local review testing.*
