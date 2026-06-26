// Sample from Carbon PR 22509
// Original file: packages/react/src/components/OverflowMenu/OverflowMenu-test.js
// Status: modified
// Changes: +3/-2

@@ -1,5 +1,5 @@
 /**
- * Copyright IBM Corp. 2016, 2023
+ * Copyright IBM Corp. 2016, 2026
  *
  * This source code is licensed under the Apache-2.0 license found in the
  * LICENSE file in the root directory of this source tree.
@@ -204,7 +204,8 @@ describe('OverflowMenu', () => {
           );
 
           expect(screen.getByRole('button')).toHaveClass(
-            `cds--overflow-menu--${size}`
+            `cds--overflow-menu--${size}`, // TODO: V12 - Remove this check
+            `cds--layout--size-${size}`
           );
         });
       });
