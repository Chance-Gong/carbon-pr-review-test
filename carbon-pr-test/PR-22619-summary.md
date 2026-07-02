# Test PR from Carbon PR 22619

## Original PR Info
- **Title**: feat(v12): set up v12 code path delivery mechanisms
- **PR Number**: 22619
- **Status**: open

## Changes
- **Files**: 47
- **Additions**: +2278
- **Deletions**: -14

## Description
Closes #22373

This adds the `enable-v12-release` flag and builds parallel v12 storybooks for react and web components. The v12 flag is enabled by default in these storybooks and turns on all `enable-v12-*` feature flags. 

New repos [`v12-react-storybook`](https://github.com/carbon-design-system/v12-react-storybook) and [`v12-web-components-storybook`](https://github.com/carbon-design-system/v12-react-storybook) are up and configured to publish to [v2-react.carbondesignsystem.com](https://v2-react.carbondesignsystem.com) and [v3-web-components.carbondesignsystem.com](https://v3-web-components.carbondesignsystem.com), respectively, once this is merged.

> [!NOTE]  
> The new `working-with-v12.md` document covers all this in much more detail, and gives instructions on how the team should work within these environments.

### Changelog

**New**

- Added the `enable-v12-release` flag and override behavior for both js and scss `enable-v12-*` flags
- React and wc `.storybook-v12` setups and config
  - @heloiselui I added a new `Elements/Motion/TBD` v12-only story
- `tasks/prepare-v12-storybook.mjs` generation for merged v12 wrapper stories with 🚀 markers
- v12 developer docs in docs/working-with-v12.md.
- v12 storybook deploy workflow targeting the dedicated repos and CNAME's

**Changed**

- Both v12 storybooks have a unified `Welcome` story that use `v2.x`/`v3.x` package versions and include a v12 explanatory callout
- Updated ports to `:3011`/`:3012` for react and `:6011`/`:6012` for wc.
- Fixed a couple storybook vite config warnings around deprecated `esbuildOptions`

**Removed**

- `tasks/prepare-v12-storybook.mjs` removes:
  - Existing `Deprecated` stories from v12 Storybooks while preserving a path for new v12 deprecations
  - The `enable-v12-*` stories from Feature Flag folders in v12 output.

#### Testing / Reviewing

- Review the `working-with-v12.md` doc
- Pull down locally and run all four storybooks - validate they run and nothing is missing
  - Once merged I can set up deploy previews for the new ones
- Chromatic checks should not generate any snapshot changes in v11 storybooks

## PR Checklist

<!-- 
  Do not remove checklist items.
  If some are incomplete, create a draft pull request using the create button dropdown.
  If some do not apply, ~strike through the item text with tildes~.
-->

As the author of this PR, before marking ready for review, confirm you:

- [x] Reviewed every line of the diff
- [x] Updated documentation and storybook examples
~- [ ] Wrote passing tests that cover this change~
~- [ ] Addressed any impact on accessibility (a11y)~
~- [ ] Tested for cross-browser consistency~
- [x] Validated that this code is ready for review and status checks should pass

More details can be found in the [pull request guide](https://github.com/carbon-design-system/carbon/blob/main/docs/guides/reviewing-pull-requests.md)


## Files Changed
- .github/workflows/deploy-v12-storybooks.yml (+59/-0)
- docs/feature-flags.md (+2/-0)
- docs/working-with-v12.md (+314/-0)
- packages/feature-flags/__tests__/scss-test.js (+35/-0)
- packages/feature-flags/feature-flags.yml (+4/-0)
- packages/feature-flags/index.scss (+14/-0)
- packages/feature-flags/src/FeatureFlagScope.ts (+11/-0)
- packages/feature-flags/src/__tests__/feature-flags-test.js (+20/-0)
- packages/react/.storybook-v12/.gitignore (+1/-0)
- packages/react/.storybook-v12/Welcome/Welcome.js (+56/-0)
- packages/react/.storybook-v12/Welcome/Welcome.mdx (+8/-0)
- packages/react/.storybook-v12/Welcome/welcome.scss (+46/-0)
- packages/react/.storybook-v12/main.ts (+121/-0)
- packages/react/.storybook-v12/manager-head.html (+16/-0)
- packages/react/.storybook-v12/manager.js (+16/-0)
- packages/react/.storybook-v12/preview-head.html (+13/-0)
- packages/react/.storybook-v12/preview.js (+83/-0)
- packages/react/.storybook-v12/stories/Motion/Motion.featureflag.stories.js (+18/-0)
- packages/react/.storybook-v12/theme.js (+17/-0)
- packages/react/.storybook/main.ts (+2/-7)
- packages/react/package.json (+5/-2)
- packages/react/src/components/FeatureFlags/__tests__/FeatureFlags-test.js (+141/-0)
- packages/react/src/components/FeatureFlags/index.tsx (+7/-0)
- packages/react/src/feature-flags.js (+1/-0)
- packages/react/telemetry.yml (+1/-0)
- packages/styles/scss/_feature-flags.scss (+1/-0)
- packages/styles/scss/components/structured-list/_structured-list.scss (+1/-1)
- packages/web-components/.storybook-v12/.gitignore (+1/-0)
- packages/web-components/.storybook-v12/CarbonCDNStyleHelpers.mdx (+11/-0)
- packages/web-components/.storybook-v12/CustomStyles.mdx (+11/-0)
- packages/web-components/.storybook-v12/FormParticipation.mdx (+11/-0)
- packages/web-components/.storybook-v12/GettingStarted.mdx (+136/-0)
- packages/web-components/.storybook-v12/Welcome/Welcome.js (+75/-0)
- packages/web-components/.storybook-v12/Welcome/Welcome.mdx (+8/-0)
- packages/web-components/.storybook-v12/Welcome/welcome.scss (+53/-0)
- packages/web-components/.storybook-v12/main.ts (+132/-0)
- packages/web-components/.storybook-v12/manager-head.html (+11/-0)
- packages/web-components/.storybook-v12/manager.js (+16/-0)
- packages/web-components/.storybook-v12/preview-head.html (+34/-0)
- packages/web-components/.storybook-v12/preview.js (+79/-0)
- packages/web-components/.storybook-v12/stories/Motion/Motion.feature-flag.stories.js (+16/-0)
- packages/web-components/.storybook-v12/theme.js (+17/-0)
- packages/web-components/package.json (+5/-2)
- packages/web-components/src/components/feature-flags/__tests__/feature-flags-test.js (+54/-0)
- packages/web-components/src/components/feature-flags/index.ts (+34/-2)
- packages/web-components/src/components/notification/notification.mdx (+2/-0)
- tasks/prepare-v12-storybook.mjs (+559/-0)

## Testing Instructions
1. Review the changes in this PR
2. Run the review agent: `npm start`
3. Check the comments and review summary
4. All reviews will be posted to this repository

---
*This is a test PR created from Carbon Design System PR 22619 for local review testing.*
