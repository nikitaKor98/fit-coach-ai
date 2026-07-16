import { BaseCard } from "../../shared/ui/card";

import styles from "./ProfilePage.module.css";

import type {
  ConnectedDeviceViewModel,
  ProfileDetailItem,
  ProfilePageViewModel,
  ProfileSettingsItem,
} from "./profile.types";

type ProfilePageProps = {
  data: ProfilePageViewModel;
};

type DetailListProps = {
  items: ProfileDetailItem[];
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

type SettingsListProps = {
  items: ProfileSettingsItem[];
};

function SettingsList({ items }: SettingsListProps) {
  return (
    <div className={styles.settingsList}>
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          className={styles.settingsItem}
          disabled={item.isDisabled}
        >
          <span className={styles.settingsContent}>
            <span className={styles.settingsLabel}>{item.label}</span>

            {item.description && (
              <span className={styles.settingsDescription}>
                {item.description}
              </span>
            )}
          </span>

          <span className={styles.settingsValue}>
            {item.value}
            {item.isDisabled && <span className={styles.comingSoon}>Soon</span>}
          </span>
        </button>
      ))}
    </div>
  );
}

type DeviceListProps = {
  devices: ConnectedDeviceViewModel[];
};

function DeviceList({ devices }: DeviceListProps) {
  return (
    <div className={styles.deviceList}>
      {devices.map((device) => (
        <div key={device.id} className={styles.device}>
          <div className={styles.deviceInfo}>
            <p className={styles.deviceName}>{device.name}</p>
            <p className={styles.deviceProvider}>{device.provider}</p>

            {device.lastSync && (
              <p className={styles.deviceSync}>Last sync: {device.lastSync}</p>
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
            {device.status}
          </span>
        </div>
      ))}
    </div>
  );
}

export function ProfilePage({ data }: ProfilePageProps) {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>{data.header.eyebrow}</p>
        <h1 className={styles.title}>{data.header.title}</h1>
        <p className={styles.subtitle}>{data.header.subtitle}</p>
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
          <BaseCard title="Personal information">
            <DetailList items={data.personalDetails} />
          </BaseCard>
        </section>

        <section className={styles.section}>
          <BaseCard title="Training preferences">
            <DetailList items={data.trainingPreferences} />
          </BaseCard>
        </section>
      </div>

      <section className={styles.section}>
        <BaseCard title="Connected devices" subtitle="Data sources">
          <DeviceList devices={data.connectedDevices} />
        </BaseCard>
      </section>

      <section className={styles.section}>
        <BaseCard title="Application settings" subtitle="Preferences">
          <SettingsList items={data.settings} />
        </BaseCard>
      </section>
    </div>
  );
}
