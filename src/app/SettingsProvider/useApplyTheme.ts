import { useEffect } from "react";
import type { AppTheme } from "./settings.types";

const SYSTEM_DARK_THEME_QUERY = "(prefers-color-scheme: dark)";

function resolveTheme(theme: AppTheme): "light" | "dark" {
  if (theme !== "system") {
    return theme;
  }

  return window.matchMedia(SYSTEM_DARK_THEME_QUERY).matches ? "dark" : "light";
}

export function useApplyTheme(theme: AppTheme) {
  useEffect(() => {
    const root = document.documentElement;
    const mediaQuery = window.matchMedia(SYSTEM_DARK_THEME_QUERY);

    const applyTheme = () => {
      root.dataset.theme = resolveTheme(theme);
    };

    applyTheme();

    if (theme !== "system") {
      return;
    }

    mediaQuery.addEventListener("change", applyTheme);

    return () => {
      mediaQuery.removeEventListener("change", applyTheme);
    };
  }, [theme]);
}
