// Sample from Carbon PR 22481
// Original file: packages/react/src/components/MultiSelect/FilterableMultiSelect.tsx
// Status: modified
// Changes: +15/-4

@@ -713,6 +713,10 @@ export const FilterableMultiSelect = forwardRef(function FilterableMultiSelect<
         setHighlightedIndex(changes.selectedItem);
         return changes;
       case InputBlur:
+        setInputValue('');
+        setInputFocused(false);
+        setIsOpen(false);
+        return changes;
       case InputKeyDownEscape:
         setIsOpen(false);
         return changes;
@@ -826,6 +830,17 @@ export const FilterableMultiSelect = forwardRef(function FilterableMultiSelect<
       setInputValue(value ?? '');
     }
 
+    // Only trigger callback for mouse events (clear button clicks)
+    // Keyboard events will trigger InputChange naturally through Downshift
+    if (onInputValueChange && event && !('key' in event)) {
+      setInputValue('');
+      onInputValueChange({
+        inputValue: '',
+        type: InputChange,
+      });
+      setIsOpen(false);
+    }
+
     if (textInput.current) {
       textInput.current.focus();
     }
@@ -938,10 +953,6 @@ export const FilterableMultiSelect = forwardRef(function FilterableMultiSelect<
         }
       },
       onFocus: () => setInputFocused(true),
-      onBlur: () => {
-        setInputFocused(false);
-        setInputValue('');
-      },
     })
   );
 
