// Sample from Carbon PR 22613
// Original file: packages/styles/scss/components/__tests__/modal-test.js
// Status: modified
// Changes: +36/-1

@@ -1,5 +1,5 @@
 /**
- * Copyright IBM Corp. 2018, 2023
+ * Copyright IBM Corp. 2018, 2026
  *
  * This source code is licensed under the Apache-2.0 license found in the
  * LICENSE file in the root directory of this source tree.
@@ -9,6 +9,7 @@
 
 'use strict';
 
+const postcss = require('postcss');
 const { SassRenderer } = require('@carbon/test-utils/scss');
 
 const { render } = SassRenderer.create(__dirname);
@@ -24,4 +25,38 @@ describe('scss/components/modal', () => {
      `);
     expect(unwrap('mixin')).toBe(true);
   });
+
+  test('hover styles are only applied on devices that support hover', async () => {
+    const { result } = await render(`
+      @use '../modal';
+    `);
+    const hoverRules = [];
+
+    postcss.parse(result.css.toString()).walkRules((rule) => {
+      if (rule.selector.includes('.cds--modal-close:hover')) {
+        hoverRules.push(rule);
+      }
+    });
+
+    expect(hoverRules.length).toBeGreaterThan(0);
+    expect(
+      hoverRules.every((rule) => {
+        let parent = rule.parent;
+
+        while (parent) {
+          if (
+            parent.type === 'atrule' &&
+            parent.name === 'media' &&
+            parent.params.includes('(any-hover: hover)')
+          ) {
+            return true;
+          }
+
+          parent = parent.parent;
+        }
+
+        return false;
+      })
+    ).toBe(true);
+  });
 });
