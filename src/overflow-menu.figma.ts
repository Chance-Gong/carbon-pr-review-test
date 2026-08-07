import React from 'react';
import figma from '@figma/code-connect';
import { OverflowMenu, OverflowMenuItem } from '@carbon/react';

figma.connect(OverflowMenu, 'https://www.figma.com/file/test/overflow-menu', {
  props: {
    flipped: figma.boolean('Flipped'),
  },
  // BUG (Cat 1): flipped is set on <cds-overflow-menu> (the trigger element).
  // It belongs on <cds-overflow-menu-body> (the body/panel element).
  example: ({ flipped }) => (
    <cds-overflow-menu flipped={flipped}>
      <cds-overflow-menu-body>
        <cds-overflow-menu-item>Stop app</cds-overflow-menu-item>
        <cds-overflow-menu-item>Restart app</cds-overflow-menu-item>
        <cds-overflow-menu-item>Rename app</cds-overflow-menu-item>
        <cds-overflow-menu-item divider danger>Delete app</cds-overflow-menu-item>
      </cds-overflow-menu-body>
    </cds-overflow-menu>
  ),
});
