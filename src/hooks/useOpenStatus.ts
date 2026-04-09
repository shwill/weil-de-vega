import { useEffect, useState } from 'react';
import type { HoursTable } from '../lib/hours';
import { getOpenStatus, type OpenStatus } from '../lib/openStatus';

/**
 * React hook that exposes the current open/closed status, recomputed every minute.
 * The underlying `getOpenStatus` function is pure and fully tested in openStatus.test.ts.
 */
export function useOpenStatus(hours: HoursTable): OpenStatus {
  const [status, setStatus] = useState<OpenStatus>(() =>
    getOpenStatus(new Date(), hours),
  );

  useEffect(() => {
    const tick = () => setStatus(getOpenStatus(new Date(), hours));
    tick();
    const id = window.setInterval(tick, 60_000);
    return () => window.clearInterval(id);
  }, [hours]);

  return status;
}
