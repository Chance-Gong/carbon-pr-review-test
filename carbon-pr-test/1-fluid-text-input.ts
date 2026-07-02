// Sample from Carbon PR 22538
// Original file: packages/web-components/src/components/fluid-text-input/fluid-text-input.ts
// Status: modified
// Changes: +6/-3

@@ -7,6 +7,7 @@
 
 import { prefix } from '../../globals/settings';
 import { html } from 'lit';
+import { query } from 'lit/decorators.js';
 import { carbonElement as customElement } from '../../globals/decorators/carbon-element';
 import CDSTextInput from '../text-input/text-input';
 import styles from './fluid-text-input.scss?lit';
@@ -18,14 +19,16 @@ import styles from './fluid-text-input.scss?lit';
  */
 @customElement(`${prefix}-fluid-text-input`)
 class CDSFluidTextInput extends CDSTextInput {
+  @query(`.${prefix}--form-item`)
+  private _formItem!: HTMLElement | null;
+
   connectedCallback() {
     this.setAttribute('isFluid', 'true');
     super.connectedCallback();
   }
   updated() {
-    const formItem = this.shadowRoot?.querySelector(`.${prefix}--form-item`);
-    if (formItem) {
-      formItem.classList.add(`${prefix}--text-input--fluid`);
+    if (this._formItem) {
+      this._formItem.classList.add(`${prefix}--text-input--fluid`);
     }
   }
   render() {
