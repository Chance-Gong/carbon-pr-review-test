// Sample from Carbon PR 22385
// Original file: packages/react/src/components/MenuButton/index.tsx
// Status: modified
// Changes: +2/-1

@@ -222,7 +222,8 @@ const MenuButton = forwardRef<HTMLDivElement, MenuButtonProps>(
           aria-expanded={open}
           onClick={handleClick}
           onMouseDown={handleMousedown}
-          aria-controls={open ? id : undefined}>
+          aria-controls={open ? id : undefined}
+          title={label}>
           {label}
         </Button>
         <Menu
