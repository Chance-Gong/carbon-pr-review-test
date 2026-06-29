// Sample from Carbon PR 22533
// Original file: packages/web-components/src/components/search/__tests__/search-test.js
// Status: modified
// Changes: +175/-0

@@ -163,4 +163,179 @@ describe('cds-search', () => {
       expect(input).to.have.property('value', 'test-value');
     });
   });
+
+  describe('@query decorator functionality', () => {
+    it('should focus input element when clear button is clicked', async () => {
+      const el = await fixture(html`
+        <cds-search label-text="test-search" value="test-value"></cds-search>
+      `);
+
+      await el.updateComplete;
+
+      const input = el.shadowRoot?.querySelector('input');
+      const closeButton = el.shadowRoot?.querySelector(
+        'button.cds--search-close'
+      );
+
+      expect(input).to.exist;
+      expect(closeButton).to.exist;
+
+      closeButton?.click();
+      await el.updateComplete;
+
+      expect(el.shadowRoot?.activeElement).to.equal(input);
+      expect(el.value).to.equal('');
+    });
+
+    it('should cache input element reference via @query decorator', async () => {
+      const el = await fixture(html`
+        <cds-search label-text="test-search" value="initial"></cds-search>
+      `);
+
+      await el.updateComplete;
+
+      const inputElement = el._inputElement;
+      expect(inputElement).to.exist;
+      expect(inputElement?.tagName).to.equal('INPUT');
+      expect(inputElement?.value).to.equal('initial');
+    });
+
+    it('should cache magnifier element reference via @query decorator', async () => {
+      const el = await fixture(html`
+        <cds-search label-text="test-search" expandable></cds-search>
+      `);
+
+      await el.updateComplete;
+
+      const magnifierElement = el._magnifierElement;
+      expect(magnifierElement).to.exist;
+      expect(magnifierElement?.classList.contains('cds--search-magnifier')).to
+        .be.true;
+    });
+
+    it('should focus magnifier when Escape is pressed with empty input in expandable mode', async () => {
+      const el = await fixture(html`
+        <cds-search label-text="test-search" expandable expanded></cds-search>
+      `);
+
+      await el.updateComplete;
+
+      const input = el.shadowRoot?.querySelector('input');
+      const magnifier = el.shadowRoot?.querySelector('.cds--search-magnifier');
+
+      expect(input).to.exist;
+      expect(magnifier).to.exist;
+
+      input?.focus();
+      await el.updateComplete;
+
+      const escapeEvent = new KeyboardEvent('keydown', {
+        key: 'Escape',
+        bubbles: true,
+      });
+      el.dispatchEvent(escapeEvent);
+      await el.updateComplete;
+
+      expect(el.shadowRoot?.activeElement).to.equal(magnifier);
+    });
+
+    it('should clear value but keep focus when Escape is pressed with non-empty input', async () => {
+      const el = await fixture(html`
+        <cds-search
+          label-text="test-search"
+          value="test-value"
+          expandable
+          expanded></cds-search>
+      `);
+
+      await el.updateComplete;
+
+      const input = el.shadowRoot?.querySelector('input');
+      expect(input).to.exist;
+
+      input?.focus();
+      await el.updateComplete;
+
+      const escapeEvent = new KeyboardEvent('keydown', {
+        key: 'Escape',
+        bubbles: true,
+      });
+      el.dispatchEvent(escapeEvent);
+      await el.updateComplete;
+
+      expect(el.value).to.equal('');
+      expect(el.shadowRoot?.activeElement).to.equal(input);
+    });
+
+    it('should expand and focus input when magnifier is clicked in expandable mode', async () => {
+      const el = await fixture(html`
+        <cds-search label-text="test-search" expandable></cds-search>
+      `);
+
+      await el.updateComplete;
+
+      expect(el.expanded).to.be.false;
+
+      const magnifier = el.shadowRoot?.querySelector('.cds--search-magnifier');
+      const input = el.shadowRoot?.querySelector('input');
+
+      expect(magnifier).to.exist;
+      expect(input).to.exist;
+
+      magnifier?.click();
+      await el.updateComplete;
+
+      expect(el.expanded).to.be.true;
+      expect(el.shadowRoot?.activeElement).to.equal(input);
+    });
+
+    it('should handle multiple clear operations correctly', async () => {
+      const el = await fixture(html`
+        <cds-search label-text="test-search" value="test1"></cds-search>
+      `);
+
+      await el.updateComplete;
+
+      const input = el.shadowRoot?.querySelector('input');
+      const closeButton = el.shadowRoot?.querySelector(
+        'button.cds--search-close'
+      );
+
+      closeButton?.click();
+      await el.updateComplete;
+      expect(el.value).to.equal('');
+      expect(el.shadowRoot?.activeElement).to.equal(input);
+
+      el.value = 'test2';
+      await el.updateComplete;
+
+      closeButton?.click();
+      await el.updateComplete;
+      expect(el.value).to.equal('');
+      expect(el.shadowRoot?.activeElement).to.equal(input);
+    });
+
+    it('should maintain focus management with @query decorator after updates', async () => {
+      const el = await fixture(html`
+        <cds-search label-text="test-search" expandable></cds-search>
+      `);
+
+      await el.updateComplete;
+
+      el.placeholder = 'New placeholder';
+      await el.updateComplete;
+
+      el.size = 'sm';
+      await el.updateComplete;
+
+      const magnifier = el.shadowRoot?.querySelector('.cds--search-magnifier');
+      const input = el.shadowRoot?.querySelector('input');
+
+      magnifier?.click();
+      await el.updateComplete;
+
+      expect(el.expanded).to.be.true;
+      expect(el.shadowRoot?.activeElement).to.equal(input);
+    });
+  });
 });
