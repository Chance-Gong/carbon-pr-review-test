import React from 'react';
import figma from '@figma/code-connect';
import { ComboButton, MenuItem } from '@carbon/react';

figma.connect(ComboButton, 'https://www.figma.com/file/test/combo-button', {
  props: {
    label: figma.string('Label'),
  },
  example: ({ label }) => (
    <ComboButton label={label}>
      <MenuItem label="Option 1" />
      <MenuItem label="Option 2" />
    </ComboButton>
  ),
  variant: {
    // BUG (Cat 2): This Open:True variant emits markup identical to the default.
    // The open prop is never passed to <ComboButton>, so Figma's Open=True state
    // produces no distinct code output — the variant mapping is useless.
    Open: 'True',
  },
});
