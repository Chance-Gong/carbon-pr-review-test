import React from 'react';
import figma from '@figma/code-connect';
import { Tooltip } from '@carbon/react';

figma.connect(Tooltip, 'https://www.figma.com/file/test/tooltip', {
  props: {
    align: figma.enum('Alignment', {
      Top: 'top',
      Bottom: 'bottom',
      Left: 'left',
      Right: 'right',
      'Top start': 'top-start',
      'Top end': 'top-end',
    }),
    label: figma.string('Label'),
  },
  // BUG (Cat 1): align is set on <cds-tooltip> (the wrapper element).
  // It belongs on <cds-tooltip-content> (the content/panel element).
  example: ({ align, label }) => (
    <cds-tooltip align={align}>
      <button type="button">Tooltip trigger</button>
      <cds-tooltip-content>
        {label}
      </cds-tooltip-content>
    </cds-tooltip>
  ),
});
