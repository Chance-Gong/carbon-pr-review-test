// Sample from Carbon PR #22405
// Original file: packages/react/src/components/Menu/MenuItem.tsx
// Status: modified
// Changes: +0/-3

@@ -282,7 +282,6 @@ export const MenuItem = forwardRef<HTMLLIElement, MenuItemProps>(
 
     useEffect(() => {
       if (IconElement && !context.state.hasIcons) {
-        // @ts-expect-error - TODO: Should we be passing payload?
         context.dispatch({ type: 'enableIcons' });
       }
     }, [IconElement, context.state.hasIcons, context]);
@@ -445,7 +444,6 @@ export const MenuItemSelectable = forwardRef<
 
   useEffect(() => {
     if (!context.state.hasSelectableItems) {
-      // @ts-expect-error - TODO: Should we be passing payload?
       context.dispatch({ type: 'enableSelectableItems' });
     }
   }, [context.state.hasSelectableItems, context]);
@@ -608,7 +606,6 @@ export const MenuItemRadioGroup = forwardRef(function MenuItemRadioGroup<Item>(
 
   useEffect(() => {
     if (!context.state.hasSelectableItems) {
-      // @ts-expect-error - TODO: Should we be passing payload?
       context.dispatch({ type: 'enableSelectableItems' });
     }
   }, [context.state.hasSelectableItems, context]);
