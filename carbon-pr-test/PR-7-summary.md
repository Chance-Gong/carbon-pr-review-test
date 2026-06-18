# Test PR from Carbon PR #7

## Original PR Info
- **Title**: [Test] fix: button text overflow issue fix
- **PR Number**: #7
- **Status**: open

## Changes
- **Files**: 3
- **Additions**: +241
- **Deletions**: -0

## Description
# Test PR from Carbon Design System

This is a test PR created from Carbon PR #22385 for local review testing.

**Original Carbon PR**: https://github.com/carbon-design-system/carbon/pull/22385

## Purpose
This PR allows you to run the review agent locally and see comments/reviews in this test repository without affecting the Carbon repository.

## Original PR Details
- **Title**: fix: button text overflow issue fix
- **Author**: @Praveen111
- **Files Changed**: 1
- **Changes**: +26/-0

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
- `packages/styles/scss/components/button/_button.scss` (+26/-0)


## Cleanup
After testing, you can safely delete this PR and branch.

---
*Created from: https://github.com/carbon-design-system/carbon/pull/22385*


## Files Changed
- carbon-pr-test/1-_button.scss (+87/-0)
- carbon-pr-test/PR-22385-summary.md (+68/-0)
- carbon-pr-test/carbon-pr-22385.patch (+86/-0)

## Testing Instructions
1. Review the changes in this PR
2. Run the review agent: `npm start`
3. Check the comments and review summary
4. All reviews will be posted to this repository

---
*This is a test PR created from Carbon Design System PR #7 for local review testing.*
