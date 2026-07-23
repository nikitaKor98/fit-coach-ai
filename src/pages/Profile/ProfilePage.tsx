import type {
  AppLanguage,
  AppTheme,
  MeasurementSystem,
} from "../../app/SettingsProvider/settings.types";

import { useLocalization } from "../../app/LocalizationProvider/useLocalization";

import { BaseCard } from "../../shared/ui/card";

import styles from "./ProfilePage.module.css";

import type {
  ConnectedDeviceStatus,
  ConnectedDeviceViewModel,
  PersonalDetailId,
  PersonalDetailViewModel,
  ProfilePageViewModel,
  ProfileSettingsActions,
  ProfileSettingsItem,
  TrainingPreferenceId,
  TrainingPreferenceViewModel,
} from "./profile.types";

type ProfilePageProps = {
  data: ProfilePageViewModel;
  actions: ProfileSettingsActions;
};

type DetailListItem = {
  id: string;
  label: string;
  value: string;
};

type DetailListProps = {
  items: DetailListItem[];
};

function DetailList({ items }: DetailListProps) {
  return (
    <dl className={styles.detailList}>
      {items.map((item) => (
        <div key={item.id} className={styles.detailItem}>
          <dt className={styles.detailLabel}>{item.label}</dt>

          <dd className={styles.detailValue}>{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

type LocalizedSettingsOption = {
  value: string;
  label: string;
};

type LocalizedSettingsItem = {
  id: ProfileSettingsItem["id"];
  label: string;
  description?: string;
  value: string;
  options?: LocalizedSettingsOption[];
  isDisabled?: boolean;
};

type SettingsListProps = {
  items: LocalizedSettingsItem[];
  actions: ProfileSettingsActions;
  soonLabel: string;
};

function SettingsList({ items, actions, soonLabel }: SettingsListProps) {
  const handleSettingChange = (item: LocalizedSettingsItem, value: string) => {
    switch (item.id) {
      case "units":
        actions.onUnitsChange(value as MeasurementSystem);
        break;

      case "language":
        actions.onLanguageChange(value as AppLanguage);
        break;

      case "theme":
        actions.onThemeChange(value as AppTheme);
        break;
    }
  };

  return (
    <div className={styles.settingsList}>
      {items.map((item) => (
        <div key={item.id} className={styles.settingsItem}>
          <span className={styles.settingsContent}>
            <span className={styles.settingsLabel}>{item.label}</span>

            {item.description && (
              <span className={styles.settingsDescription}>
                {item.description}
              </span>
            )}
          </span>

          {item.options ? (
            <select
              className={styles.settingsSelect}
              value={item.value}
              disabled={item.isDisabled}
              onChange={(event) => {
                handleSettingChange(item, event.target.value);
              }}
              aria-label={item.label}
            >
              {item.options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : (
            <span className={styles.settingsValue}>
              {item.value}

              {item.isDisabled && (
                <span className={styles.comingSoon}>{soonLabel}</span>
              )}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

type DeviceListProps = {
  devices: ConnectedDeviceViewModel[];
  getStatusLabel: (status: ConnectedDeviceStatus) => string;
  lastSyncLabel: string;
};

function DeviceList({
  devices,
  getStatusLabel,
  lastSyncLabel,
}: DeviceListProps) {
  return (
    <div className={styles.deviceList}>
      {devices.map((device) => (
        <div key={device.id} className={styles.device}>
          <div className={styles.deviceInfo}>
            <p className={styles.deviceName}>{device.name}</p>

            <p className={styles.deviceProvider}>{device.provider}</p>

            {device.lastSync && (
              <p className={styles.deviceSync}>
                {lastSyncLabel}: {device.lastSync}
              </p>
            )}
          </div>

          <span
            className={[
              styles.deviceStatus,
              device.status === "connected"
                ? styles.connected
                : styles.disconnected,
            ].join(" ")}
          >
            {getStatusLabel(device.status)}
          </span>
        </div>
      ))}
    </div>
  );
}

export function ProfilePage({ data, actions }: ProfilePageProps) {
  const { t } = useLocalization();

  const getPersonalDetailLabel = (id: PersonalDetailId) => {
    switch (id) {
      case "age":
        return t("profile.personal.age");

      case "height":
        return t("profile.personal.height");

      case "weight":
        return t("profile.personal.weight");

      case "location":
        return t("profile.personal.location");
    }
  };

  const getTrainingPreferenceLabel = (id: TrainingPreferenceId) => {
    switch (id) {
      case "primary-sport":
        return t("profile.training.primarySport");

      case "weekly-target":
        return t("profile.training.weeklyTarget");

      case "long-run-day":
        return t("profile.training.longRunDay");

      case "rest-day":
        return t("profile.training.restDay");

      case "training-time":
        return t("profile.training.preferredTrainingTime");
    }
  };

  const getSettingLabel = (id: ProfileSettingsItem["id"]) => {
    switch (id) {
      case "units":
        return t("profile.settings.units.label");

      case "language":
        return t("profile.settings.language.label");

      case "theme":
        return t("profile.settings.theme.label");
    }
  };

  const getSettingDescription = (id: ProfileSettingsItem["id"]) => {
    switch (id) {
      case "units":
        return t("profile.settings.units.description");

      case "language":
        return t("profile.settings.language.description");

      case "theme":
        return t("profile.settings.theme.description");
    }
  };

  const getSettingOptionLabel = (value: string) => {
    switch (value) {
      case "en":
        return t("profile.settings.options.english");

      case "ru":
        return t("profile.settings.options.russian");

      case "system":
        return t("profile.settings.options.system");

      case "light":
        return t("profile.settings.options.light");

      case "dark":
        return t("profile.settings.options.dark");

      default:
        return value;
    }
  };

  const getDeviceStatusLabel = (status: ConnectedDeviceStatus) => {
    switch (status) {
      case "connected":
        return t("profile.devices.status.connected");

      case "disconnected":
        return t("profile.devices.status.disconnected");
    }
  };

  const personalDetails: DetailListItem[] = data.personalDetails.map(
    (item: PersonalDetailViewModel) => ({
      ...item,
      label: getPersonalDetailLabel(item.id),
    }),
  );

  const trainingPreferences: DetailListItem[] = data.trainingPreferences.map(
    (item: TrainingPreferenceViewModel) => ({
      ...item,
      label: getTrainingPreferenceLabel(item.id),
    }),
  );

  const settings: LocalizedSettingsItem[] = data.settings.map((item) => ({
    ...item,
    label: getSettingLabel(item.id),
    description: getSettingDescription(item.id),
    options:
      "options" in item
        ? item.options.map((option) => ({
            value: option.value,
            label: getSettingOptionLabel(option.value),
          }))
        : undefined,
  }));

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>{t("profile.header.eyebrow")}</p>

        <h1 className={styles.title}>{t("profile.header.title")}</h1>

        <p className={styles.subtitle}>{t("profile.header.subtitle")}</p>
      </header>

      <section className={styles.section}>
        <BaseCard variant="highlighted" padding="lg">
          <div className={styles.summary}>
            <div className={styles.avatar} aria-hidden="true">
              {data.summary.initials}
            </div>

            <div className={styles.summaryContent}>
              <div>
                <h2 className={styles.profileName}>{data.summary.name}</h2>

                <p className={styles.profileDescription}>
                  {data.summary.description}
                </p>
              </div>

              <div className={styles.summaryMeta}>
                <span>{data.summary.experienceLevel}</span>

                <span>{data.summary.primaryGoal}</span>
              </div>
            </div>
          </div>
        </BaseCard>
      </section>

      <div className={styles.primaryGrid}>
        <section className={styles.section}>
          <BaseCard title={t("profile.cards.personalInformation")}>
            <DetailList items={personalDetails} />
          </BaseCard>
        </section>

        <section className={styles.section}>
          <BaseCard title={t("profile.cards.trainingPreferences")}>
            <DetailList items={trainingPreferences} />
          </BaseCard>
        </section>
      </div>

      <section className={styles.section}>
        <BaseCard
          title={t("profile.cards.connectedDevices")}
          subtitle={t("profile.cards.dataSources")}
        >
          <DeviceList
            devices={data.connectedDevices}
            getStatusLabel={getDeviceStatusLabel}
            lastSyncLabel={t("profile.devices.lastSync")}
          />
        </BaseCard>
      </section>

      <section className={styles.section}>
        <BaseCard
          title={t("profile.cards.applicationSettings")}
          subtitle={t("profile.cards.preferences")}
        >
          <SettingsList
            items={settings}
            actions={actions}
            soonLabel={t("profile.settings.soon")}
          />
        </BaseCard>
      </section>
    </div>
  );
}
