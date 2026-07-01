// Sample from Carbon PR 22556
// Original file: packages/web-components/src/components/fluid-textarea/__tests__/fluid-textarea-test.js
// Status: modified
// Changes: +22/-2

@@ -41,14 +41,34 @@ describe('cds-fluid-textarea', () => {
     expect(el.value).to.equal('Updated content');
   });
 
-  it('should support readonly and disabled attributes', async () => {
+  it('should support readonly attribute', async () => {
     const el = await fixture(html`
-      <cds-fluid-textarea readonly disabled></cds-fluid-textarea>
+      <cds-fluid-textarea readonly></cds-fluid-textarea>
     `);
 
     const textarea = el.shadowRoot.querySelector('textarea');
     expect(textarea.readOnly).to.be.true;
+    expect(textarea.disabled).to.be.false;
+  });
+
+  it('should support disabled attribute', async () => {
+    const el = await fixture(html`
+      <cds-fluid-textarea disabled></cds-fluid-textarea>
+    `);
+
+    const textarea = el.shadowRoot.querySelector('textarea');
     expect(textarea.disabled).to.be.true;
+    expect(textarea.readOnly).to.be.false;
+  });
+
+  it('should not disable the textarea when both readonly and disabled are set (readonly takes precedence)', async () => {
+    const el = await fixture(html`
+      <cds-fluid-textarea readonly disabled></cds-fluid-textarea>
+    `);
+
+    const textarea = el.shadowRoot.querySelector('textarea');
+    expect(textarea.readOnly).to.be.true;
+    expect(textarea.disabled).to.be.false;
   });
 
   it('should show invalid text when invalid is set', async () => {
