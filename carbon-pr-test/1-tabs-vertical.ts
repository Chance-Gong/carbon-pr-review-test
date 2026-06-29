// Sample from Carbon PR 22528
// Original file: packages/web-components/src/components/tabs/tabs-vertical.ts
// Status: modified
// Changes: +8/-3

@@ -6,7 +6,7 @@
  */
 
 import { LitElement, html } from 'lit';
-import { property } from 'lit/decorators.js';
+import { property, query } from 'lit/decorators.js';
 import { breakpoints } from '@carbon/layout';
 import { prefix } from '../../globals/settings';
 import styles from './tabs.scss?lit';
@@ -35,6 +35,12 @@ export default class CDSTabsVertical extends LitElement {
   @property({ attribute: 'custom-height' })
   customHeight?: string;
 
+  /**
+   * The panel slot element in the shadow DOM.
+   */
+  @query('slot[name="panel"]')
+  private _panelSlot?: HTMLSlotElement;
+
   private _mediaQueryList: MediaQueryList | null = null;
 
   private _handleViewportChange = (e: MediaQueryListEvent | MediaQueryList) => {
@@ -68,8 +74,7 @@ export default class CDSTabsVertical extends LitElement {
       this._applyHeight();
     });
 
-    const panelSlot = this.shadowRoot?.querySelector('slot[name="panel"]');
-    panelSlot?.addEventListener('slotchange', () => {
+    this._panelSlot?.addEventListener('slotchange', () => {
       this._applyHeight();
     });
   }
