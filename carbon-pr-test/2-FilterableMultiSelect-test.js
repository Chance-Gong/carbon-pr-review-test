// Sample from Carbon PR 22481
// Original file: packages/react/src/components/MultiSelect/__tests__/FilterableMultiSelect-test.js
// Status: modified
// Changes: +32/-0

@@ -327,6 +327,38 @@ describe('FilterableMultiSelect', () => {
 
     expect(screen.getByPlaceholderText('test')).toHaveDisplayValue('');
   });
+  it('should trigger onInputValueChange when clicking clear button', async () => {
+    const onInputValueChange = jest.fn();
+    render(
+      <FilterableMultiSelect
+        {...mockProps}
+        placeholder="test"
+        onInputValueChange={onInputValueChange}
+      />
+    );
+    await openMenu();
+
+    // Type some text
+    await userEvent.type(screen.getByPlaceholderText('test'), '3');
+
+    // Clear the callback mock to ignore typing events
+    onInputValueChange.mockClear();
+
+    // Click the clear button
+    const clearButton = screen.getByRole('button', {
+      name: 'Clear selected item',
+    });
+    await userEvent.click(clearButton);
+
+    // Verify the input is cleared
+    expect(screen.getByPlaceholderText('test')).toHaveDisplayValue('');
+
+    // Verify onInputValueChange was called with empty string
+    expect(onInputValueChange).toHaveBeenCalledTimes(1);
+    expect(onInputValueChange).toHaveBeenCalledWith(
+      expect.objectContaining({ inputValue: '' })
+    );
+  });
 
   it('should respect slug prop', async () => {
     const spy = jest.spyOn(console, 'warn').mockImplementation(() => {});
