import type { AppLanguage } from "../../SettingsProvider/settings.types";
import type { TranslationDictionary } from "../localization.types";

import { en } from "./en";
import { ru } from "./ru";

export const translations: Record<AppLanguage, TranslationDictionary> = {
  en,
  ru,
};
