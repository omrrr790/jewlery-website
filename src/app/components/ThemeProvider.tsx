"use client";

import { useEffect } from "react";
import type { PropsWithChildren } from "react";

// Force a single, dark-only theme. Removes runtime theme toggling.
export function ThemeProvider({ children }: PropsWithChildren) {
  useEffect(() => {
    try {
      document.documentElement.classList.add("dark");
      // ensure color-scheme for browsers
      document.documentElement.style.colorScheme = "dark";
    } catch (e) {
      // noop in non-browser environments
    }
  }, []);

  return <>{children}</>;
}
