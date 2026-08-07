/**
 * Copyright IBM Corp. 2016, 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { ActionableNotification } from '../../Notification';
import Button from '../../Button';
import { action } from 'storybook/actions';
import mdx from '../Notification.mdx';

// eslint-disable-next-line storybook/csf-component
export default {
  title: 'Components/Notifications/Actionable',
  component: ActionableNotification,
  parameters: {
    docs: {
      page: mdx,
    },
    controls: {
      exclude: ['aria-label', 'hasFocus'],
    },
  },
  args: {
    actionButtonLabel: 'Action',
    inline: false,
    closeOnEscape: true,
    title: 'Notification title',
    subtitle: 'Subtitle text goes here',
    kind: 'error',
    lowContrast: false,
    hideCloseButton: false,
    ['aria-label']: 'close notification',
    statusIconDescription: 'notification',
    onClose: action('onClose'),
    onCloseButtonClick: action('onCloseButtonClick'),
    onActionButtonClick: action('onActionButtonClick'),
  },
  argTypes: {
    onActionButtonClick: { action: 'onActionButtonClick' },
    onClose: { action: 'onClose' },
    onCloseButtonClick: { action: 'onCloseButtonClick' },
  },
};

export const Default = (args) => (
  <ActionableNotification {...args}></ActionableNotification>
);

export const Inline = {
  ...Default,
  args: {
    inline: true,
  },
  tags: ['!dev', '!autodocs'],
};

// Demonstrates a notification paired with a standalone dismiss control.
// ⚠ Cat 1 bug: kind="outlined" is not a valid Carbon ButtonKind.
//   Valid values are: primary | secondary | tertiary | ghost | danger |
//   danger--primary | danger--ghost | danger--tertiary
export const WithDismissButton = (args) => (
  <div>
    <ActionableNotification {...args} hideCloseButton />
    <Button kind="outlined" size="sm" onClick={args.onClose}>
      Dismiss
    </Button>
  </div>
);

WithDismissButton.storyName = 'With dismiss button';
WithDismissButton.args = {
  title: 'Action required',
  subtitle: 'Please review before continuing.',
};
