// Sample from Carbon PR 22196
// Original file: packages/react/src/components/Loading/Loading.stories.js
// Status: modified
// Changes: +25/-3

@@ -1,13 +1,14 @@
 /**
- * Copyright IBM Corp. 2016, 2023
+ * Copyright IBM Corp. 2016, 2026
  *
  * This source code is licensed under the Apache-2.0 license found in the
  * LICENSE file in the root directory of this source tree.
  */
 
-import React from 'react';
+import React, { useState } from 'react';
 import Loading from '.';
 import mdx from './Loading.mdx';
+import Button from '../Button';
 
 export default {
   title: 'Components/Loading',
@@ -34,7 +35,7 @@ Default.args = {
   description: 'Loading',
 };
 
-Default.argTypes = {
+const sharedArgTypes = {
   active: {
     control: {
       type: 'boolean',
@@ -56,3 +57,24 @@ Default.argTypes = {
     },
   },
 };
+
+Default.argTypes = { ...sharedArgTypes };
+
+export const UXExample = () => {
+  const [isActive, setIsActive] = useState(false);
+
+  const startLoading = () => setIsActive(true);
+  const stopLoading = () => setIsActive(false);
+
+  return (
+    <main>
+      <Button onClick={startLoading}>Start</Button>
+      <Button onClick={stopLoading}>Stop</Button>
+      <Loading active={isActive} withOverlay />
+    </main>
+  );
+};
+
+UXExample.storyName = 'UX Example';
+
+UXExample.argTypes = { ...sharedArgTypes };
