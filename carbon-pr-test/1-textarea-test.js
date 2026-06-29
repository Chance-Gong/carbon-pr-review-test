// Sample from Carbon PR 22469
// Original file: packages/web-components/src/components/textarea/__tests__/textarea-test.js
// Status: modified
// Changes: +17/-0

@@ -99,6 +99,23 @@ describe('cds-textarea', () => {
     expect(textarea.getAttribute('rows')).to.equal('10');
   });
 
+  it('should stretch the inner textarea when the host grows in a flex column layout', async () => {
+    const container = await fixture(html`
+      <div style="display: flex; flex-direction: column; height: 240px;">
+        <div style="flex: 0 0 20px;"></div>
+        <cds-textarea hide-label style="flex: 1 1 auto;"></cds-textarea>
+        <div style="flex: 0 0 20px;"></div>
+      </div>
+    `);
+
+    const el = container.querySelector('cds-textarea');
+    await el.updateComplete;
+    await new Promise((resolve) => requestAnimationFrame(resolve));
+
+    const textarea = el.shadowRoot.querySelector('textarea');
+    expect(textarea.getBoundingClientRect().height).to.be.greaterThan(150);
+  });
+
   it('should accept pattern and required attributes', async () => {
     const el = await fixture(html`
       <cds-textarea pattern="[A-Za-z]+" required></cds-textarea>
