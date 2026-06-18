// Sample from Carbon PR 22204
// Original file: packages/react/src/components/ComboBox/ComboBox.tsx
// Status: modified
// Changes: +11/-13

@@ -53,7 +53,11 @@ import { autoUpdate, flip, hide, useFloating } from '@floating-ui/react';
 import type { TranslateWithId } from '../../types/common';
 import { useFeatureFlag } from '../FeatureFlags';
 import { AILabel } from '../AILabel';
-import { defaultItemToString, isComponentElement } from '../../internal';
+import {
+  defaultItemToString,
+  isComponentElement,
+  isItemDisabled,
+} from '../../internal';
 
 const {
   InputBlur,
@@ -70,12 +74,6 @@ const {
 
 const defaultShouldFilterItem = () => true;
 
-const isDisabledItem = (item: unknown) =>
-  item !== null &&
-  typeof item === 'object' &&
-  'disabled' in item &&
-  Boolean(item.disabled);
-
 const autocompleteCustomFilter = ({
   item,
   inputValue,
@@ -139,7 +137,7 @@ const findHighlightedIndex = <ItemType,>(
 
   for (let i = 0; i < items.length; i++) {
     const item = itemToString(items[i]).toLowerCase();
-    if (!isDisabledItem(items[i]) && item.indexOf(searchValue) !== -1) {
+    if (!isItemDisabled(items[i]) && item.indexOf(searchValue) !== -1) {
       return i;
     }
   }
@@ -476,7 +474,7 @@ const ComboBox = forwardRef(
           if (inputValue) {
             const filteredItems = items.filter(
               (item) =>
-                !isDisabledItem(item) &&
+                !isItemDisabled(item) &&
                 autocompleteCustomFilter({
                   item: itemToString(item),
                   inputValue: inputValue,
@@ -692,7 +690,7 @@ const ComboBox = forwardRef(
                 );
                 const highlightedItem = filteredList[state.highlightedIndex];
 
-                if (highlightedItem && !isDisabledItem(highlightedItem)) {
+                if (highlightedItem && !isItemDisabled(highlightedItem)) {
                   return {
                     ...changes,
                     selectedItem: highlightedItem,
@@ -704,7 +702,7 @@ const ComboBox = forwardRef(
                 if (autoIndex !== -1) {
                   const matchingItem = items[autoIndex];
 
-                  if (matchingItem && !isDisabledItem(matchingItem)) {
+                  if (matchingItem && !isItemDisabled(matchingItem)) {
                     return {
                       ...changes,
                       selectedItem: matchingItem,
@@ -894,7 +892,7 @@ const ComboBox = forwardRef(
       initialSelectedItem: initialSelectedItem,
       inputId: id,
       stateReducer,
-      isItemDisabled: isDisabledItem,
+      isItemDisabled,
       ...downshiftProps,
       onStateChange: ({ type, selectedItem: newSelectedItem }) => {
         if (
@@ -1195,7 +1193,7 @@ const ComboBox = forwardRef(
                     //  event.preventDefault();
                     const matchingItem = items.find(
                       (item) =>
-                        !isDisabledItem(item) &&
+                        !isItemDisabled(item) &&
                         itemToString(item)
                           .toLowerCase()
                           .startsWith(inputValue.toLowerCase())
