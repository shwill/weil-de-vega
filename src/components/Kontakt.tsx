import { PRACTICE, fullAddress } from '../lib/practice';

type Row = {
  label: string;
  value: React.ReactNode;
};

export function Kontakt() {
  const rows: Row[] = [
    {
      label: 'Telefon',
      value: (
        <a
          href={`tel:${PRACTICE.phone.tel}`}
          className="text-oxblood hover:text-oxblood-hover"
        >
          {PRACTICE.phone.display}
        </a>
      ),
    },
    {
      label: 'Fax',
      value: <span className="text-ink">{PRACTICE.fax.display}</span>,
    },
    {
      label: 'E-Mail',
      value: (
        <a
          href={`mailto:${PRACTICE.email}`}
          className="text-oxblood hover:text-oxblood-hover"
        >
          {PRACTICE.email}
        </a>
      ),
    },
    {
      label: 'Adresse',
      value: <span className="text-ink">{fullAddress()}</span>,
    },
  ];

  return (
    <section className="mx-auto max-w-column px-6 py-20 md:py-28">
      <h2 className="text-xs font-medium uppercase tracking-[0.14em] text-ink-muted">
        Kontakt
      </h2>

      <dl className="mt-10 space-y-5">
        {rows.map((row) => (
          <div
            key={row.label}
            className="grid grid-cols-[5.5rem_1fr] gap-x-6 md:grid-cols-[7rem_1fr]"
          >
            <dt className="pt-[2px] text-sm text-ink-muted">{row.label}</dt>
            <dd className="text-base text-ink">{row.value}</dd>
          </div>
        ))}
      </dl>

      <a
        href={`tel:${PRACTICE.phone.tel}`}
        className="mt-12 inline-block rounded-full bg-oxblood px-8 py-3 text-base font-medium text-paper transition-colors hover:bg-oxblood-hover"
      >
        Jetzt anrufen
      </a>
    </section>
  );
}
