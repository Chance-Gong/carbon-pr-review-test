// Sample from Carbon PR #8
// Original file: carbon-pr-test/3-ComposedModal.tsx
// Status: added
// Changes: +154/-0

@@ -0,0 +1,154 @@
+// Sample from Carbon PR #22353
+// Original file: packages/react/src/components/ComposedModal/ComposedModal.tsx
+// Status: modified
+// Changes: +59/-21
+
+@@ -8,6 +8,7 @@
+ import React, {
+   Children,
+   cloneElement,
++  useState,
+   useContext,
+   useEffect,
+   useRef,
+@@ -26,7 +27,6 @@ import { ModalFooter } from './ModalFooter';
+ import { mergeRefs } from '../../tools/mergeRefs';
+ import cx from 'classnames';
+ import { toggleClass } from '../../tools/toggleClass';
+-import { requiredIfGivenPropIsTruthy } from '../../prop-types/requiredIfGivenPropIsTruthy';
+ import {
+   elementOrParentIsFloatingMenu,
+   wrapFocus,
+@@ -50,8 +50,19 @@ import {
+ import { useId } from '../../internal/useId';
+ import { useComposedModalState } from './useComposedModalState';
+ import { isTopmostVisibleModal } from '../Modal/isTopmostVisibleModal';
++import { ComposedModalContext } from './ComposedModalContext';
+ 
+ export interface ModalBodyProps extends HTMLAttributes<HTMLDivElement> {
++  /**
++   * Specify the aria-label for the modal body when it is scrollable
++   */
++  'aria-label'?: string;
++
++  /**
++   * Specify the aria-labelledby for the modal body when it is scrollable
++   */
++  'aria-labelledby'?: string;
++
+   /** Specify the content to be placed in the ModalBody. */
+   children?: ReactNode;
+ 
+@@ -70,6 +81,8 @@ export interface ModalBodyProps extends HTMLAttributes<HTMLDivElement> {
+ export const ModalBody = React.forwardRef<HTMLDivElement, ModalBodyProps>(
+   function ModalBody(
+     {
++      ['aria-label']: ariaLabelProp,
++      ['aria-labelledby']: ariaLabelledByProp,
+       className: customClassName,
+       children,
+       hasForm,
+@@ -80,6 +93,7 @@ export const ModalBody = React.forwardRef<HTMLDivElement, ModalBodyProps>(
+   ) {
+     const prefix = usePrefix();
+     const contentRef = useRef<HTMLDivElement>(null);
++    const { labelId, titleId } = useContext(ComposedModalContext);
+ 
+     const { height } = useResizeObserver({ ref: contentRef });
+ 
+@@ -102,9 +116,16 @@ export const ModalBody = React.forwardRef<HTMLDivElement, ModalBodyProps>(
+       customClassName
+     );
+ 
++    const ariaLabelledBy = ariaLabelledByProp || labelId || titleId;
++
+     const hasScrollingContentProps =
+       hasScrollingContent || isScrollable
+-        ? { tabIndex: 0, role: 'region' }
++        ? {
++            tabIndex: 0,
++            role: 'region',
++            'aria-label': ariaLabelProp,
++            'aria-labelledby': ariaLabelledBy,
++          }
+         : {};
+ 
+     return (
+@@ -121,12 +142,14 @@ export const ModalBody = React.forwardRef<HTMLDivElement, ModalBodyProps>(
+ 
+ ModalBody.propTypes = {
+   /**
+-   * Required props for the accessibility label of the header
++   * Specify the aria-label for the modal body when it is scrollable
+    */
+-  ['aria-label']: requiredIfGivenPropIsTruthy(
+-    'hasScrollingContent',
+-    PropTypes.string
+-  ),
++  ['aria-label']: PropTypes.string,
++
++  /**
++   * Specify the aria-labelledby for the modal body when it is scrollable
++   */
++  ['aria-labelledby']: PropTypes.string,
+ 
+   /**
+    * Specify the content to be placed in the ModalBody
+@@ -290,6 +313,9 @@ const ComposedModalDialog = React.forwardRef<
+ ) {
+   const prefix = usePrefix();
+ 
++  const [labelId, setLabelId] = useState<string | undefined>(undefined);
++  const [titleId, setTitleId] = useState<string | undefined>(undefined);
++
+   const innerModal = useRef<HTMLDivElement>(null);
+   const button = useRef<HTMLButtonElement>(null);
+   const startSentinel = useRef<HTMLButtonElement>(null);
+@@ -634,21 +660,33 @@ const ComposedModalDialog = React.forwardRef<
+     </div>
+   );
+ 
++  const contextValue = {
++    labelId,
++    titleId,
++    setLabelId,
++    setTitleId,
++  };
++
+   return (
+-    <Layer
+-      {...rest}
+-      level={0}
+-      role="presentation"
+-      ref={mergedRefs}
+-      aria-hidden={!open}
+-      onBlur={handleBlur}
+-      onClick={composeEventHandlers([rest?.onClick, handleOnClick])}
+-      onMouseDown={composeEventHandlers([rest?.onMouseDown, handleOnMouseDown])}
+-      onKeyDown={handleKeyDown}
+-      className={modalClass}
+-      data-exiting={presenceContext?.isExiting || undefined}>
+-      {modalBody}
+-    </Layer>
++    <ComposedModalContext.Provider value={contextValue}>
++      <Layer
++        {...rest}
++        level={0}
++        role="presentation"
++        ref={mergedRefs}
++        aria-hidden={!open}
++        onBlur={handleBlur}
++        onClick={composeEventHandlers([rest?.onClick, handleOnClick])}
++        onMouseDown={composeEventHandlers([
++          rest?.onMouseDown,
++          handleOnMouseDown,
++        ])}
++        onKeyDown={handleKeyDown}
++        className={modalClass}
++        data-exiting={presenceContext?.isExiting || undefined}>
++        {modalBody}
++      </Layer>
++    </ComposedModalContext.Provider>
+   );
+ });
+ 
