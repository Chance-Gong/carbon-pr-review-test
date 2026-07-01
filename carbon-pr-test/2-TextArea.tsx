// Sample from Carbon PR 22556
// Original file: packages/react/src/components/TextArea/TextArea.tsx
// Status: modified
// Changes: +37/-28

@@ -18,6 +18,7 @@ import React, {
 import classNames from 'classnames';
 import { deprecate } from '../../prop-types/deprecate';
 import { WarningFilled, WarningAltFilled } from '@carbon/icons-react';
+import { useNormalizedInputProps } from '../../internal/useNormalizedInputProps';
 import { usePrefix } from '../../internal/usePrefix';
 import { FormContext } from '../FluidForm';
 import { getAnnouncement } from '../../internal/getAnnouncement';
@@ -196,6 +197,16 @@ const TextArea = frFn((props, forwardRef) => {
   const { isFluid } = useContext(FormContext);
   const { defaultValue, value } = other;
 
+  const normalizedProps = useNormalizedInputProps({
+    id: id ?? '',
+    readOnly: other.readOnly,
+    disabled,
+    invalid,
+    invalidText,
+    warn,
+    warnText,
+  });
+
   const textAreaInstanceId = useId();
 
   const wrapperRef = useRef<HTMLDivElement>(null);
@@ -356,29 +367,29 @@ const TextArea = frFn((props, forwardRef) => {
   const textAreaWrapperClasses = classNames(`${prefix}--text-area__wrapper`, {
     [`${prefix}--text-area__wrapper--cols`]: other.cols,
     [`${prefix}--text-area__wrapper--readonly`]: other.readOnly,
-    [`${prefix}--text-area__wrapper--warn`]: warn,
+    [`${prefix}--text-area__wrapper--warn`]: normalizedProps.warn,
     [`${prefix}--text-area__wrapper--slug`]: slug,
     [`${prefix}--text-area__wrapper--decorator`]: decorator,
   });
 
   const labelClasses = classNames(`${prefix}--label`, {
     [`${prefix}--visually-hidden`]: hideLabel && !isFluid,
-    [`${prefix}--label--disabled`]: disabled,
+    [`${prefix}--label--disabled`]: normalizedProps.disabled,
   });
 
   const textareaClasses = classNames(`${prefix}--text-area`, {
     [`${prefix}--text-area--light`]: light,
-    [`${prefix}--text-area--invalid`]: invalid,
-    [`${prefix}--text-area--warn`]: warn,
+    [`${prefix}--text-area--invalid`]: normalizedProps.invalid,
+    [`${prefix}--text-area--warn`]: normalizedProps.warn,
   });
 
   const counterClasses = classNames(`${prefix}--label`, {
-    [`${prefix}--label--disabled`]: disabled,
+    [`${prefix}--label--disabled`]: normalizedProps.disabled,
     [`${prefix}--text-area__label-counter`]: true,
   });
 
   const helperTextClasses = classNames(`${prefix}--form__helper-text`, {
-    [`${prefix}--form__helper-text--disabled`]: disabled,
+    [`${prefix}--form__helper-text--disabled`]: normalizedProps.disabled,
   });
 
   const label = typeof labelText !== 'undefined' && labelText !== null && (
@@ -415,14 +426,12 @@ const TextArea = frFn((props, forwardRef) => {
     </Text>
   );
 
-  const errorId = id + '-error-msg';
-
-  const error = invalid ? (
+  const error = normalizedProps.invalid ? (
     <Text
       as="div"
       role="alert"
       className={`${prefix}--form-requirement`}
-      id={errorId}
+      id={normalizedProps.invalidId}
       ref={errorTextRef}>
       {invalidText}
       {isFluid && (
@@ -431,14 +440,12 @@ const TextArea = frFn((props, forwardRef) => {
     </Text>
   ) : null;
 
-  const warnId = id + '-warn-msg';
-
-  const warning = warn ? (
+  const warning = normalizedProps.warn ? (
     <Text
       as="div"
       role="alert"
       className={`${prefix}--form-requirement`}
-      id={warnId}
+      id={normalizedProps.warnId}
       ref={warnTextRef}>
       {warnText}
       {isFluid && (
@@ -451,10 +458,10 @@ const TextArea = frFn((props, forwardRef) => {
 
   let ariaDescribedBy;
   let ariaErrorMessage;
-  if (invalid) {
-    ariaErrorMessage = errorId;
-  } else if (warn && !isFluid) {
-    ariaDescribedBy = warnId;
+  if (normalizedProps.invalid) {
+    ariaErrorMessage = normalizedProps.invalidId;
+  } else if (normalizedProps.warn && !isFluid) {
+    ariaDescribedBy = normalizedProps.warnId;
   } else {
     const ids: string[] = [];
     if (!isFluid && hasHelper && helperId) ids.push(helperId);
@@ -512,10 +519,10 @@ const TextArea = frFn((props, forwardRef) => {
       placeholder={placeholder}
       aria-readonly={other.readOnly}
       className={textareaClasses}
-      aria-invalid={invalid}
+      aria-invalid={normalizedProps.invalid}
       aria-describedby={ariaDescribedBy}
       aria-errormessage={ariaErrorMessage}
-      disabled={disabled}
+      disabled={normalizedProps.disabled}
       rows={rows}
       readOnly={other.readOnly}
       ref={ref}
@@ -547,11 +554,11 @@ const TextArea = frFn((props, forwardRef) => {
       <div
         ref={wrapperRef}
         className={textAreaWrapperClasses}
-        data-invalid={invalid || null}>
-        {invalid && !isFluid && (
+        data-invalid={normalizedProps.invalid || null}>
+        {normalizedProps.invalid && !isFluid && (
           <WarningFilled className={`${prefix}--text-area__invalid-icon`} />
         )}
-        {warn && !invalid && !isFluid && (
+        {normalizedProps.warn && !isFluid && (
           <WarningAltFilled
             className={`${prefix}--text-area__invalid-icon ${prefix}--text-area__invalid-icon--warning`}
           />
@@ -575,12 +582,14 @@ const TextArea = frFn((props, forwardRef) => {
           {ariaAnnouncement}
         </span>
         {isFluid && <hr className={`${prefix}--text-area__divider`} />}
-        {isFluid && invalid ? error : null}
-        {isFluid && warn && !invalid ? warning : null}
+        {isFluid && normalizedProps.invalid ? error : null}
+        {isFluid && normalizedProps.warn ? warning : null}
       </div>
-      {!invalid && !warn && !isFluid ? helper : null}
-      {invalid && !isFluid ? error : null}
-      {warn && !invalid && !isFluid ? warning : null}
+      {!normalizedProps.invalid && !normalizedProps.warn && !isFluid
+        ? helper
+        : null}
+      {normalizedProps.invalid && !isFluid ? error : null}
+      {normalizedProps.warn && !isFluid ? warning : null}
     </div>
   );
 });
