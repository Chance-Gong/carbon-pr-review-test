// Sample from Carbon PR #8
// Original file: carbon-pr-test/2-ComposedModal-test.js
// Status: added
// Changes: +87/-0

@@ -0,0 +1,87 @@
+// Sample from Carbon PR #22353
+// Original file: packages/react/src/components/ComposedModal/ComposedModal-test.js
+// Status: modified
+// Changes: +72/-1
+
+@@ -1,5 +1,5 @@
+ /**
+- * Copyright IBM Corp. 2016, 2023
++ * Copyright IBM Corp. 2016, 2026
+  *
+  * This source code is licensed under the Apache-2.0 license found in the
+  * LICENSE file in the root directory of this source tree.
+@@ -1111,3 +1111,74 @@ describe('state with hof withModalPresence', () => {
+     expect(screen.queryByTestId('modal')).not.toBeInTheDocument();
+   });
+ });
++
++describe('ModalBody scrollable content accessibility', () => {
++  it('should apply aria-labelledby to scrollable content using label from ModalHeader', () => {
++    render(
++      <ComposedModal open>
++        <ModalHeader label="Test Label" title="Test Title" />
++        <ModalBody hasScrollingContent data-testid="modal-body">
++          Scrollable content
++        </ModalBody>
++      </ComposedModal>
++    );
++
++    const modalBody = screen.getByTestId('modal-body');
++    expect(modalBody).toHaveAttribute('role', 'region');
++
++    const ariaLabelledBy = modalBody.getAttribute('aria-labelledby');
++    expect(ariaLabelledBy).toBeTruthy();
++    expect(ariaLabelledBy).toContain('modal-header__label');
++  });
++
++  it('should apply aria-labelledby to scrollable content using title from ModalHeader when no label', () => {
++    render(
++      <ComposedModal open>
++        <ModalHeader title="Test Title" />
++        <ModalBody hasScrollingContent data-testid="modal-body">
++          Scrollable content
++        </ModalBody>
++      </ComposedModal>
++    );
++
++    const modalBody = screen.getByTestId('modal-body');
++    expect(modalBody).toHaveAttribute('role', 'region');
++
++    const ariaLabelledBy = modalBody.getAttribute('aria-labelledby');
++    expect(ariaLabelledBy).toBeTruthy();
++    expect(ariaLabelledBy).toContain('modal-header__heading');
++  });
++
++  it('should use explicit aria-labelledby prop over default from context', () => {
++    render(
++      <ComposedModal open>
++        <ModalHeader label="Test Label" title="Test Title" />
++        <ModalBody
++          hasScrollingContent
++          aria-labelledby="custom-label-id"
++          data-testid="modal-body">
++          Scrollable content
++        </ModalBody>
++      </ComposedModal>
++    );
++
++    const modalBody = screen.getByTestId('modal-body');
++    expect(modalBody).toHaveAttribute('role', 'region');
++
++    expect(modalBody).toHaveAttribute('aria-labelledby', 'custom-label-id');
++  });
++
++  it('should not apply region role or labelling when content is not scrollable', () => {
++    render(
++      <ComposedModal open>
++        <ModalHeader label="Test Label" title="Test Title" />
++        <ModalBody data-testid="modal-body">Non-scrollable content</ModalBody>
++      </ComposedModal>
++    );
++
++    const modalBody = screen.getByTestId('modal-body');
++    expect(modalBody).not.toHaveAttribute('role', 'region');
++    expect(modalBody).not.toHaveAttribute('aria-label');
++    expect(modalBody).not.toHaveAttribute('aria-labelledby');
++  });
++});
