/**
 * Global window interface extensions.
 * Features:
 * - Auth window reference
 * - Type definitions
 *
 * By (https://codex.dev)
 */

declare global {
  interface Window {
    authWindow?: Window | null;
  }
}

// This export is necessary to make this a module
export {};
