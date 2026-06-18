// Sample from Carbon PR 6
// Original file: carbon-pr-test/1-Menu-test.js
// Status: added
// Changes: +54/-0

@@ -0,0 +1,54 @@
+// Sample from Carbon PR #22405
+// Original file: packages/react/src/components/Menu/Menu-test.js
+// Status: modified
+// Changes: +35/-0
+
+@@ -7,6 +7,7 @@
+ 
+ import React from 'react';
+ import { useState } from 'react';
++import { Checkmark } from '@carbon/icons-react';
+ import { Menu, MenuItem, MenuItemSelectable, MenuItemRadioGroup } from './';
+ import {
+   act,
+@@ -325,6 +326,40 @@ describe('MenuItem', () => {
+ 
+       expect(screen.getByText('item')).toBeInTheDocument();
+     });
++
++    it('should mark the menu as having icons when a menu item renders an icon', () => {
++      render(
++        <Menu open>
++          <MenuItem label="item" renderIcon={Checkmark} />
++        </Menu>
++      );
++
++      expect(screen.getByRole('menu')).toHaveClass(
++        'cds--menu',
++        'cds--menu--sm',
++        'cds--menu--open',
++        'cds--menu--shown',
++        'cds--menu--with-icons',
++        { exact: true }
++      );
++    });
++
++    it('should mark the menu as having selectable items when a selectable item is rendered', () => {
++      render(
++        <Menu open>
++          <MenuItemSelectable label="item" />
++        </Menu>
++      );
++
++      expect(screen.getByRole('menu')).toHaveClass(
++        'cds--menu',
++        'cds--menu--sm',
++        'cds--menu--open',
++        'cds--menu--shown',
++        'cds--menu--with-selectable-items',
++        { exact: true }
++      );
++    });
+   });
+ 
+   it('should call MenuItemRadioGroup onChange once', async () => {
