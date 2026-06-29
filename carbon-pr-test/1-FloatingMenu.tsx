// Sample from Carbon PR 22401
// Original file: packages/react/src/internal/FloatingMenu.tsx
// Status: modified
// Changes: +27/-22

@@ -31,6 +31,8 @@ export const DIRECTION_TOP = 'top';
 export const DIRECTION_RIGHT = 'right';
 export const DIRECTION_BOTTOM = 'bottom';
 
+const defaultTarget = () => document.body;
+
 interface MenuSize {
   width: number;
   height: number;
@@ -242,7 +244,7 @@ export const FloatingMenu = ({
   onPlace,
   selectorPrimaryFocus,
   styles,
-  target = () => document.body,
+  target = defaultTarget,
   triggerRef,
   updateOrientation,
 }: FloatingMenuProps) => {
@@ -253,6 +255,7 @@ export const FloatingMenu = ({
   >(undefined);
 
   const menuBodyRef = useRef<HTMLElement | null>(null);
+  const floatingPositionRef = useRef<FloatingPosition | undefined>(undefined);
   const startSentinelRef = useRef<HTMLSpanElement>(null);
   const endSentinelRef = useRef<HTMLSpanElement>(null);
   const placeInProgressRef = useRef(false);
@@ -313,18 +316,17 @@ export const FloatingMenu = ({
           },
         });
 
-        // Only update if the position has actually changed.
-        setFloatingPosition((prev) => {
-          if (
-            prev &&
-            prev.left === newFloatingPosition.left &&
-            prev.top === newFloatingPosition.top
-          ) {
-            return prev;
-          }
+        const previousFloatingPosition = floatingPositionRef.current;
 
-          return newFloatingPosition;
-        });
+        // Only update if the position has actually changed.
+        if (
+          !previousFloatingPosition ||
+          previousFloatingPosition.left !== newFloatingPosition.left ||
+          previousFloatingPosition.top !== newFloatingPosition.top
+        ) {
+          floatingPositionRef.current = newFloatingPosition;
+          setFloatingPosition(newFloatingPosition);
+        }
 
         // Re-check after setting the position if not already adjusting.
         if (!isAdjustment) {
@@ -364,18 +366,21 @@ export const FloatingMenu = ({
     }
   };
 
-  const handleMenuRef = (node: HTMLElement | null) => {
-    menuBodyRef.current = node;
-    placeInProgressRef.current = !!node;
+  const handleMenuRef = useCallback(
+    (node: HTMLElement | null) => {
+      menuBodyRef.current = node;
+      placeInProgressRef.current = !!node;
 
-    if (externalMenuRef) {
-      externalMenuRef(node);
-    }
+      if (externalMenuRef) {
+        externalMenuRef(node);
+      }
 
-    if (node) {
-      updateMenuPosition();
-    }
-  };
+      if (node) {
+        updateMenuPosition();
+      }
+    },
+    [externalMenuRef, updateMenuPosition]
+  );
 
   // When the menu has been placed, focus the content and call onPlace.
   useEffect(() => {
