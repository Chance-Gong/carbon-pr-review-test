// Sample from Carbon PR 22204
// Original file: packages/react/src/components/MultiSelect/FilterableMultiSelect.tsx
// Status: modified
// Changes: +12/-12

@@ -66,7 +66,11 @@ import {
 } from '@floating-ui/react';
 import type { TranslateWithId } from '../../types/common';
 import { AILabel } from '../AILabel';
-import { defaultItemToString, isComponentElement } from '../../internal';
+import {
+  defaultItemToString,
+  isComponentElement,
+  isItemDisabled,
+} from '../../internal';
 import { hasHelperText } from '../../internal/hasHelperText';
 import { useNormalizedInputProps } from '../../internal/useNormalizedInputProps';
 import useIsomorphicEffect from '../../internal/useIsomorphicEffect';
@@ -407,8 +411,7 @@ export const FilterableMultiSelect = forwardRef(function FilterableMultiSelect<
 
   const selectAllStatus = useMemo(() => {
     const selectable = nonSelectAllItems.filter(
-      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- https://github.com/carbon-design-system/carbon/issues/20452
-      (item) => !(item as any).disabled
+      (item) => !isItemDisabled(item)
     );
 
     const nonSelectedCount = selectable.filter(
@@ -423,8 +426,9 @@ export const FilterableMultiSelect = forwardRef(function FilterableMultiSelect<
   }, [controlledSelectedItems, nonSelectAllItems]);
 
   const handleSelectAllClick = useCallback(() => {
-    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- https://github.com/carbon-design-system/carbon/issues/20452
-    const selectable = nonSelectAllItems.filter((i) => !(i as any).disabled);
+    const selectable = nonSelectAllItems.filter(
+      (item) => !isItemDisabled(item)
+    );
     const { checked, indeterminate } = selectAllStatus;
 
     // clear all options if select-all state is checked or indeterminate
@@ -500,8 +504,7 @@ export const FilterableMultiSelect = forwardRef(function FilterableMultiSelect<
     const selectAllItem = items.find(isSelectAllItem);
 
     const selectableRealItems = nonSelectAllItems.filter(
-      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- https://github.com/carbon-design-system/carbon/issues/20452
-      (item) => !(item as any).disabled
+      (item) => !isItemDisabled(item)
     );
 
     // Sort only non-select-all items, select-all item must stay at the top
@@ -677,10 +680,7 @@ export const FilterableMultiSelect = forwardRef(function FilterableMultiSelect<
     inputId,
     inputValue,
     stateReducer,
-    isItemDisabled(item) {
-      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- https://github.com/carbon-design-system/carbon/issues/20452
-      return (item as any)?.disabled;
-    },
+    isItemDisabled,
   });
   function stateReducer(state, actionAndChanges) {
     const { type, props, changes } = actionAndChanges;
@@ -694,7 +694,7 @@ export const FilterableMultiSelect = forwardRef(function FilterableMultiSelect<
         if (sortedItems.length === 0) {
           return changes;
         }
-        if (changes.selectedItem && changes.selectedItem.disabled !== true) {
+        if (changes.selectedItem && !isItemDisabled(changes.selectedItem)) {
           if (isSelectAllItem(changes.selectedItem)) {
             handleSelectAllClick();
           } else {
