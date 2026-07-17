import React from 'react';
import figma from '@figma/code-connect';
import { OverflowMenu, OverflowMenuItem } from '@carbon/react';

figma.connect(OverflowMenu, 'https://www.figma.com/file/test/overflow-menu', {
  props: {
    flipped: figma.boolean('Flipped'),
    size: figma.enum('Size', {
      'Small': 'sm',
      'Medium': 'md',
      'Large': 'lg',
    }),
  },
  example: ({ flipped, size }) => (
    // BUG 1 (Cat 1): flipped is set on <cds-overflow-menu> (the trigger element).
    // The MCP default variant example shows flipped belongs on <cds-overflow-menu-body>.
    // BUG 2 (Cat 1): size='md' is not a valid OVERFLOW_MENU_SIZE value.
    // The only valid values are 'sm' and 'lg' per the Carbon Web Components source enum.
    <cds-overflow-menu flipped={flipped} size={size}>
      <cds-overflow-menu-body>
        <cds-overflow-menu-item>Stop app</cds-overflow-menu-item>
        <cds-overflow-menu-item>Restart app</cds-overflow-menu-item>
        <cds-overflow-menu-item>Rename app</cds-overflow-menu-item>
        <cds-overflow-menu-item divider danger>Delete app</cds-overflow-menu-item>
      </cds-overflow-menu-body>
    </cds-overflow-menu>
  ),
  variant: {
    Flipped: 'True',
    Size: 'Medium',
  },
});
