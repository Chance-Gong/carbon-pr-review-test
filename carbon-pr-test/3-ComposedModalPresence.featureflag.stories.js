// Sample from Carbon PR 22527
// Original file: packages/react/src/components/ComposedModal/ComposedModalPresence.featureflag.stories.js
// Status: modified
// Changes: +34/-18

@@ -28,6 +28,40 @@ export default {
     ModalFooter,
   },
   tags: ['!autodocs'],
+  parameters: {
+    controls: {
+      exclude: [
+        'containerClassName',
+        'launcherButtonRef',
+        'selectorPrimaryFocus',
+        'selectorsFloatingMenus',
+      ],
+    },
+  },
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
+  },
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
+  },
 };
 
 export const EnablePresence = (args) => {
@@ -96,21 +130,3 @@ export const EnablePresence = (args) => {
   );
 };
 EnablePresence.storyName = 'enable-presence';
-EnablePresence.parameters = {
-  controls: {
-    exclude: [
-      'containerClassName',
-      'launcherButtonRef',
-      'selectorPrimaryFocus',
-      'selectorsFloatingMenus',
-    ],
-  },
-};
-EnablePresence.argTypes = {
-  onClose: {
-    action: 'onClose',
-  },
-  onKeyDown: {
-    action: 'onKeyDown',
-  },
-};
