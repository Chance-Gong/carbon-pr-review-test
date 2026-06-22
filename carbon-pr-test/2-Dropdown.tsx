// Sample from Carbon PR 22204
// Original file: packages/react/src/components/Dropdown/Dropdown.tsx
// Status: modified
// Changes: +5/-7

@@ -58,7 +58,11 @@ import {
 } from '@floating-ui/react';
 import { useFeatureFlag } from '../FeatureFlags';
 import { AILabel } from '../AILabel';
-import { defaultItemToString, isComponentElement } from '../../internal';
+import {
+  defaultItemToString,
+  isComponentElement,
+  isItemDisabled,
+} from '../../internal';
 
 const { ItemMouseMove, MenuMouseLeave, ToggleButtonBlur, FunctionCloseMenu } =
   useSelect.stateChangeTypes as UseSelectInterface['stateChangeTypes'] & {
@@ -381,11 +385,6 @@ const Dropdown = React.forwardRef(
       [onChange]
     );
 
-    const isItemDisabled = useCallback((item) => {
-      const isObject = item !== null && typeof item === 'object';
-      return isObject && 'disabled' in item && item.disabled === true;
-    }, []);
-
     const onHighlightedIndexChange = useCallback(
       (changes: UseSelectStateChange<ItemType>) => {
         const { highlightedIndex } = changes;
@@ -425,7 +424,6 @@ const Dropdown = React.forwardRef(
         initialSelectedItem,
         onSelectedItemChange,
         stateReducer,
-        isItemDisabled,
         onHighlightedIndexChange,
         downshiftProps,
       ]
