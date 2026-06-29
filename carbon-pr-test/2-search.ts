// Sample from Carbon PR 22533
// Original file: packages/web-components/src/components/search/search.ts
// Status: modified
// Changes: +18/-11

@@ -7,7 +7,7 @@
 
 import { classMap } from 'lit/directives/class-map.js';
 import { LitElement, html } from 'lit';
-import { property } from 'lit/decorators.js';
+import { property, query } from 'lit/decorators.js';
 import { prefix } from '../../globals/settings';
 import Search16 from '@carbon/icons/es/search/16.js';
 import Close16 from '@carbon/icons/es/close/16.js';
@@ -36,6 +36,18 @@ export { SEARCH_SIZE };
  */
 @customElement(`${prefix}-search`)
 class CDSSearch extends HostListenerMixin(FocusMixin(FormMixin(LitElement))) {
+  /**
+   * The input element
+   */
+  @query('input')
+  private _inputElement?: HTMLInputElement;
+
+  /**
+   * The search magnifier element
+   */
+  @query(`.${prefix}--search-magnifier`)
+  private _magnifierElement?: HTMLElement;
+
   /**
    * Handles `input` event on the `<input>` in the shadow DOM.
    */
@@ -73,9 +85,7 @@ class CDSSearch extends HostListenerMixin(FocusMixin(FormMixin(LitElement))) {
       this.value = '';
 
       // set focus on back to input once search is cleared
-      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- https://github.com/carbon-design-system/carbon/issues/20452
-      const input = this.shadowRoot!.querySelector('input');
-      (input as HTMLElement).focus();
+      this._inputElement?.focus();
     }
   }
 
@@ -195,14 +205,11 @@ class CDSSearch extends HostListenerMixin(FocusMixin(FormMixin(LitElement))) {
    * Adds tabindex="-1" if it is not focusable yet.
    */
   private _focusMagnifier() {
-    const magnifier = this.shadowRoot?.querySelector<HTMLElement>(
-      `.${prefix}--search-magnifier`
-    );
-    if (magnifier) {
-      if (!magnifier.hasAttribute('tabindex')) {
-        magnifier.tabIndex = -1;
+    if (this._magnifierElement) {
+      if (!this._magnifierElement.hasAttribute('tabindex')) {
+        this._magnifierElement.tabIndex = -1;
       }
-      magnifier.focus();
+      this._magnifierElement.focus();
     }
   }
 
