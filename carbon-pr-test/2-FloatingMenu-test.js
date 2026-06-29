// Sample from Carbon PR 22401
// Original file: packages/react/src/internal/__tests__/FloatingMenu-test.js
// Status: modified
// Changes: +19/-0

@@ -282,6 +282,25 @@ describe('FloatingMenu', () => {
     expect(menuRef).toHaveBeenLastCalledWith(null);
   });
 
+  it('should not detach and reattach the menu ref after initial placement', async () => {
+    const menuRef = jest.fn();
+
+    renderFloatingMenu({
+      menuRef,
+      menuOffset: defaultMenuOffset,
+    });
+
+    const menu = screen.getByTestId('menu');
+
+    await waitFor(() => {
+      expect(menu.style.left).toBe('-23px');
+      expect(menu.style.top).toBe('65px');
+    });
+
+    expect(menuRef).toHaveBeenCalledTimes(1);
+    expect(menuRef).toHaveBeenCalledWith(menu);
+  });
+
   it('should focus the menu body and call `onPlace` when no focusable child exists', async () => {
     const onPlace = jest.fn();
 
