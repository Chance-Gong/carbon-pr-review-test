  */
 
 import { baseFontSize, px } from '@carbon/layout';
import { mono, sans } from './fontFamily';
import { regular, semibold } from './fontWeight';
 import type { TypeStyle } from './types';
 
 export const reset: Record<'body' | 'code' | 'html' | 'strong', TypeStyle> = {
   html: {
    fontSize: /*#__PURE__*/ px(baseFontSize),
   },
   body: {
    fontFamily: sans,
    fontWeight: regular,
     textRendering: 'optimizeLegibility',
     '-webkit-font-smoothing': 'antialiased',
     '-moz-osx-font-smoothing': 'grayscale',
   },
   strong: {
    fontWeight: semibold,
   },
   code: {
    fontFamily: mono,
   },
 };