// Sample from Carbon PR 22556
// Original file: packages/react/src/components/TextArea/TextArea-test.js
// Status: modified
// Changes: +294/-0

@@ -640,4 +640,298 @@ describe('TextArea', () => {
       });
     });
   });
+
+  describe('invalid and warn states are suppressed when not interactive', () => {
+    describe('normal (interactive) inputs still show validation states', () => {
+      it('should apply invalid CSS class when invalid and interactive', () => {
+        const { container } = render(
+          <TextArea
+            id="textarea-1"
+            labelText="TextArea label"
+            invalid
+            invalidText="Some error"
+          />
+        );
+        expect(screen.getByRole('textbox')).toHaveClass(
+          `${prefix}--text-area--invalid`
+        );
+        // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
+        expect(
+          container.querySelector(`svg.${prefix}--text-area__invalid-icon`)
+        ).toBeInTheDocument();
+        expect(screen.getByText('Some error')).toBeInTheDocument();
+        expect(screen.getByRole('textbox')).toHaveAttribute(
+          'aria-invalid',
+          'true'
+        );
+      });
+
+      it('should apply warn CSS class when warn and interactive', () => {
+        const { container } = render(
+          <TextArea
+            id="textarea-1"
+            labelText="TextArea label"
+            warn
+            warnText="Some warning"
+          />
+        );
+        expect(screen.getByRole('textbox')).toHaveClass(
+          `${prefix}--text-area--warn`
+        );
+        // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
+        expect(
+          container.querySelector(
+            `svg.${prefix}--text-area__invalid-icon--warning`
+          )
+        ).toBeInTheDocument();
+        expect(screen.getByText('Some warning')).toBeInTheDocument();
+      });
+    });
+
+    describe('disabled', () => {
+      it('should not apply invalid CSS class when disabled', () => {
+        render(
+          <TextArea
+            id="textarea-1"
+            labelText="TextArea label"
+            invalid
+            invalidText="Some error"
+            disabled
+          />
+        );
+        expect(screen.getByRole('textbox')).not.toHaveClass(
+          `${prefix}--text-area--invalid`
+        );
+      });
+
+      it('should not render the invalid icon when disabled', () => {
+        const { container } = render(
+          <TextArea
+            id="textarea-1"
+            labelText="TextArea label"
+            invalid
+            invalidText="Some error"
+            disabled
+          />
+        );
+        // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
+        expect(
+          container.querySelector(`svg.${prefix}--text-area__invalid-icon`)
+        ).not.toBeInTheDocument();
+      });
+
+      it('should not render the invalidText message when disabled', () => {
+        render(
+          <TextArea
+            id="textarea-1"
+            labelText="TextArea label"
+            invalid
+            invalidText="Some error"
+            disabled
+          />
+        );
+        expect(screen.queryByText('Some error')).not.toBeInTheDocument();
+      });
+
+      it('should set aria-invalid to false when disabled', () => {
+        render(
+          <TextArea
+            id="textarea-1"
+            labelText="TextArea label"
+            invalid
+            invalidText="Some error"
+            disabled
+          />
+        );
+        expect(screen.getByRole('textbox')).toHaveAttribute(
+          'aria-invalid',
+          'false'
+        );
+      });
+
+      it('should not set aria-errormessage when disabled', () => {
+        render(
+          <TextArea
+            id="textarea-1"
+            labelText="TextArea label"
+            invalid
+            invalidText="Some error"
+            disabled
+          />
+        );
+        expect(screen.getByRole('textbox')).not.toHaveAttribute(
+          'aria-errormessage'
+        );
+      });
+
+      it('should not apply warn CSS class when disabled', () => {
+        render(
+          <TextArea
+            id="textarea-1"
+            labelText="TextArea label"
+            warn
+            warnText="Some warning"
+            disabled
+          />
+        );
+        expect(screen.getByRole('textbox')).not.toHaveClass(
+          `${prefix}--text-area--warn`
+        );
+      });
+
+      it('should not render the warn icon when disabled', () => {
+        const { container } = render(
+          <TextArea
+            id="textarea-1"
+            labelText="TextArea label"
+            warn
+            warnText="Some warning"
+            disabled
+          />
+        );
+        // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
+        expect(
+          container.querySelector(
+            `svg.${prefix}--text-area__invalid-icon--warning`
+          )
+        ).not.toBeInTheDocument();
+      });
+
+      it('should not render the warnText message when disabled', () => {
+        render(
+          <TextArea
+            id="textarea-1"
+            labelText="TextArea label"
+            warn
+            warnText="Some warning"
+            disabled
+          />
+        );
+        expect(screen.queryByText('Some warning')).not.toBeInTheDocument();
+      });
+    });
+
+    describe('readOnly', () => {
+      it('should not apply invalid CSS class when readOnly', () => {
+        render(
+          <TextArea
+            id="textarea-1"
+            labelText="TextArea label"
+            invalid
+            invalidText="Some error"
+            readOnly
+          />
+        );
+        expect(screen.getByRole('textbox')).not.toHaveClass(
+          `${prefix}--text-area--invalid`
+        );
+      });
+
+      it('should not render the invalid icon when readOnly', () => {
+        const { container } = render(
+          <TextArea
+            id="textarea-1"
+            labelText="TextArea label"
+            invalid
+            invalidText="Some error"
+            readOnly
+          />
+        );
+        // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
+        expect(
+          container.querySelector(`svg.${prefix}--text-area__invalid-icon`)
+        ).not.toBeInTheDocument();
+      });
+
+      it('should not render the invalidText message when readOnly', () => {
+        render(
+          <TextArea
+            id="textarea-1"
+            labelText="TextArea label"
+            invalid
+            invalidText="Some error"
+            readOnly
+          />
+        );
+        expect(screen.queryByText('Some error')).not.toBeInTheDocument();
+      });
+
+      it('should set aria-invalid to false when readOnly', () => {
+        render(
+          <TextArea
+            id="textarea-1"
+            labelText="TextArea label"
+            invalid
+            invalidText="Some error"
+            readOnly
+          />
+        );
+        expect(screen.getByRole('textbox')).toHaveAttribute(
+          'aria-invalid',
+          'false'
+        );
+      });
+
+      it('should not set aria-errormessage when readOnly', () => {
+        render(
+          <TextArea
+            id="textarea-1"
+            labelText="TextArea label"
+            invalid
+            invalidText="Some error"
+            readOnly
+          />
+        );
+        expect(screen.getByRole('textbox')).not.toHaveAttribute(
+          'aria-errormessage'
+        );
+      });
+
+      it('should not apply warn CSS class when readOnly', () => {
+        render(
+          <TextArea
+            id="textarea-1"
+            labelText="TextArea label"
+            warn
+            warnText="Some warning"
+            readOnly
+          />
+        );
+        expect(screen.getByRole('textbox')).not.toHaveClass(
+          `${prefix}--text-area--warn`
+        );
+      });
+
+      it('should not render the warn icon when readOnly', () => {
+        const { container } = render(
+          <TextArea
+            id="textarea-1"
+            labelText="TextArea label"
+            warn
+            warnText="Some warning"
+            readOnly
+          />
+        );
+        // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
+        expect(
+          container.querySelector(
+            `svg.${prefix}--text-area__invalid-icon--warning`
+          )
+        ).not.toBeInTheDocument();
+      });
+
+      it('should not render the warnText message when readOnly', () => {
+        render(
+          <TextArea
+            id="textarea-1"
+            labelText="TextArea label"
+            warn
+            warnText="Some warning"
+            readOnly
+          />
+        );
+        expect(screen.queryByText('Some warning')).not.toBeInTheDocument();
+      });
+    });
+  });
 });
