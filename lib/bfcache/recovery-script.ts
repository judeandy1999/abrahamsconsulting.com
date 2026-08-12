/**
 * Bfcache recovery runs from /public/bfcache-recovery.js (loaded in app/layout.tsx).
 * External script src is required under React 19 — inline scripts in components are not executed.
 */

export const BFCACHE_RECOVERY_SCRIPT_PATH = "/bfcache-recovery.js" as const;
