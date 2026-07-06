 // Initial map of our breakpoints and their values
 export const breakpoints: Record<BreakpointName, Breakpoint> = {
   sm: {
    width: /*#__PURE__*/ rem(320),
     columns: 4,
     margin: '0',
   },
   md: {
    width: /*#__PURE__*/ rem(672),
     columns: 8,
    margin: /*#__PURE__*/ rem(16),
   },
   lg: {
    width: /*#__PURE__*/ rem(1056),
     columns: 16,
    margin: /*#__PURE__*/ rem(16),
   },
   xlg: {
    width: /*#__PURE__*/ rem(1312),
     columns: 16,
    margin: /*#__PURE__*/ rem(16),
   },
   max: {
    width: /*#__PURE__*/ rem(1584),
     columns: 16,
    margin: /*#__PURE__*/ rem(24),
   },
 };
 
 };
 
 // Spacing
export const spacing01 = /*#__PURE__*/ miniUnits(0.25);
export const spacing02 = /*#__PURE__*/ miniUnits(0.5);
export const spacing03 = /*#__PURE__*/ miniUnits(1);
export const spacing04 = /*#__PURE__*/ miniUnits(1.5);
export const spacing05 = /*#__PURE__*/ miniUnits(2);
export const spacing06 = /*#__PURE__*/ miniUnits(3);
export const spacing07 = /*#__PURE__*/ miniUnits(4);
export const spacing08 = /*#__PURE__*/ miniUnits(5);
export const spacing09 = /*#__PURE__*/ miniUnits(6);
export const spacing10 = /*#__PURE__*/ miniUnits(8);
export const spacing11 = /*#__PURE__*/ miniUnits(10);
export const spacing12 = /*#__PURE__*/ miniUnits(12);
export const spacing13 = /*#__PURE__*/ miniUnits(20);
 export const spacing = [
   spacing01,
   spacing02,
 
 // Layout
 // Deprecated
export const layout01 = /*#__PURE__*/ miniUnits(2);
export const layout02 = /*#__PURE__*/ miniUnits(3);
export const layout03 = /*#__PURE__*/ miniUnits(4);
export const layout04 = /*#__PURE__*/ miniUnits(6);
export const layout05 = /*#__PURE__*/ miniUnits(8);
export const layout06 = /*#__PURE__*/ miniUnits(12);
export const layout07 = /*#__PURE__*/ miniUnits(20);
 export const layout = [
   layout01,
   layout02,
 ];
 
 // Container
export const container01 = /*#__PURE__*/ miniUnits(3);
export const container02 = /*#__PURE__*/ miniUnits(4);
export const container03 = /*#__PURE__*/ miniUnits(5);
export const container04 = /*#__PURE__*/ miniUnits(6);
export const container05 = /*#__PURE__*/ miniUnits(8);
 export const container = [
   container01,
   container02,
   container03,
   container04,
   container05,
 ];
export const sizeXSmall = /*#__PURE__*/ rem(24);
export const sizeSmall = /*#__PURE__*/ rem(32);
export const sizeMedium = /*#__PURE__*/ rem(40);
export const sizeLarge = /*#__PURE__*/ rem(48);
export const sizeXLarge = /*#__PURE__*/ rem(64);
export const size2XLarge = /*#__PURE__*/ rem(80);
 export const sizes: Record<SizeName, string> = {
   XSmall: sizeXSmall,
   Small: sizeSmall,