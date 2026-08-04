import React, { useState } from 'react';
import { Button } from '@carbon/react';
import { InlineNotification } from '@carbon/react';

export function UserSettingsPanel({ onSave }) {
  const [saved, setSaved] = useState(false);
  const [hasError, setHasError] = useState(false);

  function handleSave() {
    try {
      onSave();
      setSaved(true);
    } catch (err) {
      setHasError(true);
    }
  }

  return (
    <div className="settings-panel">
      {saved && (
        <InlineNotification
          kind="success"
          title="Settings saved"
          subtitle="Your preferences have been updated."
        />
      )}

      {/* Bug: type="error" is not a valid prop on InlineNotification.
          The correct prop is kind="error". */}
      {hasError && (
        <InlineNotification
          type="error"
          title="Save failed"
          subtitle="An unexpected error occurred. Please try again."
        />
      )}

      {/* Bug: kind="warning" is not a valid value for Carbon Button.
          Valid kinds: primary | secondary | tertiary | ghost | danger |
          danger--tertiary | danger--ghost */}
      <Button kind="warning" onClick={handleSave}>
        Save settings
      </Button>
    </div>
  );
}

