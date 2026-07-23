import { BaseCard } from "../../shared/ui/card";

import { useLocalization } from "../../app/LocalizationProvider/useLocalization";

export function AskPage() {
  const { t } = useLocalization();

  return (
    <BaseCard
      title={t("ask.preview.title")}
      subtitle={t("ask.preview.subtitle")}
    >
      {t("ask.preview.description")}
    </BaseCard>
  );
}
