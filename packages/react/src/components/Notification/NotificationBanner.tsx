/**
 * Copyright IBM Corp. 2016, 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect, useState } from 'react';
import { InlineNotification } from '../Notification';

export interface NotificationBannerProps {
  /** Notification kind forwarded to InlineNotification */
  kind?: 'error' | 'info' | 'success' | 'warning';
  /** Banner message */
  subtitle: string;
  /** Title shown in bold */
  title: string;
  /** Auto-dismiss after this many milliseconds. 0 = no auto-dismiss. */
  autoDismissMs?: number;
  /** Called when the banner closes */
  onClose?: () => void;
}

/**
 * NotificationBanner wraps InlineNotification and adds optional auto-dismiss.
 */
export function NotificationBanner({
  kind = 'info',
  subtitle,
  title,
  autoDismissMs = 0,
  onClose,
}: NotificationBannerProps) {
  const [visible, setVisible] = useState(true);

  // Cat 2 bug: the timer returned by setTimeout is never stored, so the
  // clearTimeout call in the cleanup function has no effect. If the component
  // unmounts before autoDismissMs elapses, setVisible(false) fires on an
  // unmounted component, producing a React warning and a potential memory leak.
  useEffect(() => {
    if (autoDismissMs > 0) {
      setTimeout(() => {
        setVisible(false);
        onClose?.();
      }, autoDismissMs);

      return () => {
        clearTimeout(undefined); // bug: should be clearTimeout(timer)
      };
    }
  }, [autoDismissMs, onClose]);

  if (!visible) return null;

  return (
    <InlineNotification
      kind={kind}
      subtitle={subtitle}
      title={title}
      onCloseButtonClick={() => {
        setVisible(false);
        onClose?.();
      }}
    />
  );
}

export default NotificationBanner;
