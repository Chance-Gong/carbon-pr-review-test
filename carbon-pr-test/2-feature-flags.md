// Sample from Carbon PR 22619
// Original file: docs/feature-flags.md
// Status: modified
// Changes: +2/-0

@@ -21,6 +21,7 @@ but can change based on your feedback.
 
 Flags prefixed with `enable-v12-*` are stable and won't change. They will be
 marked as `true` or "on" by default in the next major version, v12.
+Use `enable-v12-release` to enable all `enable-v12-*` flags.
 
 For more details on this naming convention, see the
 [section below](#feature-flag-naming-convention).
@@ -37,6 +38,7 @@ Unless otherwise specified, flags are `false` by default.
 | `enable-treeview-controllable`                     | Enable the new TreeView controllable API                                             | React        |                                                                                                                                                                |
 | `enable-v12-dynamic-floating-styles`               | Enable dynamic setting of floating styles for components like Popover, Tooltip, etc. | React        |                                                                                                                                                                |
 | `enable-v12-overflowmenu`                          | Enable the use of the v12 OverflowMenu leveraging the Menu subcomponents             | React        | [enable-v12-overflowmenu](https://github.com/carbon-design-system/carbon/tree/main/packages/upgrade#enable-v12-overflowmenu)                                   |
+| `enable-v12-release`                               | Enable all v12 feature flags                                                         | React, Sass, Web components |                                                                                                                                                      |
 | `enable-v12-structured-list-visible-icons`         | Enable icon components within StructuredList to always be visible                    | Sass         | [enable-v12-structured-list-visible-icons](https://github.com/carbon-design-system/carbon/tree/main/packages/upgrade#enable-v12-structured-list-visible-icons) |
 | `enable-v12-tile-default-icons`                    | Enable default icons for Tile components                                             | React        | [enable-v12-tile-default-icons](https://github.com/carbon-design-system/carbon/tree/main/packages/upgrade#enable-v12-tile-default-icons)                       |
 | `enable-v12-tile-radio-icons`                      | Enable rendering of updated radio icon in the tile components                        | React, Sass  | [enable-v12-tile-radio-icons](https://github.com/carbon-design-system/carbon/tree/main/packages/upgrade#enable-v12-tile-radio-icons)                           |
