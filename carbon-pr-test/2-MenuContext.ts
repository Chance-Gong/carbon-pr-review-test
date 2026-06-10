// Sample from Carbon PR #22405
// Original file: packages/react/src/components/Menu/MenuContext.ts
// Status: modified
// Changes: +14/-15

@@ -7,19 +7,26 @@
 
 import { createContext, KeyboardEvent, RefObject } from 'react';
 
-type ActionType = {
-  type: 'enableIcons' | 'enableSelectableItems' | 'registerItem';
-  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- https://github.com/carbon-design-system/carbon/issues/20452
-  payload: any;
+type RegisterItemPayload = {
+  ref: RefObject<HTMLLIElement | null>;
+  disabled: boolean;
 };
 
+type ActionType =
+  | {
+      type: 'enableIcons' | 'enableSelectableItems';
+    }
+  | {
+      type: 'registerItem';
+      payload: RegisterItemPayload;
+    };
+
 type StateType = {
   isRoot: boolean;
   hasIcons: boolean;
   hasSelectableItems: boolean;
   size: 'xs' | 'sm' | 'md' | 'lg' | null;
-  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- https://github.com/carbon-design-system/carbon/issues/20452
-  items: any[];
+  items: RegisterItemPayload[];
   requestCloseRoot: (e: Pick<KeyboardEvent<HTMLUListElement>, 'type'>) => void;
 };
 
@@ -55,17 +62,9 @@ function menuReducer(state: StateType, action: ActionType) {
   }
 }
 
-type DispatchFuncProps = {
-  type: ActionType['type'];
-  payload: {
-    ref: RefObject<HTMLLIElement | null>;
-    disabled: boolean;
-  };
-};
-
 type MenuContextProps = {
   state: StateType;
-  dispatch: (props: DispatchFuncProps) => void;
+  dispatch: (props: ActionType) => void;
 };
 
 const MenuContext = createContext<MenuContextProps>({
