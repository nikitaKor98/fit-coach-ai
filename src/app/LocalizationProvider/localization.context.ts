import { createContext } from "react";

import type { LocalizationContextValue } from "./localization.types";

export const LocalizationContext =
  createContext<LocalizationContextValue | null>(null);
