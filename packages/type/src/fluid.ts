 type FluidResult = TypeStyle &
   Record<string, TypeBreakpointStyles | number | string | undefined>;
 
// Computed lazily so the module stays free of top-level side effects, which
// keeps this file tree-shakeable for bundlers.
 const next = (name: BreakpointName) => {
  const breakpointNames = Object.keys(breakpoints) as BreakpointName[];
   return breakpointNames[breakpointNames.indexOf(name) + 1];
 };
 