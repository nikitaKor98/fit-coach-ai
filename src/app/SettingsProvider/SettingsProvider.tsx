import {
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import {
  DEFAULT_SETTINGS,
  SETTINGS_STORAGE_KEY,
} from "./settings.constants";

import { SettingsContext } from "./settings.context";

import type {
  AppLanguage,
  AppSettings,
  AppTheme,
  MeasurementSystem,
} from "./settings.types";

type SettingsProviderProps = {
  children: ReactNode;
};

function loadSettings(): AppSettings {
  try {
    const storedSettings = localStorage.getItem(SETTINGS_STORAGE_KEY);

    if (!storedSettings) {
      return DEFAULT_SETTINGS;
    }

    return {
      ...DEFAULT_SETTINGS,
      ...JSON.parse(storedSettings),
    };
  } catch {
    return DEFAULT_SETTINGS;
  }
}

export function SettingsProvider({
  children,
}: SettingsProviderProps) {
  const [settings, setSettings] = useState<AppSettings>(loadSettings);

  useEffect(() => {
    localStorage.setItem(
      SETTINGS_STORAGE_KEY,
      JSON.stringify(settings),
    );
  }, [settings]);

  const value = useMemo(
    () => ({
      settings,

      setTheme: (theme: AppTheme) => {
        setSettings((currentSettings) => ({
          ...currentSettings,
          theme,
        }));
      },

      setLanguage: (language: AppLanguage) => {
        setSettings((currentSettings) => ({
          ...currentSettings,
          language,
        }));
      },

      setUnits: (units: MeasurementSystem) => {
        setSettings((currentSettings) => ({
          ...currentSettings,
          units,
        }));
      },
    }),
    [settings],
  );

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
}