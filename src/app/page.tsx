export default function Home() {
  return (
    <main className="mx-auto max-w-[var(--spacing-container-max)] px-6 py-16">
      {/* Eyebrow + ortam rozeti */}
      <div className="mb-4 flex items-center gap-3">
        <span className="text-[11px] font-semibold uppercase tracking-[0.06em] text-on-surface-variant">
          AdCommander
        </span>
        <span className="rounded-sm bg-warning-container px-3 py-1.5 text-[13px] font-medium text-on-warning-container">
          SANDBOX
        </span>
      </div>

      {/* Display başlık */}
      <h1 className="max-w-3xl text-[40px] font-semibold leading-[44px] tracking-[-0.02em] text-on-surface">
        Komuta güvertesi. Bütçeyi pilotla.
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-6 text-on-surface-variant">
        Meta &amp; Google Ads için kreatif üretimi, kampanya kurulumu ve
        performans analizi — tek bir mission-control panelinde. Para harcatan her
        eylem görsel olarak yavaşlatılır; güvenli varsayılan{" "}
        <span className="font-medium text-on-surface">PAUSED</span> sakindir.
      </p>

      {/* Aksiyonlar */}
      <div className="mt-8 flex items-center gap-3">
        <button className="h-9 rounded-[var(--radius-DEFAULT)] bg-primary px-3.5 text-[13px] font-medium text-on-primary transition-colors hover:bg-primary-hover active:bg-primary-pressed">
          Hesap bağla
        </button>
        <button className="h-9 rounded-[var(--radius-DEFAULT)] border border-outline bg-surface px-3.5 text-[13px] font-medium text-on-surface transition-colors hover:bg-surface-container">
          Demoyu gör
        </button>
      </div>

      {/* KPI döşemeleri — JetBrains Mono metrik + delta */}
      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <KpiTile label="HARCAMA" value="₺48.250" delta="▲ 12,4%" positive />
        <KpiTile label="ROAS" value="3,82x" delta="▲ 0,4" positive />
        <KpiTile label="CTR" value="2,14%" delta="▼ 0,2%" />
        <KpiTile label="CPA" value="₺128" delta="▼ 4,1%" positive />
      </div>

      {/* Kampanya durum rozetleri — yaşam döngüsü */}
      <div className="mt-12">
        <span className="text-[11px] font-semibold uppercase tracking-[0.06em] text-on-surface-variant">
          Kampanya yaşam döngüsü
        </span>
        <div className="mt-3 flex flex-wrap gap-2">
          <Badge tone="draft">DRAFT</Badge>
          <Badge tone="paused">PAUSED</Badge>
          <Badge tone="pending">PENDING REVIEW</Badge>
          <Badge tone="live">LIVE</Badge>
          <Badge tone="error">ERROR</Badge>
        </div>
      </div>
    </main>
  );
}

function KpiTile({
  label,
  value,
  delta,
  positive = false,
}: {
  label: string;
  value: string;
  delta: string;
  positive?: boolean;
}) {
  return (
    <div className="rounded-md border border-outline bg-surface p-5">
      <div className="text-[11px] font-semibold uppercase tracking-[0.06em] text-on-surface-variant">
        {label}
      </div>
      <div className="tnum mt-2 font-mono text-[34px] font-semibold leading-[38px] tracking-[-0.01em] text-on-surface">
        {value}
      </div>
      <div
        className={`mt-1 text-[13px] font-medium ${
          positive ? "text-positive" : "text-error"
        }`}
      >
        {delta}
      </div>
    </div>
  );
}

const BADGE_TONES = {
  draft: "bg-surface-container-high text-on-surface-variant",
  paused: "bg-surface-container-high text-on-surface",
  pending: "bg-warning-container text-on-warning-container",
  live: "bg-positive-container text-on-positive-container",
  error: "bg-error-container text-on-error-container",
} as const;

function Badge({
  tone,
  children,
}: {
  tone: keyof typeof BADGE_TONES;
  children: React.ReactNode;
}) {
  return (
    <span
      className={`rounded-full px-2.5 py-0.5 text-[13px] font-medium ${BADGE_TONES[tone]}`}
    >
      {children}
    </span>
  );
}
