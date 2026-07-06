# Test PR from Carbon PR 22630

## Original PR Info
- **Title**: feat: add code connhect support for web components
- **PR Number**: 22630
- **Status**: open

## Changes
- **Files**: 37
- **Additions**: +2581
- **Deletions**: -0

## Description
Partially Closes #17459
Closes #22381
Closes #22379
Closes #22380

Adds Figma Code Connect support for Carbon Web Components.

### Changelog

**New**

- Added Web Components Figma Code Connect files for:
  `Checkbox`, `CheckboxGroup`, `CodeSnippet`, `ComboBox`, `ComboButton`, `ContentSwitcher`, `ContentSwitcherItem`, `DatePicker`, `Dropdown`, `Form`, `Loading`, `Menu`, `MenuItem`, `MenuButton`, `MultiSelect`, `Notification`, `NumberInput`, `OverflowMenu`, `Pagination`, `PasswordInput`, `Popover`, `ProgressBar`, `ProgressIndicator`, `ProgressStep`, `RadioButton`, `RadioButtonGroup`, `Search`, `Select`, `Tag`, `TextInput`, `TextArea`, `Tile`, `TimePicker`, `Toggle`, `Toggletip`, `Tooltip`, and `TreeView`.

**Changed**

- Added Web Components prop mappings, and variant mappings for the new Code Connect definitions based on the existing React Code Connect coverage.

**Removed**

- ~None.~

#### Testing / Reviewing

Confirm theses components in https://www.figma.com/design/NwXsMCCoMg1po4KK2oUK3o/Code-connect-demo---Carbon-Design-System?node-id=219-15053&p=f&t=cvroWu1H010MiT32-0

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
- packages/web-components/code-connect/checkbox/checkbox-group.figma.ts (+45/-0)
- packages/web-components/code-connect/checkbox/checkbox.figma.ts (+72/-0)
- packages/web-components/code-connect/code-snippet/code-snippet.figma.ts (+128/-0)
- packages/web-components/code-connect/combo-box/combo-box.figma.ts (+78/-0)
- packages/web-components/code-connect/combo-button/combo-button.figma.ts (+60/-0)
- packages/web-components/code-connect/content-switcher/content-switcher-item.figma.ts (+52/-0)
- packages/web-components/code-connect/content-switcher/content-switcher.figma.ts (+59/-0)
- packages/web-components/code-connect/date-picker/date-picker.figma.ts (+183/-0)
- packages/web-components/code-connect/dropdown/dropdown.figma.ts (+82/-0)
- packages/web-components/code-connect/form/form.figma.ts (+20/-0)
- packages/web-components/code-connect/loading/loading.figma.ts (+25/-0)
- packages/web-components/code-connect/menu-button/menu-button.figma.ts (+74/-0)
- packages/web-components/code-connect/menu/menu-item.figma.ts (+109/-0)
- packages/web-components/code-connect/menu/menu.figma.ts (+28/-0)
- packages/web-components/code-connect/multi-select/multi-select.figma.ts (+85/-0)
- packages/web-components/code-connect/notification/notification.figma.ts (+142/-0)
- packages/web-components/code-connect/number-input/number-input.figma.ts (+81/-0)
- packages/web-components/code-connect/overflow-menu/overflow-menu.figma.ts (+57/-0)
- packages/web-components/code-connect/pagination/pagination.figma.ts (+39/-0)
- packages/web-components/code-connect/password-input/password-input.figma.ts (+61/-0)
- packages/web-components/code-connect/popover/popover.figma.ts (+73/-0)
- packages/web-components/code-connect/progress-bar/progress-bar.figma.ts (+91/-0)
- packages/web-components/code-connect/progress-indicator/progress-indicator.figma.ts (+27/-0)
- packages/web-components/code-connect/progress-indicator/progress-step.figma.ts (+43/-0)
- packages/web-components/code-connect/radio-button/radio-button-group.figma.ts (+50/-0)
- packages/web-components/code-connect/radio-button/radio-button.figma.ts (+51/-0)
- packages/web-components/code-connect/search/search.figma.ts (+58/-0)
- packages/web-components/code-connect/select/select.figma.ts (+83/-0)
- packages/web-components/code-connect/tag/tag.figma.ts (+162/-0)
- packages/web-components/code-connect/text-input/text-input.figma.ts (+72/-0)
- packages/web-components/code-connect/textarea/textarea.figma.ts (+81/-0)
- packages/web-components/code-connect/tile/tile.figma.ts (+19/-0)
- packages/web-components/code-connect/time-picker/time-picker.figma.ts (+53/-0)
- packages/web-components/code-connect/toggle/toggle.figma.ts (+116/-0)
- packages/web-components/code-connect/toggletip/toggletip.figma.ts (+45/-0)
- packages/web-components/code-connect/tooltip/tooltip.figma.ts (+45/-0)
- packages/web-components/code-connect/tree-view/tree-view.figma.ts (+32/-0)

## Testing Instructions
1. Review the changes in this PR
2. Run the review agent: `npm start`
3. Check the comments and review summary
4. All reviews will be posted to this repository

---
*This is a test PR created from Carbon Design System PR 22630 for local review testing.*
