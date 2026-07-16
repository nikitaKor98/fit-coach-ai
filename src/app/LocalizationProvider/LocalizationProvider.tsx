import { useMemo, type ReactNode } from "react";

import { LocalizationContext } from "./localization.context";

import type {
  TranslationDictionary,
  TranslationKey,
  TranslationValue,
} from "./localization.types";

import { useSettings } from "../SettingsProvider/useSettings";

import { translations } from "./translations";

type LocalizationProviderProps = {
  children: ReactNode;
};

function getNestedTranslation(
  dictionary: TranslationDictionary,
  key: TranslationKey,
): string | undefined {
  const result = key
    .split(".")
    .reduce<TranslationValue | undefined>((currentValue, keyPart) => {
      if (!currentValue || typeof currentValue === "string") {
        return undefined;
      }

      return currentValue[keyPart];
    }, dictionary);

  return typeof result === "string" ? result : undefined;
}

export function LocalizationProvider({ children }: LocalizationProviderProps) {
  const { settings } = useSettings();
  const language = settings.language;

  const value = useMemo(() => {
    const dictionary = translations[language];

    return {
      language,

      t: (key: TranslationKey) => {
        return (
          getNestedTranslation(dictionary, key) ??
          getNestedTranslation(translations.en, key) ??
          key
        );
      },
    };
  }, [language]);

  return (
    <LocalizationContext.Provider value={value}>
      {children}
    </LocalizationContext.Provider>
  );
}
