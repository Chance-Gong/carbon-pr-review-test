import React from 'react';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

// ─── React ────────────────────────────────────────────────────────────────────

export default {
  title: 'Components/Notification',
  parameters: {
    docs: { page: null },
  },
};

/**
 * WithInteractiveElements story — titleId is now wired from args so the
 * control panel lets reviewers adjust it. The link uses
 * aria-describedby="${ifDefined(titleId)}" to associate the action with the
 * notification title.
 *
 * Risk: if a user clears titleId in the Storybook control, ifDefined omits the
 * attribute entirely, breaking the aria-describedby relationship.
 * Fix: a non-empty default is set in args below (line 32) so the control
 * always starts with a valid id.
 */
export const WithInteractiveElements = ({ titleId, actionButtonLabel }) => (
  <div role="status" aria-labelledby={titleId}>
    <h3 id={titleId}>Your file is ready to download</h3>
    <a
      href="/download"
      aria-describedby={titleId}
    >
      {actionButtonLabel}
    </a>
  </div>
);

WithInteractiveElements.args = {
  titleId: 'notification-title-interactive',
  actionButtonLabel: 'Download file',
};

WithInteractiveElements.argTypes = {
  titleId: {
    control: 'text',
    table: { category: 'Notification' },
  },
  actionButtonLabel: {
    control: 'text',
  },
};

// ─── Web Components ────────────────────────────────────────────────────────────

export const WCWithInteractiveElements = {
  args: {
    titleId: 'wc-notification-title-interactive',
    actionButtonLabel: 'Download file',
  },
  argTypes: {
    titleId: {
      control: 'text',
      table: { category: 'Notification' },
    },
    actionButtonLabel: {
      control: 'text',
    },
  },
  render: ({ titleId, actionButtonLabel }) => html\`
    <div role="status" aria-labelledby=\${titleId}>
      <h3 id=\${titleId}>Your file is ready to download</h3>
      <a
        href="/download"
        aria-describedby=\${ifDefined(titleId)}
      >
        \${actionButtonLabel}
      </a>
    </div>
  \`,
};
