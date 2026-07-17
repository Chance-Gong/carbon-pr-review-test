import React from 'react';
import figma from '@figma/code-connect';
import { OverflowMenu, OverflowMenuItem } from '@carbon/react';

figma.connect(OverflowMenu, 'https://www.figma.com/file/test/overflow-menu', {
  props: {
    open: figma.boolean('Open'),
    menuAlignment: figma.enum('Menu alignment', {
      Bottom: 'bottom',
      'Bottom start': 'bottom-start',
      'Bottom end': 'bottom-end',
    }),
  },
  // BUG (Cat 1): menu-alignment is set on <cds-overflow-menu> (the trigger element).
  // It belongs on <cds-overflow-menu-body> (the panel/body element).
  example: ({ menuAlignment }) => (
    <cds-overflow-menu menu-alignment={menuAlignment}>
      <cds-overflow-menu-body>
        <cds-overflow-menu-item>Option 1</cds-overflow-menu-item>
        <cds-overflow-menu-item>Option 2</cds-overflow-menu-item>
        <cds-overflow-menu-item>Option 3</cds-overflow-menu-item>
      </cds-overflow-menu-body>
    </cds-overflow-menu>
  ),
});
