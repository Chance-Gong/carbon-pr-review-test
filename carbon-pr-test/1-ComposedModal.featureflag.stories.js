// Sample from Carbon PR 22527
// Original file: packages/react/src/components/ComposedModal/ComposedModal.featureflag.stories.js
// Status: modified
// Changes: +23/-10

@@ -1,5 +1,5 @@
 /**
- * Copyright IBM Corp. 2016, 2025
+ * Copyright IBM Corp. 2016, 2026
  *
  * This source code is licensed under the Apache-2.0 license found in the
  * LICENSE file in the root directory of this source tree.
@@ -36,14 +36,29 @@ export default {
     },
   },
   tags: ['!autodocs'],
-};
-
-const sharedArgTypes = {
-  onClose: {
-    action: 'onClose',
+  argTypes: {
+    danger: { control: 'boolean' },
+    isFullWidth: { control: 'boolean' },
+    size: { control: 'radio', options: ['xs', 'sm', 'md', 'lg'] },
+    preventCloseOnClickOutside: { control: 'boolean' },
+    'aria-label': { control: 'text' },
+    label: { control: 'text' },
+    title: { control: 'text' },
+    primaryButtonText: { control: 'text' },
+    secondaryButtonText: { control: 'text' },
+    onClose: { action: 'onClose' },
+    onKeyDown: { action: 'onKeyDown' },
   },
-  onKeyDown: {
-    action: 'onKeyDown',
+  args: {
+    danger: false,
+    isFullWidth: false,
+    size: null,
+    preventCloseOnClickOutside: false,
+    'aria-label': 'Modal content',
+    label: 'Account resources',
+    title: 'Add a custom domain',
+    primaryButtonText: 'Add',
+    secondaryButtonText: 'Cancel',
   },
 };
 
@@ -98,7 +113,6 @@ export const EnableDialogElement = (args) => {
   );
 };
 EnableDialogElement.storyName = 'enable-dialog-element';
-EnableDialogElement.argTypes = { ...sharedArgTypes };
 
 export const EnableFocusWrapWithoutSentinels = (args) => {
   const [open, setOpen] = useState(true);
@@ -152,4 +166,3 @@ export const EnableFocusWrapWithoutSentinels = (args) => {
 };
 EnableFocusWrapWithoutSentinels.storyName =
   'enable-focus-wrap-without-sentinels';
-EnableFocusWrapWithoutSentinels.argTypes = { ...sharedArgTypes };
