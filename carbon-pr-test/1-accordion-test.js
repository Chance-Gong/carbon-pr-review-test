// Sample from Carbon PR 22492
// Original file: packages/styles/scss/components/__tests__/accordion-test.js
// Status: modified
// Changes: +81/-1

@@ -1,5 +1,5 @@
 /**
- * Copyright IBM Corp. 2018, 2023
+ * Copyright IBM Corp. 2018, 2026
  *
  * This source code is licensed under the Apache-2.0 license found in the
  * LICENSE file in the root directory of this source tree.
@@ -10,6 +10,7 @@
 'use strict';
 
 const { SassRenderer } = require('@carbon/test-utils/scss');
+const css = require('css');
 
 const { render } = SassRenderer.create(__dirname);
 
@@ -44,4 +45,83 @@ describe('scss/components/accordion', () => {
     `);
     expect(unwrap('direction')).toBe('row');
   });
+
+  test('hover styles are only applied on devices that support hover', async () => {
+    const { result } = await render(`
+      @use '../accordion';
+    `);
+    const { stylesheet } = css.parse(
+      removeAtRule(result.css.toString(), '@starting-style')
+    );
+
+    function getAccordionHoverSelectors(rules, media = []) {
+      return rules.flatMap((rule) => {
+        if (rule.type === 'media') {
+          return getAccordionHoverSelectors(rule.rules, [...media, rule.media]);
+        }
+
+        if (rule.type !== 'rule') {
+          return [];
+        }
+
+        return rule.selectors
+          .filter((selector) => {
+            return (
+              selector.includes('.cds--accordion') &&
+              selector.includes(':hover')
+            );
+          })
+          .map((selector) => {
+            return { media, selector };
+          });
+      });
+    }
+
+    const hoverSelectors = getAccordionHoverSelectors(stylesheet.rules);
+
+    expect(hoverSelectors).toEqual(
+      expect.arrayContaining([
+        expect.objectContaining({
+          media: expect.arrayContaining([
+            expect.stringContaining('(any-hover: hover)'),
+          ]),
+          selector: expect.stringContaining('.cds--accordion__heading:hover'),
+        }),
+      ])
+    );
+    expect(
+      hoverSelectors.every(({ media }) => {
+        return media.some((query) => query.includes('(any-hover: hover)'));
+      })
+    ).toBe(true);
+  });
 });
+
+function removeAtRule(cssText, atRule) {
+  const start = cssText.indexOf(atRule);
+
+  if (start === -1) {
+    return cssText;
+  }
+
+  const blockStart = cssText.indexOf('{', start);
+  let blockEnd = blockStart;
+  let depth = 0;
+
+  for (let i = blockStart; i < cssText.length; i++) {
+    if (cssText[i] === '{') {
+      depth++;
+    }
+
+    if (cssText[i] === '}') {
+      depth--;
+    }
+
+    if (depth === 0) {
+      blockEnd = i + 1;
+      break;
+    }
+  }
+
+  return `${cssText.slice(0, start)}${cssText.slice(blockEnd)}`;
+}
